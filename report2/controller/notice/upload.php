<?php 

$uploadMsg = '';
if($_POST['code']){ 
    $fromPath = $_FILES['noticefile']['tmp_name'];
    $toPath = 'data/data/' .$_POST['code'].'.js';
 
    if(!$fromPath){
        $uploadMsg= "<Warning class='err'>文件为空！！</Warning>";
    }else if (move_uploaded_file($fromPath, $toPath )) {
          
        $buf = file_get_contents( $toPath); 
        $data = JSON2Array($buf);
        if($data==null){
             $uploadMsg= "<Warning class='err'>格式错误!!</Warning>";
        }else{
          $url = 'http://'.$_SERVER['HTTP_HOST'].'/'.$_SERVER['SCRIPT_NAME'].'?notice/show$id=' .$_POST['code'];

          $uploadMsg ="<Warning>提交成功,  <a href='$url'>点这里访问</a></Warning>";

          $QRurl = 'http://c.wotula.com/chart.php?size=8&level=L&val='. urlencode($url);
          $showQRhtml = "<div class=QR> 扫一扫访问: ".$_POST['code']."<br><img src='$QRurl'></div>";
        }

        
    } else {
        $uploadMsg= "<Warning class='err'>不知道哪里失败了</Warning>";
    }

  
}


$DATA['uploadMsg']=$uploadMsg;
$DATA['showQRhtml']=$showQRhtml;

TEMPLATE('upload',  $DATA );  
 