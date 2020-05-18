// pages/addChannelMan/addChannelMan.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        myPictureChoose01: "myPictureChoose01"
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

    },
    addChannelManBtnClick: function() {
        console.log("that");
        wx.navigateTo({
            url: '../reviewChannelMembers/reviewChannelMembers'
        })

    },
    // 图片选择函数
    myPicture: function() {
        // console.log("myPicture");
        let that = this;
        // console.log(that);
        // const query = wx.createSelectorQuery();
        // let myPictureChoose = query.select('.myPictureChoose')
        // console.log(myPictureChoose);
        wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success(res) {
                // tempFilePath可以作为img标签的src属性显示图片
                const tempFilePaths = res.tempFilePaths;
                that.setData({
                        tempFilePaths: res.tempFilePaths,
                        myPictureChoose01: "myPictureChoose02"
                    })
                    // console.log(res.tempFilePaths)
            }
        })
    }
})