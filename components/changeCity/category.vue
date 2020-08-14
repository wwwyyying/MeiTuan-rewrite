<!--
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-02 08:14:46
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-02 21:40:31
--> 
<template>
  <div class="">
    <dl class="m-category">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="item in list" :key="item">
        <a :href="'#city-'+item">{{item}}</a>
      </dd>
    </dl>
    <dl v-for="item in block" :key="item.title" class="m-category-section">
      <dt :id="'city-'+item.title">{{item.title}}</dt>
      <dd>
        <span v-for="c in item.city" :key="c" @click="changeCity(c)">{{c}}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
import pyjs from 'js-pinyin'
export default {
  data () {
    return {
      list: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      block: []
    }
  },
  async mounted () {
    let self = this
    let blocks = []
    let {status, data: {city}} = await self.$axios.get('/geo/city')
    if (status===200) {
      let p
      let c
      let d = {}
      city.forEach(item => {
        p = pyjs.getFullChars(item.name).toLocaleLowerCase().slice(0, 1)
        c = p.charCodeAt(0)
        if (c >96 && c<123) {
          if (!d[p]) {
            d[p] = []
          } 
          d[p].push(item.name)
        }
      })
      for(let [k, v] of Object.entries(d)) {
        blocks.push({
          title: k.toUpperCase(),
          city: v
        })
      }

      blocks.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0))
      self.block = blocks
    }
  },
  methods: {
    async changeCity (cityItem) {
      //更新城市状态
      let self = this
      let {status, data: { city}} = await self.$axios.get('/geo/city')
      
      if (status===200) {
        city.forEach(item => {
          // console.log(item.name)
          // console.log(cityName)
          if(item.name === cityItem) {
            const province = item.province
            const city = cityItem
            // console.log(city, province)
            
            this.$store.commit('geo/setPosition', status === 200 ?  { city, province } : { city: '', province: '' })
    
          }
        })
      }

      //更新热门搜索状态
      // console.log(cityItem)
      // let {status: status2, data: {result}} = await self.$axios.get('/search/hotPlace', {
      //   params: {
      //     city: cityItem.replace('市', '')
      //   }
      // })
      

      // this.$store.commit('home/setHotPlace', status2===200? result : [])

      this.$router.push("/")
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/css/changeCity/category.scss";
  span:hover {
    cursor: pointer;
  }
</style>