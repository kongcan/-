var wxCharts = require('../../../utils/wxcharts.js');
var app = getApp();
var lineChart = null;

msg: '数据'
Page({
    data: {
    },
    touchHandler: function (e) {
        console.log(lineChart.getCurrentDataIndex(e));
        lineChart.showToolTip(e, {
            format: function (item, category) {
                return category + ' ' + item.name + ':' + item.data 
            }
        });
    },    
    createSimulationData: function () {
        var categories = [];
        var data = [];
        for (var i = 0; i < 24; i++) {
            categories.push(i + 1);
            data.push(Math.random()*(20-10)+10);
        }
    
        return {
            categories: categories,
            data: data
        }
    },
    updateData: function () {
        var simulationData = this.createSimulationData();
        var series = [{
            name: '楼层1',
            data: simulationData.data,
            format: function (val, name) {
                return val.toFixed(2) + 'Kwh';
            }
        }];
        lineChart.updateData({
            categories: simulationData.categories,
            series: series
        });
    },
    onLoad: function (e) {
        var windowWidth = 320;
        try {
            var res = wx.getSystemInfoSync();
            windowWidth = res.windowWidth;
        } catch (e) {
            console.error('getSystemInfoSync failed!');
        }
        
        var simulationData = this.createSimulationData();
        lineChart = new wxCharts({
            canvasId: 'lineCanvas',
            type: 'line',
            categories: simulationData.categories,
            animation: true,
            // background: '#f5f5f5',
            series: [{
                name: '楼层1',
                data: simulationData.data,
                format: function (val, name) {
                    return val.toFixed(2) + 'Kwh';
                }
            }, {
                name: '楼层2',
                data: [20, 60, 40, 30, 50, 40, 40, 50, 20, 40,60,40,20,60,80,40,60,30,50,20,80,60,40,40],
                format: function (val, name) {
                    return val.toFixed(2) + 'Kwh';
                }
            }],
            xAxis: {
                disableGrid: true
            },
            yAxis: {
                title: '耗电量 (Kwh)',
                format: function (val) {
                    return val.toFixed(0);
                },
                min: 0
            },
            width: windowWidth,
            height: 200,
            dataLabel: false,
            dataPointShape: true,
            extra: {
                lineStyle: 'curve'
            }
        });
      new wxCharts({
        canvasId: 'columnCanvas',
        type: 'column',
        categories: ['0：00', '4：00', '8：00', '12：00', '16：00', '20：00'],
        series: [{
          name: '楼层1',
          data: [15, 20, 45, 37, 4, 80]
        }, {
          name: '楼层2',
          data: [70, 40, 65, 100, 34, 18]
        }],
        yAxis: {
          title: '能耗 (kwh)',
          titleFontColor: '#7cb5ec',
          format: function (val) {
            return val + 'kw';
          }
        },
        width: windowWidth,
        height: windowWidth / 2,
      });

    }
});

