import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

// 引入axios
import axios from 'axios'
Vue.prototype.$axios = axios


//引入swiper
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)　


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
