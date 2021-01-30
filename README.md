## 小程序组件

获取地址：https://github.com/JingDengLai/ZuJian/tree/master/components

### ActionSheet组件

说明：小程序提供的wx.showActionSheet(Object object)不能满足多场景的需求，所以写了一个自定义的组件，可根据场景需求自定义内容。

路径：components/ActionSheet/ActionSheet

#### Attributes

|      参数       |      说明      |  类型   | 默认值 |
| :-------------: | :------------: | :-----: | :----: |
| showActionSheet |   显示下弹框   | Boolean | false  |
|   showCancel    | 是否显示取消键 | Boolean |  True  |

使用方法：

```html
<ActionSheet showActionSheet="{{showAction}}">
    <!--
    	下面为自定义模块，可根据需求自己写，样式写在当前页面
    -->
    <view class="action-list">
        <view class="action-item">
            item1
        </view>
        <view class="action-item">
            item2
        </view>
        <view class="action-item">
            item3
        </view>
       
    </view>
</ActionSheet>
```



### 头像显示组件

路径：components/Avatar/Avatar

#### Attributes

|     参数     |                          说明                           |  类型   | 默认值 |
| :----------: | :-----------------------------------------------------: | :-----: | :----: |
|   topImage   | 头像的路径，没有值的话会默认使用<open-type>引入微信头像 | String  |  ' '   |
|    isLook    |                       是否只查看                        | Boolean | false  |
|    width     |                          宽度                           | Number  |  250   |
|    height    |                          高度                           | Number  |  250   |
| borderRadius |                 圆角，非百分比要带单位                  | String  |  50%   |

#### Event

| 事件名称 |     说明     | 回调参数 |
| :------: | :----------: | :------: |
|  change  | 选择图片成功 | 临时路径 |



### 头像裁切组件

"\<ImageCropper>\</ImageCropper>"

文档：https://github.com/wx-plugin/image-cropper