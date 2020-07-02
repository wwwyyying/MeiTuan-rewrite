/*
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-02 11:31:08
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-02 13:19:59
 */ 
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Category = new Schema({
  city: {
    type: String
  },
  types: {
    type: Array,
    require: true
  },
  areas:{
    type:Array,
    require:true
  }
})

module.exports = mongoose.model('Cate', Category)
