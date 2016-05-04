$CHARDATA = [];

function pageResume(page) {
  $("#pageid" + page + " .chart").each(function(index, el) {
    var eleid = $(this).attr('id');
    makeChart(eleid, $CHARDATA[eleid]);
  });
};



var SeriesOption = {};
SeriesOption.bar = function(dataX, stack) {
  var bar = {
    name: 'name',
    type: 'bar',
    "barMaxWidth": 40,
    "barGap": "30%",
    "label": {
      "normal": {
        "show": true,
        "position": "top"
      }
    },
    itemStyle: {
      normal: {
        label: {
          show: true,
          position: 'top',
          formatter: '{b}\n{c}'
        }
      }
    },
    name: dataX.name,
    stack: dataX.stack,
    data: dataX.data,
    itemStyle: {
      emphasis: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    }
  };

  if (dataX.stack) {
    bar.label = {
      normal: {
        show: true,
      }
    }
  }
  for (var i in dataX) {
    bar[i] = dataX[i];
  }
  return bar;

}

SeriesOption.line = function(dataX) {
  var line = {
    name: 'name',
    type: 'line',
    itemStyle: {
      normal: {
        label: {
          show: true,
          position: 'top',
          formatter: '{c}\n'
        }
      }
    },
    name: dataX.name,
    data: dataX.data

  };
  for (var i in dataX) {
    line[i] = dataX[i];
  }
  return line;
}
SeriesOption.pie = function(dataX) {
  var pie = {
    name: 'name',
    type: 'pie',
    itemStyle: {
      normal: {
        // color: '#c23531',
        shadowBlur: 50,
        shadowColor: 'rgba(0, 0, 0, 0.2)'
      }
    },
    labelLine: {
      normal: {
        lineStyle: {
          color: 'rgba(255, 0, 0, 0.3)'
        },
        smooth: 0.2,
        length: 5,
        length2: 5
      }
    },
    name: dataX.name,
    data: dataX.data

  };

  for (var i in dataX) {
    pie[i] = dataX[i];
  }
  return pie;
};

function randomData() {
  return Math.round(Math.random() * 1000);
}
SeriesOption.map = function(dataX) {

  var map = {
    name: 'iphone3',
    type: 'map',
    mapType: 'china',
    roam: false,
    label: {
      normal: {
        show: true
      },
      emphasis: {
        show: true
      }
    },
    data: [{
      name: '北京',
      value: randomData()
    }, {
      name: '香港',
      value: randomData()
    }, {
      name: '澳门',
      value: randomData()
    }]
  };

  for (var i in dataX) {
    map[i] = dataX[i];
  }
  return map;

}

function makeChart(divID, $data) {
  if (!$data) return;

  var myChart = echarts.init(document.getElementById(divID));
  var Options = {
    animation: false,
    color: ['#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
      '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
      '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
    ],
    title: $data.title,
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'right',
      data: $data.xAxis
    },

    xAxis: [{
      type: 'category',
      data: $data.xAxis
    }],
    yAxis: [{
      type: 'value'
    }],
    series: []
  };
  if ($data.color) {
    Options.color = $data.color;
  }
  if ($data.legend) {
    Options.legend = $data.legend;
  }
  if ($data.yAxis) {
    Options.yAxis = $data.yAxis;
  }
  
  for (var i in $data.series) {
    var sers = $data.series[i];
    var type = sers.type;
    Options.series.push(SeriesOption[type]($data.series[i]));
    if (!$data.xAxis || $data.xAxis.length < 1) {
      Options.yAxis = Options.xAxis = null;
    }
  }

  myChart.setOption(Options);
  // setTimeout(function() {
  //   myChartRefresh(myChart, Options)
  // }, 2000);


}


function myChartRefresh(myChart, Options) {
  var $series = Options.series;
  myChart.setOption({
    animation: false,
    series: [{
      data: []
    }]
  });
  setTimeout(function() {
    myChart.setOption({
      animation: true,
      series: $series
    });
  }, 50);
}