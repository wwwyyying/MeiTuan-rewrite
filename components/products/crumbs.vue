<!--
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-02 10:20:13
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-02 11:27:00
--> 
<template>
  <el-breadcrumb separator-class="el-icon-arrow-right" class="m-crumbs">
    <el-breadcrumb-item :to="{ path: '/' }">{{$store.state.geo.position.city.replace('市', '')}}美团</el-breadcrumb-item>
    <el-breadcrumb-item><a href="/">{{$store.state.geo.position.city.replace('市', '')}}{{decodeURIComponent(keyword)}}</a></el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  props: {
    keyword: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>