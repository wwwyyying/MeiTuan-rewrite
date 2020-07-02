<!--
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-02 07:27:48
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-02 08:18:27
--> 
<template>
  <div class="page-changeCity">
    <el-row :span="24">
      <i-select/>
    </el-row>
    <el-row :span="24">
      <hot />
    </el-row>
    <el-row :span="24">
      <category />
    </el-row>
  </div>
</template>

<script>
import iSelect from '@/components/changeCity/iselect'
import Hot from '@/components/changeCity/hot'
import Category from '@/components/changeCity/category'
export default {
  components: {
    iSelect,
    Hot,
    Category
  }
}
</script>

<style lang="scss">

</style>