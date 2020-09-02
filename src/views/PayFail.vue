<template>
  <div class="paySuc">
    <div class="top">
      <div class="top1">
        <div class="timg">
          <img src="../assets/sucess.png" alt />
        </div>
        <div class="ttext">支付失败</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.paySuc {
  font-size: 0.44rem;
  .top {
    width: 100%;
    height: 4.12rem;
    // background-color: red;
    position: relative;
    top: 2.18rem;
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
}
</style>
