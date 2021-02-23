<!-- eCOA -->
<template>
  <div class='eCOA'>
    <div class="eCOA-banner">
      <div class="eCOA-banner-title">
        <p class="eCOA-banner-title-1">eCOA</p>
        <p class="eCOA-banner-title-2">{{$t("ecoa.assessment")}}</p>
      </div>
    </div>
    <div class="eCOA-support">
      <div class="eCOA-support-content">
        <div class="eCOA-support-content-box box-1">
          <img class="box-img" src="@/assets/imgs/img_ecoa2.png" alt="">
          <h4 class="box-strong">{{$t("ecoa.rapidDeployment")}}</h4>
          <div v-if="isCurrLocal == 'cn'">
            <p class="box-desc">业内最快实现eCOA部署</p>
            <p class="box-desc">平均在4周完成上线</p>
          </div>
          <div v-else>
            <p class="box-desc">
              ECOA deployment is the fastest in the industry, with an average of 4 weeks
            </p>
          </div>
        </div>
        <div class="eCOA-support-content-box box-2">
          <img class="box-img" src="@/assets/imgs/img_ecoa3.png" alt="">
          <h4 class="box-strong">{{$t("ecoa.internationalProject")}}</h4>
          <div v-if="isCurrLocal == 'cn'">
            <p class="box-desc">实施团队具有丰富的</p>
            <p class="box-desc">国际大型eCOA项目经验</p>
          </div>
          <div v-else>
            <p class="box-desc">
              The implementation team has rich experience in large international ECOA projects
            </p>
          </div>
        </div>
        <div class="eCOA-support-content-box box-3">
          <img class="box-img" src="@/assets/imgs/img_ecoa4.png" alt="">
          <h4 class="box-strong">{{$t("ecoa.multiservice")}}</h4>
          <div v-if="isCurrLocal == 'cn'">
            <p class="box-desc">提供从量表版权获取、翻译、语言验证、</p>
            <p class="box-desc">eCOA部署、培训、数据质量分析等服务</p>
          </div>
          <div v-else>
            <p class="box-desc">It provides services such as scale copyright acquisition, translation, language verification, ECOA deployment, training, data quality analysis, etc</p>
          </div>
        </div>
      </div>
    </div>
    <div class="eCOA-brief-wrap">
      <div class="eCOA-brief">
        <div class="eCOA-brief-left">
          <img src="@/assets/imgs/img_ecoa5.png" alt="">
        </div>
        <div class="eCOA-brief-center">
          <img src="@/assets/imgs/img_ecoa6.png" alt="">
        </div>
        <div class="eCOA-brief-right">
          <div class="eCOA-brief-right-item">
            <p class="eCOA-brief-right-item-desc">
              {{$t("ecoa.scale")}}
            </p>
          </div>
          <div class="eCOA-brief-right-item">
            <p class="eCOA-brief-right-item-desc">
              {{$t("ecoa.leasingModel")}}
            </p>
          </div>
          <div class="eCOA-brief-right-item">
            <p class="eCOA-brief-right-item-desc">
              {{$t("ecoa.support")}}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="eCOA-provide">
      <img class="eCOA-provide-img-1" src="@/assets/imgs/img_ecoa8.png" alt="">
      <img class="eCOA-provide-img-2" src="@/assets/imgs/img_ecoa9.png" alt="">
      <div class="eCOA-provide-left">
        <div class="eCOA-provide-left-box-1">
          <div class="eCOA-provide-left-box-2">
            <p>{{$t("ecoa.support_1")}}</p>
            <p>{{$t("ecoa.support_2")}}</p>
            <p>{{$t("ecoa.support_3")}}</p>
          </div>
        </div>
      </div>
      <div class="eCOA-provide-right">
        <img src="@/assets/imgs/img_ecoa7.png" alt="">
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
  computed: {
    isCurrLocal() {
      return this.$i18n.locale;
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {}
};
</script>
<style lang='scss' scoped>
.eCOA {
  &-banner {
    height: 400px;
    background: url("../../assets/imgs/img_ecoa1.png") center top no-repeat;
    background-size: cover;
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
  &-support {
    height: 514px;
    &-content {
      display: flex;
      max-width: $content-width;
      margin: 0 auto;
      justify-content: center;
      height: 480px;
      color: #00215f;
      &-box {
        flex: 1;
        text-align: center;
        padding-top: 100px;
        line-height: 20px;
        .box-img {
          width: 158px;
          height: 158px;
        }
        .box-strong {
          margin: 40px 0 10px;
          font-size: 36px;
          line-height: 36px;
        }
        .box-desc {
          margin: 0;
          font-size: 20px;
          font-weight: bold;
          line-height: 28px;
        }
        &.box-1,
        &.box-3 {
        }
      }
    }
  }
  &-brief {
    max-width: $content-width;
    margin: 0 auto;
    display: flex;
    &-wrap {
      background: #00215f;
    }
    &-left {
      width: 640px;
      height: 380px;
      img {
        width: 640px;
        height: 380px;
        object-fit: cover;
      }
    }
    &-center {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 60px;
    }
    &-right {
      padding: 40px 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      box-sizing: border-box;
      &-item {
        color: #fff;
        margin: 26px 0;
        &-desc {
          font-size: 24px;
          margin: 4px;
        }
      }
    }
  }
  &-provide {
    max-width: $content-width;
    height: 378px;
    display: flex;
    margin: 0 auto 160px;
    position: relative;
    &-img-1 {
      position: absolute;
      left: -165px;
      top: 10px;
    }
    &-img-2 {
      position: absolute;
      left: 315px;
      bottom: -140px;
    }
    &-left {
      z-index: 100;
      flex: 1;
      background-color: #687aa0;
      &-box-1 {
        width: 402px;
        height: 225px;
        border: 1px solid #fff;
        margin: 66px auto;
        position: relative;
        top: -10px;
        left: -10px;
      }
      &-box-2 {
        height: 225px;
        border: 1px solid #fff;
        box-sizing: border-box;
        margin: 0;
        position: relative;
        bottom: -10px;
        right: -10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        color: #fff;
        font-size: 24px;
        p {
          margin: 10px;
        }
      }
    }
    &-right {
      z-index: 100;
      flex: 1;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>