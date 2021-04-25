import { RouteRecordRaw } from 'vue-router'

export const asyncRouterMap: Array<RouteRecordRaw> = []

export const constantRouterMap: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/Test.vue')
  }
]
