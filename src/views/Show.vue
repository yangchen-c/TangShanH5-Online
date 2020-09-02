<template>
  <div class="show">
    <div class="font">
      <span class="textt">{{storeData[0].name}}</span>
      <span class="textm" v-if="storeData[0].createTime">{{storeData[0].createTime.substring(0,10)}}</span>
      <span class="textb">{{storeData[0].infoTitle}}</span>
    </div>
    <div class="img">
      <div class="imgt" v-for="(item,i) in images" :key="i">
        <img :src="item" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../assets/js/baseaxios'

export default {
  data () {
    return {
      storeData: [{ name: '' }],
      images: [],
      token:
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwicm9sZSI6IjAiLCJpc3MiOiJxaW5nZ3hpbnlvdXBpbiIsImV4cCI6MTU5NzM2ODM1MiwiaWF0IjoxNTk2NzYzNTUyLCJ1c2VybmFtZSI6ImFkbWluIn0.WdSo9o7zFylgIwwtEfz9yQzyI-UmY5jQ9UZDRCgb22PG-TgwRBSivcKJqv-8gUWugGWxmotz_yaDQ-kwGmvzAw'
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      axios
        .get('/case', {
          params: {
            id: this.$route.query.id
          },
          headers: { token: this.token }
        })
        .then((res) => {
          this.storeData = res.data
          this.images = res.data[0].infoPhoto.split(',')
        })
    }
  }
}
</script>

<style lang="less" scoped>
.show {
  .font {
    font-size: 0.44rem;
    margin-top: 0.84rem;
    // margin-left: 0.3rem;
    padding: 0 0.3rem;
    display: flex;
    flex-direction: column;
  }
  .textt {
    display: inline-block;
    font-size: 0.54rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }
  .textm {
    display: inline-block;
    margin-left: auto;
    margin-top: 0.79rem;
    font-size: 0.44rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
  }
  .textb {
    display: inline-block;
    font-size: 0.44rem;
    margin-top: 0.8rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
  }
  .img {
    margin-top: 0.47rem;
  }
  .imgt {
    width: 10.65rem;
    height: 5.5rem;
    padding: 0 0.3rem;
    margin-bottom: 0.3rem;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
