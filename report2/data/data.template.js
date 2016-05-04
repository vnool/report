{
    "profile": {
        "companyName": " ",
        "code": "{{code}}",
        "title": "{{companyName}} 2015年报吗",
        "subtitle": "@{{FINANCE['MainTarget.YingYeShouRu']['header']}}",
        "style": ".PAGE{background-image:url(template/notice/imgs/bg_2.jpg);background-size: 100%;color:#000} a{color:blue}"
    },
    "pages": [{
            "title": "xxx",
            "phone": 888,
            "style": "background:url(template/notice/imgs/bg_107.jpg); ",
            "elements": [{
                "type": "text",
                "body": "{{companyName}} 2015年报",
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
                "style": "bottom:20%;color:#eee;font-size:0.9em",
                "css": "absolute center"
            }]

        }, {
            "PAGE_START": "------------OK 0--------------",
            "title": "产业分布",
            "phone": 888,
            "style": " ",
            "elements": [{
                "type": "text",
                "body": "产业分布",
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
                        "name" :"产业分布",
                        "type": "pie",
                        "data": "@{{COMPANY['products']}}"
                    } ]

                }
            }, {
                "type": "text",
                "body": "产业分布产业分布 产业分布。",
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
                        "name" :"产业分布",
                        "type": "pie",
                        "data": "@{{COMPANY['stockholder']}}"
                    } ]

                }
            }, {
                "type": "text",
                "body": "产业分布产业分布 产业分布。",
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
                "body": "在行业趋势放缓情况下，仍然坚持同比增长50%,形式一片大好。",
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
                "body": "迭创新高，后劲更足",
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
                "body": "在行业趋势放缓情况下，仍然坚持同比增长50%,形式一片大好。",
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
                "body": "迭创新高，后劲更足",
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
                "body": "净利润现金含量，净利润现金含量净利润现金含量",
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
                "body": "迭创新高，后劲更足",
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
                "body": "总资产总资产总资产总资产总资产",
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
                "body": "迭创新高，后劲更足",
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
                "body": "现金现金现金现金现金",
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
                "body": "迭创新高，后劲更足",
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
                "body": "毛利率毛利率毛利率毛利率",
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
                        "text": "折旧摊销额",
                        "subtext": "迭创新高",
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
                "body": "折旧摊销额折旧摊销额折旧摊销额",
                "style": " font-size:0.9em",
                "css": "absolute center"
            }],
            "PAGE_END": "--------------------------"

        } 

    ]

}