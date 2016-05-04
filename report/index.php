<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>hamer</title>
<meta charset="utf-8">
<meta name="apple-touch-fullscreen" content="YES">
<meta name="format-detection" content="telephone=no">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta http-equiv="Expires" content="-1">
<meta http-equiv="pragram" content="no-cache">
<link rel="stylesheet" type="text/css" href="css/main.css">
<link rel="stylesheet" type="text/css" href="css/endpic.css"> 
<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">
<style>
    .company{
        margin-top:200px;font-size:32pt;text-align:center;color:#fff;
        text-shadow:5px 5px 5px #000;
    }

    .companyTip{
        margin-top:100px;font-size:20pt;text-align:center;color:#fff;
    }
</style>
</head>

<body class="s-bg-ddd pc no-3d" style="-webkit-user-select: none;">
    <section class="u-alert">
        <img style="display:none;" src="images/loading_large.gif">
        <div class="alert-loading z-move">
            <div class="cycleWrap">	<span class="cycle cycle-1"></span>
                <span class="cycle cycle-2"></span><span class="cycle cycle-3"></span><span class="cycle cycle-4"></span>
            </div>
            <div class="lineWrap">	<span class="line line-1"></span><span class="line line-2"></span><span class="line line-3"></span>
            </div>
        </div>
    </section>
    <section class="u-arrow">
        <p class="css_sprite01"></p>
    </section>
    <section class="p-ct transformNode-2d" style="height: 907px;">
        <div id='mainbox' class="translate-back" style="height: 907px;">
            <div class="m-page m-fengye" data-page-type="info_pic3" data-statics="info_pic3" style="height:70%;">
                <div class="page-con lazy-finish" data-position="50% 50%"   
                style="background-image: url(images/1.jpg); background-size: cover; background-position: 50% 50%;">
                <div class="company">邦讯技术股份有限公司</div>
                <div class="companyTip"> 2014年年度报告摘要</div>
                </div>
            </div>
            <?php

              $DATA = array('#600', '#060', '#066', '#660' );
              $index = 0;
            foreach ($DATA as $dat) { 
                $index++;
         
            ?>
            <div class="m-page m-bigTxt f-hide" data-page-type="bigTxt" data-statics="info_list" >
                <div  height='640' width='640' id="box_<?=$index ?>" 
                class="page-con j-txtWrap lazy-finish" 
                style="height:640px;width:640px;margin-top:0px;">
                    
                </div>
            </div> 
            <?
           }
            ?>
        </div>
    </section>
    <section class="u-pageLoading">
        <img src="images/load.gif" alt="loading">
    </section>
    <script src="js/init.mix.js" type="text/javascript" charset="utf-8"></script>
    <script src="js/coffee.js" type="text/javascript" charset="utf-8"></script>
    <script src="js/99_main.js" type="text/javascript" charset="utf-8"></script>
 
<script src="http://echarts.baidu.com/build/dist/echarts.js"></script>
<script src="theme.helianthus.js"></script>
<script type="text/javascript">
    
    // 路径配置
    require.config({
        paths: {
            echarts: 'http://echarts.baidu.com/build/dist',
        }
    });

    // 使用
    require(
        [
            'echarts',
            'echarts/chart/bar',    
            'echarts/chart/line', // 使用柱状图就加载bar模块，按需加载
            
        ],
        function(ec) {
            callData(ec);
        }
    );

  
    function callData(ec){
        // 基于准备好的dom，初始化echarts图表
             
            var option = {
                title: {
                    text: 'title titl',
                    subtext: '--'
                },
                tooltip: {
                    trigger: 'axis'
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: {
                            show: true
                        },
                        dataView: {
                            show: true,
                            readOnly: false
                        },
                        magicType: {
                            show: true,
                            type: ['line', 'bar']
                        },
                        restore: {
                            show: true
                        },
                        saveAsImage: {
                            show: true
                        }
                    }
                },
                calculable: true,
                xAxis: [{
                    type: 'category', 
                    data: ['2012年', '2013年', '2014年']
                }],
                yAxis: [{
                    type: 'value'
                }],
                series: [{
                    name: '$name',
                    type: 'bar', 
                    data: []
                    },{
                    name: '$name',
                    type: 'line', 
                    data: []
                    }
                 ]
            };
 
            var data = [
               { title:'营业收入（元）',
                 data: [480267777,285866438, 513578986]
                },
                { title:'营业成本（元）',
                 data: [236420060, 157203204, 264654068]
                },
                { title:'营业利润（元）',
                 data: [86124247, -67575416, 9097214]
                },{ title:'利润总额（元）',
                 data: [87479516, - 65499279, 9026995 ]
                },
            ];
            
            var styles = [
              {bgcolor: '#F7ACCA', color:['#840336','#008C8C','#369','#963','#399']},
              {bgcolor: '#8EDCDC', color:['#008C8C','#008C1D']},
              {bgcolor: '#7AC58A', color:['#008C1D','#670477']},
              {bgcolor: '#EDACF7', color:['#670477','#ff0']},
              {bgcolor: '#F4FF82', color:['#50B800','#840336']},
            ];
            function setOption(ec, opt, j){
                var box = document.getElementById('box_'+j);
                box.parentNode.style.background = styles[j].bgcolor; 
                document.getElementById('mainbox').style.background = styles[j].bgcolor;

                theme.helianthus.backgroundColor = styles[j].bgcolor;
                theme.helianthus.color= styles[j].color;

                var myChart = ec.init(box, theme.helianthus);

                // 为echarts对象加载数据 
                myChart.setOption(opt);
                //myChart.setTheme('macarons', 'infographic'); 
                //var te = require('echarts/theme/infographic');
                // myChart.setTheme(te);                
                box.parentNode.style.background = styles[j].bgcolor;
            };
            var j = 0 ;
            for (var i in data) {
                var dat = data[i];
                var opt = clone(option);
                opt.title.text = dat.title;
                opt.series[0].name = dat.title;
                opt.series[0].data = dat.data;
                opt.series[1].name = dat.title;
                opt.series[1].data = dat.data;

                j++;
                setOption(ec, opt, j);          
                 
            };
            
    }

  
    function clone(obj){
        var o, obj;
        if (obj.constructor == Object){
            o = new obj.constructor(); 
        }else{
            o = new obj.constructor(obj.valueOf()); 
        }
        for(var key in obj){
            if ( o[key] != obj[key] ){ 
                if ( typeof(obj[key]) == 'object' ){ 
                    o[key] = clone(obj[key]);
                }else{
                    o[key] = obj[key];
                }
            }
        }
        o.toString = obj.toString;
        o.valueOf = obj.valueOf;
        return o;
    }

    </script>
</body>
</html>