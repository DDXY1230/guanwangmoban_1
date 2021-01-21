<!-- CTMS -->
<template>
  <div class='ctms'>
    <div class="ctms-banner">
      <div class="ctms-banner-title">
        <p class="ctms-banner-title-1">CTMS</p>
        <p class="ctms-banner-title-2">临床研究管理系统</p>
      </div>
    </div>
    <div class="ctms-brief">
      <div class="ctms-brief-left">
        <img src="@/assets/imgs/img_ctmsn2.png" alt="">
      </div>
      <div class="ctms-brief-right">
        <div class="ctms-brief-right-item">
          <h4 class="ctms-brief-right-item-title">行业领先</h4>
          <p class="ctms-brief-right-item-desc">
            业内领先的CTMS系统，具备完善的功能模块
          </p>
        </div>
        <div class="ctms-brief-right-item">
          <h4 class="ctms-brief-right-item-title">全方位掌控</h4>
          <p class="ctms-brief-right-item-desc">
            简洁明了的仪表盘和报表，实现实时掌握项目的全方位进展
          </p>
        </div>
        <div class="ctms-brief-right-item">
          <h4 class="ctms-brief-right-item-title">快速上线</h4>
          <p class="ctms-brief-right-item-desc">
            内置多套功能模板，实现快速部署，平均1-2个月完成系统上线
          </p>
        </div>
      </div>
    </div>
    <div class="ctms-support">
      <div class="ctms-support-content">
        <div class="ctms-support-content-box box-1">
          <img src="@/assets/imgs/img_ctmsn3.png" alt="">
          <p class="box-desc">同时支持PC端和移动端</p>
        </div>
        <div class="ctms-support-content-box box-2">
          <img src="@/assets/imgs/img_ctmsn4.png" alt="">
          <p class="box-desc">支持多语言、多时区和多种货币的转换</p>
        </div>
        <div class="ctms-support-content-box box-3">
          <img src="@/assets/imgs/img_ctmsn5.png" alt="">
          <p class="box-desc">具备不同角色的提醒功能</p>
        </div>
      </div>
    </div>
    <div class="ctms-security">
      <div class="ctms-security-desc desc-left">支持离线完成监查报告</div>
      <img src="@/assets/imgs/img_ctmsn6.png" alt="">
      <div class="ctms-security-desc desc-right">高级别数据安全性和多地数据备份</div>
    </div>
    <div class="ctms-connect">
      <div class="ctms-connect-left">
        <img src="@/assets/imgs/img_ctmsn7.png" alt="">
      </div>
      <div class="ctms-connect-right">
        <p>与eTMF、EDC、RTSM等系统无缝整合</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {}
};
</script>
<style lang='scss' scoped>
.ctms {
  &-banner {
    height: 400px;
    background: url("../../assets/imgs/img_ctmsn1.png") center top no-repeat;
    background-size: 100% auto;
    &-title {
      position: relative;
      max-width: $content-width;
      height: 400px;
      color: #fff;
      margin: 0 auto;
      font-size: 60px;
      font-family: "PingFangSC-Semibold", "PingFang SC";
      font-weight: 600;
      &-1 {
        position: absolute;
        bottom: 100px;
        margin: 0;
      }
      &-2 {
        position: absolute;
        bottom: 10px;
        margin: 8px 0;
      }
    }
  }
  &-brief {
    max-width: $content-width;
    margin: 0 auto;
    display: flex;
    &-left {
      width: 720px;
      height: 480px;
      img {
        width: 720px;
        height: 480px;
        object-fit: cover;
      }
    }
    &-right {
      padding: 60px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      &-item {
        color: #00215f;
        border-left: 4px solid #f4bb78;
        &-title {
          margin: 4px;
          font-size: 24px;
        }
        &-desc {
          margin: 4px;
        }
      }
    }
  }
  &-support {
    height: 426px;
    background: #9aa6c0;
    &-content {
      display: flex;
      max-width: $content-width;
      margin: 0 auto;
      justify-content: center;
      height: 426px;
      color: #fff;
      &-box {
        flex: 1;
        text-align: center;
        padding-top: 100px;
        font-size: 18px;
        .box-desc {
          margin-top: 63px;
          font-size: 18px;
        }
        &.box-1,
        &.box-3 {
          background: #00215f;
        }
      }
    }
  }
  &-security {
    max-width: $content-width;
    margin: 0 auto;
    text-align: center;
    position: relative;
    &-desc {
      width: 516px;
      height: 100px;
      line-height: 100px;
      background: #ee8a1d;
      position: absolute;
      color: #fff;
      font-size: 18px;
      box-sizing: border-box;
      font-family: "PingFangSC-Regular", "PingFang SC";
      &.desc-left {
        left: 0;
        top: 100px;
        padding-right: 36px;
      }
      &.desc-right {
        right: 0;
        bottom: 100px;
        padding-left: 36px;
      }
    }
  }
  &-connect {
    max-width: $content-width;
    margin: 40px auto;
    display: flex;
    justify-content: center;
    &-right {
      padding-left: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
}
</style>