<!--
 * @Description:
 * @version:
 * @Author: YoungW
 * @Date: 2020-06-29 21:14:33
 * @LastEditors: YoungW
 * @LastEditTime: 2020-06-30 17:03:16
-->
<template>
  <el-container class="layout-default">
    <el-header height="197px">
      <my-header />
    </el-header>
    <el-main>
      <Nuxt />
    </el-main>
    <el-footer height="100%">
      <my-footer />
    </el-footer>
  </el-container>
</template>

<script>
import MyHeader from '@/components/public/header/index.vue'
import MyFooter from '@/components/public/footer/index.vue'
export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>
