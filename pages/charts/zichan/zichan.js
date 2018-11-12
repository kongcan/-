var wxCharts = require('../../../utils/wxcharts.js');
var app = getApp();
var pieChart = null;
Page({
  data: {
    listData: [
      { "name": "服务器", "data": "820" },
      { "name": "供电配电", "data": "1240" },
      { "name": "网络与安全", "data": "68" },
      { "name": "办公环境资产", "data": "660" },
      { "name": "机柜", "data": "1080" }
    ]
  },
  onLoad: function () {
    console.log('onLoad')

  },
  touchHandler: function (e) {
    console.log(pieChart.getCurrentDataIndex(e));
  },
  onLoad: function (e) {
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    pieChart = new wxCharts({
      animation: true,
      canvasId: 'ringCanvas',
      type: 'ring',
      series: [{
        name: '服务器',
        data: 820,
      }, {
        name: '供电配电',
        data: 1240,
      }, {
        name: '网络与安全',
        data: 68,
      }, {
        name: '办公环境资产',
        data: 660,
      }, {
        name: '机柜',
        data: 1080,

      }
      ],
      width: windowWidth,
      height: 250,
      dataLabel: true,
    });
  }
});