<?php

include "../library/support.php";

$ACTIONS = ['Company','Finance'];

spiderByAction('Finance');
//spiderByAction('Company');



function spiderByAction($action){
  echo "\n $action == ";

  include_once $action.".php";
  $codes = getCodes();

  foreach ($codes as  $c) {
      echo "\n $c"; 
      $ev = new $action($c);
      $data = $ev->getall();

      cache_save("data/$action/".$c, $data);    
      if(!$data){
        echo " failed"; 
      }      
  }
}

//spiderByCode('600312', '60031202')
function spiderByCode($k ){
  global $ACTIONS;
  foreach ($ACTIONS as $act) {
      include_once $act .".php";
      echo "\n $act"; 

      $data = $act ($k); 
      cache_save("data/$act/".$k, $data);    
      if(!$data){
        echo " failed"; 
      } 
  }
}



function  getCodes(){
  //return array('300312' );
  //
  $codes = [];  
  //深圳
  for($i=1; $i<999; $i++){
     $c =  str_pad($i, 6, "0", STR_PAD_LEFT);
     $codes[] = $c ;
  }

  //中小板
  for($i=2001; $i<2795; $i++){
     $codes[] = '00'.$i;
  }

  //上海
  for($i=600000; $i<603822; $i++){
     $codes[] = $i;
  }

  //创业板
  for($i=300000; $i<300510; $i++){
     $codes[] = $i;
  }
  
  return $codes;
}
