/*
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-06-30 22:01:27
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-01 11:28:37
 */ 
// import axios from 'axios'
const axios = require('axios')
const instance = axios.create({
  baseURL: `http://${process.env.HOST || 'localhost'}:${process.env.PORT||3000}`,
  timeout: 2000,
  headers: {

  }
})

module.exports = instance