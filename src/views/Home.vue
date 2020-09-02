<template>
  <div class="home">
    <div class="top">
      <div class="boxl" v-for="(item,i) in storeData" :key="i">
        <div class="img" @click="jump(item.id)">
          <!-- <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" /> -->
          <van-image :src="item.cover" />
        </div>
        <div class="font">
          <span class="textt">{{item.name}}</span>
          <span class="textb">{{item.createTime.substring(0,10)}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../assets/js/baseaxios'

export default {
  data () {
    return {
      storeData: [],
      id: '',
      token:
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwicm9sZSI6IjAiLCJpc3MiOiJxaW5nZ3hpbnlvdXBpbiIsImV4cCI6MTU5NzM2ODM1MiwiaWF0IjoxNTk2NzYzNTUyLCJ1c2VybmFtZSI6ImFkbWluIn0.WdSo9o7zFylgIwwtEfz9yQzyI-UmY5jQ9UZDRCgb22PG-TgwRBSivcKJqv-8gUWugGWxmotz_yaDQ-kwGmvzAw'
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    jump (id) {
      this.$router.push({ path: '/show', query: { id: id } })
      // this.$router.push({ query: { id: id } })
      // console.log(id)
    },
    getData () {
      axios
        .get('/case', {
          params: {
            name: this.name
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
.home {
  background-color: #f2f2f2;
  height: 100vh;
  .top {
    // display: flex;
    // padding-top: 0.3rem;
  }
  .boxl {
    display: inline-block;
    width: 5.17rem;
    height: 6.45rem;
    margin-left: 0.3rem;
    margin-top: 0.3rem;
  }
  .img {
    background-color: #fff;
  }
  img {
    width: 5.17rem;
    height: 3.6rem;
  }
  .font {
    font-size: 0.44rem;
    background-color: #fff;
  }
  .textt {
    display: inline-block;
    padding: 0.2rem 0.51rem;
    font-size: 0.44rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
  }
  .textb {
    display: inline-block;
    margin-left: 2.59rem;
    font-size: 0.36rem;
    color: rgba(51, 51, 51, 1);
    font-family: PingFang SC;
    font-weight: 500;
  }
}
</style>
