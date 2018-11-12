App({
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    var that = this;
    wx.login({
      success: res => {
        wx.request({
          url: that.globalData.wx_url_1 + res.code + that.globalData.wx_url_2,
          success: res => {
            that.globalData.openid = res.data.openid;
          }
        })
      }
    });
  },

  /**
   * 设置全局变量
   */
  globalData: {
    openid: 0,
    wx_url_1: 'https://api.weixin.qq.com/sns/jscode2session?appid=wxed6ef60ea8ae2efc&secret=173cd0744576db368179ea2db9acd666',
    wx_url_2: '&grant_type=authorization_code'
  }
})
