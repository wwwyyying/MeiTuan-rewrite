<!--
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-02 07:32:44
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-02 21:36:01
--> 
<template>
  <div class="m-iselect">
    <span class="name">按省份选择：</span>
    <el-select v-model="pvalue" placeholder="省份">
    <el-option
      v-for="item in province"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

  <el-select v-model="cvalue" placeholder="城市" :disabled="!city.length">
    <el-option
      v-for="item in city"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;直接搜索：

  <el-autocomplete
    v-model="input"
    :fetch-suggestions="querySearchAsync"
    placeholder="请输入城市中文或拼音"
    @select="handleSelect"
  ></el-autocomplete>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  data () {
    return {
      province: [],
      pvalue: '',
      city: [],
      cvalue: '',
      input: '',
      cities: ''
    }
  },
  watch : {
    async pvalue (newPvalue) {
      let self = this
      let {status, data: {city}} = await self.$axios.get(`/geo/province/${newPvalue}`)
      if (status===200) {
        self.city = city.map(item => {
          return {
            value: item.id,
            label: item.name
          }
        })
        self.cvalue = ''
      }
    }
  },
  async mounted () {
    let self = this
    let {status, data: {province}} = await self.$axios.get('/geo/province')
    if (status === 200) {
      self.province = province.map(item => {
        return {
          value: item.id,
          label: item.name
        }
      })
    }
  },
  methods: {
    querySearchAsync:_.debounce(async function(query, cb){
      let self = this
      if (self.cities.length) {
        cb(self.cities.filter(item => item.value.indexOf(query) > -1))
      } else {
        let {status, data: {city}} = await self.$axios.get('/geo/city')
        if (status===200) {
          self.cities = city.map(item => {
            return {
              value: item.name
            }
          })
          cb(self.cities.filter(item => item.value.indexOf(query) > -1))
        } else {
          cb([])
        }
      }
    }, 200),
    async handleSelect (cityItem) {

      //更新城市状态
      let self = this
      let {status, data: { city}} = await self.$axios.get('/geo/city')
      
      if (status===200) {
        city.forEach(item => {
          // console.log(item.name)
          // console.log(cityName)
          if(item.name === cityItem.value) {
            const province = item.province
            const city = cityItem.value
            // console.log(city, province)
            
            this.$store.commit('geo/setPosition', status === 200 ?  { city, province } : { city: '', province: '' })
    
          }
        })
      }

      //更新热门搜索状态
      console.log(cityItem.value)
      let {status: status2, data: {result}} = await self.$axios.get('/search/hotPlace', {
        params: {
          city: cityItem.value.replace('市', '')
        }
      })

      this.$store.commit('home/setHotPlace', status2===200? result : [])

      this.$router.push("/")
            
    }
  },
  
}
</script>

<style lang="scss">
  @import "@/assets/css/changeCity/iselect.scss";
</style>