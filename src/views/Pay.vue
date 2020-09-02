<template>
  <div id="pay">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <!-- <p>刷新次数: {{ count }}</p> -->
      <div class="msg">
        <van-cell-group>
          <van-field v-model="value" label="姓名" placeholder="请输入姓名" />
        </van-cell-group>
        <van-cell-group>
          <van-field v-model="value1" label="电话" placeholder="请输入电话" />
        </van-cell-group>
        <van-cell-group>
          <van-field v-model="value2" label="生日" placeholder="请输入生日" />
        </van-cell-group>
        <van-cell-group>
          <van-field v-model="value3" label="婚期" placeholder="请输入婚期" />
        </van-cell-group>
        <van-cell-group>
          <van-field v-model="value4" label="家庭住址" placeholder="请输入家庭住址" />
        </van-cell-group>
        <!-- <div class="msg1">
          <div class="msgTop">姓名</div>
          <div class="msgBottom">
            <input type="text">
          </div>
        </div>
        <div class="msg1">
          <div class="msgTop">电话</div>
          <div class="msgBottom">12345678910</div>
        </div>
        <div class="msg1">
          <div class="msgTop">生日</div>
          <div class="msgBottom">1996-01-01</div>
        </div>
        <div class="msg1">
          <div class="msgTop">婚期</div>
          <div class="msgBottom">2020-02-03</div>
        </div>
        <div class="msg1">
          <div class="msgTop">家庭住址</div>
          <div class="msgBottom1">石家庄市长安区</div>
        </div>
        <div class="msg1">
          <div class="msgTop">微信号</div>
          <div class="msgBottom1">12345678910</div>
        </div>-->
      </div>
      <div class="money">
        <van-card>
          <template #tags>
            <span>请输入支付金额</span>
          </template>
          <template #footer>
            <span>￥</span>
            <input type="text" v-model="value5" />
          </template>
        </van-card>
      </div>
      <div class="btn">
        <van-button type="warning" round block @click="run">确认支付</van-button>
      </div>
    </van-pull-refresh>
    <!-- 确认按钮 -->
  </div>
</template>

<script>
import axios from '../assets/js/baseaxios'
import { Toast } from 'vant'

