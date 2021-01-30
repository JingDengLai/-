// common/ActionSheet/ActionSheet.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        showActionSheet:{
            type: Boolean,
            value: false
        },
        
        showCancel:{
            type: Boolean,
            value: true
        }
    },

    observers: {
        'showActionSheet':function(val){
            if (val === "" || val === null){
                return
            }
            
            this.onSetContentHeight();
            this.setData({
                showMask: val,
            })
        }
    },

    lifetimes:{
        attached:function(){
            console.log('running')
            this.onSetContentHeight()
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
        showMask: false,
        contentHeight: 0,
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onHideMask() {
            this.setData({
                showMask: false
            })
        },

        onSetContentHeight(){
            this.createSelectorQuery().select('.content')
            .fields({
                node: true,
                size: true,
            }).exec(res => {
                // console.log(res);
                this.setData({
                    contentHeight: res[0].height
                })
            })
        }
    }
})
