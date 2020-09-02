import Vue from 'vue'
import Vuex from 'vuex'

import menu from './modules/menu'
import createVuexAlong from 'vuex-along'
import userInfo from './modules/userInfo'
import newRouter from './modules/newRouter'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  plugins: [createVuexAlong({
    name: 'initAlone',
    local: {
      list: ['menu', 'userInfo', 'newRouter'],
      isFilter: true // 过滤list 数据， 将其他的存入 localStorage
    },
    session: {
      list: ['menu', 'userInfo'] // 保存 list 到 sessionStorage
    }
  })],
  modules: {
    menu,
    userInfo,
    newRouter
  },
  getters
})