export default {
  data () {
    return {
      isLoading: false,
      value: '',
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      urll: '',
      token:
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwicm9sZSI6IjAiLCJpc3MiOiJxaW5nZ3hpbnlvdXBpbiIsImV4cCI6MTU5NzM2ODM1MiwiaWF0IjoxNTk2NzYzNTUyLCJ1c2VybmFtZSI6ImFkbWluIn0.WdSo9o7zFylgIwwtEfz9yQzyI-UmY5jQ9UZDRCgb22PG-TgwRBSivcKJqv-8gUWugGWxmotz_yaDQ-kwGmvzAw'
    }
  },
  created () {
    this.urll = window.location.href.split('?')[1]
    if (this.urll === undefined) {
      return ''
    }
    console.log(this.urll)
  },
  methods: {
    // 下拉刷新
    onRefresh () {
      setTimeout(() => {
        Toast('刷新成功')
        this.isLoading = false
        this.getData()
      }, 1000)
    },
    // getData () {
    //   axios
    //     .get('/order/pay?payment=1', {
    //       params: {
    //         name: this.name
    //       },
    //       headers: { token: this.token }
    //     })
    //     .then(res => {
    //       console.log(res)
    //     })
    // },
    run () {
      //   this.$router.push('/order')
      axios
        .post(`/order/pay?payment=${this.value5}&${this.urll}`, {
          // .post(`/order/pay?payment=${this.value5}&orderNumber=15982585095945727`, {
          // params: {
          name: this.value,
          phone: this.value1,
          birth: this.value2,
          weddingTime: this.value3,
          address: this.value4
          // }
          // headers: { token: this.token }
        })
        .then((res) => {
          console.log(res.data)
          console.log('点击了支付')
          WeixinJSBridge.invoke(
            'getBrandWCPayRequest',
            {
              appId: 'wx6f76ee0a257bd389', // 公众号名称，由商户传入
              timeStamp: res.data.timeStamp, // 时间戳，自1970年以来的秒数
              nonceStr: res.data.nonceStr, // 随机串
              package: res.data.pkg,
              signType: res.data.signType, // 微信签名方式：
              paySign: res.data.paySign // 微信签名
            },

            function (res) {
              alert('result')
              if (res.err_msg === 'get_brand_wcpay_request:ok') {
                alert('success')
                // 使用以上方式判断前端返回,微信团队郑重提示：
                // res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
              } else {
                alert('else')
              }
            }
          )
          // 在你需要的地方复制下面代码
          // 这里需要的签名等字段，前端开发者只需要调用后端指定的接口返回即可。
          // 如果你全干，那也是OK的。
          // 你是大佬。
          // function onBridgeReady () {
          //   WeixinJSBridge.invoke(
          //     'getBrandWCPayRequest',
          //     {
          //       'appId': "wx6f76ee0a257bd389", // 公众号名称，由商户传入
          //       'timeStamp': res.data.timeStamp, // 时间戳，自1970年以来的秒数
          //       'nonceStr': res.data.nonceStr, // 随机串
          //       'package': res.data.pkg,
          //       'signType': res.data.signType, // 微信签名方式：
          //       'paySign': res.data.paySign // 微信签名
          //     },

          //     function (res) {
          //       alert('result')
          //       if (res.err_msg === 'get_brand_wcpay_request:ok') {
          //         alert('success')
          //         // 使用以上方式判断前端返回,微信团队郑重提示：
          //         // res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
          //       } else {
          //         alert('else')
          //       }
          //     }
          //   )
          // }
          // if (typeof WeixinJSBridge === 'undefined') {
          //   if (document.addEventListener) {
          //     document.addEventListener(
          //       'WeixinJSBridgeReady',
          //       onBridgeReady,
          //       false
          //     )
          //   } else if (document.attachEvent) {
          //     document.attachEvent('WeixinJSBridgeReady', onBridgeReady)
          //     document.attachEvent('onWeixinJSBridgeReady', onBridgeReady)
          //   }
          // } else {
          //   onBridgeReady()
          // }
        })
    }
  }
}
</script>

<style lang="less" scoped>
#pay {
  font-size: 0.44rem;
  padding-left: 0.3rem;
  padding-top: 0.3rem;
  padding-right: 0.3rem;
  height: 100vh;
  .msg {
    // input{outline:none;}
    .msg1 {
      //   background-color: red;
      height: 2.36rem;
      display: inline-block;
      margin-right: 0.3rem;
    }
    .msgTop {
      width: 5.17rem;
      height: 0.71rem;
      //   background-color: yellow;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
    }
    .msgBottom {
      box-sizing: border-box;
      padding-left: 0.39rem;
      border-radius: 0.2rem;
      background-color: #f2f2f2;
      width: 5.17rem;
      height: 1.15rem;
      line-height: 1.15rem;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
    }
    .msgBottom1 {
      box-sizing: border-box;
      padding-left: 0.39rem;
      border-radius: 0.2rem;
      background-color: #f2f2f2;
      width: 10.65rem;
      height: 1.15rem;
      line-height: 1.15rem;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
    }
  }
  .money {
    margin-top: 3rem;
    margin-bottom: 1rem;
    span {
      font-size: 1rem;
    }
    input {
      background: #fafafa;
      color: red;
      font-size: 1rem;
      width: 4rem;
      height: 1rem;
      border-top-style: none;
      border-left-style: none;
      border-right-style: none;
    }
  }
  .btn {
    height: 2rem;
    font-size: 0.44rem;
    border-bottom: 0.01rem dashed #ccc;
  }
}
</style>
