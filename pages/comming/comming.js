// pages/comming/comming.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    films: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    wx.showLoading({
      title: '正在加载'
    })
    var that = this;
    wx.request({
      url: 'http://47.106.92.153/comming.php',
      success: function (res) {
        that.setData({ films: res.data });
        wx.hideLoading();
      }
    })
  },
  details: function (res) {
    wx.navigateTo({
      url: '../details/details?id=' + res.currentTarget.dataset.id,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})