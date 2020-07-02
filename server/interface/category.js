/*
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-02 11:18:14
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-02 13:23:20
 */ 
const Router = require('koa-router')
const axios = require('./utils/axios')
// const Category = require('../dbs/models/category')

let router = new Router({prefix: '/category'})

router.get('/crumbs', async (ctx, next) => {
  let { status, data: {areas, types}} = await axios.get('http://cp-tools.cn/categroy/crumbs', {
    params: {
      city: ctx.query.city.replace('市', '') || '北京'
    }
  })

  if (status === 200) {
    ctx.body = {
      areas,
      types
    }
  } else {
    ctx.body = {
      areas: [],
      types: []
    }
  }

  // let result = await Category.findOne({city: ctx.query.city.replace('市', '') || '北京'})
  // // console.log(result)
  // if (result) {
  //   ctx.body = {
  //     areas: result.areas,
  //     types: result.types
  //   }
  // } else {
  //   ctx.body = {
  //     areas: [],
  //     types: []
  //   }
  // }
})

module.exports = router