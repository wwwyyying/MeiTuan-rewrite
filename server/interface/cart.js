/*
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-03 17:08:19
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-03 17:17:01
 */ 
const Router = require('koa-router')
const axios = require('./utils/axios')
const Cart = require('../dbs/models/cart')
const md5 = require('crypto-js/md5')

let router = new Router({prefix: '/cart'})

//新建购物车
router.post('/create', async(ctx, next) => {
  //验证是否登录
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: -1,
      msg: '请登录'
    }
  } else {
    let time = Date()

    let cartNo = md5(Math.random() * 1000 + time).toString()

    let {params:{id, detail}} = ctx.request.body
    let cart = new Cart({id, cartNo, time, user:ctx.session.passport.user, detail})
    let result = await cart.save()
    if (result) {
      ctx.body = {
        code: 0,
        msg: '',
        id: cartNo
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '购物车创建失败'
      }
    }
  }
})

router.post('/getCart', async(ctx, next) => {
  let {id} = ctx.query.body
  try{
    let result = await Cart.findOne({cartNo: id})
    ctx.body = {
      code: 0,
      data: result ? result.detail[0] : {}
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      data: {}
    }
  }
})

module.exports = router