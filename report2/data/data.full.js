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

        },  {
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
                "body": "迭创新高，后劲更足",
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

        },
         {
            "title": "-------------------------------------------------------",
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
                        "text": "营业收入 ",
                        "subtext": "迭创新高",
                        "x": "center"
                    },
                    "xAxis": ["2012年", "2012年", "2012年", "2012年"],
                    "series": [{
                        "type": "bar",
                        "data": [16.4, 19.85, 24.02, 31.6]
                    }, {
                        "type": "line",
                        "data": [6.4, 9.85, 11.02, 16.6]
                    }]

                }
            }, {
                "type": "text",
                "body": "在行业趋势放缓情况下，仍然坚持同比增长50%,形式一片大好。",
                "style": " font-size:0.9em",
                "css": "absolute center"
            }]

        }, {
            "pagestart": "-----------------------------------------------------",
            "phone": 888,
            "style": " ",
            "elements": [{
                "type": "text",
                "body": "股东持股占比",
                "style": "margin-top:10%; font-size:1.2em",
                "animate": "flyCenter"
            }, {
                "type": "chart",
                "body": {
                    "title": {
                        "text": "营业收入 ",
                        "subtext": "迭创新高",
                        "x": "center"
                    },

                    "series": [{
                        "type": "pie",
                        "radius": ["50%", "70%"],
                        "data": [{
                            "value": 35,
                            "name": "张庆文"
                        }, {
                            "value": 27,
                            "name": "戴芙蓉"
                        }, {
                            "value": 3,
                            "name": "杨灿阳"
                        }, {
                            "value": 3,
                            "name": "融铭道投资"
                        }, {
                            "value": 2.5,
                            "name": "银河资本"
                        }, {
                            "value": 1,
                            "name": "郑志伟"
                        }, {
                            "value": 29,
                            "name": "其他"
                        }]
                    }, {
                        "type": "pie",

                        "radius": ["0%", "30%"],
                        "data": [{
                            "value": 65,
                            "name": "大股东"
                        }, {
                            "value": 6,
                            "name": "资本"
                        }, {
                            "value": 30,
                            "name": "其他"
                        }]
                    }]

                }
            }, {
                "type": "text",
                "body": "公司业务正在向三线及以下城市渗透，从 2013 年到 2015 年，三线及以下的分布，从 51% 增长至 70%，这与城市的大幅拓展有关",
                "style": " font-size:0.9em",
                "css": "center"
            }],
            "end": "-----------------------------------------------------------------------"

        }, {
            "pagestart": "-----------------------------------------------------",
            "phone": 888,
            "style": " ",
            "elements": [{
                "type": "text",
                "body": "股东户数",
                "style": "margin-top:10%; font-size:1.2em",
                "animate": "flyCenter"
            }, {
                "type": "chart",
                "body": {
                    "title": {
                        "text": "股东户数 ",
                        "subtext": "迭创新高",
                        "x": "center"
                    },
                    "legend": {
                        "data": ["股东户数", "人居持股数"]
                    },
                    "xAxis": {
                        "boundaryGap": false,
                        "data": ["2012年6月", "2012年12月", "2013年6月", "2013年12月", "2014年6月", "2014年12月", "2015年6月", "2015年12月"] 
                    },
                    "series": [{
                        "type": "line",
                        "areaStyle": {
                            "normal": {}
                        },
                        "data": [7986, 8602, 8830, 8963, 9677, 12070, 12576, 18986]
                    }, {
                        "name": "人居",
                        "type": "line",
                        "data": [786, 862, 830, 893, 967, 1200, 1276, 1986]
                    }]

                }
            }, {
                "type": "text",
                "body": " 人均持股数统计人均持股数统计人均持股数统计  ",
                "style": " font-size:0.9em",
                "css": "center"
            }],
            "end": "-----------------------------------------------------------------------"

        }, {
            "title": "-------------------------------------------------------",
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
                        "text": "营业收入,净利润 ",
                        "subtext": "迭创新高",
                        "x": "center"
                    },
                    "xAxis": ["2012年", "2012年", "2012年", "2012年"],
                    "series": [
                    {
                        "type": "bar", "stack": "city",
                        "data": [6.4, 9.85, 4.02, 6.6]
                    },{
                        "type": "bar", "stack": "city",
                        "data": [16.4, 19.85, 24.02, 31.6]
                    }  ]

                }
            }, {
                "type": "text",
                "body": "在行业趋势放缓情况下，仍然坚持同比增长50%,形式一片大好。",
                "style": " font-size:0.9em",
                "css": "absolute center"
            }]

        }, {
            "pagestart": "-----------------------------------------------------",
            "phone": 888,
            "style": " ",
            "elements": [{
                "type": "text",
                "body": "净资产收益",
                "style": "margin-top:10%; font-size:1.2em",
                "animate": "flyCenter"
            }, {
                "type": "chart",
                "body": {
                    "title": {
                        "text": "净资产收益 ",
                        "subtext": "迭创新高",
                        "x": "center"
                    },
                    "xAxis": ["2012年", "2013年", "2014年", "2015年" ],
                    "series": [{
                        "name": "净资产收益 ",
                        "type": "line", 
                        "gridIndex": 1,                        
                        "data": [64, 51, 32, 74, 60, 80, 90]
                    }, {
                        "name": "净利润增长率",
                        "type": "line",
                         "gridIndex": 1,
                        "data": [30, 122, 101, 134, 190, 130, 110]
                    } ]

                }
            }, {
                "type": "text",
                "body": "公司业务正在向三线及以下城市渗透，从 2013 年到 2015 年，三线及以下的分布，从 51% 增长至 70%，这与城市的大幅拓展有关",
                "style": " font-size:0.9em",
                "css": "center"
            }],
            "end": "-----------------------------------------------------------------------"

        }, {
            "pagestart": "-----------------------------------------------------",
            "phone": 888,
            "style": " ",
            "elements": [{
                "type": "text",
                "body": "迭创新高，后劲足",
                "style": "margin-top:10%; font-size:1.2em",
                "animate": "flyCenter"
            }, {
                "type": "chart",
                "body": {
                    "title": {
                        "text": "营业收入 ",
                        "subtext": "迭创新高",
                        "x": "center"
                    },
                    "xAxis": [],
                    "series": [{
                        "type": "pie",
                        "roseType": "angle",
                        "data": [{
                            "value": 335,
                            "name": "系统集成"
                        }, {
                            "value": 310,
                            "name": "设备销售"
                        }, {
                            "value": 274,
                            "name": "代维服务"
                        }, {
                            "value": 235,
                            "name": "投资并购"
                        }, {
                            "value": 400,
                            "name": "互联网"
                        }]
                    }]

                }
            }, {
                "type": "text",
                "body": "在行业趋势放缓情况下，仍然坚持同比增长50%,形式一片大好。",
                "style": " font-size:0.9em",
                "css": "absolute center"
            }],
            "end": "-----------------------------------------------------------------------"

        }, {
            "pagestart": "-----------------------------------------------------",
            "phone": 888,
            "style": " ",
            "elements": [{
                "type": "text",
                "body": "产品正在向三线及以下城市渗透",
                "style": "margin-top:10%; font-size:1.2em",
                "animate": "flyCenter"
            }, {
                "type": "chart",
                "body": {
                    "title": {
                        "text": "营业收入 ",
                        "subtext": "迭创新高",
                        "x": "center"
                    },
                    "xAxis": ["2012年", "2012年", "2012年", "2012年"],
                    "series": [{
                        "type": "bar",
                        "stack": "city",
                        "data": [6.4, 9.85, 4.02, 7.6]
                    }, {
                        "type": "bar",
                        "stack": "city",
                        "data": [10.4, 8.85, 4.02, 3.6]
                    }, {
                        "type": "bar",
                        "stack": "city",
                        "data": [3, 5, 4, 3.6]
                    }]

                }
            }, {
                "type": "text",
                "body": "公司业务正在向三线及以下城市渗透，从 2013 年到 2015 年，三线及以下的分布，从 51% 增长至 70%，这与城市的大幅拓展有关",
                "style": " font-size:0.9em",
                "css": "center"
            }],
            "end": "-----------------------------------------------------------------------"

        }, {
            "pagestart": "-----------------------------------------------------",
            "phone": 888,
            "style": " ",
            "elements": [{
                "type": "text",
                "body": "用户年龄分布",
                "style": "margin-top:10%; font-size:1.2em",
                "animate": "flyCenter"
            }, {
                "type": "chart",
                "body": {
                    "title": {
                        "text": "营业收入 ",
                        "subtext": "迭创新高",
                        "x": "center"
                    },

                    "series": [{
                        "type": "pie",
                        "roseType": "angle",
                        "radius": ["50%", "70%"],
                        "data": [{
                            "value": 335,
                            "name": "3-10岁"
                        }, {
                            "value": 310,
                            "name": "10-20岁"
                        }, {
                            "value": 274,
                            "name": "20-30岁"
                        }, {
                            "value": 235,
                            "name": "30-40岁"
                        }, {
                            "value": 400,
                            "name": "40-50岁"
                        }, {
                            "value": 200,
                            "name": "50+岁"
                        }]
                    }, {
                        "type": "pie",

                        "radius": ["0%", "30%"],
                        "data": [{
                            "value": 635,
                            "name": "未成年"
                        }, {
                            "value": 810,
                            "name": "中青年"
                        }, {
                            "value": 474,
                            "name": "老蔫"
                        }]
                    }]

                }
            }, {
                "type": "text",
                "body": "公司业务正在向三线及以下城市渗透，从 2013 年到 2015 年，三线及以下的分布，从 51% 增长至 70%，这与城市的大幅拓展有关",
                "style": " font-size:0.9em",
                "css": "center"
            }],
            "end": "-----------------------------------------------------------------------"

        }, {
            "pagestart": "-----------------------------------------------------",
            "phone": 888,
            "style": " ",
            "elements": [{
                "type": "text",
                "body": "业务正在向三线及以下城市渗透",
                "style": "margin-top:10%; font-size:1.2em",
                "animate": "flyCenter"
            }, {
                "type": "chart",
                "body": {
                    "title": {
                        "text": "营业收入 ",
                        "subtext": "迭创新高",
                        "x": "center"
                    },
                    "xAxis": ["2012年", "2013年", "2014年", "2015年" ],
                    "series": [{
                        "type": "line",
                        "areaStyle": {
                            "normal": {}
                        },
                        "data": [64, 95, 42, 76, 60, 80, 90]
                    }, {
                        "name": "业务1",
                        "type": "line",
                        "areaStyle": {
                            "normal": {}
                        },
                        "data": [220, 182, 191, 234, 290, 330, 310]
                    }, {
                        "name": "业务12",
                        "type": "line",
                        "stack": "city",
                        "data": [150, 232, 201, 154, 190, 330, 410]
                    }, {
                        "name": "业务13",
                        "type": "line",
                        "stack": "city",
                        "data": [320, 332, 301, 334, 390, 330, 320]
                    }]

                }
            }, {
                "type": "text",
                "body": "公司业务正在向三线及以下城市渗透，从 2013 年到 2015 年，三线及以下的分布，从 51% 增长至 70%，这与城市的大幅拓展有关",
                "style": " font-size:0.9em",
                "css": "center"
            }],
            "end": "-----------------------------------------------------------------------"

        }

    ]

}