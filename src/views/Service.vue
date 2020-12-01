<template>
<!-- 跟about页面样式很相似,此页是service -->
  <div class="about">
    <div class="about-banner">
      <div class="about-banner-content">
        <h2 class="content-title">{{$t('header.service')}}</h2>
        <p class="content-desc">BUSINESS SCOPE</p>
        <span class="content-icon"></span>
      </div>
    </div>
    <div class="about-content">
      <div class="about-content-left">
        <h5 class="about-content-left-theme">{{$t('header.service')}}</h5>
        <ul class="about-content-left-list">
          <li :class="['about-content-left-list-li', {'isActiveLi': String(index) === String(currentIndex)}]" v-for="(item,index) in liData" :key="index" @click="handleClickLi(item, index)">{{item.name}}</li>
        </ul>
      </div>
      <div class="about-content-right">
        <div class="about-content-right-brief" v-show="currentIndex === '0'">
          <h3 class="about-content-right-brief-title">CTMS</h3>
          <h4 class="about-content-right-brief-desc">临床研究项目管理系统</h4>
          <p class="about-content-right-brief-text">
            依据国际人用技术协调委员会（International Conference on Harmonization, ICH）临床试验管理规范（Good Clinical Practice, GCP）、美国FDA临床试验数据管理规范、中国CNDA《临床试验数据管理工作技术指南》和临床数据管理协会临床研究数据管理规范（Good Clinical Data Management Practice, GCDMP）等规定，保证整个临床试验过程中获得的各类数据信息真实可信、准确可靠，使临床试验数据质量完全符合ALCOA+原则，即可归因性（Attributable）、易读性(Legible)、同时性(Contemporaneous)、原始性(Original)、准确性(Accurate)、完整性(Complete)、一致性(Consistent)、持久性(Enduring)和可获得性（Available When Needed）。
          </p>
        </div>
        <div class="about-content-right-culture" v-show="currentIndex === '1'">
        EDC
        </div>
        <div class="about-content-right-review" v-show="currentIndex === '2'">
         RTSM
        </div>
        <div class="about-content-right-review" v-show="currentIndex === '3'">
         ECOA
        </div>
        <div class="about-content-right-review" v-show="currentIndex === '4'">
         ECOMSENT
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
        {name: 'CTMS'},
        {name: 'EDC'},
        {name: 'RTSM'},
        {name: 'ECOA'},
        {name: 'ECOMSENT'},
      ],
      currentIndex: '0',
    }
  },
  mounted() {
    this.currentIndex = String(this.$route.query.index)
  },
  methods: {
    handleClickLi(item,index) {
      this.currentIndex = String(index)
    }
  }
}
</script>
<style lang="scss" scoped>
.about {
  background: url('../assets/imgs/业务范围-头图.png') no-repeat center top;
  &-banner {
    height: 424px;
    max-width: 1230px;
    margin: 0 auto;
    &-content {
      .content {
        &-title {
          color:#3F4C6E;
          font-size: 36px;
          margin: 0;
          padding: 120px 0 0;
        }
        &-desc {
          color: #7F879B;
          font-size: 14px;
        }
        &-icon {
          display: inline-block;
          width: 40px;
          height: 10px;
          background: #1672F7;
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
        background: linear-gradient(to right,#1672F7, #2ED1D1);
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
          color: #1D2333;
          font-size: 14px;
          cursor: pointer;
          &.isActiveLi {
            color: #1672F7;
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
          color: #1672F7;
          font-size: 24px;
          margin: 0;
        }
        &-desc {
          text-align: center;
          color: #1672F7;
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
              color: #737E97;
              &:hover {
                color: #1672F7;
              }
              &::before{
                display: inline-block;
                content: '';
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: #1672F7;
                position: absolute;
                left: -22px;
                top: 10px;
              }
              &::after {
                display: inline-block;
                content: '';
                width: 1px;
                height: 30px;
                background: #737E97;
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

</style>