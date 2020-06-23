import axios from 'axios'
// import { getClass1 } from '../Axios/axiosRequest'
const state = {
  limitedList: [],
  clothList: [],
  shoesList: [],
  balanceList: []
}
const mutations = {
  changeBalanceList (state, list) {
    state.balanceList = list
  },
  changeLimitedList (state, list) {
    state.limitedList = list
  },
  changeClothList (state, list) {
    state.clothList = list
  },
  changeShoesList (state, list) {
    state.shoesList = list
  }
}
const actions = {
  getBalanceList ({ commit }) {
    axios({
      url: 'getclass',
      params: {
        classname: '平衡板'
      },
      method: 'post'
    }).then((res) => {
      commit('changeBalanceList', res.data.list)
    }).catch((error) => {
      console.log(error)
    })
  },
  getShoesList ({ commit }) {
    axios({
      url: 'getclass',
      params: {
        classname: '鞋子'
      },
      method: 'post'
    }).then((res) => {
      commit('changeShoesList', res.data.list)
    }).catch((error) => {
      console.log(error)
    })
  },
  getClothList ({ commit }) {
    axios({
      url: 'getclass',
      params: {
        classname: '衣服'
      },
      method: 'post'
    }).then((res) => {
      commit('changeClothList', res.data.list)
    }).catch((error) => {
      console.log(error)
    })
  },
  getLimitedList ({ commit }) {
    axios({
      url: 'getclass',
      params: {
        classname: '限量版'
      },
      method: 'post'
    }).then((res) => {
      commit('changeLimitedList', res.data.list)
    }).catch((error) => {
      console.log(error)
    })
  }
}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
