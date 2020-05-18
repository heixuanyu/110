// pages/component/myChannelSelect01/myChannelSelect01.js
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
        select: false,
        sex: '女生',
    },

    /**
     * 组件的方法列表
     */
    methods: {
        bindShowMsg() {
            this.setData({
                select: !this.data.select
            })

        },
        //   mySelect(e) {
        //     var that = this;
        //     setTimeout(function() {
        //         var sex01 = e.currentTarget.dataset.sex02;
        //         console.log(sex01),
        //             that.setData({
        //                 sex: sex01,
        //                 select: false
        //             })
        //     }, 500)
        // },
        mySelect(e) {
            var sex01 = e.currentTarget.dataset.sex02
                // console.log(e)
            this.setData({
                sex: sex01,
                select: false
            })
        },
    }
})