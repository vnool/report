<?php

  //var_dump(STOCK('000001'));

  
    function STOCK($code )
   {     $row = array();

        if(!in_array($code, getCodes())){
           $row['action']  ='未查询到该代码的数据，请尝试其他代码，或联系管理员';
           return $row;
        }

         $name='';
         $cachePath =  '/var/www/ding/report/report/report2/spider/data/Profile/'. $code.'.php';
        if(is_file($cachePath)){        
           include ($cachePath);;
           $company = $dataobject; 
           $name = $company['profile']['公司名称'];
        }else{       
                  
        } 

        if(!$name) {
          $name = $code .'公司';
        } 
       
        $row['picurl'] = 'http://ding.scicompound.com/report/report/report2/template/notice/imgs/sample.png'; 
        $row['title'] = $name."2015年报";
        $row['link'] =  "http://ding.scicompound.com/report/report/report2/?notice/show&id=" .$code ;
        $row['action']  ='[news]';
        return $row;
   }
    


function  getCodes(){
  //return array('300312' );
  //
  $codes = array();  
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