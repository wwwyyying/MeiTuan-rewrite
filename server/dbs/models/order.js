/*
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-03 17:05:14
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-03 17:05:37
 */ 
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Order = new Schema({
  id: {
    type: String,
    required: true
  },
  user:{
    type:String,
    required:true
  },
  time:{
    type:String,
    required:true
  },
  total:{
    type:Number,
    required:true
  },
  imgs:{
    type:Array,
    required:true
  },
  name:{
    type:String,
    required:true
  },
  status:{
    type:Number,
    required:true
  }
})

module.exports = mongoose.model('Order', Order)