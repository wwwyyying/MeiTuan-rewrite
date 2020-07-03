/*
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-03 16:41:31
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-03 17:03:49
 */ 
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Cart = new Schema({
  id: {
    type: String,
    required: true
  },
  detail: {
    type: Array,
    required: true
  },
  cartNo: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Cart', Cart)