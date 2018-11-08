Page({
    data: {
      imgUrls: [
        '../images/51.jpg',
        '../images/1.jpg',
        '../images/2.jpg',
        '../images/41.jpg',
        '../images/3.jpg'

      ],
      indicatorDots: true,
      autoplay: true,
      interval: 4000,
      duration: 1000,
      inputShowed: false,
      inputVal: "",
    },
    gotoPage: function(e) {
        var page = e.currentTarget.dataset.page;
        wx.navigateTo({
            url: '../charts/' + page + '/' + page
        });
    },
    onLoad: function() {

    }
})