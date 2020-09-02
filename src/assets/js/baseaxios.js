import axios from 'axios'
import { BASE_URL } from './baseUrl'
// import md5 from 'md5'
// import store from '../../store/index'
// import store from '../../store/index'
import Vue from 'vue'
import { Notify } from 'vant'
Vue.use(Notify)

// const singkey = 'ceca1df3b3898b0e72d9f326802e255e'

// function getSign (obj) {
//   const currentTime = new Date().getTime()
//   let sing
//   if (obj.data.params == null) {
//     obj.data.params = {}
//   }
//   //   sing = md5(JSON.stringify(obj.data.params) + currentTime + singkey)
//   // console.log(sing);
//   obj.data.timestamp = currentTime
//   obj.data.sign = sing
//   return obj
// }

// 基础配置
const $http = axios.create({
  timeout: 10000, // 设置超时时间
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'
  }
})

// // 添加请求拦截器
// $http.interceptors.request.use(
//   config => {
//     const token = store.state.userInfo.token
//     // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhdXRvMCIsImZ1c2VySWQiOjF9.jknPNqhf41LQ3naz6aHINjfVs-7Q_Zx_8lHegYmeRrw'
//     if (token) {
//       config.headers.Authorization = 'Bearer' + token // 请求头部添加token
//     }
//     if (config.method === 'get') {
//       config.data = true // get请求不允许加"Content-Type"
//       return config
//     }
//     return getSign(config)
//   },
//   error => {
//     // 对请求错误做些什么
//     return Promise.reject(error)
//   }
// )
/**
 * 响应拦截器
 * 用于处理loading状态关闭、请求成功回调、响应错误处理
 */
$http.interceptors.response.use(
  response => {
    const code = response.status
    // 请求成功返回response.data
    if ((code >= 200 && code < 300) || code === 304) {
      if (response.data.success === false) {
        Notify(response.data.msg)
        return Promise.reject(response)
      }
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 404:
          Notify('网络请求不存在')
          break
        default:
          Notify('服务器异常，请稍后重试')
      }
    } else {
      // 请求超时或者网络有问题
      if (error.message.includes('timeout')) {
        Notify.error('请求超时！请检查网络是否正常')
      } else {
        Notify.error('请求失败，请检查网络是否已连接')
      }
    }
    return Promise.reject(error)
  }
)

export default $http
