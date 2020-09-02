
import axios from '../../assets/js/baseaxios'
import { resetRouter } from '../../router/index'

const state = {
  remember: null
}

// 申明同步方法
const mutations = {
  // 存用户数据
  getUserInfo (state, obj) {
    const obj2 = obj.value
    for (const i in obj2) {
      state[i] = obj2[i]
    }
  },
  // 清空token
  SET_TOKEN (state, token) {
    state.token = token
  },
  // 记住密码
  rememberFn (state, obj) {
    state.remember = obj
  }
}

// 申明异步方法
const actions = {
  // 登录接口
  login ({ commit, state }, obj) {
    return new Promise((resolve, reject) => {
      axios.post('/login', {
        params: {
          fuserName: obj.userName,
          fpassword: obj.passWord
        }
      }
      ).then((res) => {
        if (res.success) {
          // 登录成功后相关路由操作
          const items = res.items[0]
          commit({
            type: 'getUserInfo',
            value: items
          })
          commit({
            type: 'setExhibition',
            value: items.exhibition
          })
          console.log(items.exhibition)

          resolve(res)
        } else {
          reject(res)
        }
      })
    })
  },
  // 退出登录
  logout ({ commit }) {
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', '')
      commit('REST_ROUTER', [])
      commit('REST_EXHIBITION')
      window.clearVuexAlong(false, true)
      resetRouter()
      resolve()
    })
  }
}

export default {
  state,
  mutations,
  actions
}
