var wxCharts = require('../../../utils/wxcharts.js');
var app = getApp();
var columnChart = null;
var chartData = {
    main: {
        title: '能效分布',
        data: [15, 20, 35, 17,13],
        categories: ['2F01', '2F02', '空调间1', '空调间2','USP室']
    },
    sub: [{
        title: '2F01',
        data: [10.05, 2.56, 11.35, 7.57, 13.76, 13.76,23.56],
        categories: ['开关装置/发电机', '照明/辅助设备', 'UPS', 'PDU', '加湿器', '冷却器','IT设备']
    }, {
        title: '2F02',
        data: [10.05, 2.56, 11.35, 7.57, 13.76, 13.76, 23.56],
        categories: ['开关装置/发电机', '照明/辅助设备', 'UPS', 'PDU', '加湿器', '冷却器', 'IT设备']
    }, {
        title: '空调间1',
        data: [10.05, 2.56, 11.35, 7.57, 13.76, 13.76, 23.56],
        categories: ['开关装置/发电机', '照明/辅助设备', 'UPS', 'PDU', '加湿器', '冷却器', 'IT设备']               
    }, {
        title: '空调间2',
        data: [10.05, 2.56, 11.35, 7.57, 13.76, 13.76, 23.56],
        categories: ['开关装置/发电机', '照明/辅助设备', 'UPS', 'PDU', '加湿器', '冷却器', 'IT设备']
    }, {
       title:'USP室',
        data: [10.05, 2.56, 11.35, 7.57, 13.76, 13.76, 23.56],
        categories: ['开关装置/发电机', '照明/辅助设备', 'UPS', 'PDU', '加湿器', '冷却器', 'IT设备']

    }

    ]
};
Page({
    data: {
        chartTitle: '能效分布',
        isMainChartDisplay: true
    },
    backToMainChart: function () {
        this.setData({
            chartTitle: chartData.main.title,
            isMainChartDisplay: true
        });
        columnChart.updateData({
            categories: chartData.main.categories,
            series: [{
                name: '能效分布',
                data: chartData.main.data,
                format: function (val, name) {
                    return val.toFixed(2) + '';
                }
            }]
        });
    },
    touchHandler: function (e) {
        var index = columnChart.getCurrentDataIndex(e);
        if (index > -1 && index < chartData.sub.length && this.data.isMainChartDisplay) {
            this.setData({
                chartTitle: chartData.sub[index].title,
                isMainChartDisplay: false
            });
            columnChart.updateData({
                categories: chartData.sub[index].categories,
                series: [{
                    name: '能效分布',
                    data: chartData.sub[index].data,
                    format: function (val, name) {
                        return val.toFixed(2) + '';
                    }
                }]
            });

        }
    },
    onReady: function (e) {
        var windowWidth = 320;
        try {
          var res = wx.getSystemInfoSync();
          windowWidth = res.windowWidth;
        } catch (e) {
          console.error('getSystemInfoSync failed!');
        }

        columnChart = new wxCharts({
            canvasId: 'columnCanvas',
            type: 'column',
            animation: true,
            categories: chartData.main.categories,
            series: [{
                name: '能效分布',
                data: chartData.main.data,
                format: function (val, name) {
                    return val.toFixed(2) + '';
                }
            }],
            yAxis: {
                format: function (val) {
                    return val + '';
                },
                title: '%',
                min: 0,
                max:100
            },
            xAxis: {
                disableGrid: false,
                type: 'calibration'
            },
            extra: {
                column: {
                    width: 30
                }
            },
            width: windowWidth,
            height: 200,
        });
    }
});