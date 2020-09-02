import getNewRouter from '../../assets/js/getRoute'
import { Page_404 } from '../../router/index'

const state = {
  newRouter: [], // 存放处理好的路由，页面刷新重新渲染
  topMenu: [],
  leftMenu: []
}
// 生成菜单
function Get_Menu (arr) {
  const topMenu = []
  const leftMenu = []
  arr.forEach(btn => {
    if (btn.meta && btn.meta.level) {
      switch (btn.meta.level) {
        case 'one':
          topMenu.push(btn)
          break
        case 'two':
          leftMenu.push(btn)
          break
      }
    }
  })
  return { topMenu, leftMenu }
}

// 申明同步方法
const mutations = {
  getNewRoute (state, permission) {
    const oldlist = permission // 后台返回的权限
    const list = getNewRouter(oldlist)
    const { topMenu, leftMenu } = Get_Menu(list)

    list.push(Page_404)
    state.newRouter = list
    state.topMenu = topMenu
    state.leftMenu = leftMenu
  },
  REST_ROUTER (state, arr) {
    state.newRouter = arr
  }
}

// 申明异步方法
const actions = {
  addNewRouter ({ commit, state }, permission) {
    return new Promise(resolve => {
      commit('getNewRoute', permission)
      resolve()
    })
  }
}

export default {
  state,
  mutations,
  actions
}
