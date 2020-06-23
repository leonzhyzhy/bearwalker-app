import Vue from 'vue'
import Vuex from 'vuex'
import news from './News'
import Detail from './Detail'
import shop from './Shop'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    news,
    Detail,
    shop
  }
})
