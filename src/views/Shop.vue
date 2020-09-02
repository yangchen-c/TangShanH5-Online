
<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <div class="shop">
      <div class="search">
        <van-button
          size="small"
          style="margin-left:0.3rem;margin-top:0.3rem;width:4rem;height:0.99rem;"
          round
          icon="location-o"
          @click="cityOpen"
        >{{city}}</van-button>
        <van-popup v-model="show" round position="bottom" :style="{ height: '50%' }">
          <van-area :area-list="areaList" @confirm="onAreaConfirm" @cancel="bindCancel" />
        </van-popup>

        <van-search
          style="width:7.24rem;height:1.62rem;margin-left:0.1rem;"
          background="#f2f2f2"
          v-model="name"
          shape="round"
          placeholder="请输入店铺名称"
          @search="onSearch"
        />
      </div>
      <!-- <div>{{storeData}}</div> -->
      <div class="box" v-for="(item,i) in storeData" :key="i">
        <div class="content" @click="jump(item)">
          <!-- <img src="https://img.yzcdn.cn/vant/cat.jpeg" /> -->
          <img :src="item.photo" />
        </div>
        <div class="btn">
          <div class="font">
            <span class="textt">{{item.name}}</span>
            <span class="textb">{{item.address}}</span>
          </div>
          <div>
            <van-button @click="callPhone(item.phone)" icon="phone" size="small" type="warning">拨打电话</van-button>
            <van-button
              style="margin-left:0.3rem"
              icon="share"
              size="small"
              type="info"
              @click="goStore(item)"
            >导航到店</van-button>
          </div>
        </div>
      </div>
      <div class="non" v-if="storeData==''">
        <img src="../assets/none.png" alt />
        <div class="nonFont">暂无数据</div>
      </div>
    </div>
  </van-pull-refresh>
</template>

<script>
// import axios from '../../assets/js/baseaxios'
import axios from '../assets/js/baseaxios'
import AeraInfo from '../assets/js/area'
import { Toast } from 'vant'

export default {
  data () {
    return {
      isLoading: false,
      areaList: AeraInfo, // 引用地区信息
      valueArea: '', // 地区值
      arrArea: [], // 存放地区数组
      show: false,
      city: '石家庄',
      value: '',
      Phone: '',
      storeData: [],
      name: '',
      longitude: '',
      latitude: '',
      token:
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwicm9sZSI6IjAiLCJpc3MiOiJxaW5nZ3hpbnlvdXBpbiIsImV4cCI6MTU5NzM2ODM1MiwiaWF0IjoxNTk2NzYzNTUyLCJ1c2VybmFtZSI6ImFkbWluIn0.WdSo9o7zFylgIwwtEfz9yQzyI-UmY5jQ9UZDRCgb22PG-TgwRBSivcKJqv-8gUWugGWxmotz_yaDQ-kwGmvzAw'
    }
  },
  mounted () {
    this.getData()
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
    cityOpen () {
      this.show = true
    },
    bindCancel () {
      this.show = false
    },
    // 地区选择
    onAreaConfirm (val) {
      console.log(val)
      this.show = false
      this.arrArea = val
      var addrInfo = val[1].name + '-' + val[2].name
      // var addrInfo = val[0].name + '-' + val[1].name + '-' + val[2].name
      this.city = addrInfo
      // this.valueArea = addrInfo
    },

    goStore (val) {
      console.log(val.longitude)
      console.log(val.latitude)
      // window.location.href =
      //  ' http://api.map.baidu.com/geocoder?location=39.990912172420714,116.32715863448607&coord_type=gcj02&output=html&src=webapp.baidu.openAPIdemo'
      window.location.href = `http://api.map.baidu.com/geocoder?location=${val.latitude},${val.longitude}&coord_type=bd09ll&output=html&src=webapp.baidu.openAPIdemo`
    },
    callPhone (phoneNumber) {
      window.location.href = 'tel://' + phoneNumber
    },
    jump (item) {
      console.log(item.name)
      this.$router.push({
        path: '/shopDetails',
        query: { id: item.id, name: item.name }
      })
      // this.$router.push('/shopDetails')
    },
    onSearch () {
      this.getData()
    },
    getData () {
      axios
        .get('/store', {
          params: {
            name: this.name
          },
          headers: { token: this.token }
        })
        .then((res) => {
          console.log(res)
          // if (res.success) {
          this.storeData = res.data
          // this.longitude = res.data.latitude
          // this.latitude = res.data.latitude
          // } else {
          //   // this.$message.warning(res.msg)
          // }
        })
    }
  }
}
</script>

<style lang="less" scoped>
.shop {
  background-color: #f2f2f2;
  // height: 100%;
  // height: 100vh;
  width: 100%;
  overflow: hidden;
  .search {
    // background-color: yellow;
    width: 100%;
    height: 1.62rem;
    display: flex;
  }
  .box {
    background-color: #ffffff;
    position: relative;
    width: 10.62rem;
    height: 3.6rem;
    margin-left: 0.3rem;
    margin-bottom: 0.3rem;
  }
  .content {
    background-color: red;
    position: absolute;
    height: 2.6rem;
    width: 2.6rem;
    left: 0.5rem;
    top: 0.5rem;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .btn {
    position: absolute;
    left: 3.4rem;
    top: 0.4rem;
  }
  .font {
    font-size: 0.44rem;
    // background-color: #fff;
  }
  .textt {
    display: block;
    font-size: 0.48rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }
  .textb {
    display: block;
    margin-top: 0.3rem;
    font-size: 0.4rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(153, 153, 153, 1);
  }
  .van-search__content {
    background-color: #fff;
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
