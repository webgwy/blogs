import Vue from 'vue'
import Router from 'vue-router'
import articlelist from '@/components/articlelist'
import favorite from '@/components/favorite'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/articlelist',
      name: 'articlelist',
      component: articlelist
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: favorite
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '*',
      redirect: "/articlelist"
    }
  ]
})
