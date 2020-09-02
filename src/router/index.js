import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import Show from '../views/Show.vue'
import ShopDetails from '../views/ShopDetails.vue'
import SetList from '../views/SetList.vue'
import ProductDetails from '../views/ProductDetails.vue'
import Order from '../views/Order.vue'
import Confirm from '../views/Confirm.vue'
import Advance from '../views/Advance.vue' // 预约成功
import Progress from '../views/Progress.vue' // 进度
import Appointment from '../views/Appointment.vue' // 电子预约单
import Pay from '../views/Pay.vue' // 支付
import PaySuccess from '../views/PaySuccess.vue' // 支付成功
import PayFail from '../views/PayFail.vue' // 支付失败

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Shop',
    component: Shop,
    meta: {
      title: '选择店铺'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '案例展示'
    }
  },
  {
    path: '/show',
    name: 'Show',
    component: Show,
    meta: {
      title: '案例展示'
    }
  },
  {
    path: '/shopDetails',
    name: 'ShopDetails',
    component: ShopDetails,
    meta: {
      title: '唐山清鑫摄影'
    }
  },
  {
    path: '/setList',
    name: 'SetList',
    component: SetList,
    meta: {
      title: '套系列表'
    }
  },
  // 产品详情
  {
    path: '/productDetails',
    name: 'ProductDetails',
    component: ProductDetails,
    meta: {
      title: '产品详情'
    }
  },
  // 我的订单
  {
    path: '/order',
    name: 'Order',
    component: Order,
    meta: {
      title: '我的订单'
    }
  },
  // 确认预约
  {
    path: '/confirm',
    name: 'Confirm',
    component: Confirm,
    meta: {
      title: '确认预约'
    }
  },
  // 预约成功
  {
    path: '/advance',
    name: 'Advance',
    component: Advance,
    meta: {
      title: '预约成功'
    }
  },
  // 进度
  {
    path: '/progress',
    name: 'Progress',
    component: Progress,
    meta: {
      title: '进度'
    }
  },
  // 电子预约单
  {
    path: '/appointment',
    name: 'Appointment',
    component: Appointment,
    meta: {
      title: '电子预约单'
    }
  },
  // 支付
  {
    path: '/pay',
    name: 'Pay',
    component: Pay,
    meta: {
      title: '支付金额'
    }
  },
  // 支付成功
  {
    path: '/paySuccess',
    name: 'PaySuccess',
    component: PaySuccess,
    meta: {
      title: '支付成功'
    }
  },
  // 支付失败
  {
    path: '/payFail',
    name: 'PayFail',
    component: PayFail,
    meta: {
      title: '支付失败'
    }
  }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
