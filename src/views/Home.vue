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
      <div class="home-about-left"></div>
      <div class="home-about-right">
          <img src="@/assets/imgs/img_Product.png" alt="">
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
              color: #00215F;
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
    }
    &-right {
      width:760px;
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
