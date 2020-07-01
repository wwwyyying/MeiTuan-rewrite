/*
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-01 19:34:56
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-01 20:45:32
 */ 
const Router = require('koa-router')
const axios = require('./utils/axios')

let router = new Router({prefix: '/search'})

router.get('/top', async (ctx, next) => {
  let {status, data: {top}} = await axios.get('http://cp-tools.cn/search/top', {
    params: {
      input: ctx.query.input,
      city: ctx.query.city
    }
  })
  ctx.body = {top: status===200? top: []}
})

router.get('/hotPlace', async(ctx, next) => {
  let city = ctx.store?ctx.store.geo.position.city:ctx.query.city
  let {status, data: {result}} = await axios.get('http://cp-tools.cn/search/hotPlace', {
    params: {
      city
    }
  })
  ctx.body = {result: status===200? result: []}
})

router.get('/resultsByKeywords', async(ctx, next) => {
  const {city, keyword} = ctx.query
  let {status, data: {count, pois}} = await axios.get('http://cp-tools.cn/search/resultsByKeywords', {
    params: {
      city,
      keyword
    }
  })
  ctx.body = {
    count: status===200? count: 0,
    pois: status===200? pois: []
  }
})

module.exports = router