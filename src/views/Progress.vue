<template>
  <div class="progress">
    <div class="card">
      <van-steps
        direction="vertical"
        :active="active"
        active-color="#FF8400"
        active-icon="play-circle-o"
        inactive-icon="play-circle-o"
      >
        <van-step>
          <div class="text">等待选择日期</div>
          <div class="datee">2016-07-12 12:40</div>
        </van-step>
        <van-step>
          <div class="text">已选择日期</div>
          <div class="datee">2016-07-12 12:40</div>
        </van-step>
        <van-step>
          <div class="text">开始拍摄</div>
          <div class="datee">2016-07-12 12:40</div>
        </van-step>
        <van-step>
          <div class="text">拍摄完成</div>
          <div class="datee">2016-07-12 12:40</div>
        </van-step>
        <van-step>
          <div class="text">制片中</div>
          <div class="datee">2016-07-12 12:40</div>
        </van-step>
        <van-step>
          <div class="text">出片中</div>
          <div class="datee">2016-07-12 12:40</div>
        </van-step>
        <van-step>
          <div class="text" v-if="this.active!==6">等待选片</div>
          <div class="text" v-if="this.active===6">查看相片 ></div>
          <div class="datee">2016-07-12 12:40</div>
        </van-step>
        <van-step>
          <div class="text">选片完成</div>
          <div class="datee">2016-07-12 12:40</div>
        </van-step>
        <van-step>
          <div class="text">订单完成</div>
          <div class="datee">2016-07-12 12:40</div>
        </van-step>
      </van-steps>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 6
    }
  }
}
</script>

<style lang="less" scoped>
.progress {
  font-size: 0.44rem;
  .card {
    width: 10.65rem;
    height: 13rem;
    // background-color: green;
    margin-top: 0.3rem;
    margin-left: 0.3rem;
    position: relative;
  }
  .text {
    display: inline;
  }
  .datee {
    display: inline;
    position: absolute;
    right: 1rem;
  }
}
</style>
