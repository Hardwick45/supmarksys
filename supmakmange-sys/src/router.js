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
        {
          path: '/vipnumadd',
          name: '/vipnumadd',
          component: () => import('./views/Vipnumadd/Vipnumadd.vue')
        },
        {
          path: '/vipnummanage',
          name: '/vipnummanage',
          component: () => import('./views/Vipnummanage/Vipnummanage.vue')
        },
        {
          path: '/incomingstatistics',
          name: '/incomingstatisticse',
          component: () => import('./views/Incomingstatistics/Incomingstatistics.vue')
        },
        {
          path: '/instockadd',
          name: '/instockadd',
          component: () => import('./views/Instockadd/Instockadd.vue')
        },
        {
          path: '/instockmanage',
          name: '/instockmanage',
          component: () => import('./views/Instockmanage/Instockmanage.vue')
        },
        {
          path: '/salelist',
          name: '/salelist',
          component: () => import('./views/Salelist/Salelist.vue')
        },
        {
          path: '/commodityout',
          name: '/commodityout',
          component: () => import('./views/Commodityout/Commodityout.vue')
        },
        {
          path: '/productreturn',
          name: '/productreturn',
          component: () => import('./views/Productreturn/Productreturn.vue')
        },
        {
          path: '/classificationmanage',
          name: '/classificationmanage',
          component: () => import('./views/Classificationmanage/Classificationmanage.vue')
        },
        {
          path: '/addcategory',
          name: 'addcategory',
          component: () => import('./views/Addcategory/Addcategory.vue')
        },

      ]
    },

  ]
})
