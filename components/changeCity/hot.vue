<!--
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-02 08:03:05
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-02 20:16:41
--> 
<template>
  <div class="m-hcity">
    <dl>
      <dt>热门城市</dt>
      <nuxt-link tag="dd" to="/" v-for="item in list" :key="item.id">{{item.name==='市辖区'?item.province:item.name}}</nuxt-link>
    </dl>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  async mounted () {
    let {status, data: {hots}} = await this.$axios.get('/geo/hotCity')
    if (status===200) {
      this.list = hots
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/css/changeCity/hot.scss"
</style>