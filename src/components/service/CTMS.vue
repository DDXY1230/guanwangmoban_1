<!-- CTMS -->
<template>
  <div class='ctms'>
    <div class="ctms-banner">
      <div class="ctms-banner-title">
        <p class="ctms-banner-title-1">CTMS</p>
        <p class="ctms-banner-title-2">{{$t("ctms.clinicalStudy")}}</p>
      </div>
    </div>
    <div class="ctms-support">
      <div class="ctms-support-content">
        <div class="ctms-support-content-box box-1">
          <img class="box-img" src="@/assets/imgs/img_ctmsn3.png" alt="">
          <h4 class="box-strong">{{$t("ctms.collaboration")}}</h4>
          <p class="box-desc" v-if="isCurrLocal == 'cn'">同时支持<span class="highlight">PC端</span>和<span class="highlight">移动端</span></p>
          <p class="box-desc" v-else>Both <span class="highlight">PC</span> and <span class="highlight">mobile terminals</span> are supported</p>
        </div>
        <div class="ctms-support-content-box box-2">
          <img class="box-img" src="@/assets/imgs/img_ctmsn4.png" alt="">
          <h4 class="box-strong">{{$t("ctms.transition")}}</h4>
          <p class="box-desc" v-if="isCurrLocal == 'cn'">支持多语言、多时区和多种货币的<span class="highlight">转换</span></p>
          <p class="box-desc" v-else>Support multi language, multi time zone and <span class="highlight">multi currency conversion</span></p>
        </div>
        <div class="ctms-support-content-box box-3">
          <img class="box-img" src="@/assets/imgs/img_ctmsn5.png" alt="">
          <h4 class="box-strong">{{$t("ctms.role")}}</h4>
          <p class="box-desc" v-if="isCurrLocal == 'cn'">提供行业<span class="highlight">最佳实践、简洁易用</span></p>
          <p class="box-desc" v-else>Industry best <span class="highlight">practices, simplicity and ease of use. </span></p>
        </div>
      </div>
    </div>
    <div class="ctms-brief-wrap">
      <div class="ctms-brief">
        <div class="ctms-brief-left">
          <img src="@/assets/imgs/img_ctmsn2.png" alt="">
        </div>
        <div class="ctms-brief-right">
          <div class="ctms-brief-right-item">
            <h4 class="ctms-brief-right-item-title">{{$t("ctms.lead")}}</h4>
            <p class="ctms-brief-right-item-desc">
              {{$t("ctms.leadBrief")}}
            </p>
          </div>
          <div class="ctms-brief-right-item">
            <h4 class="ctms-brief-right-item-title">{{$t("ctms.control")}}</h4>
            <p class="ctms-brief-right-item-desc">
              {{$t("ctms.controlBrief")}}
            </p>
          </div>
          <div class="ctms-brief-right-item">
            <h4 class="ctms-brief-right-item-title">{{$t("ctms.speed")}}</h4>
            <p class="ctms-brief-right-item-desc">
              {{$t("ctms.speedBrief")}}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="ctms-security">
      <div class="ctms-security-desc desc-left">
        <span class="desc-left-text">{{$t("ctms.report")}}</span>
        <span class="arrow3">
          <svg-icon iconClass="arrow3"></svg-icon>
        </span>
      </div>
      <img src="@/assets/imgs/img_ctmsn6.png" alt="">
      <div class="ctms-security-desc desc-right">
        <span class="arrow4">
          <svg-icon iconClass="arrow4"></svg-icon>
        </span>
        <span class="desc-right-text">{{$t("ctms.backup")}}</span>
      </div>
    </div>
    <div class="ctms-connect">
      <div class="ctms-connect-left">
        <img src="@/assets/imgs/lian.png" alt="">
      </div>
      <div class="ctms-connect-right">
        <p class="ctms-connect-right-strong">{{$t("ctms.manySys")}}</p>
        <p class="ctms-connect-right-text" v-if="isCurrLocal == 'cn'">与<span class="highlight">eTMF、EDC、RTSM</span>等系统无缝整合</p>
        <p class="ctms-connect-right-text" v-else>Seamless integration with <span class="highlight">ETMF, EDC, RTSM</span> and other systems</p>
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
.ctms {
  &-banner {
    height: 400px;
    background: url("../../assets/imgs/img_ctmsn1.png") center top no-repeat;
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
  &-support {
    height: 486px;
    background: #fff;
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
  &-brief {
    max-width: $content-width;
    margin: 0 auto;
    display: flex;
    &-wrap {
      background: #00215f;
    }
    &-left {
      width: 540px;
      height: 584px;
      img {
        width: 540px;
        height: 584px;
        object-fit: cover;
      }
    }
    &-right {
      float: 1;
      padding: 50px 0 50px 100px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      &-item {
        color: #fff;
        padding-left: 16px;
        &-title {
          margin: 4px 0;
          font-size: 36px;
          position: relative;
          &::before {
            width: 19px;
            height: 19px;
            display: inline-block;
            content: "";
            background-color: #ee8a1d;
            position: absolute;
            left: -38px;
            top: 18px;
          }
        }
        &-desc {
          margin: 4px 0;
          font-size: 20px;
        }
      }
    }
  }
  &-security {
    max-width: $content-width;
    margin: 0 auto;
    text-align: center;
    position: relative;
    &-desc {
      width: 516px;
      height: 100px;
      line-height: 100px;
      background: #ee8a1d;
      position: absolute;
      color: #fff;
      font-size: 24px;
      box-sizing: border-box;
      &.desc-left {
        left: 0;
        top: 100px;
        padding-right: 36px;
        position: relative;
        font-weight: bold;
        .arrow3 {
          position: absolute;
          right: 42px;
          top: 0px;
        }
        .desc-left-text {
        }
      }
      &.desc-right {
        right: 0;
        bottom: 100px;
        padding-left: 36px;
        font-weight: bold;
        .arrow4 {
          position: absolute;
          left: 42px;
          top: 0px;
        }
        .desc-right-text {
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
      color: #00215f;
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
        font-weight: bold;
        line-height: 28px;
      }
    }
  }
}
</style>