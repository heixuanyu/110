//index.js
//获取应用实例
const app = getApp()

//index.js
Page({
    data: {
        //轮播图配置
        autoplay: true,
        interval: 3000,
        duration: 1200,
        indicatorDots: false
    },
    onLoad: function() {
        var that = this
        var picList = []
        picList.push("https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1623318287,3864173199&fm=27&gp=0.jpg")
        picList.push("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532429494100&di=6d4f20a64fb21f113e1bb67be1cdbb63&imgtype=0&src=http%3A%2F%2Fimg.juimg.com%2Ftuku%2Fyulantu%2F121019%2F240425-12101920154274.jpg")
        picList.push("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532429494100&di=f3712ddf9ca5b37bf81f2cea4ae40c54&imgtype=0&src=http%3A%2F%2Fpic32.photophoto.cn%2F20140808%2F0042040230406581_b.jpg")
        that.setData({
            picList: picList,
        })
    },
    myTeam: function() {
        wx.navigateTo({
            url: '../myteam/myteam'
        })
    },
    myChannel: () => {

        wx.navigateTo({
            url: '../myChannel/myChannel'
        })
    },
    myPlan: () => {

        wx.navigateTo({
            url: '../myPlan/myPlan'
        })
    },
})