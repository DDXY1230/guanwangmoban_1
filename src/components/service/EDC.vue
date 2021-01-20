<!-- 电子数据采集 EDC -->
<template>
  <div class='eConsent'>
    <div class="eConsent-banner">
      <div class="eConsent-banner-title">
        <p class="eConsent-banner-title-1">EDC</p>
        <p class="eConsent-banner-title-2">电子数据采集</p>
      </div>
    </div>

    <div class="eConsent-support">
      <div class="eConsent-support-content">
        <div class="eConsent-support-content-box box-1">
          <img src="@/assets/imgs/img_EDC2.png" alt="">
          <p>快速实现eCRF设计比传统EDC节约30%时间</p>
        </div>
        <div class="eConsent-support-content-box box-2">
          <img src="@/assets/imgs/img_EDC3.png" alt="">
          <p>零编程实现复杂的逻辑核查</p>
        </div>
        <div class="eConsent-support-content-box box-3">
          <img src="@/assets/imgs/img_EDC4.png" alt="">
          <p>提供符合CDISC标准的多个治疗领域的eCRF模板库</p>
        </div>
      </div>
    </div>
    <div class="eConsent-function-wrap">
      <div class="eConsent-function">
        <div class="eConsent-function-item">
          <img src="@/assets/imgs/img_EDC5.png" alt="">
          <p class="desc">集成MedDRA与WHODD的自动编码功能</p>
        </div>
        <div class="eConsent-function-item">
          <img src="@/assets/imgs/img_EDC6.png" alt="">
          <p class="desc">提供业界常用的标准化报表，且用户可任意自定义报表</p>
        </div>
        <div class="eConsent-function-item">
          <img src="@/assets/imgs/img_EDC7.png" alt="">
          <p class="desc">同时支持PC端和移动端数据录入</p>
        </div>
        <div class="eConsent-function-item">
          <img src="@/assets/imgs/img_EDC8.png" alt="">
          <p class="desc">支持访视提醒功能</p>
        </div>
      </div>
    </div>
    <div class="eConsent-connect">
      <div class="eConsent-connect-left">
        <img src="@/assets/imgs/img_ctmsn7.png" alt="">
      </div>
      <div class="eConsent-connect-right">
        <p>界面简洁大方，交互友好</p>
        <p>与电子知情同意系统、随机和药物管理、项目管理系统等无缝整合</p>
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
    background: url("../../assets/imgs/img_eConsent1.png") center top no-repeat;
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
      background: #ee8a1d;
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
    &-content {
      display: flex;
      max-width: $content-width;
      margin: 0 auto;
      justify-content: center;
      height: 426px;
      color: #00215f;
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