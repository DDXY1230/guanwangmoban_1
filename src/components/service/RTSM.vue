<!-- RTSM -->
<template>
  <div class='eConsent'>
    <div class="eConsent-banner">
      <div class="eConsent-banner-title">
        <p class="eConsent-banner-title-1">RTSM</p>
        <p class="eConsent-banner-title-2">随机与药物管理</p>
      </div>
    </div>
  
    <div class="eConsent-support">
      <div class="eConsent-support-content">
        <div class="eConsent-support-content-box box-1">
          <img class="box-img" src="@/assets/imgs/img_RTSM5.png" alt="">
          <h4 class="box-strong">准确预测</h4>
          <p class="box-desc">药物发放模块具备<span class="highlight">预测</span>功能</p>
          <p class="box-desc">最大可能的减少药物的浪费</p>
        </div>
        <div class="eConsent-support-content-box box-2">
          <img class="box-img" src="@/assets/imgs/img_RTSM6.png" alt="">
          <h4 class="box-strong">角色分明</h4>
          <p class="box-desc">严格的<span class="highlight">角色配置</span>和<span class="highlight">权限管理</span></p>
        </div>
        <div class="eConsent-support-content-box box-3">
          <img class="box-img" src="@/assets/imgs/img_RTSM7.png" alt="">
          <h4 class="box-strong">即时支持</h4>
          <p class="box-desc">提供<span class="highlight">7*24小时</span>桌面支持</p>
        </div>
      </div>
    </div>

    <div class="eConsent-desc-wrap">
      <div class="eConsent-desc">
      <div class="eConsent-desc-item">
        <img src="@/assets/imgs/img_RTSM2.png" alt="">
        <!-- <p>
          <svg-icon iconClass="arrow_hint_down"></svg-icon>
        </p> -->
        <p class="eConsent-desc-item-text">支持多种随机方法</p>
      </div>
      <div class="eConsent-desc-item">
        <img src="@/assets/imgs/img_RTSM3.png" alt="">
        <!-- <p>
          <svg-icon iconClass="arrow_hint_down"></svg-icon>
        </p> -->
        <p class="eConsent-desc-item-text">零编程快速实现</p>
        <p class="eConsent-desc-item-text">随机和药物管理的配置</p>
      </div>
      <div class="eConsent-desc-item">
        <img src="@/assets/imgs/img_RTSM4.png" alt="">
        <!-- <p>
          <svg-icon iconClass="arrow_hint_down"></svg-icon>
        </p> -->
        <p class="eConsent-desc-item-text">90%以上的项目可在三小时内完成部署</p>
      </div>
    </div>
    </div>

    <div class="eConsent-connect">
      <div class="eConsent-connect-left">
        <img src="@/assets/imgs/lian.png" alt="">
      </div>
      <div class="eConsent-connect-right">
        <p class="eConsent-connect-right-strong">多系统协作</p>
        <p class="eConsent-connect-right-text">与<span class="highlight">EDC、CTMS</span>等系统无缝整合，也可与外部系统整合</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {}
};
</script>
<style lang='scss' scoped>
.eConsent {
  font-size: 18px;
  &-banner {
    height: 400px;
    background: url("../../assets/imgs/img_RTSM1.png") center top no-repeat;
    background-size:cover;
    &-title {
      position: relative;
      max-width: $content-width;
      height: 400px;
      color: #fff;
      margin: 0 auto;
      font-size: 60px;
      font-family: "PingFangSC-Semibold", "PingFang SC";
      font-weight: 600;
      &-1 {
        position: absolute;
        bottom: 100px;
        margin: 0;
      }
      &-2 {
        position: absolute;
        bottom: 10px;
        margin: 8px 0;
      }
    }
  }
  &-desc {
    max-width: $content-width;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    text-align: center;
    color: #fff;
    font-size: 24px;
    &-wrap {
      background: #00215f;
      padding: 68px 0 71px;
    }
    &-item {
      img {
        margin-bottom: 43px;
      }
      &-text {
        margin:  0;
      }
    }
  }
  &-function {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: #fff;
    position: relative;
    &-wrap {
      width: 100%;
      overflow: hidden;
    }
    &-item {
      max-width: 640px;
      height: 300px;
      position: relative;
      .desc {
        width: 100%;
        text-align: center;
        position: absolute;
        margin: 0;
        bottom: 20px;
      }
      img {
        width: 100%;
        object-fit: cover;
      }
    }
    &-left {
      position: absolute;
      left: -302px;
      top: -40px;
    }
    &-right {
      position: absolute;
      right: -302px;
      bottom: -40px;
    }
  }
  &-support {
    height: 514px;
    background: #fff;
    &-content {
      display: flex;
      max-width: $content-width;
      margin: 0 auto;
      justify-content: center;
      height: 426px;
      color: #00215F;
      &-box {
        flex: 1;
        text-align: center;
        padding: 100px 0;
        font-size: 18px;
        .box-img {
          width: 158px;
          height: 158px;
        }
        .box-strong {
          margin: 40px 0 10px;
          font-size: 36px;
        }
        .box-desc {
          margin: 0;
          font-size: 20px;
        }
        &.box-1,
        &.box-3 {
        }
      }
    }
  }
  &-connect {
    max-width: $content-width;
    margin: 100px auto;
    display: flex;
    justify-content: center;
    &-right {
      padding-left: 50px;
      color: #00215F;
      display: flex;
      flex-direction: column;
      justify-content: center;
      p {
        text-align: center;
      }
      &-strong {
        font-size: 36px;
        margin: 0;
        font-weight: 700;
      }
      &-text {
        text-align: center;
        margin: 10px 10px 0;
        font-size: 20px;
      }
    }
  }
}
</style>