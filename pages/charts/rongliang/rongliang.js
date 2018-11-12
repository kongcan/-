var wxCharts = require('../../../utils/wxcharts.js');
var app = getApp();
var radarChart = null;
var pieChart = null;

Page({
  data: {
  },
  touchHandler: function (e) {
    console.log(radarChart.getCurrentDataIndex(e));
  },
  onReady: function (e) {
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    radarChart = new wxCharts({
      canvasId: 'radarCanvas',
      type: 'radar',
      categories: ['UPS', '制冷量', '机柜空间容量', '机柜PDU容量'],
      series: [{
        name: '楼层1',
        data: [90, 110, 125, 95,]
      }],
      width: windowWidth,
      height: 200,
      extra: {
        radar: {
          max: 150
        }
      }
    });
    pieChart = new wxCharts({
      animation: true,
      canvasId: 'pieCanvas',
      type: 'pie',
      series: [{
        name: '剩余容量',
        data: 35,
      }, {
        name: '已用容量',
        data: 15,
      }],
      width: windowWidth,
      height: 300,
      dataLabel: true,
    });
    pieChart = new wxCharts({
      animation: true,
      canvasId: 'pieCanvas1',
      type: 'pie',
      series: [{
        name: '剩余容量',
        data: 90,
      }, {
        name: '已用容量',
        data: 16,
      }],
      width: windowWidth,
      height: 300,
      dataLabel: true,
    });
    pieChart = new wxCharts({
      animation: true,
      canvasId: 'pieCanvas2',
      type: 'pie',
      series: [{
        name: '剩余容量',
        data: 500,
      }, {
        name: '已用容量',
        data: 40,
      }],
      width: windowWidth,
      height: 300,
      dataLabel: true,
    });
  }
});