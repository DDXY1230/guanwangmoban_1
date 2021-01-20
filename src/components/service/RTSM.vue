<!-- RTSM -->
<template>
  <div class='eConsent'>
    <div class="eConsent-banner">
      <div class="eConsent-banner-title">
        <p class="eConsent-banner-title-1">RTSM</p>
        <p class="eConsent-banner-title-2">随机与药物管理</p>
      </div>
    </div>
    <div class="eConsent-desc">
      <div class="eConsent-desc-item">
        <img src="@/assets/imgs/img_RTSM2.png" alt="">
        <p>
          <svg-icon iconClass="arrow_hint_down"></svg-icon>
        </p>
        <p>支持多种随机方法</p>
      </div>
      <div class="eConsent-desc-item">
        <img src="@/assets/imgs/img_RTSM3.png" alt="">
        <p>
          <svg-icon iconClass="arrow_hint_down"></svg-icon>
        </p>
        <p>零编程快速实现随机和药物管理的配置</p>
      </div>
      <div class="eConsent-desc-item">
        <img src="@/assets/imgs/img_RTSM4.png" alt="">
        <p>
          <svg-icon iconClass="arrow_hint_down"></svg-icon>
        </p>
        <p>90%以上的项目可在三小时内完成部署</p>
      </div>
    </div>
    <div class="eConsent-support">
      <div class="eConsent-support-content">
        <div class="eConsent-support-content-box box-1">
          <img src="@/assets/imgs/img_RTSM5.png" alt="">
          <p>药物发放模块具备预测功能</p>
          <p>最大可能的减少药物的浪费</p>
        </div>
        <div class="eConsent-support-content-box box-2">
          <img src="@/assets/imgs/img_RTSM6.png" alt="">
          <p>严格的角色配置和权限管理</p>
        </div>
        <div class="eConsent-support-content-box box-3">
          <img src="@/assets/imgs/img_RTSM7.png" alt="">
          <p>提供7*24小时桌面支持</p>
        </div>
      </div>
    </div>
    <div class="eConsent-connect">
      <div class="eConsent-connect-left">
        <img src="@/assets/imgs/img_ctmsn7.png" alt="">
      </div>
      <div class="eConsent-connect-right">
        <p>与EDC、CTMS等系统无缝整合，也可与外部系统整合</p>
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
  &-banner {
    height: 400px;
    background: url("../../assets/imgs/img_RTSM1.png") center top no-repeat;
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
    margin: 40px auto;
    display: flex;
    justify-content: space-around;
    text-align: center;
    color: #00215f;
    font-size: 18px;
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
    height: 426px;
    background: #00215F;
    &-content {
      display: flex;
      max-width: $content-width;
      margin: 0 auto;
      justify-content: center;
      height: 426px;
      color: #fff;
      &-box {
        flex: 1;
        text-align: center;
        padding-top: 100px;
        font-size: 18px;
        &.box-1,
        &.box-3 {
        }
      }
    }
  }
  &-connect {
    max-width: $content-width;
    margin: 40px auto;
    display: flex;
    justify-content: center;
    &-right {
      padding-left: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
}
</style>