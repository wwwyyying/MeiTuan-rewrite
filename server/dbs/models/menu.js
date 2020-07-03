/*
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-03 17:04:14
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-03 17:05:09
 */ 
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Menu = new Schema({
  menu: {
    type: Array,
    required: true
  }
})

module.exports = mongoose.model('menu', Menu)