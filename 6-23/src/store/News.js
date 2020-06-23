import axios from 'axios'
const state = {
  newsList: [],
  total: 3
}
const mutations = {
  changeNewsList (state, list) {
    state.newsList = list
  },
  changeTotal (state, total) {
    state.total = total
  }
}
const actions = {
  getNewsList ({ commit }, data) {
    axios({
      url: 'getnews',
      params: data,
      method: 'get'
    }).then((res) => {
      commit('changeNewsList', res.data.list)
      commit('changeTotal', res.data.total)
    }).catch((error) => {
      console.log(error)
    })
  }
}
const getters = {

}
export default {
  state,
  getters,
  actions,
  mutations
}
