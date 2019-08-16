import Vue from 'vue'
import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // 一个现代的替代CSS重置

// UI组件
import ELEMENT from 'element-ui'
import i18n from './lang'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

import App from './App.vue'
import router from './router'
import store from './store'

import './permission'

import * as filters from './filters'

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
