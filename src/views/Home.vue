<template>
  <div class="home">
    <div class="home-banner">
      <div class="home-banner-content">
        <div class="home-banner-content-left">
          <h2 class="left-title">以科技创新</h2>
          <h2 class="left-second-title">为病人带来有效治疗</h2>
          <p class="left-desc">
            leverage innovative technology for patients to access effective treatment
          </p>
          <span class="left-more" @click="contactUs()">联系我们 ></span>
        </div>
        <div class="home-banner-content-right">
          <!-- <img src="@/assets/imgs/人物.png" alt="" /> -->
        </div>
        <img class="arrow-down" src="@/assets/imgs/arrow_down.png" alt="">
      </div>
    </div>
    <div class="home-content">
      <h2 class="home-content-title">产品分类</h2>
      <p class="home-content-desc">Product classification</p>
      <div class="home-content-cabinet">
        <div :class="['home-content-cabinet-item',`home-content-cabinet-item-${index + 1}`]" v-for="(i, index) in itemData" :key="index" @click="handleItem(index)">
          <div class="item">
            <div :class="['item-icon', `item-${index + 1}`]"></div>
            <p class="item-title">{{ i.firstTitle }}</p>
            <p class="item-desc">{{ i.secondTitle }}</p>
            <div class="item-more">了解详情 ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-carousel">
      <div class="home-carousel-content">
        <div class="home-carousel-content-left">
          <img src="@/assets/imgs/img_Product.png" alt="">
        </div>
        <div class="home-carousel-content-right">
          <div class="home-carousel-content-right-box">
            <h3 class="home-carousel-content-right-box-title">eCOA 电子临床结局评估</h3>
            <ul class="home-carousel-content-right-box-list">
              <li class="home-carousel-content-right-box-list-li">
                业内最快实现eCOA部署，平均在4周完成上线
              </li>
              <li class="home-carousel-content-right-box-list-li">
                实施团队具有丰富的国际大型eCOA项目经验
              </li>
              <li class="home-carousel-content-right-box-list-li">
                提供丰富的标准量表库
              </li>
              <li class="home-carousel-content-right-box-list-li">
                支持BYOD和移动终端租赁模式
              </li>
              <li class="home-carousel-content-right-box-list-li">
                同时支持iOS和Android系统
              </li>
              <li class="home-carousel-content-right-box-list-li">
                提供从量表版权获取、翻译、语言验证、eCOA部署、培训、数据质量分析等服务
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="home-about">
      <div class="home-about-left">
        <h2 class="home-content-title">关于我们</h2>
        <p class="home-content-desc">About us</p>
        <p class="home-about-left-text-1">
          易临云科技旨在建立领先的临床研究云平台，以“<span class="highlight">科技创新为病人带来有效治疗</span>”为使命，立足中国、服务全球的医疗卫生与生命科技企业。
        </p>
        <p class="home-about-left-text-2">
          易临云的临床研究云平台是自主研发的端到端无缝整合一体化平台，包括<span class="highlight">电子知情同意eConsent、电子数据采集EDC、随机与药物管理RTSM、电子临床结局评估eCOA、临床研究项目管理系统CTMS、电子化试验主文档管理eTMF、基于风险的监查系统RBM、虚拟化临床研究Virtual
            Trial</span>等。通过易临云的专业化解决方案，为制药企业、医疗器械公司、研究机构加速新药研发的进程、缩减临床研究的成本、降低临床研究的风险。
        </p>
      </div>
      <div class="home-about-right">
        <img src="@/assets/imgs/img_Aboutus.png" alt="">
      </div>
    </div>
    <div class="home-dynamic">
      <h2 class="home-dynamic-title">业内动态</h2>
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
    </div>
    <div class="home-service">
      <h2 class="home-service-title">服务范围</h2>
      <p class="home-service-title">Scope of services</p>
      <div class="home-service-content">

        <div class="home-service-content-left">
          <img src="@/assets/imgs/img_services.png" alt="">
        </div>
        <div class="home-service-content-right">
          <ul>
            <li>不同治疗领域的意见领袖深度合作</li>
            <li>提供从方案优化到数据收集和管理</li>
            <li>风险管理等解决方案</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      itemData: [
        {
          firstTitle: "CTMS",
          secondTitle: "临床项目管理系统"
        },
        {
          firstTitle: "EDC",
          secondTitle: "电子数据采集系统"
        },
        {
          firstTitle: "RTSM",
          secondTitle: "随机与药物管理"
        },
        {
          firstTitle: "ECOA",
          secondTitle: "电子临床结局评估"
        },
        {
          firstTitle: "ECONSENT",
          secondTitle: "电子知情同意书"
        }
      ]
    };
  },
  methods: {
    contactUs() {
      this.$message.info("开发中,敬请期待!");
    },
    handleItem(index) {
      this.$router.push({
        path: "/service",
        query: {
          index: index
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  &-banner {
    background: url("../assets/imgs/bannerbg.png") no-repeat center #000d26;
    height: 560px;
    position: relative;
    .arrow-down {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-18px) translateY(18px);
    }
    &-content {
      max-width: 1230px;
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
            font-family: Helvetica;
            line-height: 86px;
            letter-spacing: 6px;
          }
          &-second-title {
            font-size: 48px;
            line-height: 58px;
            letter-spacing: 6px;
            margin: 0;
          }
          &-desc {
            font-size: 24px;
            font-family: "PingFangSC-Thin", "PingFang SC";
            font-weight: 100;
          }
          &-more {
            // background: linear-gradient(to right, #1672f7, #2ed1d1);
            background-color: #ee8a1d;
            color: #fff;
            padding: 4px 10px;
            border-radius: 2px;
            cursor: pointer;
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
    max-width: 1230px;
    margin: 0 auto;
    padding: 40px 0;
    text-align: center;
    &-title {
      color: #00215f;
      font-size: 32px;
      margin: 4px 0;
    }
    &-desc {
      color: #00215f;
      font-size: 24px;
      font-family: "PingFangSC-Semibold", "PingFang SC";
      font-weight: 600;
      margin: 4px 0;
    }
    &-cabinet {
      display: flex;
      justify-content: center;
      padding-top: 10px;
      flex-wrap: wrap;
      &-item {
        width: 212px;
        height: 360px;
        cursor: pointer;
        border: 1px dashed #ccc;
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
        .item {
          display: none;
        }
        &:hover {
          transition: 0.4s linear;
          background: #00215f;
          color: #fff;
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
    background: #fcc233;
    height: 480px;
    &-content {
      max-width: 1230px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      &-left {
        width: 760px;
      }
      &-right {
        width: 520px;
        &-box {
          box-sizing: border-box;
          height: 400px;
          margin: 40px 0;
          background: #fff;
          padding: 32px;
          &-title {
            color: #ee8a1d;
            font-size: 32px;
          }
          &-list {
            &-li {
              font-size: 16px;
              font-family: "PingFangSC-Regular", "PingFang SC";
              font-weight: 400;
              line-height: 22px;
              color: #00215f;
              padding: 4px;
            }
          }
        }
      }
    }
  }
  &-about {
    max-width: 1230px;
    margin: 0 auto;
    height: 600px;
    display: flex;
    &-left {
      width: 520px;
      padding: 60px 30px;
      box-sizing: border-box;
      &-text-1,
      &-text-2 {
        text-indent: 20px;
        font-size: 18px;
        font-family: "PingFangSC-Regular", "PingFang SC";
        font-weight: 400;
        .highlight {
          color: #ee8a1d;
        }
      }
    }
    &-right {
      width: 760px;
      img {
        width: 100%;
        height: 600px;
        object-fit: cover;
      }
    }
  }
  &-dynamic {
    height: 620px;
    background: #00215f;
    padding: 60px 0;
    box-sizing: border-box;
    &-title {
      color: #fff;
      text-align: center;
      font-size: 32px;
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
      max-width: 1230px;
      display: flex;
      margin: 30px auto 0;
      justify-content: center;
      &-left {
        flex: 1;
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
                margin: 2px;
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
                margin: 4px;
              }
            }
          }
        }
      }
      &-right {
        flex: 1;
        padding-left: 12px;
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
    max-width: 1230px;
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
      font-size: 24px;
      font-family: "PingFangSC-Semibold", "PingFang SC";
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
        ul {
          li {
            color: #ee8a1d;
            line-height: 100px;
          }
        }
      }
    }
  }
}
// 适配移动端
@media only screen and (max-width: 770px) {
  .home {
    &-banner {
      height: 310px;
      &-content {
        &-left {
          padding: 10px;
          min-width: 250px;
          .left-title {
            margin: 10px;
          }
          .left-second-title {
            font-size: 26px;
          }
        }
      }
    }
    &-content {
      &-title {
        font-size: 26px;
      }
      &-cabinet {
        justify-content: space-between;
        padding: 8px;
        &-item {
          margin: 10px 5px;
          width: 46%;
          height: 200px;
        }
      }
    }
  }
}
</style>