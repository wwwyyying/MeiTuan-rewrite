<!--
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-03 17:24:15
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-03 17:26:19
--> 
<template>
  <span>
    <button @click="decrement">-</button>
    {{nums}}
    <button @click="increment">+</button>
  </span>
</template>

<script>
export default {
  props: {
    nums: {
      type: Number,
      default: 0
    }
  },
  methods: {
    decrement () {
      this.$emit('decre')
    },
    increment () {
      this.$emit('incre')
    }
  }
}
</script>

<style>

</style>