<?php


function main($param)
{
  if(!$param['id']) exit('参数错误');

   $GLOBALS['code_id'] = $param['id'];  
  
  $jsonPath = "data/data/".$GLOBALS['code_id'].'.js';
  if( is_file($jsonPath)  ){
    $buf = file_get_contents( $jsonPath);
  }else{
    $buf = file_get_contents( "data/data.template.js"); 
  }  
   
  $data = JSON2Array($buf);
   if(!$data){
     exit('json数据错误');
   }

  getDataValue('Finance'); 
  getDataValue('Company'); 

  $data = loopData($data);
  
  TEMPLATE('show', $data );  
  
}

function getDataValue($Action){
   
    include ROOT.'/spider/'.$Action.'.php';
    $cachePath = ROOT.'/spider/data/'.$Action.'/'. $GLOBALS['code_id'];
    if(is_file($cachePath.'.php')){        
       $dataAll = cache_read($cachePath);;
       $fc = new $Action('');
       $finance = $fc->specifyFromObject($dataAll,'year'); 
       
    }else{       
       $fc = new $Action($GLOBALS['code_id']);
       $dataAll = $fc->getall();
       cache_save($cachePath, $dataAll);    
       $finance = $fc->specifyFromObject($dataAll,'year');
       
    }

    global $_SERIES;
    $NAME = strtoupper($Action); 
    $_SERIES[$NAME]= $finance; 
}

$j = 0;
function applyTemplate($str){
    global   $_SERIES;
    foreach ($_SERIES as $key => $value) {
       $$key = $value;
    }

    $str = trim($str); 
     if(false!==strpos($str,'@{{')){
        $phpstr = ' $rlt = $'. substr($str, 3, -2).';';
       if(substr($str, 3, -2)=="COMPANY['products']"){
          
       };
     }else{
       $phpstr = strtr($str,array('{{'=>'{$', '}}'=>'}'));       
       $phpstr = '$rlt = "' .$phpstr.'";'; 
     }
     eval($phpstr);   
       
    return $rlt;
    /*//==========================
    $vars=[];
    $p2 = 0;
    while (1) {
        $p1 = strpos($str,'{{',$p2);
        if(!$p1) break;         
        $p2 = strpos($str,'}}', $p1); 
        if(!$p2) break;
        $var = substr($str, $p1, $p2-$p1);
        
        if(!in_array($var, $vars)){
           $vars[$var] = $$var; 
        }         
    }
    if(count($vars) > 0){
      $str = strtr($str, $vars);
    }
    return $str;  

    */

}

function loopData($jsData){     
    foreach ($jsData as $k => $v) {
        if(!is_array($v) ){ 
           $newdata   = applyTemplate($v);            
           $jsData[$k] = $newdata;            
        }else{
           $jsData[$k] = loopData($v , $DATA); 
        }          
    } 
    return $jsData; 
}

