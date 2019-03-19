import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Axxios from './views/axxios.vue'
import Checks from './views/checks.vue'
import mixgraph from './views/mixgraph.vue'

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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/Axxios',
      name:'Axxios',
      component:Axxios
    },
    {
      path:'/Checks',
      name:'Checks',
      component:Checks
    },
    {
      path:'/mixgraph',
      name:'mixgraph',
      component:mixgraph
    }
  ]
})
