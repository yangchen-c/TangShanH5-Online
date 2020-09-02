<template>
  <div class="advance">
    <!-- 顶部图标 -->
    <div class="top">
      <div class="top1">
        <div class="timg">
          <img src="../assets/sucess.png" alt />
        </div>
        <div class="ttext">预约成功</div>
      </div>
    </div>
    <!-- 订单详情 -->
    <!-- <div class="con">
      <div class="card">
        <div class="btn">
          <van-icon name="shop" size="0.45rem" />
          <span style="margin-left:0.3rem;">唐山清鑫摄影店 ></span>
        </div>
        <div class="content">
          <div class="img">
            <img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt />
          </div>
          <div class="text">
            <span class="textt">【格蕾丝系列】三天拍摄+样片级团队 一对一服务</span>
            <span class="textb">￥6000</span>
          </div>
        </div>
      </div>
      <div class="ctext">
        <div>
          <span class="vertical"></span>
          <span class="vertical1">服务项目</span>
        </div>
        <div class="contentext">
          <div class="pose">
            <div class="alltext">姓名：杨小羊</div>
            <div class="alltext">电话：15032765308</div>
            <div class="alltext">生日：1996-06-25</div>
            <div class="alltext">住址：河北省石家庄市桥西区滨江商务大厦A座13 14室</div>
            <div class="alltext">婚期：2020-07-10</div>
            <div class="alltext">微信号：15032765308</div>
            <div class="alltext">推荐人：李鹏飞</div>
            <div class="alltext">电话：15032765308</div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- 确认按钮 -->
    <div class="btn">
      <van-button type="warning" round block @click="run">确认</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    run () {
      this.$router.push('/order')
    }
  }
}
</script>

<style lang="less" scoped>
.advance {
  font-size: 0.44rem;
  .top {
    width: 100%;
    height: 4.12rem;
    // background-color: red;
    position: relative;
  }
  .top1 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .timg {
    width: 1.79rem;
    height: 1.812rem;
  }
  .timg img {
    width: 100%;
    height: 100%;
  }
  .ttext {
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }
  //   店铺区域
  .con {
    margin-top: 0.3rem;
  }
  .card {
    background-color: #fff;
    width: 10.65rem;
    height: 4.78rem;
    margin-left: 0.3rem;
    // position: absolute;
    top: 3.26rem;
    box-sizing: border-box;
    padding: 0.5rem;
  }
  .btn {
    height: 0.8rem;
    font-size: 0.44rem;
    border-bottom: 0.01rem dashed #ccc;
  }
  .content {
    display: flex;
  }
  .img {
    width: 2.3rem;
    height: 2.3rem;
    margin-top: 0.5rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .text {
    // position: relative;
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
    right: 1rem;
    // bottom: 0.3rem;
    margin-top: 0.5rem;
    position: absolute;
  }
  .vertical {
    display: inline-block;
    width: 0.1rem;
    height: 0.51rem;
    background: rgba(255, 132, 0, 1);
    border-radius: 0.05rem;
  }
  .vertical1 {
    font-size: 0.54rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(255, 132, 0, 1);
    margin-left: 0.3rem;
  }
  .pose {
    margin-top: 0.5rem;
  }
  .alltext {
    line-height: 0.8rem;
    font-size: 0.44rem;
  }
  //   下文字区域
  .ctext {
    box-sizing: border-box;
    padding-left: 0.8rem;
    padding-right: 0.5rem;
  }
  .btn {
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    margin-top: 0.3rem;
    padding-bottom: 0.3rem;
  }
}
</style>
