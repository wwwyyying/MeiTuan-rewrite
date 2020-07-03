/*
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-03 16:44:18
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-03 17:03:39
 */ 
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const City = new Schema({
  id: {
    type: String,
    required: true
  },
  value: {
    type: Array,
    required: true
  }
})

module.exports = mongoose.model('city', City)