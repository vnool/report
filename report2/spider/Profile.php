<?php
/**
* 
*/
// include "../library/support.php";
// $p = new Profile('300312');

class Profile  
{
  private $KEYS = array( 

  );

 public $DATA;
 function __construct($code){
    if(!$code) return ;
    
    $code = $this->eastmoneyCode($code);     
    
    $URL = 'http://f10.eastmoney.com/f10_v2/CompanySurvey.aspx?code=' .$code;
    $this->DATA['profile'] = $this->stockTopHolder($URL);  
 
 }


  function stockTopHolder($URL){
    //$URL  ='profile.txt';
    $buf = file_get_contents($URL);     
   
    $buf =  getBetween($buf, '<table id="Table0">', "</table>");
 

    $keys = getBetween($buf[0],'<th','</th');
    $keys = cleanTag($keys);

    $values = getBetween($buf[0],'<td','</td');
    $values = cleanTag($values);
 
    $data = array_combine ( $keys , $values );
     
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