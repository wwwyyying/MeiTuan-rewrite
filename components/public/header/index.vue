<!--
 * @Description:
 * @version:
 * @Author: YoungW
 * @Date: 2020-06-30 14:34:03
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-03 20:38:46
-->
<template>
  <div class="m-header">
    <el-row>
      <el-col>
        <top-bar />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <search-bar />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import topBar from './topbar'
import searchBar from './searchbar'
export default {
  components: {
    topBar,
    searchBar
  }
}
</script>

<style lang="scss">
  @import "@/assets/css/public/header/index.scss";
  @import "@/assets/css/public/layout.scss";
  @import "@/assets/css/public/header/search.scss";
  @import "@/assets/css/public/header/topbar.scss";
</style>
