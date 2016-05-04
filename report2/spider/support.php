<?php




function cache_save($path, $data){
   $buf = "<?php  \n \$dataobject=" . var_export($data,1) 
   ."; ?>";
   file_put_contents($path .'.php' , $buf);
}