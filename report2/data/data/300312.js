{
    "profile": {
        "companyName": " ",
        "code": "{{code}}",
        "title": "{{companyName}} 2015年报吗",
        "subtitle": "@{{FINANCE['MainTarget.YingYeShouRu']['header']}}",
        "style": ".PAGE{background-color:#fff; color:#666} a{color:blue}"
    },
    "pages": [{
            "title": "xxx",
            "phone": 888,
            "style": "background-image:url(template/notice/imgs/x11.jpg); ",
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
                "style": "bottom:100px;color:#fff;font-size:0.9em",
                "css": "absolute center"
            }]

        },{
            "title": "xxx",
            "phone": 888,
            "style": "background-image:url(template/notice/imgs/x11.jpg); ",
            "elements": [{
                "type": "text",
                "body": "{{companyName}} 公司基本情况",
                "animate--": "flyCenter",
                "style": "margin-top:10%;color:white;font-size:1.2em",
                "css": "center"
            }, {
                "type": "text",
                "body": "<li>公司名称：邦讯技术股份有限公司                <li>股票代码：300312                <li>法人代表：张庆文                <li>董事会秘书：王传世                <li>证券事务代表：范晓倩          <li>公司地址：海淀区杏石口路80号益园文化创意A区4号楼 ",
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
                "style": "bottom:20%;color:#eee;font-size:0.9em",
                "css": "absolute center"
            }]

        },   {
            "pagestart": "-----------------------------------------------------",
            "phone": 888,
            "style": " ",
            "elements": [ 
             {
                "type": "chart",
                "body": {
                    "title": {
                        "text": "股东持股占比 ",
                        "subtext": "迭创新高",
                        "x": "center"
                    },

                    "series": [{
                        "type": "pie",
                        "style": "height:30%",
                        "radius": ["0%", "60%"],
                        "data": [{
                            "value": 69,
                            "name": "大股东"
                        }, {
                            "value": 11,
                            "name": "机构持股"
                        }, {
                            "value": 3,
                            "name": "员工激励"
                        }, {
                            "value": 17,
                            "name": "其他"
                        }]
                    } ]

                }
              },{
                "type": "chart",
                "style": "margin-top:-15%;",
                "body": {
                    "title": {
                        "text": "股东人数 ",
                        "subtext": "迭创新高",
                        "x": "center"
                    },
                    "xAxis": ["201403","201406","201409","201412","201503","201506","201509","201512"],
                    "series": [ 
                    {
                        "type": "line",                         
                        "data": [9165,10000,9784,7614,7306,7066,5237,16600,15800,13800]
                    }]

                }
            }, {
                "type": "text",
                "body": "公司高管持股增加，对未来充满信心",
                "style": " font-size:0.9em",
                "css": "center"
            }],
            "end": "-----------------------------------------------------------------------"

        },{
            "pagestart": "-----------------------------------------------------",
            "phone": 888,
            "style": " ",
            "elements": [  {
                "type": "chart",
                "body": {
                    "title": {
                        "text": "张庆文 质押",
                        "subtext": "",
                        "x": "center"
                    }, 
                    "xAxis": [],
                    "series": [{
                        "type": "pie",
                        "roseType": "angle",
                        "style": "height:30%;margin-top:10px",
                        "radius": ["10%", "50%"],
                        "center": ["50%", "40%"],
                        "itemStyle": {
                            "normal": {
                                "color": "#c23531",
                                "shadowBlur": 200,
                                "shadowColor": "rgba(0, 0, 0, 0.5)"
                             }
                         },
                        "visualMap": {
                            "show": "false",
                            "min": 80,
                            "max": 600,
                            "inRange": {
                                "colorLightness": [0, 1]
                            }
                        },                        
                        "data": [{
                            "value": 29.5,
                            "name": "①1729万股" 
                        }, {
                            "value": 13.3,
                            "name": "②770万股" 
                        }, {
                            "value": 10.18,
                            "name": "③597万股" 
                        }, {
                            "value": 7.85,
                            "name": "④460万股" 
                        }, {
                            "value": 11.26,
                            "name": "⑤660万股" 
                        }, {
                            "value": 28.1,
                            "name": "剩余", 
                             "itemStyle": {
                               "normal": {
                                  "color": "#e23531" 
                                }
                             }
                        } ]
                    } ]

                }
            }, {
                "type": "chart",
                "style": "margin-top:-50px",
                "body": {
                    "title": {
                        "text": "戴芙蓉 质押",
                        "subtext": "",
                        "x": "center"
                    }, 
                    "xAxis": [],
                    "series": [{
                        "type": "pie",
                        "roseType": "angle", 
                        "radius": ["10%", "50%"],
                        "center": ["50%", "40%"],
                        "itemStyle": {
                            "normal": {
                                "color": "#c23531",
                                "shadowBlur": 200,
                                "shadowColor": "rgba(0, 0, 0, 0.5)"
                             }
                         },
                        "visualMap": {
                            "show": "false",
                            "min": 80,
                            "max": 600,
                            "inRange": {
                                "colorLightness": [0, 1]
                            }
                        },              
                        "data": [{
                            "value": 20.2,
                            "name": "①560万股" 
                        }, {
                            "value": 65.9,
                            "name": "②1830万股" 
                        } , {
                            "value": 14.1,
                            "name": "剩余",
                             "itemStyle": {
                               "normal": {
                                  "color": "#e23531" 
                                }
                             }
                        } ]
                    } ]

                }
            }],
            "end": "-----------------------------------------------------------------------"

        },   
          {
            "pagestart": "-----------------------------------------------------",
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
                        "subtext": "迭创新高",
                        "x": "center"
                    },
                    "xAxis": [],
                    "series": [{
                        "type": "pie",
                        "roseType000": "angle---",
                        "radius": ["10%", "45%"],
                        "data": [{
                            "value": 5000,
                            "name": "互联网保险\n(汇金讯通\n持股80%)"
                        }, {
                            "value": 3000,
                            "name": "智能家居\n(海纳通科 持股100%)"
                        }, {
                            "value": 2000,
                            "name": "手机游戏\n(点翼科技 持股63%)"
                        }, {
                            "value": 700,
                            "name": "智能穿戴\n(海纳通物联网 持股35%)"
                        }, {
                            "value": 3500,
                            "name": "物联网运营\n(邦讯物联 持股35%)"
                        }, {
                            "value": 300,
                            "name": "wifi运营\n(邦讯智联 持股30%)"
                        }, {
                            "value": 100,
                            "name": "工业设计\n(宁波摩根设计,股15%)"
                        }]
                    }]

                }
            }, {
                "type": "text",
                "body": "生态体系蓬勃发展",
                "style": " font-size:0.9em",
                "css": "absolute center"
            }],
            "end": "-----------------------------------------------------------------------"

        } ,       {
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
                        "text": "营业收入(万)",
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
                     "data": ["毛利润(万)", "营业利润(万)","净利润(万)"]
                    },
                    "xAxis": "@{{FINANCE['AssetStatement.YingYeLiRun']['header']}}",
                    "series": [{
                        "name": "毛利润(万)",
                        "type": "bar",
                        "data": "@{{FINANCE['MainTarget.MaoLiRun']['data']}}"
                    },{
                        "name": "营业利润(万)",
                        "type": "bar",
                        "data": "@{{FINANCE['AssetStatement.YingYeLiRun']['data']}}"
                    }, {
                        "name": "净利润(万)",
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
                     "data": ["总资产(万)", "净资产(万)"]
                    },
                    "title": {
                        "text": "",
                        "subtext": "迭创新高",
                        "x": "center"
                    },
                    "xAxis": "@{{FINANCE['AssetStatement.ZongZiChan']['header']}}",
                    "series": [{
                        "name" :"总资产(万)",
                        "type": "bar",
                        "data": "@{{FINANCE['AssetStatement.ZongZiChan']['data']}}"
                    },{
                        "name" :"净资产(万)",
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
                "body": "迭创新高，后劲更足",
                "style": "margin-top:10%; font-size:1.2em",
                "animate": "flyCenter"
            }, {
                "type": "chart",
                "body": {
                    "title": {
                        "text": "现金(万)",
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
                "body": "现金流量决定企业活力",
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
                "body": "折旧摊",
                "style": "margin-top:10%; font-size:1.2em",
                "animate": "flyCenter"
            }, {
                "type": "chart",
                "body": {
                    "title": {
                        "text": "折旧摊销额(万)",
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
                "body": "规范提计，绝无粉饰",
                "style": " font-size:0.9em",
                "css": "absolute center"
            }],
            "PAGE_END": "--------------------------"

        } 

    ]

}