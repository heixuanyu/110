// pages/customerList/addCustomer/addCustomer.js
var pickerDate = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentDate: pickerDate.formatDate(new Date()),
    index: 0,
    array: ['身份证', '港澳通行证', '居住证'],
    objectArray: [
      {
        id: 0,
        name: '男'
      },
      {
        id: 1,
        name: '女'
      },
      {
        id: 2,
        name: '中性'
      },
    ],
    region: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '添加客户'  //修改title
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

  },
  // 选择证件类型
  bindPickerChange: function(e) {
    this.setData({
      index: e.detail.value
    })
  },
  // 选择性别
  bindPickerSex:function(e) {
    this.setData({
      index: e.detail.value
    })
  },
  // 点击选择日期
  bindDateChange: function (e) {
   this.setData({
     dates: e.detail.value
   })
 },
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  }
})