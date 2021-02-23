import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/industryInfo',
    name: 'IndustryInfo',
    component: () => import( /* webpackChunkName: "industryInfo" */ '../views/IndustryInfo.vue')
  },
  {
    path: '/industryInfoDetail/:id',
    name: 'IndustryInfoDetail',
    component: () => import( /* webpackChunkName: "industryInfoDetail" */ '../views/IndustryInfoDetail.vue')
  },
  {
    path: '/about/company',
    name: 'Company',
    component: () => import( /* webpackChunkName: "about" */ '../views/Company.vue')
  },
  {
    path: '/about/team',
    name: 'Team',
    component: () => import( /* webpackChunkName: "team" */ '../views/Team.vue')
  },
  {
    path: '/joinUs',
    name: 'JoinUs',
    component: () => import( /* webpackChunkName: "joinUs" */ '../views/JoinUs.vue')
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import( /* webpackChunkName: "service" */ '../views/Service.vue'),
    children: [{
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
      {
        path: 'RTSM',
        name: 'RTSM',
        component: () => import('../components/service/RTSM.vue')
      },
    ]
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import( /* webpackChunkName: "about" */ '../views/Contact.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router