<?php

$X = "XXXXX rowspan=\"4\"XXXX";
preg_match("/rowspan=\"(.+)\"/", $X, $get);

var_dump($get);