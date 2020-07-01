/*
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-01 15:01:57
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-01 19:46:18
 */ 
const Router = require('koa-router')
const axios = require('./utils/axios')
// const Province = require('../dbs/models/province')

let router = new Router({prefix: '/geo'})

router.get('/getPosition', async (ctx, next) => {
  let { status, data: {province, city}} = await axios.get('http://cp-tools.cn/geo/getPosition')

  if (status === 200) {
    ctx.body = {
      province,
      city
    }
  } else {
    ctx.body = {
      province: '',
      city: ''
    }
  }
})

//获取省份
router.get('/province', async (ctx, next) => {
  let {status, data: {province}} = await axios.get('http://cp-tools.cn/geo/province')
  ctx.body = {
    province: status === 200 ? province : []
  }
})

router.get('/province/:id', async(ctx, next) => {
  let {status, data: {city}} = await axios.get(`http://cp-tools.cn/geo/province/${ctx.params.id}`)
  ctx.body = {city: status === 200 ? city : []}
})

//获取城市
router.get('/city', async(ctx, next) => {
  let {status, data: {city}} = await axios.get('http://cp-tools.cn/geo/city')
  ctx.body = {city: status ===200? city: []}
})

//获取热门城市
router.get('/hotCity', async(ctx, next) => {
  let {status, data: {hotCity}} = await axios.get('http://cp-tools.cn/geo/hotCity')
  ctx.body = {hotCity: status===200? hotCity : []}
})


//获取首页菜单
router.get('/menu', async (ctx, next) => {
  let {status, data: {menu}} = await axios.get('http://cp-tools.cn/geo/menu')
  if (status === 200) {
    ctx.body = {
      menu
    }
  } else {
    ctx.body = {
      menu: []
    }
  }
})

module.exports = router