// pages/component/myChannelSelect/myChannelSelect.js
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

        array: ['女性', '男性'],
        index: "女性"

    },

    /**
     * 组件的方法列表
     */
    methods: {
        bindPickerChange: function(e) {
            console.log('picker发送选择改变，携带值为', e.detail.value)
            this.setData({
                index: e.detail.value
            })
        }
    }
})