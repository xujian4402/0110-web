
import Vue from 'vue'
import VueRouter from 'vue-router'
// import MainNavbar from '../layout/MainNavbar.vue'
// import MainFooter from '../layout/MainFooter.vue'
const Index = () => import('@/views/index.vue')
<<<<<<< HEAD
const About = () => import('@/views/about.vue')
const MainNavbar = () => import('@/layout/MainNavbar.vue')
// const MainFooter = () => import('@/layout/MainFooter.vue')
=======
const MainNavbar = () => import('@/layout/MainNavbar.vue')
const MainFooter = () => import('@/layout/MainFooter.vue')
>>>>>>> update

Vue.use(VueRouter)

/**
 * constantRoutes
 * 没有权限要求的基本页
 * 所有角色都可以访问
 */
export const constantRoutes = [
  {
    path: '/',
    name: 'index',
    components: { default: Index }
  },
  {
    path: '/about',
    name: 'about',
<<<<<<< HEAD
    components: { default: About, header: MainNavbar }
=======
    components: { default: () => import('@/views/about.vue'), header: MainNavbar, footer: MainFooter }
>>>>>>> update
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
