{
    "profile": {
        "companyName": " ",
        "code": "{{PROFILE['code']}} ",
        "title": "{{PROFILE['name']}} 2015年报吗",
        "subtitle": "@{{FINANCE['MainTarget.YingYeShouRu']['header']}}",
        "style": ".PAGE{background-color:#fff; color:#666} a{color:blue}"
    },
    "pages": [{
            "title": "xxx",
            "phone": 888,
            "style": "background-image:url(template/notice/imgs/x11.jpg); ",
            "elements": [{
                "type": "text",
                "body": "{{PROFILE['name']}} 2015年报",
                "animate--": "flyCenter",
                "style": "margin-top:10%;color:white;font-size:1.2em",
                "css": "center"
            }, {
                "type": "text",
                "body": "这丰收的季节, 明天还会<b>更好</b>",
                "style": "margin-top:20%;color:#ff0;",
                "css": "center",
                "animate": "flyCenter"
            }, {
                "type": "text",
                "body": "",
                "style": "margin-top:10%; font-size:1.2em",
                "css": "center"
            }, {
                "type": "text",
                "body": "2016-4-20",
                "style": "bottom:20%;color:#fff;font-size:0.9em",
                "css": "absolute center"
            }]

        },{
            "title": "xxx",
            "phone": 888,
            "style": "background-image:url(template/notice/imgs/x11.jpg); ",
            "elements": [{
                "type": "text",
                "body": "{{PROFILE['name']}} 基本情况",
                "animate--": "flyCenter",
                "style": "margin-top:10%;color:white;font-size:1.2em",
                "css": "center"
            }, {
                "type": "text",
                "body": "<li>公司名称：  {{PROFILE['name']}}             <li>股票代码：{{PROFILE['code']}}             <li>法人代表：{{PROFILE['duty']}}                <li>董事会秘书：{{PROFILE['secretary']}}                   <li>证券事务代表：{{PROFILE['stock']}}           <li>公司地址：{{PROFILE['address']}}    <li>联系电话: {{PROFILE['tel']}} ",
                "style": "margin-top:10%;margin-left:10%;color:#ff0; font-size:0.9em; text-align: left",
                "css": " ",
                "animate": ""
            }, {
                "type": "text",
                "body": "",
                "style": "margin-top:10%; font-size:1.2em",
                "css": "center"
            }, {
                "type": "text",
                "body": "2016-4-20",
                "style": "bottom:20%;color:#fff;font-size:0.9em",
                "css": "absolute center"
            }]

        }, {
            "PAGE_START": "------------OK 0--------------",
            "title": "产业布局",
            "phone": 888,
            "style": " ",
            "elements": [{
                "type": "text",
                "body": "产业布局",
                "style": "margin-top:10%; font-size:1.2em",
                "animate": "flyCenter"
            }, {
                "type": "chart",
                "body": {
                    "title": {
                        "text": "",
                        "subtext": " ",
                        "x": "center"
                    }, 
                    "series": [{
                        "name" :"产业布局",
                        "type": "pie",
                        "data": "@{{COMPANY['products']}}"
                    } ]

                }
            }, {
                "type": "text",
                "body": " 生态体系蓬勃发展",
                "style": " font-size:0.9em",
                "css": "absolute center"
            }],
            "PAGE_END": "--------------------------"

        }, {
            "PAGE_START": "------------OK 0/0/0/--------------",
            "title": "十大股东股份占比",
            "phone": 888,
            "style": " ",
            "elements": [{
                "type": "text",
                "body": "十大股东股份占比",
                "style": "margin-top:10%; font-size:1.2em",
                "animate": "flyCenter"
            }, {
                "type": "chart",
                "body": {
                    "title": {
                        "text": "",
                        "subtext": " ",
                        "x": "center"
                    }, 
                    "series": [{
                        "name" :"十大股东股份占比",
                        "type": "pie",
                        "data": "@{{COMPANY['stockholder']}}"
                    } ]

                }
            }, {
                "type": "text",
                "body": "强大的战略联盟",
                "style": " font-size:0.9em",
                "css": "absolute center"
            }],
            "PAGE_END": "--------------------------"

        }, {
            "PAGE_START": "------------OK1--------------",
            "title": "营业收入",
            "phone": 888,
            "style": " ",
            "elements": [{
                "type": "text",
                "body": "迭创新高，后劲更足",
                "style": "margin-top:10%; font-size:1.2em",
                "animate": "flyCenter"
            }, {
                "type": "chart",
                "body": {
                    "title": {
                        "text": "营业收入",
                        "subtext": "迭创新高",
                        "x": "center"
                    },
                    "xAxis": "@{{FINANCE['MainTarget.YingYeShouRu']['header']}}",
                    "series": [{
                        "name" :"营业收入",
                        "type": "bar",
                        "data": "@{{FINANCE['MainTarget.YingYeShouRu']['data']}}"
                    } ]

                }
            }, {
                "type": "text",
                "body": "规模收入奠定持续发展基础",
                "style": " font-size:0.9em",
                "css": "absolute center"
            }],
            "PAGE_END": "--------------------------"

        },
        {
            "PAGE_START": "-----------OK2---------------",
            "title": "利润",
            "phone": 888,
            "style": " ",
            "elements": [{
                "type": "text",
                "body": "盈利能力不断增强",
                "style": "margin-top:10%; font-size:1.2em",
                "animate": "flyCenter"
            }, {
                "type": "chart",
                "body": {
                    "title": {
                        "text": "",
                        "subtext": "盈利能力不断增强",
                        "x": "center"
                    },
                    "legend": {
                     "data": ["毛利润", "营业利润","净利润"]
                    },
                    "xAxis": "@{{FINANCE['AssetStatement.YingYeLiRun']['header']}}",
                    "series": [{
                        "name": "毛利润",
                        "type": "bar",
                        "data": "@{{FINANCE['MainTarget.MaoLiRun']['data']}}"
                    },{
                        "name": "营业利润",
                        "type": "bar",
                        "data": "@{{FINANCE['AssetStatement.YingYeLiRun']['data']}}"
                    }, {
                        "name": "净利润",
                        "type": "bar",
                        "data": "@{{FINANCE['MainTarget.JingLiRun']['data']}}"
                    }  ]

                }
            }, {
                "type": "text",
                "body": "控制费用，盈利可观",
                "style": " font-size:0.9em",
                "css": "absolute center"
            }],
            "PAGE_END": "--------------------------"

        },  {
            "PAGE_START": "--------------OK3------------",
            "title": "净利润现金含量",
            "phone": 888,
            "style": " ",
            "elements": [{
                "type": "text",
                "body": "盈利质量不断提升",
                "style": "margin-top:10%; font-size:1.2em",
                "animate": "flyCenter"
            }, {
                "type": "chart",
                "body": {
                    "title": {
                        "text": "",
                        "subtext": "迭创新高",
                        "x": "center"
                    },
                    "legend": {
                     "data": ["净利润", "现金流量净额"]
                    },
                    "xAxis": "@{{FINANCE['MainTarget.JingLiRun']['header']}}",
                    "series": [{
                        "name": "净利润",
                        "type": "bar",
                        "data": "@{{FINANCE['MainTarget.JingLiRun']['data']}}"
                    },{
                        "name": "现金流量净额",
                        "type": "bar",
                        "data": "@{{FINANCE['AssetStatement.XianJinLiuLiangJingE']['data']}}"
                    } ]

                }
            }, {
                "type": "text",
                "body": "经得起考验的净利润表现",
                "style": " font-size:0.9em",
                "css": "absolute center"
            }],
            "PAGE_END": "--------------------------"

        },  {
            "PAGE_START": "--------------OK4------------",
            "title": "总资产",
            "phone": 888,
            "style": " ",
            "elements": [{
                "type": "text",
                "body": "资产规模不断壮大",
                "style": "margin-top:10%; font-size:1.2em",
                "animate": "flyCenter"
            }, {
                "type": "chart",
                "body": {
                    "legend": {
                     "data": ["总资产", "净资产"]
                    },
                    "title": {
                        "text": "",
                        "subtext": "迭创新高",
                        "x": "center"
                    },
                    "xAxis": "@{{FINANCE['AssetStatement.ZongZiChan']['header']}}",
                    "series": [{
                        "name" :"总资产",
                        "type": "bar",
                        "data": "@{{FINANCE['AssetStatement.ZongZiChan']['data']}}"
                    },{
                        "name" :"净资产",
                        "type": "bar",
                        "data": "@{{FINANCE['AssetStatement.JingZiChan']['data']}}"
                    } ]

                }
            }, {
                "type": "text",
                "body": "体量是发现的保障",
                "style": " font-size:0.9em",
                "css": "absolute center"
            }],
            "PAGE_END": "--------------------------"

        }, {
            "PAGE_START": "--------------OK5------------",
            "title": "现金",
            "phone": 888,
            "style": " ",
            "elements": [{
                "type": "text",
                "body": "现金流",
                "style": "margin-top:10%; font-size:1.2em",
                "animate": "flyCenter"
            }, {
                "type": "chart",
                "body": {
                    "title": {
                        "text": "现金 ",
                        "subtext": "迭创新高",
                        "x": "center"
                    },
                    "xAxis": "@{{FINANCE['AssetStatement.HuoBiZiJin']['header']}}",
                    "series": [{
                        "type": "bar",
                        "data": "@{{FINANCE['AssetStatement.HuoBiZiJin']['data']}}"
                    } ]

                }
            }, {
                "type": "text",
                "body": "大量的现金流决定企业的活力",
                "style": " font-size:0.9em",
                "css": "absolute center"
            }],
            "PAGE_END": "--------------------------"

        }, {
            "PAGE_START": "--------------OK6------------",
            "title": "毛利率",
            "phone": 888,
            "style": " ",
            "elements": [{
                "type": "text",
                "body": "    ",
                "style": "margin-top:10%; font-size:1.2em",
                "animate": "flyCenter"
            }, {
                "type": "chart",
                "body": {
                    "title": {
                        "text": "毛利率",
                        "subtext": "迭创新高",
                        "x": "center"
                    },
                    "yAxis": {  "boundaryGap": [0, "100%"]    },
                    "xAxis": "@{{FINANCE['MainTarget.MaoLiLv']['header']}}",
                    "series": [{
                        "type": "line",
                        "data": "@{{FINANCE['MainTarget.MaoLiLv']['data']}}"
                    } ]

                }
            }, {
                "type": "text",
                "body": "高于同行的盈利能力",
                "style": " font-size:0.9em",
                "css": "absolute center"
            }],
            "PAGE_END": "--------------------------"

        }, {
            "PAGE_START": "--------------OK7------------",
            "title": "折旧摊销额",
            "phone": 888,
            "style": " ",
            "elements": [{
                "type": "text",
                "body": "折旧摊销额",
                "style": "margin-top:10%; font-size:1.2em",
                "animate": "flyCenter"
            }, {
                "type": "chart",
                "body": {
                    "title": {
                        "text": "折旧摊销额(万)",
                        "subtext": " ",
                        "x": "center"
                    }, 
                    "xAxis": "@{{FINANCE['AssetStatement.LeiJiZheJiu']['header']}}",
                    "series": [{
                        "type": "bar",
                        "data": "@{{FINANCE['AssetStatement.LeiJiZheJiu']['data']}}"
                    } ]

                }
            }, {
                "type": "text",
                "body": "规范提计，绝无粉饰",
                "style": " font-size:0.9em",
                "css": "absolute center"
            }],
            "PAGE_END": "--------------------------"

        } 

    ]

}