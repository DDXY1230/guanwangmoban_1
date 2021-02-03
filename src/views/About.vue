<template>
  <!-- 此页是about -->
  <div class="about">
    <div class="about-banner">
      <div class="about-banner-content">
        <div class="about-banner-content-brief">
          <h4 class="about-banner-content-brief-title">{{$t("about.intro")}}</h4>
          <div v-if="isCurrLocal == 'cn'">
            <p class="about-banner-content-brief-desc">一临云科技旨在建立领先的临床研究云平台，以<span class="highlight">“科技创新为病人带来有效治疗”</span>为使命，立足中国、服务全球的医疗卫生与生命科技企业。</p>
          </div>
          <div v-else>
            <p class="about-banner-content-brief-desc">
              eClinCloud Technologies (AKA. ECC) is a global clinical trial cloud platform. Our mission is to "leverage innovative technology for patients to access effective treatment". Our journey started in China,
              servicing the global life sciences community. ECC’s clinical trial cloud platform is a uniformed platform, including eConsent, EDC, RTSM, eCOA, CTMS, eTM, RBM and Virtual Trial solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="about-part1">
      <div class="about-part1-left">
        <img src="@/assets/imgs/img_company2.png" alt="">
      </div>
      <div class="about-part1-right">
        <div class="about-part1-right-content">
          <img class="about-part1-right-content-zuoyinhao" src="@/assets/imgs/zuoyinhao.png" alt="">
          <h3 class="about-part1-right-content-title">{{$t("about.integration")}}</h3>
          <div v-if="isCurrLocal == 'cn'">
            <p class="about-part1-right-text">
              一临云的临床研究云平台是自主研发的端到端无缝整合一体化平台。</p>
            <p class="about-part1-right-text">包括电子知情同意<span class="highlight">eConsent</span>、电子数据采集<span class="highlight">EDC</span>、随机与药物管理<span class="highlight">RTSM</span>、电子临床结局评估e<span
                class="highlight">COA</span>、临床研究项目管理系统<span class="highlight">CTMS</span>、电子化试验主文档管理<span class="highlight">eTMF</span>、基于风险的监查系统<span class="highlight">RBM</span>、虚拟化临床研究<span class="highlight">Virtual
                Trial</span>等。
            </p>
            <p class="about-part1-right-text">
              通过一临云的专业化解决方案，为制药企业、医疗器械公司、研究机构加速新药研发的进程、缩减临床研究的成本、降低临床研究的风险。
            </p>
          </div>
          <div v-else>
            <p class="about-part1-right-text">
              To better serve our global life sciences community, ECC has entered into exclusive strategic partnerships with world leading clinical trial system provider in Greater China. ECC works closely with leading
              experts in different therapeutic domains and provides optimized planning through data capture and management as well as risk management with tools such as Central Imaging, Cardiac Safety, Respiratory Safety
              and Sensor & Wearable Device.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="about-part2-wrap">
      <div class="about-part2">
        <div class="about-part2-content">
          <div class="about-part2-content-left">
            <h3 class="about-part2-content-left-title">{{$t("about.solution")}}</h3>
            <p class="about-part2-content-left-text">{{$t("about.solutionText1")}}</p>
            <p class="about-part2-content-left-focus">
              <span v-html='$t("about.centralImaging")'></span><br>
              <span v-html='$t("about.cardiacSafety")'></span><br>
              <span v-html='$t("about.respiratory")'></span><br>
              <span v-html='$t("about.device")'></span><br>
            </p>
          </div>
          <div class="about-part2-content-right">
            <img class="about-part2-content-right-img" src="@/assets/imgs/img_company3.png" alt="">
          </div>
          <img class="zuoyinhao" src="@/assets/imgs/zuoyinhao.png" alt="">
          <span class="left-line"></span>
          <span class="right-line"></span>
        </div>
      </div>
    </div>
    <div class="about-part3">
      <div class="about-part3-left">
        <span class="about-part3-left-icon"></span>
        <p>{{$t("about.intro_1")}}</p>
        <p>{{$t("about.intro_2")}}</p>
        <p>{{$t("about.intro_3")}}</p>
      </div>
      <div class="about-part3-right">
        <img src="@/assets/imgs/img_company4.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    isCurrLocal() {
      return this.$i18n.locale;
    }
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.about {
  .highlight {
    color: #ee8a1d;
    font-weight: bold;
  }
  &-banner {
    height: 580px;
    background: url("../assets/imgs/img_company1.png") center top no-repeat;
    background-size: cover;
    &-content {
      max-width: $content-width;
      height: 580px;
      position: relative;
      margin: 0 auto;
      &-brief {
        color: #00215f;
        position: absolute;
        width: 758px;
        min-height: 154px;
        background: #fff;
        bottom: 20px;
        left: 0;
        padding: 14px 4px 14px 22px;
        box-sizing: border-box;
        &-title {
          font-size: 36px;
          margin: 0 0 10px;
        }
        &-desc {
          font-size: 20px;
          margin: 0;
          font-weight: bold;
          line-height: 32px;
        }
      }
    }
  }
  &-part1 {
    display: flex;
    margin: 30px 0;
    width: 100%;
    overflow: hidden;
    color: #00215f;
    &-left {
      flex: 1;
      padding-right: 50px;
      text-align: right;
    }
    &-right {
      flex: 1;
      padding-left: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      &-content {
        background: #eeeeee;
        padding: 35px 59px;
        position: relative;
        font-size: 20px;
        &-zuoyinhao {
          position: absolute;
          top: -18px;
          left: 0;
        }
        &-title {
          position: absolute;
          top: -61px;
          left: 61px;
          font-size: 36px;
        }
      }
      &-text {
        max-width: 600px;
        z-index: 100;
        line-height: 32px;
      }
    }
  }
  &-part2 {
    min-height: 280px;
    background: #dfe3ee;
    width: 100%;
    &-wrap {
      min-height: 360px;
      padding-top: 60px;
      width: 100%;
      overflow: hidden;
    }
    &-content {
      max-width: $content-width;
      margin: 10px auto;
      min-height: 280px;
      display: flex;
      position: relative;
      line-height: 32px;
      .zuoyinhao {
        position: absolute;
        top: -19px;
        left: -32px;
      }
      .left-line {
        position: absolute;
        bottom: 29px;
        left: -208px;
        display: inline-block;
        width: 208px;
        height: 28px;
        background: #ee8a1d;
      }
      .right-line {
        position: absolute;
        top: 12px;
        right: -208px;
        display: inline-block;
        width: 208px;
        height: 28px;
        background: #ee8a1d;
      }
      &-left {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #00215f;
        font-size: 20px;
        padding-left: 20px;
        &-title {
          position: absolute;
          top: -52px;
          left: 24px;
          font-size: 36px;
        }
        &-text {
          margin: 30px 0 0;
        }
        &-focus {
          font-weight: bold;
        }
      }
      &-right {
        flex: 1;
        position: relative;
        &-img {
          position: absolute;
          bottom: 30px;
          right: 0;
        }
      }
    }
  }
  &-part3 {
    max-width: 1280px;
    min-height: 336px;
    display: flex;
    margin: 50px auto;
    font-size: 20px;
    &-left {
      flex: 1;
      background: #00215f;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 20px 40px;
      position: relative;
      line-height: 32px;
      &-icon {
        position: absolute;
        width: 64px;
        height: 64px;
        background: rgba(238, 138, 29);
        top: 0;
        left: 10px;
        z-index: 0;
      }
      p {
        z-index: 99;
      }
    }
    &-right {
      flex: 1;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>