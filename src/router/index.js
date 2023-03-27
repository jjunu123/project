import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding/string',
    name: 'DataBindingStringView',
    component: () => import(/* webpackChunkName: "databinding" webpackPrefetch:true */ '../views/1_databinding/DataBindingStringView.vue')
  },
  {
    path: '/databinding/html',
    name: 'DataBindingHtmlView',
    component: () => import(/* webpackChunkName: "databinding" webpackPrefetch:true */ '../views/1_databinding/DataBindingHtmlView.vue')
  },
  {
    path: '/databinding/input',
    name: 'DataBindingInputView',
    component: () => import(/* webpackChunkName: "databinding" webpackPrefetch:true */ '../views/1_databinding/DataBindingInputView.vue')
  },
  {
    path: '/taskview',
    name: 'TaskView',
    component: () => import(/* webpackChunkName: "databinding" webpackPrefetch:true */ '../views/TaskView.vue')
  },
  {
    path: '/mainview',
    name: 'MainView',
    component: () => import(/* webpackChunkName: "databinding" webpackPrefetch:true */ '../views/MainView.vue')
  },
  {
    path: '/menubarview',
    name: 'MenuBarView',
    component: () => import(/* webpackChunkName: "databinding" webpackPrefetch:true */ '../views/MenuBarView.vue')
  },
  {
    path: '/topview',
    name: 'TopMenueBarView',
    component: () => import(/* webpackChunkName: "databinding" webpackPrefetch:true */ '../views/TopMenueBarView.vue')
  },
  {
    path: '/calenderview',
    name: 'CalenderView',
    component: () => import(/* webpackChunkName: "databinding" webpackPrefetch:true */ '../views/CalenderView.vue')
  },
  {
    path: '/memoview',
    name: 'MemoView',
    component: () => import(/* webpackChunkName: "databinding" webpackPrefetch:true */ '../views/MemoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
