<!--
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-03 14:37:48
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-03 15:24:18
--> 
<template>
  <div class="m-crumbs">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{path: '/'}">{{$store.state.geo.position.city.replace('市','')}}美团</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path: '/'}">{{$store.state.geo.position.city.replace('市','')}}{{keyword}}</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">{{$store.state.geo.position.city.replace('市','')}}{{type}}</a></el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  props: {
    keyword: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  }
}
</script>
