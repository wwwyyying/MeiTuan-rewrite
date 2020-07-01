/*
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-01 15:11:04
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-01 20:14:29
 */ 
const Vue = require('vue/dist/vue')
const Vuex = require('vuex')
const geo = require('./geo')
const home = require('./home')

// Vue.use(Vuex)

// const store = () => new Vuex.Store({
//   modules: {
//     geo,
//     home
//   },
//   actions: {
  //   async nuxtServerInit({
  //     commit
  //   }, {req, app}) {
  //     const {
  //       status,
  //       data: {
  //         province,
  //         city
  //       }
  //     } = await app.$axios.get('/geo/getPosition')
  //     commit('geo/setPosition', status===200? {city, province} : {city: '', province: ''})

  //     const {status: status2, data: {menu}} = await app.$axios.get('/geo/menu')
  //     commit('home/setMenu', status2===200? menu : [])
  //   }
  // }

// })

// module.exports = store

export const actions = {
  async nuxtServerInit({
    commit
  }, {req, app}) {
    const {
      status,
      data: {
        province,
        city
      }
    } = await app.$axios.get('/geo/getPosition')
    commit('geo/setPosition', status===200? {city, province} : {city: '', province: ''})

    const {status: status2, data: {menu}} = await app.$axios.get('/geo/menu')
    commit('home/setMenu', status2===200? menu : [])

    const {status: status3, data: {result}} = await app.$axios.get('/search/hotPlace', {
      params: {
        city: app.store.state.geo.position.city.replace('市','')
      }
    })
    commit('home/setHotPlace', status3===200?result:[])
  }
}