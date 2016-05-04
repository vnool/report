<?php
/**
* 
*/
class Company  
{
  private $KEYS = array( 

  );

 public $DATA;
 function __construct($code){
    if(!$code) return ;
    
    $code = $this->eastmoneyCode($code);     
    
    $URL = 'http://f10.eastmoney.com/f10_v2/ShareholderResearch.aspx?code=' .$code;
    $this->DATA['stockholder'] = $this->stockTopHolder($URL);  
   // 
    $URL = "http://f10.eastmoney.com/f10_v2/BusinessAnalysis.aspx?code=" .$code;
    $this->DATA['products'] = $this->getProducts($URL);
 }


  function stockTopHolder($URL){

    $buf = file_get_contents($URL);
   
    $buf =  getBetween($buf, "TTS_Table_Div", "</table>");
    $buf =  getBetween($buf[0], "<table",'');     

    $rows = explode('<tr>', $buf[0]);

    $data = array();
    
    $j = 0;
    foreach ($rows as  $row) {
          
            $values = explode('</td>', $row);

            if(count($values) >2){ 
               $values = cleanTag($values);
                $data[] = array('name'=>$values[0], 
                   'stock'=>$values[2], 
                   'ratio'=>$values[3]);
                $j++;
                if($j>=10) break;
           }                     
    }
    
  return $data;
   
}
function getProducts($URL){

    $buf = file_get_contents($URL);
   
    $p1 =  strpos($buf, "产品分类" );
    if($p1 <1) return;

    $tmp = substr($buf,$p1 -20, 20);
    //var_dump( getBetween($tmp, 'rowspan=','>')) ;
    preg_match("/rowspan=\"(.+)\"/", $tmp, $get);
    $rowcount = $get[1];
    if($rowcount > 10) $rowcount =10;
    
    $keys = array('name',
      'income', //主营收入(元)
      'incomeRatio', //收入比例
      'cost', //主营成本(元)
      'costRatio', //成本比例 
      'LiRun',  //主营利润(元) 
      'LiRunRatio', //利润比例
      'MaoliRatio','none'); //毛利率(%)
    $p1 = strpos($buf, "<td", $p1);;
    $data = array();
    for($i=0; $i<$rowcount; $i++ ){
      $p2 = strpos($buf,'</tr>',$p1);
      $tmp = substr($buf, $p1, $p2-$p1);
      $row = explode('</td>', $tmp);
      $row = cleanTag($row);   
      $data[] = array_combine($keys, $row);
      $p1 = $p2+5;
    }  
    
  return $data;
   
}
public function getall(){
    return $this->DATA;
}
 

public function  specifyFromObject($Object, $rate=''){
   if($rate=='year')  $rate = array('12'); 
   if($rate=='quarter')  $rate = ''; 
   if($rate=='half')  $rate = array('06','09'); 
   

   $data = array();
   $data['stockholder'] = array();
   foreach ($Object['stockholder'] as $row) {
     $data['stockholder'][] =  array('value' => VAL($row['stock']), 'name' => $row['name']);
   }

  foreach ($Object['products'] as $row) {
     $data['products'][] =  array('value' => VAL($row['income']), 'name' => $row['name']);
   } 
    //var_dump($data);exit;
   return $data;
}
public function dataFromObject($Object, $key){
    if(!in_array($key, $this->KEYS)){
        return;
    }
    $keyIndex =  $this->KEYS[$key]; //获取该key的序号
    $keys = explode('.', $key);
    $mainKey = $keys[0];
    $subKey = $keys[1];
    return $Object[$mainKey][$keyIndex]; 
}

public function eastmoneyCode($code){
   if(substr($code,0,1)=='6'){
       return 'sh'.$code  ;
   }else{
       return 'sz'.$code  ;
   }
}

}//class