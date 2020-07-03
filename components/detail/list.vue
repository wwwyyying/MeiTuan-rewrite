<!--
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-03 14:43:30
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-03 14:46:12
--> 
<template>
  <div class="m-detail-list">
    <ul>
      <li>{{list.filter(item => item.photos.length).length}}款套餐</li>
      <item v-for="(item, idx) in list" :key="idx" :meta="item"/>
    </ul>
  </div>
</template>

<script>
import Item from './item'
export default {
  components: {
    Item
  },
  props: {
    list: {
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