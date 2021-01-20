import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/industryInfo',
    name: 'IndustryInfo',
    component: () => import(/* webpackChunkName: "industryInfo" */ '../views/IndustryInfo.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import(/* webpackChunkName: "service" */ '../views/Service.vue'),
    children: [
      {
        path: 'CTMS',
        name: 'CTMS',
        component: () => import('../components/service/CTMS.vue')
      },
      {
        path: 'eCOA',
        name: 'eCOA',
        component: () => import('../components/service/eCOA.vue')
      },
      {
        path: 'eConsent',
        name: 'eConsent',
        component: () => import('../components/service/eConsent.vue')
      },
      {
        path: 'EDC',
        name: 'EDC',
        component: () => import('../components/service/EDC.vue')
      },
    ]
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
