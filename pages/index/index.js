//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    films:null
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
  }

})
