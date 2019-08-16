import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
// import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach(async (to, from, next) => {
  // 测试执行过程
  console.log('执行了', +new Date())
  // 开始进度条
  NProgress.start()

  // 设置页面标题
  // document.title = getPageTitle(to.meta.title)

  // 确定用户是否已登录
  /** 每次换标签都会执行 */
  /** 快速登录 10过期时间 */
  next()
})

router.afterEach(() => {
  // 完成进度条
  NProgress.done()
})
