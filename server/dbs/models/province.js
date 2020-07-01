/*
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-01 16:10:12
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-01 16:40:25
 */ 
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProvinceSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  value: {
    type: Array,
    required: true
  }
})

module.exports = mongoose.model('Province', ProvinceSchema)