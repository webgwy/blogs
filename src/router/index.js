import Vue from 'vue'
import Router from 'vue-router'
import articlelist from '@/components/articlelist'
import favorite from '@/components/favorite'
import login from '@/components/login'
import addarticle from '@/components/addarticle'

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
      path: '/addarticle',
      name: 'addarticle',
      component: addarticle
    },
    {
      path: '*',
      redirect: "/articlelist"
    }
  ]
})
