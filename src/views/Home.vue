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
          <div :class="['item-icon', `item-${index + 1}`]"></div>
          <p class="item-title">{{ i.firstTitle }}</p>
          <p class="item-desc">{{ i.secondTitle }}</p>
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
        @each $i,$name in (1,CTMS), (2,EDC), (3,eCOA), (4,RTSM), (5,eTMF), (6,eConsent) {
          &-#{$i} {
            background: url("../assets/imgs/#{$name}.png");
          }
        }
        .item {
          &-icon {
            width: 50px;
            height: 50px;
            margin: 60px auto 10px;
          }
          &-title {
            font-size: 18px;
            margin: 20px 0 0;
            font-weight: 700;
          }
          &-desc {
            font-size: 14px;
            margin: 0;
          }
        }
        &:hover {
          transition: 0.8s linear;
          background: #1672f7;
          color: #fff;
          .item {
            @for $i from 1 through 5 {
              &-#{$i} {
                background: url("../assets/imgs/item-icon-#{$i}-selected.png");
              }
            }
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
