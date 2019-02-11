import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login/login.vue')
    },
    {
      path: '/',
      name:'index',
      component: () => import('./views/Index/Index.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('./views/Home/Home.vue')
        },
        {
          path: '/accountadd',
          name: 'accountadd',
          component: () => import('./views/Accountadd/Accountadd.vue')
        },
        {
          path: '/accountmanagement',
          name: 'accountmanagement',
          component: () => import('./views/Accountmanagement/Accountmanagement.vue')
        },
        {
          path: '/Changepwd',
          name: 'Changepwd',
          component: () => import('./views/Changepwd/Changepwd.vue')
        },
        {
          path: '/goodsadd',
          name: 'goodsadd',
          component: () => import('./views/Goodsadd/Goodsadd.vue')
        },
        {
          path: '/salestatistics',
          name: 'salestatistics',
          component: () => import('./views/Salestatistics/Salestatistics.vue')
        },
        {
          path: '/goodsmanage',
          name: '/goodsmanage',
          component: () => import('./views/Goodsmanage/Goodsmanage.vue')
        },

      ]
    },

  ]
})
