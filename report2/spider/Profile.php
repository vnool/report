<?php
 

class Profile  
{ 

  private $KEYS =   array('name' =>'公司名称',
    'code' =>'A股代码',    
     'duty'=>'法人代表',   
      'secretary'=>'董秘',
     'stock'=>'证券事务代表',  
      'address' =>'办公地址' ,
      'tel'=>'联系电话' );

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
   $data = array();
   foreach ($this->KEYS as $key => $k) {
     $data[$key] = $Object['profile'][$k];
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