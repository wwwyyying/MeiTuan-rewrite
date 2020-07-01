/*
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-01 15:40:41
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-01 15:44:16
 */ 
const state = () => ({
  menu: [],
  hotPlace: []
})

const mutations = {
  setMenu(state, val) {
    state.menu = val
  },
  setHotPlace(state, val) {
    state.hotPlace = val
  }
}

const actions = {
  setMenu: ({
    commit
  }, menu) => {
    commit('setMenu', menu)
  },

  setHotPlace: ({
    commit
  }, hotPlace) => {
    commit('setHotPlace', hotPlace)
  }
}

module.exports = {
  namespaced: true,
  state,
  mutations,
  actions
}