<!-- eConsent -->
<template>
  <div class='eConsent'>
    <div class="eConsent-banner">
      <div class="eConsent-banner-title">
        <p class="eConsent-banner-title-1">eConsent</p>
        <p class="eConsent-banner-title-2">{{$t("econsent.system")}}</p>
      </div>
    </div>
    <div class="eConsent-support-1">
      <div class="eConsent-support-1-content">
        <div class="eConsent-support-1-content-box box-1">
          <img class="box-img" src="@/assets/imgs/img_eConsent2.png" alt="">
          <h4 class="box-strong">{{$t("econsent.process")}}</h4>
          <p class="box-desc" v-if="isCurrLocal == 'cn'">改变受试者<span class="highlight">签署知情同意</span>的全过程</p>
          <p class="box-desc" v-else>The whole process of <span class="highlight">informed consent was changed</span></p>
        </div>
        <div class="eConsent-support-1-content-box box-2">
          <img class="box-img" src="@/assets/imgs/img_eConsent3.png" alt="">
          <h4 class="box-strong">{{$t("econsent.know")}}</h4>
          <p class="box-desc" v-if="isCurrLocal == 'cn'">实现受试者对临床研究的<span class="highlight">充分知情</span></p>
          <p class="box-desc" v-else>To realize the full knowledge of <span class="highlight">clinical research</span></p>
        </div>
        <div class="eConsent-support-1-content-box box-3">
          <img class="box-img" src="@/assets/imgs/img_eConsent4.png" alt="">
          <h4 class="box-strong">{{$t("econsent.trace")}}</h4>
          <p class="box-desc" v-if="isCurrLocal == 'cn'">知情同意全过程<span class="highlight">完全留痕</span></p>
          <p class="box-desc" v-else>The whole process of informed consent is <span class="highlight">completely traceable</span></p>
        </div>
      </div>
    </div>
    <div class="eConsent-function-wrap">
      <div class="eConsent-function">
        <img class="eConsent-function-left" src="@/assets/imgs/img_eConsent5.png" alt="">
        <img class="eConsent-function-right" src="@/assets/imgs/img_eConsent6.png" alt="">
        <div class="eConsent-function-item">
          <img src="@/assets/imgs/img_eConsent7.png" alt="">
          <p class="desc">{{$t("econsent.support_1")}}</p>
        </div>
        <div class="eConsent-function-item">
          <img src="@/assets/imgs/img_eConsent8.png" alt="">
          <p class="desc">{{$t("econsent.support_2")}}</p>
        </div>
        <div class="eConsent-function-item">
          <img src="@/assets/imgs/img_eConsent9.png" alt="">
          <p class="desc">{{$t("econsent.support_3")}}</p>
        </div>
        <div class="eConsent-function-item">
          <img src="@/assets/imgs/img_eConsent10.png" alt="">
          <p class="desc">{{$t("econsent.support_4")}}</p>
        </div>
      </div>
    </div>
    <div class="eConsent-support">
      <div class="eConsent-support-content">
        <div class="eConsent-support-content-box box-1">
          <img src="@/assets/imgs/img_eConsent11.png" alt="">
          <p>{{$t("econsent.keep_1")}}</p>
        </div>
        <div class="eConsent-support-content-box box-3">
          <img src="@/assets/imgs/img_eConsent12.png" alt="">
          <p>{{$t("econsent.keep_2")}}</p>
        </div>
      </div>
    </div>
    <div class="eConsent-connect">
      <div class="eConsent-connect-left">
        <img src="@/assets/imgs/lian.png" alt="">
      </div>
      <div class="eConsent-connect-right">
        <p class="eConsent-connect-right-strong">{{$t("econsent.manySys")}}</p>
        <p class="eConsent-connect-right-text" v-if="isCurrLocal == 'cn'">与平台<span class="highlight">其他系统</span>无缝整合，也可以对接外部系统</p>
        <p class="eConsent-connect-right-text" v-else>Seamless integration with <span class="highlight">other systems of the platform</span>, and docking with external systems</p>
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
  &-banner {
    height: 400px;
    background: url("../../assets/imgs/img_eConsent1.png") center top no-repeat;
    background-size: cover;
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
    line-height: 20px;
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
        bottom: 16px;
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
  &-support-1 {
    height: 486px;
    background: #fff;
    &-content {
      display: flex;
      max-width: $content-width;
      margin: 0 auto;
      justify-content: center;
      height: 300px;
      color: #00215f;
      &-box {
        flex: 1;
        text-align: center;
        padding-top: 100px;
        line-height: 20px;
        .box-img {
          width: 158px;
          height: 158px;
        }
        .box-strong {
          margin: 40px 0 10px;
          font-size: 36px;
          line-height: 36px;
        }
        .box-desc {
          margin: 0;
          font-size: 20px;
          font-weight: bold;
          line-height: 28px;
        }
        &.box-1,
        &.box-3 {
        }
      }
    }
  }
  &-support {
    height: 350px;
    background: #00215f;
    &-content {
      display: flex;
      max-width: $content-width;
      margin: 0 auto;
      justify-content: center;
      height: 300px;
      color: #fff;
      &-box {
        flex: 1;
        text-align: center;
        padding-top: 60px;
        font-size: 24px;
        .box-img {
          width: 158px;
          height: 158px;
        }
        p {
          margin: 28px 0;
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
      color: #00215f;
      display: flex;
      flex-direction: column;
      justify-content: center;
      p {
        text-align: center;
      }
      &-strong {
        font-size: 36px;
        margin: 0;
        line-height: 36px;
        margin-bottom: 14px;
        font-weight: 700;
      }
      &-text {
        text-align: center;
        margin: 10px 10px 0;
        font-size: 20px;
        line-height: 28px;
        font-weight: bold;
      }
    }
  }
}
</style>