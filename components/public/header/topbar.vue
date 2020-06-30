<!--
 * @Description:
 * @version:
 * @Author: YoungW
 * @Date: 2020-06-30 13:42:30
 * @LastEditors: YoungW
 * @LastEditTime: 2020-06-30 14:39:58
-->
<template>
  <el-row :gutter="0" class="m-header">
    <el-col :span="5">
      <geo />
    </el-col>

    <el-col :span="5">
      <user />
    </el-col>

    <el-col :span="14">
      <nav-bar />
    </el-col>
  </el-row>
</template>

<script>
import Geo from './geo'
import User from './user'
import NavBar from './nav'
export default {
  components: {
    Geo,
    User,
    NavBar
  }
}
</script>

<style lang="scss">
 @import "@/assets/css/public/layout.scss";
 @import "@/assets/css/public/header/index.scss";

</style>
