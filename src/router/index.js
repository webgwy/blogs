import Vue from 'vue'
import Router from 'vue-router'
import articlelist from '@/components/articlelist'
import favorite from '@/components/favorite'

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
      path: '*',
      redirect: "/articlelist"
    }
  ]
})
