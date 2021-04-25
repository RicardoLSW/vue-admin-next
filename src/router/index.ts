import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRouterMap } from '../config/router.config'

export default createRouter({
  history: createWebHashHistory(),
  routes: constantRouterMap
})
