import axios from 'axios'
import { Message } from 'element-ui'
// import store from '@/store'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // 当跨域请求时发送cookie
  timeout: 30000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    console.log('请求之前数据：', config)
    // 在发送请求之前做些什么
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * 如果您想获得诸如头信息或状态信息
   * 请返回response => response
  */

  /**
  * 通过自定义代码确定请求状态
  * 这里只是一个例子
  * 你也可以通过HTTP状态码来判断状态。
  */
  response => {
    console.log('请求之后返回的数据', response)
    const res = response.data
    if (response.statusText === 'OK') {
      return res
    } else {
      Message({
        message: res.msg || 'error',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(res.msg || 'error')
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
