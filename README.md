## 小程序组件



### ActionSheet组件

说明：小程序提供的wx.showActionSheet(Object object)不能满足多场景的需求，所以写了一个自定义的组件，可根据场景需求自定义内容。

路径：common/ActionSheet/ActionSheet

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

