<template>
  <!-- 此页是about -->
  <div class="about">
    <div class="about-banner">
      <div class="about-banner-content">
        <div class="about-banner-content-brief">
          <h4 class="about-banner-content-brief-title">公司简介</h4>
          <p class="about-banner-content-brief-desc">易临云科技旨在建立领先的临床研究云平台，以<span class="highlight">“科技创新为病人带来有效治疗”</span>为使命，立足中国、服务全球的医疗卫生与生命科技企业。</p>
        </div>
      </div>
    </div>
    <div class="about-part1">
      <div class="about-part1-left">
        <img src="@/assets/imgs/img_company2.png" alt="">
      </div>
      <div class="about-part1-right">
        <p class="about-part1-right-text">
          易临云的临床研究云平台是自主研发的端到端无缝整合一体化平台，包括<span class="highlight">电子知情同意eConsent、电子数据采集EDC、随机与药物管理RTSM、电子临床结局评估eCOA、临床研究项目管理系统CTMS、电子化试验主文档管理eTMF、基于风险的监查系统RBM、虚拟化临床研究Virtual Trial</span>等。
        </p>
        <p class="about-part1-right-text">
          通过易临云的专业化解决方案，为制药企业、医疗器械公司、研究机构加速新药研发的进程、缩减临床研究的成本、降低临床研究的风险。
        </p>
        <div class="about-part1-right-mask"></div>
      </div>
    </div>
    <div class="about-part2-wrap">
      <div class="about-part2">
        <div class="about-part2-content">
          <div class="about-part2-content-left">
            <p>为了更好地服务中国企业的国际化以及外资企业的全球化战略，公司与全球领先的临床研究系统供应商建立战略合作关系（大中华区独家合作伙伴）；与不同治疗领域的意见领袖深度合作，提供从方案优化到数据收集和管理、风险管理等解决方案：</p>
            <p class="highlight">
              比如中心影像评估Central Imaging、<br>
              心脏安全Cardiac Safety、<br>
              呼吸科安全Respiratory、<br>
              传感器与可穿戴设备Sensor & Wearable Device。<br>
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
        <p>公司总部在粤港澳大湾区的核心深圳湾科技生态园，并在成都设有研发中心。目前在北京、上海、台北有分支机构。</p>
        <p>创始团队和管理团队在临床研究领域深耕多年，具有丰富的经验；产品的研发与运维团队来自腾讯、华为、阿里巴巴等顶尖的互联网公司，对平台及软件系统的稳定性、数据安全保障、流程规范等均按照高级别要求。</p>
        <p>易临云平台上所有应用软件均遵循ICH、FDA和NMPA关于临床研究系统的相关要求进行验证，满足21 CFR Part 11的要求。</p>
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
  methods: {}
};
</script>
<style lang="scss" scoped>
.about {
  .highlight {
    color: #ee8a1d;
  }
  &-banner {
    height: 800px;
    background: url("../assets/imgs/img_company1.png") center top no-repeat;
    &-content {
      max-width: $content-width;
      height: 800px;
      position: relative;
      margin: 0 auto;
      &-brief {
        color: #00215f;
        position: absolute;
        width: 748px;
        height: 140px;
        background: rgba(255, 255, 255, 0.8);
        bottom: 50px;
        right: 0;
        padding: 10px;
        &-title {
          font-size: 28px;
          margin: 2px 0;
        }
        &-desc {
          font-size: 18px;
        }
      }
    }
  }
  &-part1 {
    display: flex;
    margin: 30px 0;
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
      position: relative;
      &-text {
        max-width: 600px;
        z-index: 100;
      }
      &-mask {
        height: 216px;
        width: 100%;
        background: #eee;
        position: absolute;
        z-index: 1;
        left: -10px;
        top: 220px;
      }
    }
  }
  &-part2 {
    height: 280px;
    background: #dfe3ee;
    width: 100%;
    &-wrap {
      height: 360px;
      padding-top: 60px;
      width: 100%;
      overflow: hidden;
    }
    &-content {
      max-width: $content-width;
      margin: 10px auto;
      height: 280px;
      display: flex;
      position: relative;
      .zuoyinhao {
        position: absolute;
        top: -20px;
        left: -40px;
      }
      .left-line {
        position: absolute;
        bottom: 10px;
        left: -208px;
        display: inline-block;
        width: 208px;
        height: 28px;
        background: #ee8a1d;
      }
      .right-line {
        position: absolute;
        top: 10px;
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
        font-size: 18px;
        padding-left: 30px;
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
    max-width: 1230px;
    height: 336px;
    display: flex;
    margin: 50px auto;
    &-left {
      flex: 1;
      background: #00215f;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 20px 40px;
      position: relative;
      &-icon {
        position: absolute;
        width: 64px;
        height: 64px;
        background: rgba(238, 138, 29, 0.7);
        top: 0;
        left: 10px;
      }
    }
    &-right {
      flex: 1;
      img {
        width: 100%;
        height: 336px;
        object-fit: cover;
      }
    }
  }
}
</style>