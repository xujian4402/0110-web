
import Vue from 'vue'
import VueRouter from 'vue-router'

if (process.env.NODE_ENV === 'development') {
  Vue.use(VueRouter)
}

/**
 * constantRoutes
 * 没有权限要求的基本页
 * 所有角色都可以访问
 */
export const constantRoutes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/about.vue')
  }
]

/**
 * 需要根据用户角色动态加载的路由
 */
export const asyncRoutes = [

]

const createRouter = () => new VueRouter({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
