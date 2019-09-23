
import Vue from 'vue'
import VueRouter from 'vue-router'
const Index = () => import('@/views/index.vue')
const MainNavbar = () => import('@/layout/MainNavbar.vue')
// const MainFooter = () => import('@/layout/MainFooter.vue')

Vue.use(VueRouter)

/**
 * constantRoutes
 * 没有权限要求的基本页
 * 所有角色都可以访问
 */
export const constantRoutes = [
  {
    path: '/',
    name: 'Index',
    components: { default: Index }
  },
  {
    path: '/td',
    name: 'DechnicalDocument',
    components: { default: () => import('@/views/technical-document.vue'), header: MainNavbar }
  },
  {
    path: '/rs',
    name: 'Reminiscence',
    components: { default: () => import('@/views/reminiscence.vue'), header: MainNavbar }
  },
  {
    path: '/cl',
    name: 'CodeLanguage',
    components: { default: () => import('@/views/code-language.vue'), header: MainNavbar }
  },
  {
    path: '/about',
    name: 'About',
    components: { default: () => import('@/views/about.vue'), header: MainNavbar }
  },
  {
    path: '/rxjs',
    name: 'RxjsTest',
    components: { default: () => import('@/views/tests-study/rxjs-study.vue'), header: MainNavbar }
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
