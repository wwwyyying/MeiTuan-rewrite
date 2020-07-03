<!--
 * @Description:
 * @version:
 * @Author: YoungW
 * @Date: 2020-06-30 13:33:41
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-03 20:35:49
-->
<template>
  <div class="m-geo">
    <i class="el-icon-location" />{{$store.state.geo.position.city}}
    <nuxt-link
      class="changeCity"
      to="/changeCity">
      切换城市
    </nuxt-link>
    热门：{{$store.state.home.hotPlace[0].name}}
  </div>
</template>

<script>
export default {

}
</script>

