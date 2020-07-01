/*
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-06-30 22:00:14
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-01 11:25:33
 */ 
// import mongoose from 'mongoose'
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('User', UserSchema)