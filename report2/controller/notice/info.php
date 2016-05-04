<?php

function main($param)
{
   if(!$param['code']) exit('参数错误');
   $cachePath = ROOT.'/spider/data/Company/'. $param['code'];
   if(is_file($cachePath.'.php')){        
       $dataAll = cache_read($cachePath);;
       $dataAll['products']
       
    }else{       
              
    }

}