<!--
 * @Description:
 * @version:
 * @Author: YoungW
 * @Date: 2020-06-30 13:34:07
 * @LastEditors: YoungW
 * @LastEditTime: 2020-06-30 13:57:39
-->
<template>
  <div class="m-user">
    <template v-if="user">
      欢迎您，<span class="username">{{ user }}</span>
      [<nuxt-link to="/exit">退出</nuxt-link>]
    </template>
    <template v-else>
      <nuxt-link to="/login" class="login">立即登录</nuxt-link>
      <nuxt-link to="/register" class="register">注册</nuxt-link>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: ''
    }
  }
}
</script>

<style>

</style>
