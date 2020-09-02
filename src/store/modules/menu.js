
const state = {
  active_menu: '', // 页面导航，默认在首
  exhibitionName: '', // 展会名称
  exhibitionId: '' // 展会id
}

// 申明同步

const mutations = {
  acMenu (state, path) {
    state.active_menu = path
  },
  setExhibition (state, obj) {
    const val = obj.value
    console.log(val)

    if (!val) return
    state.exhibitionName = val.fexhibitionName
    state.exhibitionId = val.fexhibitionId
  },
  REST_EXHIBITION (state) {
    state.exhibitionName = ''
    state.exhibitionId = ''
  }
}
// 异步
const actions = {
  setAcMenu ({ commit, store }, to) {
    const path = to.path
    commit('acMenu', path)
  }
}

export default {
  state,
  mutations,
  actions
}
