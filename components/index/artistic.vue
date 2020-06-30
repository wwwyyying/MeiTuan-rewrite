<!--
 * @Description:
 * @version:
 * @Author: YoungW
 * @Date: 2020-06-30 18:41:23
 * @LastEditors: YoungW
 * @LastEditTime: 2020-06-30 19:32:21
-->
<template>
  <section class="m-istyle">
    <dl @mouseover="over">
      <dt>有格调</dt>
      <dd :class="{active:kind==='all'}" kind="all" keyword="景点">全部</dd>
      <dd :class="{active:kind==='part'}" kind="part" keyword="美食">约会聚餐</dd>
      <dd :class="{active:kind==='spa'}" kind="spa" keyword="丽人">丽人SPA</dd>
      <dd :class="{active:kind==='movie'}" kind="movie" keyword="电影">电影演出</dd>
      <dd :class="{active:kind==='travel'}" kind="travel" keyword="旅游">品质出游</dd>
    </dl>
    <ul class="ibody">
      <li v-for="item in cur" :key="item.title">
        <el-card :body-style="{padding: '0px'}" shadow="never">
          <img :src=item.img class="image">
          <ul class="cbody">
            <li class="title">{{item.title}}</li>
            <li class="pos">{{item.pos}}</li>
            <li class="price">￥<em>{{item.price}}</em></li>
          </ul>
        </el-card>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data () {
    return {
      kind: 'all',
      list: {
        all: [{
          title: '丰泽园饭店（王府井店）',
          img: '//p0.meituan.net/msmerchant/c08c616aa835bc7cebdc3bd17184afef312214.jpg@368w_208h_1e_1c',
          pos: '2人自选套餐，提供免费WiFi',
          price: 248
        }, {
          title: '中央电视塔空中观景旋转餐厅',
          img: '//p1.meituan.net/msmerchant/7776f22c9d6fd0413b7e52441b3f74557386836.jpg@368w_208h_1e_1c',
          pos: '午餐+观光',
          price: 248
        }, {
          title: '北京饭店诺金东33餐厅',
          img: '//p1.meituan.net/poi/697cf6a6e1785559a7bb31d0bf03c649110592.jpg@368w_208h_1e_1c',
          pos: '桌餐C，建议8-10人使用，可免费使用包间',
          price: 5000
        }, {
          title: '丰泽园饭店（王府井店）',
          img: '//p0.meituan.net/msmerchant/c08c616aa835bc7cebdc3bd17184afef312214.jpg@368w_208h_1e_1c',
          pos: '2人自选套餐，提供免费WiFi',
          price: 248
        }, {
          title: '中央电视塔空中观景旋转餐厅',
          img: '//p1.meituan.net/msmerchant/7776f22c9d6fd0413b7e52441b3f74557386836.jpg@368w_208h_1e_1c',
          pos: '午餐+观光',
          price: 248
        }, {
          title: '北京饭店诺金东33餐厅',
          img: '//p1.meituan.net/poi/697cf6a6e1785559a7bb31d0bf03c649110592.jpg@368w_208h_1e_1c',
          pos: '桌餐C，建议8-10人使用，可免费使用包间',
          price: 5000
        }],
        part: [],
        spa: [],
        movie: [],
        travel: []
      }
    }
  },
  computed: {
    cur () {
      return this.list[this.kind]
    }
  },

}
</script>

<style lang="scss">
  @import "@/assets/css/index/artistic.scss";
</style>
