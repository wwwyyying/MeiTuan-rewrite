<!--
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-06-30 21:56:07
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-01 09:15:28
--> 
<template>
  <div class=""></div>
</template>

<script>
export default {
  layout: 'blank',
  middleware: async (ctx, next) => {
    let {status, data} = await ctx.$axios.get('/users/exit')
    if(status===200&&data&&data.code===0){
      window.location.href = '/'
    }
  }

}
</script>

<style>

</style>