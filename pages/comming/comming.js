// pages/comming/comming.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    films: null,
    page:0,
    newFilms:null
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
  lower:function() {
    this.setData({page:this.data.page+1});
    var that = this;
    wx.request({
      url: 'http://47.106.92.153/comming.php?page='+that.data.page,
      success:function(res){
        console.log(res.data);
        that.newFilms = that.data.films;
        for(var i=0;i<res.data.length;i++){
          that.newFilms = that.newFilms.concat(res.data[i]);
        }
        that.setData({films:that.newFilms});
      }
    })
  },
  upper:function() {
    console.log('upper');
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