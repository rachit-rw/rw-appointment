import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/advisor',
      name: 'advisor',
      // route level code-splitting
      // this generates a separate chunk (advisor.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "advisor" */ './views/Advisor.vue')
    },
    {
      path: '/webrtc/:type',
      name: 'webrtc',
      component: () => import(/* webpackChunkName: "webrtc" */ './views/Webrtc.vue')
    }
  ]
})
