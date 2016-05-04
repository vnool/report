<?
route();
function route(){

    $QUERY_STRING = ($_SERVER['QUERY_STRING']);
    //检查注入
    
    $p = strpos($QUERY_STRING, '&'); 
    $path = ''; $param = '';
    if($p > 0){
       $path = substr($QUERY_STRING,0, $p);
       $param = substr($QUERY_STRING, $p+1);
    }else{
       $path =  $QUERY_STRING;
    }
    $path = explode('/', $path);
    parse_str($param, $param); 

    $GLOBALS['_C'] =$path[0] ;  //controller
    $GLOBALS['_M'] =$path[1] ;  //module
    $GLOBALS['_F'] =$path[2] ;  //functions
    if(!$GLOBALS['_M']){$GLOBALS['_M']='main';}
    if(!$GLOBALS['_F']){$GLOBALS['_F']='main';}

    $file = 'controller/'.$GLOBALS['_C'].'/'. $GLOBALS['_M'].'.php';
    if(is_file($file)){
       include $file; 
       if(function_exists($GLOBALS['_F'])){
         call_user_func($GLOBALS['_F'], $param);
       }       
    }else{
       echo "controller is not exists: " .$GLOBALS['_C'] ;
    }

}

 
