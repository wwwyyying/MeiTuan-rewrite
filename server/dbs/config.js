/*
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-06-30 22:00:28
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-01 11:23:20
 */ 
module.exports = {
  dbs: 'mongodb://127.0.0.1:27017/student',
  redis: {
    get host () {
      return '127.0.0.1'
    },
    get port () {
      return 6379
    }
  },
  smtp: {
    get host () {
      return 'smtp.qq.com'
    },
    get user () {
      return '958781934@qq.com'
    },
    get pass () {
      return 'zsdnfnintmgybahi'
    },
    get code () {
      return () => {
        return Math.random().toString(16).slice(2, 6).toUpperCase()
      }
    },
    get expire() {
      return () => {
        return new Date().getTime() + 60*60*1000
      }
    }
  }  
}