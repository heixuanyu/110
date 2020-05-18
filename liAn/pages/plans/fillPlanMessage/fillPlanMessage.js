// pages/fillPlanMessage/fillPlanMessage.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        items: [
            { value: "man", name: "男性", checked: true },
            { value: "woman", name: "女性", checked: false },
        ],
        array: ['10年交', '7年交', '5年交', '4年交'],
        date: "2020-12-12",
        date01: "2020-12-12",
        index: 0,
        region: ['广东省', '广州市', '海珠区'],
        customItem: '全部'
    },
    onLoad: function() {
        wx.setNavigationBarTitle({
          title: '制作计划书',
        })
    },

    radioChange: function(e) {

        var items = this.data.items;
        console.log('radio发生change事件，携带value值为：', e.detail.value)

        for (var i = 0; i < items.length; ++i) {
            // items[i].checked = items[i].value == e.detail.value || false;
            items[i].checked = (items[i].value == e.detail.value) ? true : false;
        }
        console.log(items)

        this.setData({
            items: items
        });
    },
    bindDateChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            date: e.detail.value
        })
    },
    bindDateChange01: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            date01: e.detail.value
        })
    },
    bindRegionChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            region: e.detail.value
        })
    },
    bindPickerChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index: e.detail.value
        })
    },
    buildProposal: function(e) {
        wx.navigateTo({
            url: '../../pages/buildProposal/buildProposal',
            success: (result) => {

            },
            fail: () => {},
            complete: () => {}
        });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})