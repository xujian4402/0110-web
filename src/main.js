import Vue from 'vue'
import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // 一个现代的替代CSS重置

// UI组件
import ELEMENT from 'element-ui'
import i18n from './lang'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

// global css
import '@/styles/element-variables.scss'
import '@/styles/index.scss'

// RXJS
import VueRx from 'vue-rx'
import Rx from 'rxjs/Rx'

import App from './App.vue'
import router from './router'
import store from './store'

import './permission'

import * as filters from './filters'

// if (process.env.NODE_ENV === 'development') {
// }

Vue.use(VueRx, Rx)

Vue.use(ELEMENT, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
