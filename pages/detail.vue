<!--
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-03 15:03:27
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-03 15:16:03
--> 
<template>
  <div class="page-detail">
    <el-row>
      <el-col :span="24">
        <crumbs  :keyword="keyword" :type="type"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <summ :meta="product" />
      </el-col>
    </el-row>
    <el-row class="m-title">
      <el-col :span="24">
        <h3>商家团购及优惠</h3>
      </el-col>
    </el-row>

    <!-- 登录拦截 -->
    <el-row v-if="canOrder || !login">
      <el-col :span="24">
         <list v-if="login" :list="list" />
         <div v-else class="deal-need-login">
           <img src="//p0.meituan.net/codeman/56a7d5abcb5ce3d90fc91195e5b5856911194.png" alt="登录查看">
           <span>请登录后查看详细团购优惠</span>
           <el-button type="primary" round>
            <a href="/login">立即登录</a>
           </el-button>
         </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Crumbs from '@/components/detail/crumbs'
import List from '@/components/detail/list'
import Summ from '@/components/detail/summary'
export default {
  components: {
    Crumbs,
    List,
    Summ
  },
  computed: {
    canOrder () {
      return this.list.filter(item => item.photos.length).length
    }
  },
  async asyncData (ctx) {
    let {keyword, type} = ctx.query
    let {status, data: {product, more:list, login}} = await ctx.$axios.get('/search/products', {
      params: {
        keyword,
        type,
        city: ctx.store.state.geo.position.city
      }
    })

    if (status === 200) {
      return {
        keyword,
        type,
        product,
        list,
        login
      }
    } else {
      return {
        keyword,
        type,
        product: {},
        list: [],
        login: false
      }
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/css/detail/index.scss";
</style>