<template>
  <div class="home">
    <div class="home-banner">
      <div class="home-banner-content">
        <div class="home-banner-content-left">
          <h2 :class="['left-title']">{{$t("home.innovate")}}</h2>
          <h2 :class="['left-second-title', {'left-second-title-isEn': isCurrLocal == 'en'}]">{{$t("home.effective")}}</h2>
          <!-- <p class="left-desc">
            leverage innovative technology for patients to access effective treatment
          </p> -->
          <!-- <span class="left-more" @click="contactUs()">联系我们 ></span> -->
        </div>
        <div class="home-banner-content-right">
          <!-- <img src="@/assets/imgs/人物.png" alt="" /> -->
        </div>
        <img class="arrow-down" src="@/assets/imgs/arrow_down.png" alt="">
      </div>
    </div>
    <div class="home-content">
      <h2 class="home-content-title">{{$t("home.product")}}</h2>
      <!-- <p class="home-content-desc">Product classification</p> -->
      <div class="home-content-cabinet">
        <div :class="['home-content-cabinet-item',`home-content-cabinet-item-${index + 1}`]" v-for="(i, index) in itemData" :key="index" @click="handleItem(index)" @mouseover="handleMouseover(index)">
          <div class="item">
            <div :class="['item-icon', `item-${index + 1}`]"></div>
            <p class="item-title">{{ i.firstTitle }}</p>
            <p class="item-desc" v-if="isCurrLocal == 'cn'">{{ i.secondTitle }}</p>
            <div class="item-more">{{$t("home.learn")}} ></div>
          </div>
          <p class="title">{{ i.firstTitle }}</p>
        </div>
      </div>
    </div>
    <div class="home-carousel">
      <!-- <img class="home-carousel-content-arrow left" src="@/assets/imgs/arrow2.png" alt="" @click="preItem()"> -->
      <!-- <img class="home-carousel-content-arrow right" src="@/assets/imgs/arrow2.png" alt="" @click="nextItem()"> -->
      <el-carousel ref="carousel" height="480px">
        <el-carousel-item v-for="(item,index) in itemData" :key="index">
          <div class="home-carousel-content">
            <div class="home-carousel-content-left">
              <img class="home-carousel-content-left-cover" :src="item.carouselImagUrl" alt="">
            </div>
            <div class="home-carousel-content-right">
              <div class="home-carousel-content-right-box">
                <h3 class="home-carousel-content-right-box-title">
                  <span class="title-1">{{item.firstTitle}}</span>
                  <span class="title-2" v-if="isCurrLocal == 'cn'">{{item.secondTitle}}</span>
                </h3>
                <ul class="home-carousel-content-right-box-list">
                  <li class="home-carousel-content-right-box-list-li" v-for="(i,index) in item.descList" :key="index" v-html="i">
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="home-about-wrap">
      <div class="home-about">
        <div class="home-about-left">
          <h2 class="home-about-title">{{$t("home.aboutUs")}}</h2>
          <!-- <p class="home-about-desc">About us</p> -->
          <div v-if="isCurrLocal == 'cn'">
            <p class="home-about-left-text-1">
              一临云科技旨在建立领先的临床研究云平台，以“科技创新为受试者带来有效治疗”为使命，立足中国、服务全球的医疗卫生与生命科技企业。
            </p>
            <p class="home-about-left-text-2">
              一临云的临床研究云平台是自主研发的端到端无缝整合一体化平台，包括电子知情同意eConsent、电子数据采集EDC、随机与药物管理RTSM、电子临床结局评估eCOA、临床研究项目管理系统CTMS、电子化试验主文档管理eTMF、基于风险的监查系统RBM、虚拟化临床研究Virtual
              Trial等。通过一临云的专业化解决方案，为制药企业、医疗器械公司、研究机构加速新药研发的进程、缩减临床研究的成本、降低临床研究的风险。
            </p>
          </div>
          <div v-else>
            <p class="home-about-left-text-1">
              eClinCloud Technologies (AKA. ECC) is a global clinical trial cloud platform. Our mission is to "leverage innovative technology for patients to access effective treatment". Our journey started in China,
              servicing the global life sciences community. ECC’s clinical trial cloud platform is a uniformed platform, including eConsent, EDC, RTSM, eCOA, CTMS, eTM, RBM and Virtual Trial solutions.
            </p>
            <p class="home-about-left-text-2">
              ECC’s suite of strategic solutions accelerate the clinical research process with a focus to deliver treatments to patients faster with lower costs and risks for pharmaceutical companies, medical instrument
              companies and clinical trial institutions.
            </p>
          </div>
          <span class="home-about-left-more" @click="contactUs()">{{$t("home.contact")}} ></span>
        </div>
        <div class="home-about-right">
          <img src="@/assets/imgs/img_Aboutus.png" alt="">
        </div>
      </div>
    </div>
    <div class="home-service">
      <h2 class="home-service-title">{{$t("home.service")}}</h2>
      <!-- <p class="home-service-title">Scope of services</p> -->
      <div class="home-service-content">

        <div class="home-service-content-left">
          <img src="@/assets/imgs/img_services.png" alt="">
        </div>
        <div class="home-service-content-right">
          <ul :class="['home-service-content-right-list']" v-if="isCurrLocal == 'cn'">
            <li><span class="highlight li-dot">·</span> 与多个治疗领域的意见领袖深度合作</li>
            <li class="home-service-content-right-list-centerli"><span class="highlight li-dot">·</span> 运营团队具有丰富的临床试验经验</li>
            <li class="home-service-content-right-list-centerli"><span class="highlight li-dot">·</span> 业内领先的风险管理解决方案</li>
            <li><span class="highlight li-dot">·</span> 应用大数据算法提高数据质量</li>
          </ul>
          <ul :class="['home-service-content-right-list']" v-else>
            <li><span class="highlight li-dot">·</span> <span class="highlight">In depth cooperation</span> of opinion leaders in different treatment fields</li>
            <li class="home-service-content-right-list-centerli"><span class="highlight li-dot">·</span> From <span class="highlight">solution</span> optimization to data collection and management</li>
            <li><span class="highlight li-dot">·</span> <span class="highlight">Risk management</span> and other solutions</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="home-last">
      <div class="home-last-box">
        <div class="home-last-box-item">
          <img src="@/assets/imgs/9001.png" alt="">
        </div>
        <div class="home-last-box-item">
          <img src="@/assets/imgs/27001.png" alt="">
        </div>
        <div class="home-last-box-item">
          <img src="@/assets/imgs/腾讯云.png" alt="">
        </div>
      </div>
      <div class="home-last-hint">
        <p>
          <img src="@/assets/imgs/arrow3.png" alt="">
        </p>
        <p>
          符合严格的相关法规要求，包括ISO,云服务及数据安全和备份等；<br>
          通过业界领先公司的验证。
        </p>
      </div>
    </div>
    <!-- <div class="home-dynamic">
      <img class="arrow-down" src="@/assets/imgs/arrow_down.png" alt="">
      <h2 class="home-dynamic-title">{{$t("home.dynamic")}}</h2>
      <p class="home-dynamic-title">Industry news</p>
      <div class="home-dynamic-content">
        <div class="home-dynamic-content-left">
          <div class="home-dynamic-content-left-img">
            <img src="@/assets/imgs/img_eg1.png" alt="">
            <div class="home-dynamic-content-left-img-mask">
              <p class="mask-title">最新研究发现c9ww <span class="date">2020-03-23</span></p>
              <p class="mask-content">利用定量模型和GIS方法，从空间布局、服务范围以及航空客流分布等方面来研究中国的机场体系及其服务水平利用定量模型和GIS方法….</p>
            </div>
          </div>
        </div>
        <div class="home-dynamic-content-right">
          <p class="date">2020-03-23</p>
          <img src="@/assets/imgs/img_eg2.png" alt="">
          <p class="title">最新研究发现c9ww</p>
          <p class="content">利用定量模型和GIS方法，从空间布局、服务范围以及航空客流分布等方面来研究中国的机场体系及其服务水平利用定量模型和GIS方法.在中国大陆拥有26家分支行的汇丰银行（HSBC）表示，新条例将使其能够进一步扩大分行网络和服务范围</p>
        </div>
      </div>
    </div> -->

  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      currentIndex: 0,
      currentItem: {}
    };
  },
  computed: {
    isCurrLocal() {
      return this.$i18n.locale;
    },
    itemData() {
      return [
        {
          firstTitle: "CTMS",
          secondTitle: "临床项目管理系统",
          carouselImagUrl: require("@/assets/imgs/img_Product6.png"),
          descList:
            this.isCurrLocal == "cn"
              ? [
                  "业内领先的CTMS系统，具备完善的功能模块",
                  "实现实时掌握项目的全方位进展",
                  "内置多套功能模板，实现快速部署，平均1-2个月完成系统上线",
                  "支持多语言、多时区和多种货币的转换"
                ]
              : [
                  "Industry leading CTMS systems with complete functional modules",
                  "Supports both pc and mobile port",
                  "Supports multi languages, time zones and currency exchanges",
                  "Reminders alerts for different user role"
                ]
        },
        {
          firstTitle: "eTMF",
          secondTitle: "文档管理",
          carouselImagUrl: require("@/assets/imgs/img_Product5.png"),
          descList: this.isCurrLocal == "cn" ? [] : []
        },
        {
          firstTitle: "EDC",
          secondTitle: "电子数据采集系统",
          carouselImagUrl: require("@/assets/imgs/img_Product3.png"),
          descList:
            this.isCurrLocal == "cn"
              ? [
                  "快速实现eCRF设计, 比传统EDC节约30%时间",
                  "提供符合CDISC标准的对个治疗领域的eCRF模块库",
                  "集成MedDRA与WHODD的自动编码功能",
                  "提供业界常用的标准化报表,且用户可任意自定义报表"
                ]
              : [
                  "Supports both PC and mobile data entry at the same time",
                  "Integrates auto coding for MedDRA and WHODD",
                  "Provides site visit reminder alert",
                  "No coding required to configure complex edit checks"
                ]
        },
        {
          firstTitle: "RTSM",
          secondTitle: "随机与药物管理",
          carouselImagUrl: require("@/assets/imgs/img_Product2.png"),
          descList:
            this.isCurrLocal == "cn"
              ? [
                  "零编程快速实现随机和药物管理的配置",
                  "90%以上的项目可在三小时内完成部署",
                  "药物发放模块具备预测功能,最大可能的减少药物的浪费",
                  "严格的角色配置和权限管理"
                ]
              : [
                  "Supports multiple randomization algorithms",
                  "90% of the project can complete configuration within three hours",
                  "Role level security management configuration",
                  "Provides 24/7/365 support"
                ]
        },
        {
          firstTitle: "eCOA",
          secondTitle: "电子临床结局评估",
          carouselImagUrl: require("@/assets/imgs/img_Product1.png"),
          descList:
            this.isCurrLocal == "cn"
              ? [
                  "业内最快实现eCOA部署,平均在4周完成上线",
                  "实施团队具有丰富的国际大型eCOA项目经验",
                  "支持BYOD和移动终端租赁模式",
                  "提供从量表版权获取、翻译、语言验证、eCOA部署、培训、数据质量分析等服务"
                ]
              : [
                  "Implementation team with major international eCOA project experiences",
                  "Provides powerful standard scale library",
                  "Supports BYOD and device provisioning",
                  "Compatible with both iOS and Android system"
                ]
        },
        {
          firstTitle: "eConsent",
          secondTitle: "电子知情同意书",
          carouselImagUrl: require("@/assets/imgs/img_Product4.png"),
          descList:
            this.isCurrLocal == "cn"
              ? [
                  "改变受试者签署知情同意的全过程",
                  "实现受试者对临床研究的充分知情",
                  "遵循211 CFR Part11关于电子签名的要求",
                  "符合HIPAA和GPPR关于受试者隐私保护的要求"
                ]
              : [
                  "Automate the clinical trial participants consent tracking",
                  "Traceable steps in the end-to-end eConsent process ",
                  "Enhances transparency for the clinical process to trial participants",
                  "Supports remote consent, e-signatures, handprint signatures or both"
                ]
        },
        {
          firstTitle: "Payment",
          secondTitle: "支付",
          carouselImagUrl: require("@/assets/imgs/img_Product4.png"),
          descList: this.isCurrLocal == "cn" ? [] : []
        },
        {
          firstTitle: "Remote Visit",
          secondTitle: "远程访视",
          carouselImagUrl: require("@/assets/imgs/img_Product4.png"),
          descList: this.isCurrLocal == "cn" ? [] : []
        },
        {
          firstTitle: "PV",
          secondTitle: "药物警戒",
          carouselImagUrl: require("@/assets/imgs/img_Product4.png"),
          descList: this.isCurrLocal == "cn" ? [] : []
        },
        {
          firstTitle: "TM",
          secondTitle: "工时管理",
          carouselImagUrl: require("@/assets/imgs/img_Product4.png"),
          descList: this.isCurrLocal == "cn" ? [] : []
        }
      ];
    }
  },
  mounted() {
    this.currentItem = this.itemData[0];
  },
  methods: {
    contactUs() {
      this.$router.push({
        path: "/contact"
      });
    },
    handleItem(index) {
      if ([1, 6, 7, 8, 9].includes(index)) {
        this.$message.info("努力开发中  ,敬请期待!");
        return;
      }
      let name = "";
      switch (index) {
        case 0:
          name = "CTMS";
          break;
        case 1:
          name = " eTMF";
          break;
        case 2:
          name = "EDC ";
          break;
        case 3:
          name = "RTSM";
          break;
        case 4:
          name = "eCOA";
          break;
        case 5:
          name = "eConsent";
          break;
        case 6:
          name = "Payment";
          break;
        case 7:
          name = "RemoteVisit";
          break;
        case 8:
          name = "PV";
          break;
        case 9:
          name = "TM";
          break;
        default:
          name = "CTMS";
      }
      this.$router.push({
        path: `/service/${name}`
      });
    },
    handleMouseover(index) {
      this.currentIndex = index;
      this.currentItem = this.itemData[index];
      this.$refs["carousel"].setActiveItem(index);
    },
    preItem() {
      if (this.currentIndex == 0) {
        this.currentIndex = this.itemData.length;
      }
      this.currentIndex--;
      this.currentItem = this.itemData[this.currentIndex];
    },
    nextItem() {
      this.currentIndex++;
      if (this.currentIndex == this.itemData.length) {
        this.currentIndex = 0;
      }
      this.currentItem = this.itemData[this.currentIndex];
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  line-height: 20px;
  &-banner {
    background: url("../assets/imgs/bannerbg.png") no-repeat center #000d26;
    height: 600px;
    position: relative;
    .arrow-down {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-18px) translateY(18px);
    }
    &-content {
      max-width: $content-width;
      margin: 0 auto;
      display: flex;
      justify-content: flex-start;
      &-left {
        color: #fff;
        .left {
          &-title {
            font-size: 72px;
            margin: 100px 0 10px;
            font-family: "SourceHanSerifCN-Bold-2";
            line-height: 86px;
            letter-spacing: 6px;
            &-isEn {
              font-size: 40px;
              line-height: 36px;
            }
          }
          &-second-title {
            font-size: 48px;
            line-height: 58px;
            letter-spacing: 6px;
            font-family: "SourceHanSerifCN-Bold-2";
            margin: 0;
            &-isEn {
              font-size: 72px;
              line-height: 36px;
              margin-top: 30px;
            }
          }
          &-desc {
            font-size: 24px;
            font-family: "PingFangSC-Thin", "PingFang SC";
            font-weight: 100;
          }
          &-more {
            background-color: #ee8a1d;
            color: #fff;
            padding: 4px 10px;
            border-radius: 2px;
            cursor: pointer;
            width: 160px;
            height: 48px;
            line-height: 48px;
            line-height: 20px;
            text-align: center;
            display: inline-block;
          }
        }
      }
      &-right {
      }
    }
  }
  &-content {
    margin: 0 auto;
    padding: 0;
    text-align: center;

    &-title {
      color: #00215f;
      font-size: 36px;
      margin: 56px 0 59px;
    }
    &-desc {
      color: #00215f;
      font-size: 24px;
      font-weight: 600;
      margin: 4px 0 40px;
    }
    &-cabinet {
      display: flex;
      // justify-content: center;
      width: 1280px;
      height: 390px;
      overflow: auto;
      margin: 0 auto;
      @include scrollbar();
      &-item {
        width: 212px;
        height: 360px;
        flex-shrink: 0;
        cursor: pointer;
        background: #fff;
        color: #3f4c6e;
        position: relative;
        @each $i, $name in (1, CTMS), (2, EDC), (3, eCOA), (4, RTSM), (5, eTMF),
          (6, eConsent), (7, eConsent), (8, eConsent), (9, eConsent),
          (10, eConsent)
        {
          &-#{$i} {
            background: url("../assets/imgs/#{$name}.png");
          }
        }
        .title {
          width: 212px;
          color: #fff;
          position: absolute;
          bottom: 20px;
          font-size: 24px;
        }
        .item {
          display: none;
        }
        &:hover {
          transition: 0.4s linear;
          background: #00215f;
          color: #fff;
          .title {
            display: none;
          }
          .item {
            display: block;
            &-icon {
              width: 100px;
              height: 100px;
              margin: 60px auto 10px;
            }
            @each $i, $name in (1, CTMS), (2, EDC), (3, eCOA), (4, RTSM),
              (5, eTMF), (6, eConsent)
            {
              &-#{$i} {
                background: url("../assets/imgs/icon_#{$name}.png");
              }
            }
            &-title {
              font-size: 24px;
              margin: 20px 0 0;
              font-weight: 700;
            }
            &-desc {
              font-size: 16px;
              margin: 0;
              margin-top: 10px;
            }
            &-more {
              position: absolute;
              right: 0;
              bottom: 10px;
              width: 118px;
              line-height: 40px;
              height: 40px;
              background: #ee8a1d;
              color: #fff;
              text-align: right;
              border-radius: 30px 0 0 0;
            }
          }
        }
      }
    }
  }
  &-carousel {
    background: #ee8a1d;
    height: 480px;
    width: 100%;
    overflow: hidden;
    &-content {
      max-width: $content-width;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      position: relative;
      &-arrow {
        position: absolute;
        cursor: pointer;
        &.left {
          left: -30px;
          top: 50%;
          transform: translateY(-30px);
        }
        &.right {
          right: -30px;
          top: 50%;
          transform: translateY(-30px) rotate(180deg);
        }
      }
      &-left {
        width: 700px;
        &-cover {
          width: 700px;
          height: 480px;
          object-fit: cover;
        }
      }
      &-right {
        width: 580px;
        &-box {
          box-sizing: border-box;
          height: 400px;
          margin: 40px 0;
          background: #fff;
          padding: 32px;
          &-title {
            color: #00215f;
            margin: 0;
            .title-1 {
              font-size: 36px;
            }
            .title-2 {
              line-height: 20px;
              padding-left: 8px;
            }
          }
          &-list {
            padding-left: 22px;
            height: 284px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            font-size: 20px;
            &-li {
              line-height: 20px;
              font-weight: 400;
              color: #00215f;
              padding: 0;
              line-height: 40px;
            }
          }
        }
      }
    }
  }
  &-about {
    max-width: $content-width;
    margin: 0 auto;
    min-height: 480px;
    max-height: 560px;
    display: flex;
    &-wrap {
      width: 100%;
      overflow: hidden;
    }
    &-title {
      color: #00215f;
      font-size: 36px;
      margin: 40px 0 35px;
    }
    &-desc {
      color: #00215f;
      font-size: 24px;
      font-family: "PingFangSC-Semibold", "PingFang SC";
      font-weight: 600;
      margin: 4px 0 40px;
    }
    &-left {
      width: 700px;
      padding: 0 30px;
      box-sizing: border-box;
      font-size: 20px;
      &-text-1,
      &-text-2 {
        line-height: 20px;
        font-weight: 400;
        line-height: 32px;
        color: #00215f;
        .highlight {
          color: #ee8a1d;
        }
      }
      &-more {
        display: inline-block;
        width: 160px;
        line-height: 48px;
        height: 48px;
        background: #ee8a1d;
        color: #fff;
        text-align: center;
        cursor: pointer;
        margin-top: 50px;
      }
    }
    &-right {
      width: 520px;
    }
  }
  &-dynamic {
    height: 565px;
    background: #00215f;
    padding: 40px 0;
    box-sizing: border-box;
    position: relative;
    .arrow-down {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-18px) translateY(-18px);
    }
    &-title {
      color: #fff;
      text-align: center;
      font-size: 36px;
      margin: 4px 0;
    }
    &-desc {
      color: #fff;
      text-align: center;
      font-size: 24px;
      font-family: "PingFangSC-Semibold", "PingFang SC";
      font-weight: 600;
      margin: 4px 0;
    }
    &-content {
      max-width: $content-width;
      display: flex;
      margin: 30px auto 0;
      justify-content: center;
      &-left {
        width: 720px;
        &-img {
          width: 720px;
          height: 400px;
          position: relative;
          img {
            width: 720px;
            height: 400px;
            object-fit: cover;
          }
          &-mask {
            position: absolute;
            bottom: 0;
            width: 720px;
            min-height: 104px;
            background: rgba(0, 0, 0, 0.6);
            cursor: pointer;
            .mask {
              &-title {
                color: #fff;
                margin: 11px 10px 3px;
                font-size: 24px;
                font-family: "PingFangSC-Medium", "PingFang SC";
                font-weight: 500;
                position: relative;
                .date {
                  position: absolute;
                  right: 4px;
                  color: #fff;
                }
              }
              &-content {
                color: #fff;
                margin: 0 10px;
                line-height: 32px;
                font-size: 18px;
              }
            }
          }
        }
      }
      &-right {
        width: 500px;
        padding-left: 20px;
        color: #fff;
        .date {
          margin-top: 0;
        }
        .title {
          font-size: 24px;
          margin: 20px 0 25px;
        }
        .content {
          line-height: 32px;
          height: 96px;
          font-size: 18px;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
      }
    }
  }
  &-service {
    // max-width: $content-width;
    margin: 0px auto 60px;
    background: #00215F;
    padding: 40px;
    &-title {
      color: #fff;
      font-size: 36px;
      text-align: center;
      margin: 4px 0 60px;
    }
    &-desc {
      color: #fff;
      text-align: center;
      font-size: 36px;
      font-weight: 600;
      margin: 4px 0;
    }
    &-content {
      display: flex;
      justify-content: center;
      margin: 30px 0 0;
      &-left {
      }
      &-right {
        margin: 0 30px;
        &-list {
          margin: 0;
          height: 100%;
          list-style: none;
          font-size: 24px;
          font-weight: bold;
          display: flex;
          padding: 30px 0 30px 20px;
          box-sizing: border-box;
          flex-direction: column;
          justify-content: space-around;
          .li-dot {
            padding-right: 10px;
          }
          &-isEn {
            font-size: 20px;
          }
          li {
            color: #fff;
            // padding: 20px 0;
            line-height: 30px;
          }
          &-centerli {
            padding-left: 30px !important;
          }
        }
      }
    }
  }
  &-last {
    max-width: $content-width;
    margin: 0 auto;
    &-box {
      display: flex;
      justify-content: space-around;
      &-item {

      }
    }
    &-hint {
      margin-top: 30px;
      background-color: #EE8A1D;
      // min-height: 96px;
      text-align: center;
      padding: 10px 0;
      color: #fff;
      font-size: 24px;
      line-height: 32px;
    }

  }
}
// 适配移动端
@media only screen and (max-width: 770px) {
  .home {
  }
}
</style>