<!--
 * @Description:
 * @version:
 * @Author: YoungW
 * @Date: 2020-06-30 13:34:13
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-03 20:43:54
-->
<template>
    <div class="m-nav">
        <ul class="nav">
            <li class="list">
                <nuxt-link to="/my">我的美团</nuxt-link>
                <dl>
                    <dd><nuxt-link to="/order">我的订单</nuxt-link></dd>
                    <dd><nuxt-link to="/order">我的收藏</nuxt-link></dd>
                    <dd><nuxt-link to="/order">抵用券</nuxt-link></dd>
                    <dd><nuxt-link to="/order">账户设置</nuxt-link></dd>
                </dl>
            </li>
            <li>
                <nuxt-link to="/order">手机APP</nuxt-link>
            </li>
            <li class="list bd">
                <nuxt-link to="/center">商家中心</nuxt-link>
                <dl>
                    <dd><nuxt-link to="/userCenter">登录商家中心</nuxt-link></dd>
                    <dd><nuxt-link to="/coop">我想合作</nuxt-link></dd>
                    <dd><nuxt-link to="/wap">免费手机开店</nuxt-link></dd>
                    <dd><nuxt-link to="/kaipiao">商家申请链开票</nuxt-link></dd>
                </dl>
            </li>
            <li class="list site">
                <nuxt-link to="/site">网站导航</nuxt-link>
                <div class="subContainer">
                    <dl class="hotel">
                        <dt>酒店旅游</dt>
                        <dd>国际机票</dd>
                        <dd>火车票</dd>
                        <dd>民宿</dd>
                        <dd>经济型酒店</dd>
                        <dd>主题酒店</dd>
                        <dd>商务酒店</dd>
                        <dd>公寓</dd>
                        <dd>豪华酒店</dd>
                        <dd>客栈</dd>
                        <dd>青年旅社</dd>
                        <dd>度假酒店</dd>
                        <dd>别墅</dd>
                        <dd>农家院</dd>
                        
                    </dl>
                    <dl class="food">
                        <dt>吃美食</dt>
                        <dd>烤鱼</dd>
                        <dd>特色小吃</dd>
                        <dd>烧烤</dd>
                        <dd>自助餐</dd>
                        <dd>火锅</dd>
                        <dd>代金券</dd>
                    </dl>
                    <dl class="movie">
                        <dt>看电影</dt>
                        <dd>热映电影</dd>
                        <dd>热映电影口碑榜</dd>
                        <dd>最受期待电影</dd>
                        <dd>国内票房榜</dd>
                        <dd>北美票房榜</dd>
                        <dd>电影排行榜</dd>
                    </dl>
                    <dl class="app">
                        <dt>手机应用</dt>
                        <dd>
                            <a href="#">
                                <img src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" alt="美团app">
                            </a>
                        </dd>
                        <dd>
                            <a href="#">
                                <img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png" alt="外卖app">
                            </a>
                        </dd>
                        <dd>
                            <a href="#">
                                <img src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png" alt="民宿app">
                            </a>
                        </dd>
                        <dd>
                            <a href="#">
                                <img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png" alt="点评app">
                            </a>
                        </dd>
                        <dd>
                            <a href="#">
                                <img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png" alt="猫眼app">
                            </a>
                        </dd>
                    </dl>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
}
</script>
<style lang='scss'>
    
</style>