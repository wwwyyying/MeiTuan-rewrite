/*
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-03 19:19:09
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-03 19:38:36
 */ 
import Router from 'koa-router'
import Order from '../dbs/models/order'

import Cart from '../dbs/models/cart'
import md5 from 'crypto-js'

const router = new Router({prefix: '/order'})

router.post('/createOrder', async(ctx, next) => {
  const {id, price, count} = ctx.request.body

  const time = Date()
  const orderID = md5(Math.random() * 1000 + time).toString()

  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: -1,
      msg: '请登录'
    }
  } else {
    const findCart = await Cart.findOne({cartNo: id})
    const order = new Order({
      id: orderID,
      count,
      tatal: price * count,
      time,
      user: ctx.session.passport.user,
      name: findCart.detail[0].name,
      imgs: findCart.detail[0].imgs,
      status: 0
    })

    try{
      const result = await order.save()
      if (result) {
        await findCart.remove()
        ctx.body = {
          code: 0,
          id: orderID
        }
      } else {
        ctx.body = {
          code: -1
        }
      }
    } catch (e) {
      ctx.body = {
        code: -1
      }
    }
  }
})

//获取订单
router.post('/getOrders', async(ctx, next) => {
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: -1,
      list: [],
      msg: '请登录'
    }
  } else {
    try {
      const result = await Order.find()
      if (result) {
        ctx.body = {
          code: 0,
          list: result
        }
      } else {
        ctx.body = {
          code: -1
        }
      }
    } catch (e) {
      ctx.body = {
        code: -1,
        list: []
      }
    }
  }
})

module.exports = router