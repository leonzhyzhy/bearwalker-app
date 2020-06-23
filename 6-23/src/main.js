import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import store from './store'
Vue.use(ElementUi, Swiper)
Vue.config.productionTip = false
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
