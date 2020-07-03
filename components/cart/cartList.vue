<!--
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-03 16:01:29
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-03 16:07:37
--> 
<template>
  <el-table :data="cartData" style="width:980px">
    <el-table-column label="项目" width="502" prop="title"></el-table-column>
    <el-table-column label="单价" width="132" prop="price"></el-table-column>
    <el-table-column label="数量" width="212" prop="count">
      <template>
        <el-input-number v-model="scope.row.count" :min="0" :max="9999"></el-input-number>
      </template>
    </el-table-column>
    <el-table-column label="总价">
      <template slot-scope="scope">{{scope.row.count * scope.row.price}}</template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    cartData : {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style>

</style>