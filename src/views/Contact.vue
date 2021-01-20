<template>
  <div class="contact">
    <div class="contact-banner">
      <div class="contact-banner-content">
        <div class="contact-banner-content-collect">
          <h4>联系我们</h4>
          <p>请留下您的联系方式，客服会尽快与您联系。</p>
          <span class="contact-banner-content-collect-submit" @click="submit()">提交</span>
        </div>
      </div>
    </div>
    <div class="contact-location">
      <div class="contact-location-left">
        <img src="@/assets/imgs/img_conus2.png" alt="">
      </div>
      <div class="contact-location-right">
        <span class="contact-location-right-center">
          深圳研发中心
        </span>
        <p class="contact-location-right-icon">
          <svg-icon iconClass="icon_dingwei"></svg-icon>
        </p>
        <p>广东省深圳市深圳湾科技生态园12栋B座2楼13号</p>
        <p class="contact-location-right-icon">
          <svg-icon iconClass="icon_mail2"></svg-icon>
        </p>
        <p>huangyamei@eclincloud.com</p>
        <p class="contact-location-right-number">0755-22671619</p>
        <img class="contact-location-right-phone" src="@/assets/imgs/icon_phone2.png" alt="">
      </div>
    </div>
    <div class="contact-map">
      地图
    </div>
    <div class="contact-location">

      <div class="contact-location-right">
        <span class="contact-location-right-center">
          成都研发中心
        </span>
        <p class="contact-location-right-icon">
          <svg-icon iconClass="icon_dingwei"></svg-icon>
        </p>
        <p>四川省成都市武侯区武侯大道双楠段112号武侯庭园E3座</p>
        <p class="contact-location-right-icon">
          <svg-icon iconClass="icon_mail2"></svg-icon>
        </p>
        <p>huangyamei@eclincloud.com</p>
        <p class="contact-location-right-number">028-67136918</p>
        <img class="contact-location-right-phone" src="@/assets/imgs/icon_phone2.png" alt="">
      </div>
      <div class="contact-location-left">
        <img src="@/assets/imgs/img_conus3.png" alt="">
      </div>
    </div>
    <div class="contact-map">
      地图
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    submit() {}
  }
};
</script>
<style lang="scss" scoped>
.contact {
  &-banner {
    background: url("../assets/imgs/img_conus1.png") no-repeat center #000d26;
    height: 580px;
    &-content {
      height: 580px;
      max-width: $content-width;
      margin: 0 auto;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      color: #00215f;
      &-collect {
        width: 446px;
        height: 436px;
        background: #fff;
        padding: 40px;
        box-sizing: border-box;
        &-submit {
          display: inline-block;
          width: 366px;
          height: 48px;
          line-height: 48px;
          background: #ee8a1d;
          color: #fff;
          text-align: center;
        }
      }
    }
  }
  &-location {
    display: flex;
    margin: 100px 0;
    justify-content: center;
    &-left {
      text-align: right;
      width: 500px;
    }
    &-right {
      width: 450px;
      padding: 70px 0 0 60px;
      color: #00215f;
      position: relative;

      &-center {
        display: inline-block;
        width: 207px;
        height: 60px;
        line-height: 60px;
        background: #ee8a1d;
        color: #fff;
        font-size: 24px;
        text-align: center;
        position: absolute;
        top: 0;
        right: 0;
      }
      &-icon {
        padding-top: 30px;
      }
      &-number {
        font-weight: bold;
        color: #00215f;
        font-size: 48px;
      }
      &-phone {
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
  }
  &-map {
    text-align: center;
    border: 1px solid #ccc;
    height: 300px;
    width: 1000px;
    margin: 0 auto;
  }
}
</style>