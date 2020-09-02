<template>
  <div id="appointment">
    <!-- 下拉刷新 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <!-- <p>刷新次数: {{ count }}</p> -->
      <div class="msg">
        <div class="msg1">
          <div class="msgTop">姓名</div>
          <div class="msgBottom">{{this.storeData[0].name}}</div>
        </div>
        <div class="msg1">
          <div class="msgTop">电话</div>
          <div class="msgBottom">{{this.storeData[0].phone}}</div>
        </div>
        <div class="msg1">
          <div class="msgTop">网络通讯</div>
          <div class="msgBottom1">{{this.storeData[0].networkService}}</div>
        </div>
        <div class="msg1">
          <div class="msgTop">住址</div>
          <div class="msgBottom1">{{this.storeData[0].address}}</div>
        </div>
        <div class="msg1">
          <div class="msgTop">套系</div>
          <div class="msgBottom">{{this.storeData[0].combo.name}}</div>
        </div>
        <div class="msg1">
          <div class="msgTop">金额</div>
          <div class="msgBottom">{{this.storeData[0].combo.price}}</div>
        </div>
        <div class="msg1">
          <div class="msgTop">预约日期</div>
          <div class="msgBottom">{{this.storeData[0].subscribeTime}}</div>
        </div>
        <div class="msg1">
          <div class="msgTop">拍照日期</div>
          <div class="msgBottom">{{this.storeData[0].shootTime}}</div>
        </div>
        <div class="msg1">
          <div class="msgTop">看样日期</div>
          <div class="msgBottom">{{this.storeData[0].selectTime}}</div>
        </div>
        <div class="msg1">
          <div class="msgTop">定稿日期</div>
          <div class="msgBottom">{{this.storeData[0].finalizeTime}}</div>
        </div>
        <div class="msg1">
          <div class="msgTop">婚约日期</div>
          <div class="msgBottom1">{{this.storeData[0].weddingTime}}</div>
        </div>
      </div>
      <!-- 制作流程 -->
      <div class="make">
        <div class="makeTop">
          <span class="makeTop1">制作流程</span>
          <span class="makeTop2"></span>
        </div>
        <div class="makeImg">
          <div class="lower">
            <img src="../assets/1.png" alt />
          </div>
          <div class="upper">
            <span class="textt">01</span>
            <span class="textm">拍摄完成后3天选片</span>
          </div>
        </div>
        <div class="makeImg">
          <div class="lower">
            <img src="../assets/2.png" alt />
          </div>
          <div class="upper">
            <span class="textt">02</span>
            <span class="textm">选片后15天确定相册设计稿</span>
          </div>
        </div>
        <div class="makeImg">
          <div class="lower">
            <img src="../assets/3.png" alt />
          </div>
          <div class="upper">
            <span class="textt">03</span>
            <span class="textm">开始制作15天出所有产品</span>
          </div>
        </div>
        <div class="makeImg">
          <div class="lower">
            <img src="../assets/4.png" alt />
          </div>
          <div class="upper">
            <span class="textt">04</span>
            <span class="textm">拍摄后，承诺60天内拿到所有赠送产品</span>
          </div>
        </div>
      </div>
      <!-- 赠送产品 -->
      <div class="give">
        <div class="makeTop">
          <span class="makeTop1">赠送产品</span>
          <span class="makeTop2"></span>
        </div>
        <div class="giveContent">
          <div class="give1">
            <div class="giveti">相册(尺寸)</div>
            <div class="givet1">{{this.gift1[0]}}</div>
            <div class="givet1">{{this.gift2[0]}}</div>
            <div class="givet1">{{this.gift3[0]}}</div>
          </div>
          <div class="give1">
            <div class="giveti">放大(尺寸)</div>
            <div class="givet1">{{this.gift1[1]}}</div>
            <div class="givet1">{{this.gift2[0]}}</div>
            <div class="givet1">{{this.gift3[0]}}</div>
          </div>
          <div class="give1">
            <div class="giveti">其它(尺寸)</div>
            <div class="givet1">{{this.gift1[2]}}</div>
            <div class="givet1">{{this.gift2[0]}}</div>
            <div class="givet1">{{this.gift3[0]}}</div>
          </div>
        </div>
      </div>
      <!-- 拍摄内容 -->
      <div class="shot">
        <div class="makeTop">
          <span class="makeTop1">拍摄内容</span>
          <span class="makeTop2"></span>
        </div>
        <div class="card">
          <div class="cardl">
            <img src="../assets/11.png" alt />
            <span class="shot1">拍摄景点</span>
          </div>
          <div class="cardr">{{this.storeData[0].shootAddress}}</div>
        </div>
        <div class="card">
          <div class="cardl">
            <img src="../assets/22.png" alt />
            <span class="shot2">拍摄服装</span>
          </div>
          <div class="cardr">{{this.storeData[0].shootClothing}}</div>
        </div>
        <div class="card">
          <div class="cardl">
            <img src="../assets/33.png" alt />
            <span class="shot3">我们提供</span>
          </div>
          <div class="cardr">{{this.storeData[0].include}}</div>
        </div>
      </div>
      <!-- 喜欢风格 -->
      <div class="like">
        <div class="makeTop">
          <span class="makeTop1">喜欢风格</span>
          <span class="makeTop2"></span>
        </div>
        <div class="like1">喜欢风格描述:</div>
        <div class="like2">{{this.storeData[0].style}}</div>
        <div class="like1">对拍摄的特殊要求:</div>
        <div class="like2">{{this.storeData[0].special}}</div>
        <div class="like1">有无照片参考:</div>
        <div class="like2">{{this.storeData[0].photo}}</div>
      </div>
      <!-- 项目付款 -->
      <div class="payment">
        <div class="makeTop">
          <span class="makeTop1">项目付款</span>
          <span class="makeTop2"></span>
        </div>
        <div class="paymentContent">
          <div class="payCard">
            <div class="pay1">预约定金</div>
            <div>
              <span class="pay2">￥</span>
              <span class="pay3">1500</span>
            </div>
          </div>
          <div class="payCard">
            <div class="pay1">经手人</div>
            <div>
              <span class="pay3">杨小阳</span>
            </div>
          </div>
          <div class="payCard">
            <div class="pay1">日期</div>
            <div>
              <span class="pay3">2020/08/12</span>
            </div>
          </div>
        </div>
        <div class="paymentContent">
          <div class="payCard">
            <div class="pay1">拍摄付款</div>
            <div>
              <span class="pay2">￥</span>
              <span class="pay3">1500</span>
            </div>
          </div>
          <div class="payCard">
            <div class="pay1">经手人</div>
            <div>
              <span class="pay3">杨小阳</span>
            </div>
          </div>
          <div class="payCard">
            <div class="pay1">日期</div>
            <div>
              <span class="pay3">2020/08/12</span>
            </div>
          </div>
        </div>
        <div class="paymentContent">
          <div class="payCard">
            <div class="pay1">其他付款</div>
            <div>
              <span class="pay2">￥</span>
              <span class="pay3">1500</span>
            </div>
          </div>
          <div class="payCard">
            <div class="pay1">经手人</div>
            <div>
              <span class="pay3">杨小阳</span>
            </div>
          </div>
          <div class="payCard">
            <div class="pay1">日期</div>
            <div>
              <span class="pay3">2020/08/12</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 准备 -->
      <div class="ready">
        <div class="makeTop">
          <span class="makeTop11">拍摄前准备及注意事项</span>
          <span class="makeTop22"></span>
        </div>
        <div class="readyContent">
          <div class="ready1">
            <div class="circular">
              <span></span>
            </div>
            <div class="textb">拍照前一周，可以开始适当的做一些面部、皮肤的保养，护发剪发烫发最好在拍摄前15天内完成，头发不要做拉直、烫卷，不要嫁接睫毛，颜色最好一致。</div>
          </div>
          <div class="ready1">
            <div class="circular">
              <span class="circular1"></span>
            </div>
            <div class="textb">
              拍摄前一天，心情放松，提早休息，睡前少喝水，以免隔日眼睛浮肿，
              要有充足的睡眠，如此拍起来更为精神焕发，神采飞扬。
              新娘应自行修剪指甲，并将胶毛刮干净。
            </div>
          </div>
          <div class="ready1">
            <div class="circular">
              <span class="circular3"></span>
            </div>
            <div
              class="textb"
            >拍摄当天请勿自行上妆，只需简单润肤即可，不需要带首饰。男士拍摄当天勿穿深色内裤，避免穿白色西裤透色，自带黑白袜子个一双，黑皮鞋一双，也可自带一套合身的西装。</div>
          </div>
          <div class="ready1">
            <div class="circular">
              <span class="circular4"></span>
            </div>
            <div class="textb">男士如需带眼睛拍摄，应把镜片除去，只保留镜框，以防镜片出现反光现象。</div>
          </div>
          <div class="ready1">
            <div class="circular">
              <span class="circular5"></span>
            </div>
            <div class="textb">拍摄当天与化妆师摄影师讲出您喜欢的拍摄效果和风格，并可以带些电子版的参考图片。</div>
          </div>
          <div class="ready1">
            <div class="circular">
              <span class="circular1"></span>
            </div>
            <div class="textb">拍摄当天需要支付剩余拍摄费，您可通过微信、支付宝、刷卡等多种付款方式付款。</div>
          </div>
          <div class="ready1">
            <div class="circular">
              <span class="circular7"></span>
            </div>
            <div
              class="textb"
            >如有疑问随时咨询服务人员，或者直接拨打负责人15802421896（大鹏）我们将一如既往的为您提供最优质的作品和服务，如您对我的服务与质量等任何环节存在不满请随时指出，我会非常感谢您帮助我们成长进步！</div>
          </div>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import axios from '../assets/js/baseaxios'
