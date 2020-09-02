import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import VueWechatTitle from 'vue-wechat-title'
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
  ak: 'AYPgG1OVCDEU6FIM25yT557YxKTno8qG'
})
Vue.use(VueWechatTitle)
// Vue.use(require('vue-wechat-title'))

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
