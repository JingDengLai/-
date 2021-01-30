Component({
    properties: {
        topImage: {
            type: String,
            value:''
        },
        isLook: {
            type: Boolean,
            value: false
        },
        width: {
            type: Number,
            value: 250
        },
        height: {
            type: Number,
            value: 250
        },
        borderRadius: {
            type: String,
            value: "50%"
        }
    },

    data: {
        userAvatar: ""
    },

    observers: {
        topImage:function(val){
            if (val == null){
                return
            }
            this.setData({
                userAvatar: val
            })
        }
    },

    methods: {

        onLook(){
            console.log('just look')
        },

        uploadAvatar(){
            var that = this;
            wx.showActionSheet({
                itemList: ['从相册中选择', '拍照'],
                itemColor: "#f7982a",
                success: function (res) {
                    if (!res.cancel) {
                        if (res.tapIndex == 0) {
                            that.chooseWxImageShop('album');//从相册中选择
                        } else if (res.tapIndex == 1) {
                            that.chooseWxImageShop('camera');//手机拍照
                        }
                    }
                }
            })
        },
        chooseWxImageShop: function (type) {
            var that = this;
            wx.chooseImage({
                sizeType: ['original', 'compressed'],
                sourceType: [type],
                success: function (res) {
                    // that.data.userimg = res.tempFilePaths[0],
                    // console.log(res.tempFilePaths[0])
                    // that.setData({
                    //     userAvatar: res.tempFilePaths[0]
                    // })
                    that.onTriggerChange(res.tempFilePaths[0]);
                }
            })
        },

        onTriggerChange(data){
            this.triggerEvent('change', data);
        }
    }
})