import { Toast } from 'vant'

export default {
  data () {
    return {
      count: 0,
      isLoading: false,
      storeData: [],
      name: '',
      gift1: '',
      gift2: '',
      gift3: ''
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
    getData () {
      axios
        .get('/customer', {
          params: {
            id: this.$route.query.id
          },
          headers: { token: this.token }
        })
        .then((res) => {
          console.log(res.data)
          this.storeData = res.data
          this.gift1 = res.data[0].gift1.split('&|&')
          this.gift2 = res.data[0].gift2.split('&|&')
          this.gift3 = res.data[0].gift3.split('&|&')
        })
    }
  }
}
</script>

<style lang="less" scoped>
#appointment {
  font-size: 0.44rem;
  padding-left: 0.3rem;
  padding-top: 0.3rem;
  .msg {
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
  .makeTop {
    height: 1.81rem;
    box-sizing: border-box;
    padding-top: 0.6rem;
    position: relative;
    font-size: 0.54rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(255, 132, 0, 1);
    .makeTop1 {
      position: absolute;
      margin-left: 4.26rem;
    }
    .makeTop11 {
      position: absolute;
      margin-left: 2.65rem;
    }
    .makeTop2 {
      margin-left: 4.01rem;
      margin-top: 0.45rem;
      position: absolute;
      // bottom: 0.01rem;
      width: 2.65rem;
      height: 0.23rem;
      background: rgba(255, 132, 0, 1);
      opacity: 0.2;
    }
    .makeTop22 {
      margin-left: 2.4rem;
      margin-top: 0.45rem;
      position: absolute;
      // bottom: 0.01rem;
      width: 5.92rem;
      height: 0.23rem;
      background: rgba(255, 132, 0, 1);
      opacity: 0.2;
    }
  }
  .make {
    .makeImg {
      //   background-color: red;
      width: 10.65rem;
      height: 1.63rem;
      margin-bottom: 0.3rem;
      position: relative;
      .lower {
        width: 10.65rem;
        height: 1.63rem;
        position: absolute;
        z-index: -1;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .upper {
        // position: absolute;
        height: 1.63rem;
        .textt {
          display: inline-block;
          margin-top: 0.3rem;
          margin-left: 0.5rem;
          font-size: 0.8rem;
          font-family: DIN-Regular;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
        }
        .textm {
          display: inline-block;
          line-height: 1.63rem;
          margin-left: 1.37rem;
          font-size: 0.44rem;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
        }
      }
    }
  }
  .give {
    .give1 {
      display: inline-block;
      margin-right: 0.3rem;
      border-radius: 0.3rem;
      width: 3.35rem;
      height: 4rem;
      background-color: #f2f2f2;
      text-align: center;
    }
    .giveti {
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      margin-top: 0.5rem;
    }
    .givet1 {
      margin-top: 0.3rem;
      font-size: 0.36rem;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
    }
  }
  .shot {
    .card {
      //   background-color: red;
      width: 10.65rem;
      height: 2.4rem;
      margin-bottom: 0.3rem;
      display: flex;
      box-shadow: 0px 0px 16px 0px rgba(51, 51, 51, 0.1);
      border-radius: 20px;
    }
    .cardl {
      width: 2.55rem;
      //   line-height: 2.4rem;
      background-color: #fff;
      img {
        width: 1.12rem;
        height: 0.86rem;
        margin-left: 0.8rem;
        margin-top: 0.46rem;
      }
      span {
        display: inline-block;
        font-size: 0.36rem;
        margin-left: 0.55rem;
        background: linear-gradient(
          0deg,
          rgba(58, 123, 213, 1) 0%,
          rgba(0, 210, 255, 1) 100%
        );
      }
      .shot2 {
        background: linear-gradient(
          0deg,
          rgba(247, 78, 60, 1) 0%,
          rgba(245, 192, 80, 1) 100%
        );
      }
      .shot3 {
        background: linear-gradient(
          0deg,
          rgba(145, 86, 254, 1) 0%,
          rgba(196, 126, 255, 1) 100%
        );
      }
    }
    .cardr {
      font-size: 0.36rem;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      margin-top: 0.62rem;
      margin-left: 0.3rem;
      line-height: 0.6rem;
    }
  }
  .like {
    .like1 {
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      margin-bottom: 0.28rem;
    }
    .like2 {
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(153, 153, 153, 1);
      margin-bottom: 0.47rem;
    }
  }
  .payment {
    .paymentContent {
      display: flex;
      margin-bottom: 0.5rem;
    }
    .payCard {
      height: 2.11rem;
      width: 3.1rem;
      // background-color: tomato;
      border-bottom: #cccccc 0.05rem solid;
      margin-right: 0.5rem;
    }
    .pay1 {
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
    }
    .pay2 {
      font-size: 0.54rem;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      margin-right: 0.3rem;
    }
    .pay3 {
      font-size: 0.54rem;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(235, 0, 0, 1);
      margin-top: 0.49rem;
      display: inline-block;
    }
  }
  .ready {
    .ready1 {
      padding-right: 0.6rem;
      display: flex;
      margin-bottom: 0.5rem;
      .circular {
        margin-top: 0.12rem;
        span {
          display: block;
          width: 0.2rem;
          height: 0.2rem;
          border: 0.06rem solid rgba(241, 0, 0, 1);
          border-radius: 50%;
        }
        .circular1 {
          border: 0.06rem solid rgba(255, 132, 0, 1);
        }
        .circular3 {
          border: 0.06rem solid rgba(102, 0, 255, 1);
        }
        .circular4 {
          border: 0.06rem solid rgba(0, 144, 255, 1);
        }
        .circular5 {
          border: 0.06rem solid rgba(235, 0, 0, 1);
        }
        .circular7 {
          border: 0.06rem solid rgba(102, 0, 255, 1);
        }
      }
      .textb {
        margin-left: 0.2rem;
        font-size: 0.36rem;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 0.6rem;
      }
    }
  }
}
</style>
