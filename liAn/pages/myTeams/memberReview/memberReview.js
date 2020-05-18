// pages/memberReview/memberReview.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        array: ['男性', '女性'],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.setData({
            index: 0
        })
    },
    // 切换表单
    bindPickerChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index: e.detail.value
        })
    },

})