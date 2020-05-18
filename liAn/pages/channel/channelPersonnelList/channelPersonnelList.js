// pages/myteam/myteam.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        winWidth: 0,
        winHeight: 0,

        currentTab: 0,
        // tab切换

    },


    onLoad: function() {
        var that = this;

        /**
         * 获取系统信息
         */
        wx.getSystemInfo({

            success: function(res) {
                that.setData({
                    winWidth: res.windowWidth,
                    winHeight: res.windowHeight
                });
            }

        });
    },
    /**
     * 滑动切换tab
     */
    bindChange: function(e) {
        var that = this;
        that.setData({ currentTab: e.detail.current });
        // console.log("e")
        // console.log(e)
    },
    /**
     * 点击tab切换
     */
    swichNav: function(e) {
        var that = this;

        if (this.data.currentTab === e.target.dataset.current) {
            return false;
        } else {
            that.setData({
                currentTab: e.target.dataset.current
            })
        }
    }
})