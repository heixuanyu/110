//index02.js
//获取应用实例
// const app = getApp()

//index.js
Page({
    data: {
        //轮播图配置
        autoplay: true,
        interval: 3000,
        duration: 1200
    },
    onLoad: function() {
        var that = this;
        var data = {
            "datas": [{
                    "id": 1,
                    "imgurl": "https://imagepphcloud.thepaper.cn/pph/image/64/601/632.jpg"
                },
                {
                    "id": 2,
                    "imgurl": "https://imagepphcloud.thepaper.cn/pph/image/64/601/632.jpg"
                },
                {
                    "id": 3,
                    "imgurl": "https://imagepphcloud.thepaper.cn/pph/image/64/601/632.jpg"
                },
                {
                    "id": 4,
                    "imgurl": "https://imagepphcloud.thepaper.cn/pph/image/64/601/632.jpg"
                }
            ]
        };
        that.setData({
            lunboData: data.datas
        })
    }
})