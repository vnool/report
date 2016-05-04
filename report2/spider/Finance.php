<?php
/**
* 
*/
class Finance  
{
private $KEYS = array(
   'MainTarget.YingYeShouRu' => 7, // '营业收入(元)'] 
   'MainTarget.MaoLiRun'  => 8, //毛利润(元)
   'MainTarget.JingLiRun'  => 9, //归属净利润(元) = 净利润
   'MainTarget.MaoLiLv'  => 20, //毛利率(元)

   'AssetStatement.YingYeLiRun'  => 28, //营业利润(元)
   'AssetStatement.XianJinLiuLiangJingE'  => 41, //经营活动产生的现金流量净额(元)
   'AssetStatement.HuoBiZiJin'  => 0, //资产:货币资金(元)
   'AssetStatement.LeiJiZheJiu'  => 6, //累计折旧(元)
   'AssetStatement.ZongZiChan'  => 9, //资产总计(元)
   'AssetStatement.JingZiChan'  => 19, //股东权益合计(元) ==净资产  

);

 public $DATA;
 function __construct($code){
    if(!$code) return ;

    if(strlen($code)==6){
      $code = $this->eastmoneyCode($code);
    }
    if(strlen($code)!=8){
      return;
    }

    $CODE = $code ; //匪夷所思
    $CODE1 = '';
    
    $URL  = 'http://f10.eastmoney.com/f10_v2/BackOffice.aspx?command=RptF10MainTarget'
       .'&code='.$CODE.'&num=90&code1='.$CODE1.'&spstr=&n=0';
    $this->DATA['MainTarget'] = $this->catchData($URL);

    $URL  = 'http://f10.eastmoney.com/f10_v2/BackOffice.aspx?command=RptF10AssetStatement'
        .'&paramCode='.$CODE.'&paramNum=50&paramReportTime=All';
    $this->DATA['AssetStatement'] = $this->catchData($URL);
 }

 function catchData($URL){


    $buf = file_get_contents($URL);

    $rows = explode('<tr', $buf);

    $data = array();

    foreach ($rows as  $row) {
        $row = '<tr '.$row;
        if(strpos($row, '</th')){
            $years = explode('</th>', $row);
            $years = cleanTag($years);
            $tableName = array_shift($years);
            foreach ($years as $k=>$y) {
                 $years[$k] = ''.date("Ym", strtotime ($y));
             }  
            //echo  "==".$tableName."==\r\n";
        }else if(strpos($row, '</td')){
            $values = explode('</td>', $row);
            $values = cleanTag($values);
            $dataName = array_shift($values);
           
            //echo  "@@".$dataName."@@\r\n";
             
            $data[] = array('tableName'=>$tableName, 'name'=>$dataName, 
                   'data'=>array_combine ( $years , $values ));
             
        }
         
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
   foreach ($this->KEYS as $key => $value) {
      $keys = explode('.', $key);
      $mainKey = $keys[0];
      $subKey = $keys[1]; 
      $row = $Object[$mainKey][$value];
      $j =0;
      $data[$key]['data'] = array();
      $data[$key]['header'] = array();
      foreach ($row['data'] as $k => $v) {
         if(!$k) continue;         
         if($rate){
            $kM = substr($k,-2);
            if(!in_array($kM, $rate)){
               continue;
            }            
         } 
         array_unshift($data[$key]['data'],  VAL($v));
         array_unshift($data[$key]['header'], $k);

         $j++; if($j > 10) break;
      } 
       
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
       return $code .'01';
   }else{
       return $code .'02';
   }
}

}//class