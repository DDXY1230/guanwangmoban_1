<template>
  <div class="home">
    <div class="home-banner">
      <div class="home-banner-content">
        <div class="home-banner-content-left">
          <h2 class="left-title">{{$t("home.innovate")}}</h2>
          <h2 class="left-second-title">{{$t("home.effective")}}</h2>
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
            <p class="item-desc">{{ i.secondTitle }}</p>
            <div class="item-more">{{$t("home.learn")}} ></div>
          </div>
          <p class="title">{{ i.firstTitle }}</p>
        </div>
      </div>
    </div>
    <div class="home-carousel">
      <div class="home-carousel-content">
        <img class="home-carousel-content-arrow left" src="@/assets/imgs/arrow2.png" alt="" @click="preItem()">
        <img class="home-carousel-content-arrow right" src="@/assets/imgs/arrow2.png" alt="" @click="nextItem()">
        <div class="home-carousel-content-left">
          <img class="home-carousel-content-left-cover" :src="currentItem.carouselImagUrl" alt="">
        </div>
        <div class="home-carousel-content-right">
          <div class="home-carousel-content-right-box">
            <h3 class="home-carousel-content-right-box-title">
              <span class="title-1">{{currentItem.firstTitle}}</span>
              <span class="title-2">{{currentItem.secondTitle}}</span>
            </h3>
            <ul class="home-carousel-content-right-box-list">
              <li class="home-carousel-content-right-box-list-li" v-for="(item,index) in currentItem.descList" :key="index">
                {{item}}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="home-about-wrap">
      <div class="home-about">
        <div class="home-about-left">
          <h2 class="home-about-title">{{$t("home.aboutUs")}}</h2>
          <!-- <p class="home-about-desc">About us</p> -->
          <p class="home-about-left-text-1">
            易临云科技旨在建立领先的临床研究云平台，以“<span class="highlight">科技创新为病人带来有效治疗</span>”为使命，立足中国、服务全球的医疗卫生与生命科技企业。
          </p>
          <p class="home-about-left-text-2">
            易临云的临床研究云平台是自主研发的端到端无缝整合一体化平台，包括<span class="highlight">电子知情同意eConsent、电子数据采集EDC、随机与药物管理RTSM、电子临床结局评估eCOA、临床研究项目管理系统CTMS、电子化试验主文档管理eTMF、基于风险的监查系统RBM、虚拟化临床研究Virtual
              Trial</span>等。通过易临云的专业化解决方案，为制药企业、医疗器械公司、研究机构加速新药研发的进程、缩减临床研究的成本、降低临床研究的风险。
          </p>
          <span class="home-about-left-more" @click="contactUs()">{{$t("home.contact")}} ></span>
        </div>
        <div class="home-about-right">
          <img src="@/assets/imgs/img_Aboutus.png" alt="">
        </div>
      </div>
    </div>
    <div class="home-dynamic">
      <img class="arrow-down" src="@/assets/imgs/arrow_down.png" alt="">
      <h2 class="home-dynamic-title">{{$t("home.dynamic")}}</h2>
      <!-- <p class="home-dynamic-title">Industry news</p> -->
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
    </div>
    <div class="home-service">
      <h2 class="home-service-title">{{$t("home.service")}}</h2>
      <!-- <p class="home-service-title">Scope of services</p> -->
      <div class="home-service-content">

        <div class="home-service-content-left">
          <img src="@/assets/imgs/img_services.png" alt="">
        </div>
        <div class="home-service-content-right">
          <ul class="home-service-content-right-list">
            <li>• {{$t("home.teamwork")}}</li>
            <li class="home-service-content-right-list-centerli">• {{$t("home.manage")}}</li>
            <li>• {{$t("home.risk")}}</li>
          </ul>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      itemData: [
        {
          firstTitle: "CTMS",
          secondTitle: "临床项目管理系统",
          carouselImagUrl: require("@/assets/imgs/img_Product6.png"),
          descList: [
            this.$t('ctms.desc_1'),
            this.$t('ctms.desc_2'),
            this.$t('ctms.desc_3'),
            this.$t('ctms.desc_4'),
            this.$t('ctms.desc_5'),
            this.$t('ctms.desc_6'),
          ]
        },
        {
          firstTitle: "EDC",
          secondTitle: "电子数据采集系统",
          carouselImagUrl: require("@/assets/imgs/img_Product3.png"),
          descList: [
            this.$t('edc.desc_1'),
            this.$t('edc.desc_2'),
            this.$t('edc.desc_3'),
            this.$t('edc.desc_4'),
            this.$t('edc.desc_5'),
            this.$t('edc.desc_6'),
          ]
        },
        {
          firstTitle: "eCOA",
          secondTitle: "电子临床结局评估",
          carouselImagUrl: require("@/assets/imgs/img_Product1.png"),
          descList: [
            this.$t('ecoa.desc_1'),
            this.$t('ecoa.desc_2'),
            this.$t('ecoa.desc_3'),
            this.$t('ecoa.desc_4'),
            this.$t('ecoa.desc_5'),
            this.$t('ecoa.desc_6'),
          ]
        },
        {
          firstTitle: "RTSM",
          secondTitle: "随机与药物管理",
          carouselImagUrl: require("@/assets/imgs/img_Product2.png"),
          descList: [
            this.$t('rtsm.desc_1'),
            this.$t('rtsm.desc_2'),
            this.$t('rtsm.desc_3'),
            this.$t('rtsm.desc_4'),
            this.$t('rtsm.desc_5'),
            this.$t('rtsm.desc_6'),
          ]
        },
        {
          firstTitle: "eTMF",
          secondTitle: "文档管理",
          carouselImagUrl: require("@/assets/imgs/img_Product5.png"),
          descList: []
        },
        {
          firstTitle: "eConsent",
          secondTitle: "电子知情同意书",
          carouselImagUrl: require("@/assets/imgs/img_Product4.png"),
          descList: [
            this.$t('econsent.desc_1'),
            this.$t('econsent.desc_2'),
            this.$t('econsent.desc_3'),
            this.$t('econsent.desc_4'),
            this.$t('econsent.desc_5'),
          ]
        }
      ],
      currentIndex: 0,
      currentItem: {}
    };
  },
  computed: {
    isCurrLocal() {
      return this.$i18n.locale;
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
      if (index == 4) {
        this.$message.info("努力开发中💪  ,敬请期待!");
        return;
      }
      let name = "";
      switch (index) {
        case 0:
          name = "CTMS";
          break;
        case 1:
          name = "EDC";
          break;
        case 2:
          name = "eCOA";
          break;
        case 3:
          name = "RTSM";
          break;
        case 4:
          name = "eTMF";
          break;
        case 5:
          name = "eConsent";
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
  font-size: 18px;
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
      justify-content: space-around;
      &-left {
        min-width: 300px;
        max-width: 510px;
        color: #fff;
        .left {
          &-title {
            font-size: 72px;
            margin: 100px 0 10px;
            font-family: "SourceHanSerifCN-Bold-2";
            line-height: 86px;
            letter-spacing: 6px;
          }
          &-second-title {
            font-size: 48px;
            line-height: 58px;
            letter-spacing: 6px;
            font-family: "SourceHanSerifCN-Bold-2";
            margin: 0;
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
            font-size: 18px;
            text-align: center;
            display: inline-block;
          }
        }
      }
      &-right {
        width: 580px;
        img {
          width: 100%;
          object-fit: contain;
        }
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
      justify-content: center;
      flex-wrap: wrap;
      &-item {
        width: 212px;
        height: 360px;
        cursor: pointer;
        background: #fff;
        color: #3f4c6e;
        position: relative;
        @each $i, $name in (1, CTMS), (2, EDC), (3, eCOA), (4, RTSM), (5, eTMF),
          (6, eConsent)
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
            }
            &-more {
              position: absolute;
              right: 0;
              bottom: 10px;
              width: 118px;
              line-height: 40px;
              height: 40px;
              background: #ee8a1d;
              font-size: 18px;
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
            color: #ee8a1d;
            margin: 0;
            .title-1 {
              font-size: 36px;
            }
            .title-2 {
              font-size: 18px;
              padding-left: 8px;
            }
          }
          &-list {
            padding-left: 22px;
            &-li {
              font-size: 18px;
              font-weight: 400;
              line-height: 22px;
              color: #00215f;
              padding: 10px 4px;
            }
          }
        }
      }
    }
  }
  &-about {
    max-width: $content-width;
    margin: 0 auto;
    height: 480px;
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
      &-text-1,
      &-text-2 {
        text-indent: 20px;
        font-size: 18px;
        font-weight: 400;
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
        font-size: 18px;
        color: #fff;
        text-align: center;
        cursor: pointer;
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
            height: 104px;
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
          margin: 2px;
        }
      }
    }
  }
  &-service {
    max-width: $content-width;
    margin: 60px auto;
    &-title {
      color: #00215f;
      font-size: 32px;
      text-align: center;
      margin: 4px 0;
    }
    &-desc {
      color: #00215f;
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
        // flex: 1;
      }
      &-right {
        // flex: 1;
        margin: 0 30px;
        &-list {
          list-style: none;
          font-size: 24px;
          li {
            color: #ee8a1d;
            line-height: 100px;
          }
          &-centerli {
            padding-left: 50px;
          }
        }
      }
    }
  }
}
// 适配移动端
@media only screen and (max-width: 770px) {
  .home {
  }
}
</style>