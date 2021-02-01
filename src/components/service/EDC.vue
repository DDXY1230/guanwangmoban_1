<!-- 电子数据采集 EDC -->
<template>
  <div class='eConsent'>
    <div class="eConsent-banner">
      <div class="eConsent-banner-title">
        <p class="eConsent-banner-title-1">EDC</p>
        <p class="eConsent-banner-title-2">{{$t("edc.collect")}}</p>
      </div>
    </div>
    <div class="eConsent-support">
      <div class="eConsent-support-content">
        <div class="eConsent-support-content-box box-1">
          <img class="box-img" src="@/assets/imgs/img_EDC2.png" alt="">
          <h4 class="box-strong">{{$t("edc.design")}}</h4>
          <div v-if="isCurrLocal == 'cn'">
          <p class="box-desc">快速实现eCRF设计</p>
          <p class="box-desc">比传统EDC<span class="highlight">节约30%</span>时间</p>
          </div>
          <div v-else>
            <p>
              Fast implementation of ECRF design <span class="highlight">saves 30%</span> time compared with traditional EDC
            </p>
          </div>
        </div>
        <div class="eConsent-support-content-box box-2">
          <img class="box-img" src="@/assets/imgs/img_EDC3.png" alt="">
          <h4 class="box-strong">{{$t("edc.examine")}}</h4>
          <p class="box-desc" v-if="isCurrLocal == 'cn'"><span class="highlight">零编程</span>实现复杂的逻辑核查</p>
          <p v-else>
            <span class="highlight">Zero programming</span> for complex logic verification
          </p>
        </div>
        <div class="eConsent-support-content-box box-3">
          <img class="box-img" src="@/assets/imgs/img_EDC4.png" alt="">
          <h4 class="box-strong">{{$t("edc.template")}}</h4>
          <p class="box-desc" v-if="isCurrLocal == 'cn'">提供符合<span class="highlight">CDISC</span>标准的多个治疗领域的eCRF模板库</p>
          <p class="box-desc" v-else>Provide ECRF template library of multiple treatment fields in accordance with <span class="highlight">CDISC</span> standard</p>
        </div>
      </div>
    </div>
    <div class="eConsent-function-wrap">
      <div class="eConsent-function">
        <div class="eConsent-function-item">
          <img src="@/assets/imgs/img_EDC5.png" alt="">
          <p class="desc">{{$t("edc.support_1")}}</p>
        </div>
        <div class="eConsent-function-item">
          <img src="@/assets/imgs/img_EDC6.png" alt="">
          <p class="desc">{{$t("edc.support_2")}}</p>
        </div>
        <div class="eConsent-function-item">
          <img src="@/assets/imgs/img_EDC7.png" alt="">
          <p class="desc">{{$t("edc.support_3")}}</p>
        </div>
        <div class="eConsent-function-item">
          <img src="@/assets/imgs/img_EDC8.png" alt="">
          <p class="desc">{{$t("edc.support_4")}}</p>
        </div>
      </div>
    </div>
    <div class="eConsent-connect">
      <div class="eConsent-connect-left">
        <img src="@/assets/imgs/lian.png" alt="">
      </div>
      <div class="eConsent-connect-right">
        <p class="eConsent-connect-right-strong">{{$t("edc.manySys")}}</p>
        <div v-if="isCurrLocal == 'cn'">
        <p class="eConsent-connect-right-text">界面简洁大方，交互友好</p>
        <p class="eConsent-connect-right-text">与<span class="highlight">电子知情同意系统、随机和药物管理、项目管理系统</span>等无缝整合</p>
        </div>
        <div v-else>
          <p>
            The interface is simple and friendly. It integrates with electronic informed consent system, random and drug management system, project management system and so on
          </p>
        </div>
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
  computed: {
    isCurrLocal() {
      return this.$i18n.locale;
    }
  },
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
    background: url("../../assets/imgs/img_EDC1.png") center top no-repeat;
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
      background: #00215F;
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
        font-size: 24px;
        font-weight: bold;
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
    height: 536px;
    &-content {
      display: flex;
      max-width: $content-width;
      margin: 0 auto;
      justify-content: center;
      height: 456px;
      color: #00215f;
      &-box {
        flex: 1;
        text-align: center;
        padding-top: 100px;
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
          font-weight: bold;
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
      display: flex;
      color: #00215F;
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
        font-weight: bold;
      }
    }
  }
}
</style>