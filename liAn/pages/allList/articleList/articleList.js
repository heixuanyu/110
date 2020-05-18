// pages/allList/articleList/articleList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     // tab切换，方法二
     selected: 0,
     list: [{text:'推荐',content:'aaa'}, {text:'保险',content:'bbb'}, {text:'健康',content:'ccc'}, {text:'财经',content:'ddd'},{text:'家庭',content:'eee'},{text:'养生',content:'fff'}],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '获客爆文',
    })
    var that = this;
    /** 
     * 获取系统信息,系统宽高
     */
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
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

  },
  //tab框切换 方法二
  selected: function (e) {
    let that = this
    let index = e.currentTarget.dataset.index;
    that.setData({
      selected: index
    })
  },
})