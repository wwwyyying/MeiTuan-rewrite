<!--
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-02 15:28:14
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-03 15:44:17
--> 
<template>
  <div
    :id="id"
    :style="{width:width+'px',height:height+'px',margin:'34px auto'}"
    class="m-map"/>
</template>

<script>
export default {
  props: {
    width: {
      type:Number,
      default:300
    },
    height: {
      type:Number,
      default:300
    },
    point: {
      type:Array,
      default(){
        return [116.46,39.92]
      }
    }
  },
  data() {
    return {
      id: `map`,
      key: '9c71c271a7dda7fbacade507fa981758'
    }
  },
  watch: {
    point: function (val, old) {    
        this.map.setCenter(val)
        this.marker.setPosition(val)
    }
  },
  mounted() {
    // 因为高德地图的异步加载要用 window 对象，所以这里我们不能SSR（服务端没window对象）。所以写在不被SSR的mounted
    let self = this
    self.id = `map${Math.random().toString().slice(4, 6)}`

    // 这个回调函数名是自己起的，不一定要跟高德文档的一样是onload
    window.onmaploaded = () => {
      let map = new window.AMap.Map(self.id, {
        resizeEnable: true,
        zoom: 11,
        center: self.point
      })
      self.map = map
      window.AMap.plugin('AMap.ToolBar', () => {
        let toolbar = new window.AMap.ToolBar()
        map.addControl(toolbar)
        let marker = new window.AMap.Marker({
          icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
          position: self.point
        })
        self.marker = marker
        marker.setMap(map)
      })
    }
    // 这个url最后的回调函数名称不要写错
    const url = `https://webapi.amap.com/maps?v=1.4.10&key=${self.key}&callback=onmaploaded`
    let jsapi = document.createElement('script')
    jsapi.charset = 'utf-8'
    jsapi.src = url
    document.head.appendChild(jsapi)
  },
}
</script>
