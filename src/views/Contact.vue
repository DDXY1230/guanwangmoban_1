<template>
  <div class="contact">
    <div class="contact-banner">
      <div class="contact-banner-content">
        <div class="contact-banner-content-collect">
          <h4 class="contact-banner-content-collect-title">{{$t("contact.contactUs")}}</h4>
          <p class="contact-banner-content-collect-hint">{{$t("contact.contactWay")}}</p>
          <input class="input1" type="text" :placeholder="$t('contact.linkman')">
          <input class="input1" type="text" :placeholder="$t('contact.phone')">
          <span class="contact-banner-content-collect-submit" @click="submit()">{{$t("contact.submit")}}</span>
          <img class="left-icon" src="@/assets/imgs/ic1.png" alt="">
        </div>
      </div>
    </div>
    <div class="contact-location">
      <div class="contact-location-left">
        <img src="@/assets/imgs/img_conus2.png" alt="">
      </div>
      <div class="contact-location-right">
        <span class="contact-location-right-center">
          {{$t("contact.shenzhen")}}
        </span>
        <p class="contact-location-right-icon">
          <svg-icon iconClass="icon_dingwei" style="font-size: 40px"></svg-icon>
        </p>
        <p class="contact-location-email">{{$t("contact.shenzhenAddr")}}</p>
        <p class="contact-location-right-icon">
          <svg-icon iconClass="icon_mail2" style="font-size: 34px"></svg-icon>
        </p>
        <p class="contact-location-email">ecc@eclincloud.com</p>
        <p class="contact-location-right-number">0755-22671619</p>
        <img class="contact-location-right-phone" src="@/assets/imgs/icon_phone2.png" alt="">
      </div>
    </div>
    <div class="contact-map">
      <map1></map1>
    </div>
    <div class="contact-location">
      <div class="contact-location-right">
        <span class="contact-location-right-center">
          {{$t("contact.chengdu")}}
        </span>
        <p class="contact-location-right-icon">
          <svg-icon iconClass="icon_dingwei" style="font-size: 40px"></svg-icon>
        </p>
        <p class="contact-location-email">{{$t("contact.chengduAddr")}}</p>
        <p class="contact-location-right-icon">
          <svg-icon iconClass="icon_mail2" style="font-size: 34px"></svg-icon>
        </p>
        <p class="contact-location-email">ecc@eclincloud.com</p>
        <p class="contact-location-right-number">028-67136918</p>
        <img class="contact-location-right-phone" src="@/assets/imgs/icon_phone2.png" alt="">
      </div>
      <div class="contact-location-left">
        <img src="@/assets/imgs/img_conus3.png" alt="">
      </div>
    </div>
    <div class="contact-map">
      <map2></map2>
    </div>
  </div>
</template>
<script>
import map1 from "@/components/map1.vue";
import map2 from "@/components/map2.vue";
import { submitData } from "@/api/user.js";
export default {
  components: {
    map1,
    map2
  },
  data() {
    return {};
  },
  methods: {
    async submit() {
      let data = await submitData({ username: "123", contactWay: "138373737" });
      if (data.success) {
        this.$message.success("您的联系方式提交成功,我们会尽快联系您!");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.contact {
  line-height: 20px;
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
        min-height: 436px;
        background: #fff;
        padding: 40px;
        box-sizing: border-box;
        position: relative;
        .left-icon {
          position: absolute;
          top: 0;
          left: 16px;
        }
        input {
          outline: none;
        }
        .input1 {
          height: 50px;
          border: none;
          border-bottom: 1px solid #b2b2b2;
          transition: 0.5s;
          width: 100%;
          box-sizing: border-box;
          margin-bottom: 20px;
          line-height: 20px;
        }
        .input1:focus {
          border-bottom-color: #00215f;
        }
        .input1::-webkit-input-placeholder {
          transition: 0.5s;
          transform-origin: left top;
          color: #bbb;
        }
        .input1::-moz-placeholder {
          transition: 0.5s;
          transform-origin: left top;
        }
        .input1:-ms-input-placeholder {
          transition: 0.5s;
          transform-origin: left top;
        }
        .input1:focus::-webkit-input-placeholder {
          transform: scale(0.7) translateY(-10px);
        }
        .input1:focus::-moz-placeholder {
          transform: scale(0.7) translateY(-10px);
        }
        .input1:focus:-ms-input-placeholder {
          transform: scale(0.7) translateY(-10px);
        }
        &-title {
          margin: 0 0 19px;
          font-size: 28px;
        }
        &-submit {
          display: inline-block;
          width: 100%;
          height: 48px;
          line-height: 48px;
          background: #ee8a1d;
          color: #fff;
          text-align: center;
          margin-top: 60px;
        }
      }
    }
  }
  &-location {
    display: flex;
    margin: 100px 0 100px;
    justify-content: center;
    &-email {
      font-size: 24px;
      line-height: 30px;
      padding-left: 30px;
      min-height: 60px;
      margin: 10px;
    }
    &-left {
      text-align: right;
      width: 500px;
    }
    &-right {
      width: 580px;
      padding: 60px 0 0 60px;
      color: #00215f;
      position: relative;

      &-center {
        display: inline-block;
        padding: 0 12px;
        min-width: 207px;
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
        padding-top: 0px;
        margin: 0;
      }
      &-number {
        font-weight: bold;
        color: #00215f;
        font-size: 48px;
        font-family: "SourceHanSerifCN-Bold-2";
        // line-height: 48px;
        padding-left: 30px;
      }
      &-phone {
        position: absolute;
        bottom: -8px;
        right: 84px;
      }
    }
  }
  &-map {
    text-align: center;
    height: 200px;
    width: 1040px;
    margin: 0 auto 130px;
  }
}
</style>