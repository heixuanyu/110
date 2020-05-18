// pages/termsDetails/termsDetails.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        array:[{id:0,isShow:false},{id:1,isShow:true},{id:2,isShow:true}],
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        wx.setNavigationBarTitle({
          title: '保险条款详情',
        })
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

    },
    submitBtn(e) {
        let arrayItem = this.data.array;
        let currentIndex = e.currentTarget.dataset.index;
        if(arrayItem[currentIndex].isShow) {
            arrayItem[currentIndex].isShow = false;
            this.setData({
                array: arrayItem
            })
            return;
        } 
        for(var i in arrayItem) {
            if(arrayItem[i].id == e.currentTarget.dataset.id) {
                arrayItem[i].isShow = true;
            }
        }
        this.setData({
            array: arrayItem
        })
    }
})