/*
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-01 15:34:50
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-01 15:35:13
 */ 
const state = () => ({
  position: {}
})

const mutations = {
  setPosition(state, val) {
    state.position = val
  }
}

const actions = {
  setPostion: ({
    commit
  }, position) => {
    commit('setPosition', position)
  }
}

module.exports = {
  namespaced: true,
  state,
  mutations,
  actions
}