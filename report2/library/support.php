<?php
error_reporting(E_ALL ^ E_NOTICE);

function TEMPLATE($tmpid, $DATA=null)
{    
    $path =   'template/'.$GLOBALS['_C'].'/'. $tmpid .'.html' ; 
    if(!is_file($path)){
        return;        
    } 
     
    if(count($DATA))
    foreach ($DATA as $key => $value) {       
       $$key =  $value;
    }
    include $path;
}
function loadElements($elements){
  foreach ($elements as $k => $e) {
       
  }
}

function JSON2Array($buf){
   return objectToArray(json_decode($buf));
}

function objectToArray($obj){
    $arr = is_object($obj) ? get_object_vars($obj) : $obj;
    if(is_array($arr)){
        return array_map(__FUNCTION__, $arr);
    }else{
        return $arr;
    }
}

function cleanTag($arr){
    foreach ($arr as $k => $v) {
        $v = strip_tags($v);
        $v = str_replace("&nbsp;", "", $v);
        $v = trim($v);

        $arr[$k] = $v ;
    }
    return $arr;
}
function getBetween($str, $from , $to=''){
    $vars=array();
    $p2 = 0;
    while (1) {
        $p1 = strpos($str, $from,$p2);
        if(!$p1) break;
        if(!$to){
          $vars[] = substr($str, $p1);
          return $vars;
        }
        $p2 = strpos($str, $to, $p1+strlen($from)); 
        if(!$p2) break;
        $vars[] = substr($str, $p1, $p2-$p1);   
    } 
    return $vars;
}
function cache_read($path){
  $file = $path .'.php';
  include $file;
  return $dataobject; 
}
function cache_save($path, $data){
   $buf = "<?php  \n \$dataobject=" . var_export($data,1) 
   ."; ?>";
   file_put_contents($path .'.php' , $buf);
}

function VAL($str){  
   $str = trim($str); 
   if(strpos(json_encode( $str ),'\u4ebf')){ 
     return floatval($str)*10000;
   }
   return floatval($str);
}

