import axios from 'axios'
const state = {
  DetailList: []
}
const mutations = {
  changeDetailList (state, list) {
    state.DetailList = list
  }
}
const actions = {
  getDetailList ({ commit }, data) {
    axios({
      url: 'getgoods',
      params: data,
      method: 'post'
    }).then((res) => {
      commit('changeDetailList', res.data.list)
    }).catch((error) => {
      console.log(error)
    })
  }
}
const getters = {

}
export default {
  state,
  actions,
  mutations,
  getters
}
