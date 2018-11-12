var wxCharts = require('../../../utils/wxcharts.js');
var app = getApp();
var pieChart = null;
Page({
  data: {
    listData: [
      { "name": "一级告警", "data": "8" },
      { "name": "二级告警", "data": "11" },
      { "name": "三级告警", "data": "6" },
      { "name": "四级告警", "data": "16" },
      { "name": "五级告警", "data": "21" }
    ]
  },
  selectTap() {
    this.setData({
      show: !this.data.show
    });
  },
  optionTap(e) {
    let Index = e.currentTarget.dataset.index;
    this.setData({
      index: Index,
      show: !this.data.show
    });
  },
  onLoad: function (options) {
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
      extra: {
        ringWidth: 25,
        pie: {
          offsetAngle: -45
        }
      },
      title: {
        name: '120',
        color: '#7cb5ec',
        fontSize: 25
      },
      subtitle: {
        name: '总告警量',
        color: '#666666',
        fontSize: 15
      },
      series: [{
        name: '一级告警',
        data: 8,
      }, {
        name: '二级告警',
        data: 11,
      }, {
        name: '三级告警',
        data: 6,
      }, {
        name: '四级告警',
        data: 16,
      }, {
        name: '五级告警',
        data: 21,

      }
      ],
      width: windowWidth,
      height: 250,
      dataLabel: true,
    });
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {
  },
  yiyue: function () {

  }
})
