// 我的订单
<template>
  <div class="order">
    <!-- <van-dialog v-model="show" title="输入手机号查询" show-cancel-button @confirm="handleConfirm">
      <van-field v-model="tel" required label="手机号" placeholder="请输入手机号" />
    </van-dialog>-->
    <van-popup v-model="show" round class="orderPopup" :style="{ width:'80%'}">
      <van-form @submit="onSubmit">
        <van-field
          v-model="tel"
          label="手机号"
          placeholder="请输入手机号查询"
          type="tel"
          :rules="[
          { required: true, message: '手机号不能为空' },
          { pattern: /^1[3456789]\d{9}$/, message: '手机号码格式错误！'}
          ]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </van-popup>
    <div class="card" v-for="(item,i) in storeData" :key="i" v-show="tel!==''">
      <div class="btn1">
        <van-icon name="shop" />
        <span @click="jump" style="margin-left:0.3rem;">{{item.store.name}} ></span>
        <span class="btn11" @click="goStaff(item.id)">电子预约单</span>
      </div>
      <div class="content">
        <div class="img">
          <img :src="item.combo.cover" alt />
        </div>
        <div class="text">
          <span class="textt">{{item.combo.classify.paper}}</span>
          <!-- <span class="textb">￥6000</span>
          <span class="foot">
            <span @click="look" style="color:#FF8400;">查看进度 ></span>
          </span>-->
        </div>
      </div>
    </div>
    <!-- </van-list> -->
    <!-- <van-divider /> -->
    <div class="foot">
      <van-tabbar v-model="active" active-color="#F85B3E" inactive-color="#000">
        <van-tabbar-item icon="wap-home" replace to="/shopDetails">清鑫优品</van-tabbar-item>
        <van-tabbar-item icon="label" replace to="/order">订单列表</van-tabbar-item>
      </van-tabbar>
    </div>
    <div class="non" v-if="storeData==''">
      <img src="../assets/none.png" alt />
      <div class="nonFont">暂无数据</div>
    </div>
  </div>
</template>

<script>
// import { Dialog } from 'vant'
import axios from '../assets/js/baseaxios'

export default {
  data () {
    return {
      active: 1,
      show: true,
      loading: false,
      finished: false,
      storeData: [],
      tel: '',
      token:
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwicm9sZSI6IjAiLCJpc3MiOiJxaW5nZ3hpbnlvdXBpbiIsImV4cCI6MTU5NzM2ODM1MiwiaWF0IjoxNTk2NzYzNTUyLCJ1c2VybmFtZSI6ImFkbWluIn0.WdSo9o7zFylgIwwtEfz9yQzyI-UmY5jQ9UZDRCgb22PG-TgwRBSivcKJqv-8gUWugGWxmotz_yaDQ-kwGmvzAw'
    }
  },
  created () {
    // this.getData()
    this.dialog()
  },
  methods: {
    jump () {
      // this.$router.push('/shopDetails')
    },
    goStaff (id) {
      console.log(id)
      // this.$router.push('/appointment')
      this.$router.push({ path: '/appointment', query: { id: id } })
    },
    // look () {
    //   this.$router.push('/progress')
    // }

    onSubmit (values) {
      console.log('点击了确定', values)
      this.show = false
      this.getData()
    },
    getData () {
      axios
        .get('/customer', {
          params: {
            phone: this.tel
          },
          headers: { token: this.token }
        })
        .then((res) => {
          this.storeData = res.data
        })
    }
  }
}
</script>

<style lang="less" scoped>
.order {
  font-size: 0.44rem;
  width: 100%;
  overflow: hidden;
  .orderPopup {
    padding-top: 0.5rem;
    height: 6rem;
    .van-button{
      margin-top: 1rem;
    }
  }
  .card {
    // background-color: green;
    width: 10.65rem;
    height: 4.78rem;
    margin-left: 0.3rem;
    margin-top: 0.3rem;
  }
  .btn {
    margin-left: 0.25rem;
  }
  .btn1 {
    margin-left: 0.5rem;
    font-size: 0.44rem;
    border-bottom: 0.01rem dashed #ccc;
    display: flex;
    height: 1rem;
    // margin-bottom: 0.5rem;
    .btn11 {
      color: #259ae4;
      display: inline-block;
      margin-left: auto;
    }
  }
  .content {
    display: flex;
  }
  .img {
    width: 2.3rem;
    height: 2.3rem;
    margin-top: 0.5rem;
    margin-left: 0.51rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .text {
    position: relative;
  }
  .textt {
    display: block;
    font-size: 0.44rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    margin-left: 0.26rem;
    padding-right: 0.2rem;
    margin-top: 0.5rem;
  }
  .textb {
    display: block;
    font-size: 0.6rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(236, 1, 1, 1);
    right: 0.5rem;
    bottom: 0.51rem;
    margin-top: 0.5rem;
  }
  .foot {
    position: absolute;
    right: 0.5rem;
    bottom: 0.1rem;
  }
  .non {
    width: 3.89rem;
    height: 3.03rem;
    margin-left: 3.68rem;
    margin-top: 7.92rem;
    margin-bottom: 9rem;
  }
  .nonFont {
    margin-left: 1rem;
    font-size: 0.54rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(0, 0, 0, 1);
  }
}
</style>
