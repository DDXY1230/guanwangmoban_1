<template>
  <!-- 此页是about -->
  <div class="about">
    <div class="about-banner">
      <div class="about-banner-content">
        <h2 class="content-title">{{$t('header.about')}}</h2>
        <p class="content-desc">ABOUT US</p>
        <span class="content-icon"></span>
      </div>
    </div>
    <div class="about-content">
      <div class="about-content-left">
        <h5 class="about-content-left-theme">{{$t('header.about')}}</h5>
        <ul class="about-content-left-list">
          <li :class="['about-content-left-list-li', {'isActiveLi': index === currentIndex}]" v-for="(item,index) in liData" :key="index" @click="handleClickLi(item, index)">{{item.name}}</li>
        </ul>
      </div>
      <div class="about-content-right">
        <div class="about-content-right-brief" v-show="currentIndex === 0">
          <h3 class="about-content-right-brief-title">公司简介</h3>
          <h4 class="about-content-right-brief-desc">COMPANY PROFILE</h4>
          <p class="about-content-right-brief-text">
            易临云科技旨在建立领先的临床研究云平台，以“科技创新为病人带来有效治疗”为使命，立足中国、服务全球的生命科学企业。易临云的临床研究云平台是端到端的无缝整合一体化平台，包括电子知情同意eConsent、电子数据采集EDC、随机与药物管理RTSM、电子临床结局评估eCOA、临床项目管理系统CTMS、电子试验主文档管理eTMF、基于风险的监查系统RBM等。通过易临云的专业化解决方案，为制药企业或医疗器械公司加速产品研发的进程、缩减临床研究的成本、降低临床研究的风险。
          </p>
          <p class="about-content-right-brief-text">
            公司在深圳和成都两地分别设有研发中心，管理团队在临床研究领域具有丰富的经验，产品的研发与运维团队均来自腾讯、华为、阿里巴巴等顶尖的互联网公司，对平台上各软件系统的稳定性、数据安全保障、流程规范等均符合高级别要求。公司从成立之初就获得了多名天使投资人投资，其中大部分为医药制造企业、CRO机构的高级管理人员等业内人士。
          </p>
        </div>
        <div class="about-content-right-culture" v-show="currentIndex === 1">
          <h3 class="about-content-right-brief-title">公司文化</h3>
          <h4 class="about-content-right-brief-desc">COMPANY CULTURE</h4>
          <p class="about-content-right-brief-text">"做事脚踏实地，实事求是"是易临云所创立的文化。</p>
          <h4>我们的核心价值是以先进的科技，最优的服务为客户创造价值。</h4>
        </div>
        <div class="about-content-right-review" v-show="currentIndex === 2">
          <h3 class="about-content-right-brief-title">成长历程</h3>
          <h4 class="about-content-right-brief-desc">GROWTH PROCESS</h4>
          <div class="about-content-right-review-timeline">
            <ul class="time-list">
              <li class="time-list-li"><span>2020年8月</span> <img class="time-list-li-icon" src="@/assets/imgs/历程ing-icon.png" alt=""> <span>深圳研发中心入驻深圳湾科技生态园, 开始公开对社会招贤纳士.</span></li>
              <li class="time-list-li"><span>2020年7月</span> <img class="time-list-li-icon" src="@/assets/imgs/历程ing-icon.png" alt=""> <span>深圳研发中心成立.</span></li>
              <li class="time-list-li"><span>2020年3月</span> <img class="time-list-li-icon" src="@/assets/imgs/历程ing-icon.png" alt=""> <span>成都研发中心正式在成都市武侯区成立.</span></li>
              <li class="time-list-li"><span>2020年2月</span> <img class="time-list-li-icon" src="@/assets/imgs/历程ing-icon.png" alt=""> <span>易临云（深圳）科技有限公司在深圳市正式成立.</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      liData: [
        { name: "公司简介" },
        { name: "公司文化" },
        { name: "成长历程" }
      ],
      currentIndex: 0,
      activities: [
        {
          content: "支持使用图标",
          timestamp: "2018-04-12 20:46",
          size: "large",
          type: "primary",
          icon: "el-icon-more"
        },
        {
          content: "支持自定义颜色",
          timestamp: "2018-04-03 20:46",
          color: "#0bbd87"
        },
        {
          content: "支持自定义尺寸",
          timestamp: "2018-04-03 20:46",
          size: "large"
        },
        {
          content: "默认样式的节点",
          timestamp: "2018-04-03 20:46"
        }
      ]
    };
  },
  methods: {
    handleClickLi(item, index) {
      this.currentIndex = index;
    }
  }
};
</script>
<style lang="scss" scoped>
.about {
  background: url("../assets/imgs/关于我们-头图.png") no-repeat center top;
  &-banner {
    height: 424px;
    max-width: 1230px;
    margin: 0 auto;
    &-content {
      .content {
        &-title {
          color: #3f4c6e;
          font-size: 36px;
          margin: 0;
          padding: 120px 0 0;
        }
        &-desc {
          color: #7f879b;
          font-size: 14px;
        }
        &-icon {
          display: inline-block;
          width: 40px;
          height: 10px;
          background: #1672f7;
        }
      }
    }
  }
  &-content {
    max-width: 1230px;
    margin: 0 auto;
    padding: 24px 0;
    display: flex;
    &-left {
      width: 242px;
      border-radius: 6px;
      margin-right: 16px;
      background: #fff;
      &-theme {
        margin: 0;
        background: linear-gradient(to right, #1672f7, #2ed1d1);
        height: 56px;
        line-height: 56px;
        color: #fff;
        text-align: center;
        font-size: 16px;
      }
      &-list {
        &-li {
          height: 56px;
          line-height: 56px;
          color: #1d2333;
          font-size: 14px;
          cursor: pointer;
          &.isActiveLi {
            color: #1672f7;
          }
        }
      }
    }
    &-right {
      background: #fff;
      border-radius: 6px;
      flex: 1;
      padding: 32px;
      &-brief {
        &-title {
          text-align: center;
          color: #1672f7;
          font-size: 24px;
          margin: 0;
        }
        &-desc {
          text-align: center;
          color: #1672f7;
          font-size: 14px;
          margin: 4px 0;
        }
        &-text {
          text-indent: 20px;
        }
      }
      &-review {
        &-timeline {
          width: 700px;
          margin: 20px auto;
          .time-list {
            &-li {
              display: flex;
              align-items: center;
              position: relative;
              font-size: 14px;
              margin-bottom: 30px;
              color: #737e97;
              &:hover {
                color: #1672f7;
              }
              &::before {
                display: inline-block;
                content: "";
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: #1672f7;
                position: absolute;
                left: -22px;
                top: 10px;
              }
              &::after {
                display: inline-block;
                content: "";
                width: 1px;
                height: 30px;
                background: #737e97;
                position: absolute;
                top: 28px;
                left: 90px;
              }
              &-icon {
                margin: 0 10px;
              }
              &:last-child {
                &::after {
                  width: 0;
                  height: 0;
                }
              }
            }
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 770px) {
  .about {
    background-size: auto 210px;
    &-banner {
      height: 210px;
      &-content {
        padding: 10px;
        .content-title {
          padding: 20px 0 0;
          font-size: 24px;
        }
      }
    }
    &-content {
      flex-wrap: wrap;
      &-left {
        width: 90%;
        margin: 10px auto;
      }
      &-right {
        &-review-timeline {
          width: 100%;
          .time-list {
            &-li {
              display: block;
              &::after {
                content: "";
                width: 0;
              }
              span {
                display: block;
              }
            }
          }
        }
      }
    }
  }
}
</style>