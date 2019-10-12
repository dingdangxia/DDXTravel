import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Detail from './views/detail.vue'
import Splendid from './views/splendid.vue'
import Dingzhi from '@/views/dingzhi.vue'
import Like from './views/like.vue'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/internal',
      name: 'internal',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Internal.vue')
    },
    {
      path: "/detail",
      name: "detail",
      component: Detail,
      children:[
        {
          path: '/',
          component:Like
        },
        {
          path: 'splendid',
          component:Splendid
        },
      ]
    }
  ]
})
