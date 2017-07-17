import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/Pages/Page'
import Login from  '@/Pages/Login'
import Share from '@/Pages/Share'
import Every from '@/Pages/Every'
import Category from  '@/Pages/Category'
import Details from  '@/Pages/Details'
Vue.use(Router)

export default new Router({
  routes: [
    {
     path: '/',
      name: 'page',
      component: Page
    },
      {
          path:'/login',
          component:Login
      },
      {
          path:'/share',
          component:Share
      },
      {
          path:'/every',
          component:Every
      },
      {
          path:'/category',
          component:Category
      },
      {
          path:'/details',
          component:Details
      }
  ]
})
