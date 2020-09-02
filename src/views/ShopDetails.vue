<template>
  <div class="shopdetail">
    <div class="top">
      <!-- style="margin-top:0.5rem;margin-left:0.3rem;" -->
      <div class="img">
        <van-image round width="1.32rem" height="1.32rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </div>
      <div class="btn">
        <!-- color="#f2f2f4" -->
        <van-button style="width:9.03rem;margin-left:0.3rem;" round icon="shop">{{this.$route.query.name}} ></van-button>
      </div>
    </div>
    <div class="content">
      <div class="img1" v-for="(item,i) in storeData" :key="i" @click="jump(item.id)">
        <div class="lower">
          <img :src="item.background" alt />
        </div>
        <div class="upper">
          <span class="textt">{{item.name}}</span>
          <span class="textm">{{item.paper}}</span>
        </div>
        <!-- <span class="textb" @click="jump">
          了解详情
          <img src="../assets/right.png" alt />
        </span>
        <span class="soldd"></span>-->
      </div>
    </div>
    <div class="foot">
      <van-tabbar v-model="active" active-color="#F85B3E" inactive-color="#000">
        <van-tabbar-item icon="wap-home" replace to="/shopDetails">清鑫优品</van-tabbar-item>
        <van-tabbar-item icon="label" replace to="/order">订单列表</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import axios from '../assets/js/baseaxios'

export default {
  data () {
    return {
      active: 0,
      storeData: [],
      token:
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwicm9sZSI6IjAiLCJpc3MiOiJxaW5nZ3hpbnlvdXBpbiIsImV4cCI6MTU5NzM2ODM1MiwiaWF0IjoxNTk2NzYzNTUyLCJ1c2VybmFtZSI6ImFkbWluIn0.WdSo9o7zFylgIwwtEfz9yQzyI-UmY5jQ9UZDRCgb22PG-TgwRBSivcKJqv-8gUWugGWxmotz_yaDQ-kwGmvzAw'
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    jump (id) {
      console.log(this.$route.query.id, 123)
      console.log(id)
      // this.$router.push('/setList')
      this.$router.push({
        path: '/setList',
        query: { shopId: this.$route.query.id, id: id }
      })
    },
    getData () {
      axios
        .get('/comboClassify', {
          params: {
            // id: this.$route.query.id
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
.shopdetail {
  font-size: 0.44rem;
  // height: 138vh;
  span {
    display: block;
    margin-left: 0.81rem;
  }
  .top {
    // background: green;
    height: 2.32rem;
    display: flex;
    padding-left: 0.3rem;
    padding-top: 0.5rem;
    box-sizing: border-box;
  }
  .btn {
    font-size: 0.44rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
  }
  .content {
    margin-left: 0.3rem;
    // background-color: green;
  }
  .img1 {
    // background-image: url("../assets/1.png");
    // background-repeat: no-repeat;
    // background-color: green;

    // background-size: 100% 100%;
    width: 10.65rem;
    height: 3.8rem;
    // margin-bottom: 0.3rem;
    // padding-top: 0.79rem;
    position: relative;
    // background-color: green;
    margin-bottom: 0.3rem;
  }
  .lower {
    position: absolute;
    z-index: -1;
    width: 10.65rem;
    height: 3.8rem;
  }
  .lower img {
    width: 100%;
    height: 100%;
  }
  .upper {
    position: absolute;
    top: 0.8rem;
  }
  .textt {
    font-size: 0.48rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
  }
  .textm {
    font-size: 0.36rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    margin-top: 0.3rem;
  }
  .textb {
    font-size: 0.4rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    margin-top: 0.77rem;
    position: relative;
    img {
      width: 0.44rem;
      height: 0.44rem;
      position: absolute;
      left: 1.7rem;
      bottom: 0.02rem;
    }
  }
  .soldd {
    width: 2.19rem;
    height: 0.04rem;
    background-color: #fff;
    margin-top: 0.17rem;
  }
  // .img2 {
  //   background-image: url("../assets/2.png");
  //   background-repeat: no-repeat;
  //   background-size: 100% 100%;
  //   width: 10.65rem;
  //   height: 3.8rem;
  //   padding-top: 0.79rem;
  //   margin-bottom: 0.3rem;
  // }
  // .img3 {
  //   background-image: url("../assets/3.png");
  //   background-repeat: no-repeat;
  //   background-size: 100% 100%;
  //   width: 10.65rem;
  //   height: 3.8rem;
  //   padding-top: 0.79rem;
  //   margin-bottom: 0.3rem;
  // }
  // .img4 {
  //   background-image: url("../assets/4.png");
  //   background-repeat: no-repeat;
  //   background-size: 100% 100%;
  //   width: 10.65rem;
  //   height: 3.8rem;
  //   padding-top: 0.79rem;
  //   margin-bottom: 0.3rem;
  // }
}
</style>
