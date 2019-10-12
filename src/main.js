import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'swiper/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import axios from 'axios';
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
import { Grid, GridItem } from 'vant';
Vue.use(Grid).use(GridItem);
// 底部导航
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);
import './assets/css/detail.css'
import { Pagination } from 'vant';
Vue.use(Pagination);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')