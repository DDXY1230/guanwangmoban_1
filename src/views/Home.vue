<template>
  <div class="home">
    <div class="home-banner">
      <div class="home-banner-content">
        <div class="home-banner-content-left">
          <h3 class="left-title">易临云</h3>
          <h2 class="left-second-title">致力新药研发领域</h2>
          <h2 class="left-second-title">先进科技 最优服务</h2>
          <p class="left-desc">
            COMMITTED TO THE FIELD OF NEW DRUG RESEARCH AND DEVELOPMENT ADVANCED
            TECHNOLOGY AND BEST SERVICE
          </p>
          <span class="left-more" @click="learnMore()">MORE</span>
        </div>
        <div class="home-banner-content-right">
          <img src="@/assets/imgs/人物.png" alt="" />
        </div>
      </div>
    </div>
    <div class="home-content">
      <h2 class="home-content-title">我们的产品</h2>
      <p class="home-content-desc">OUR PRODUCTS</p>
      <div class="home-content-cabinet">
        <div class="home-content-cabinet-item" v-for="(i, index) in itemData" :key="index" @click="handleItem(index)">
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
    learnMore() {
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
    background: url("../assets/imgs/背景.png") no-repeat center;
    height: 560px;
    &-content {
      max-width: 1230px;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      &-left {
        min-width: 300px;
        max-width: 310px;
        .left {
          &-title {
            color: #7f879b;
            font-size: 28px;
            margin: 100px 0 10px;
          }
          &-second-title {
            color: #3f4c6e;
            font-size: 36px;
            margin: 0;
          }
          &-desc {
            color: #7f879b;
            font-size: 14px;
          }
          &-more {
            background: linear-gradient(to right, #1672f7, #2ed1d1);
            color: #fff;
            padding: 4px;
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
      color: #3f4c6e;
      font-size: 32px;
      margin: 4px 0;
    }
    &-desc {
      color: #737e97;
      font-size: 16px;
      margin: 4px 0;
    }
    &-cabinet {
      display: flex;
      // justify-content: space-between;
      padding-top: 10px;
      flex-wrap: wrap;
      &-item {
        width: 220px;
        height: 250px;
        box-shadow: 4px 4px 4px rgb(243, 242, 242),
          -4px -4px 4px rgb(245, 245, 245);
        cursor: pointer;
        border-radius: 5px;
        background: #fff;
        color: #3f4c6e;
        margin: 10px;
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
          @for $i from 1 through 5 {
            &-#{$i} {
              background: url("../assets/imgs/item-icon-#{$i}.png");
            }
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
