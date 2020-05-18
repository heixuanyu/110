// pages/component/manPicture/manPicture.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        myPictureChoose01: "myPictureChoose01"
    },

    /**
     * 组件的方法列表
     */
    methods: {
        myPicture: function() {
            // console.log("myPicture");
            let that = this;
            // let myPictureChoose = document.querySelector('.myPictureChoose');
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

    }
})