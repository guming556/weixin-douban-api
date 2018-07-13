//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    films:null,
    page:0,
    newFilms:null
  },
  onLoad:function() {
    wx.showLoading({
      title: '正在加载'
    })
    var that = this;
    wx.request({
      url: 'http://47.106.92.153/index.php',
      success:function(res) {
        that.setData({films:res.data});
        wx.hideLoading();
      }
    })
  },
  details:function(res) {
    wx.navigateTo({
      url: '../details/details?id='+res.currentTarget.dataset.id,
    })
  },
  lower: function () {
    this.setData({ page: this.data.page + 1 });
    var that = this;
    wx.request({
      url: 'http://47.106.92.153/index.php?page=' + that.data.page,
      success: function (res) {
        console.log(res.data);
        that.newFilms = that.data.films;
        for (var i = 0; i < res.data.length; i++) {
          that.newFilms = that.newFilms.concat(res.data[i]);
        }
        that.setData({ films: that.newFilms });
      }
    })
  },
  upper: function () {
    console.log('upper');
  },

})
