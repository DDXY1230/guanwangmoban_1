<!-- 行业信息详情 -->
<template>
  <div class='industryInfoDetail'>

    <div class="industryInfoDetail-left">
      <p class="industryInfoDetail-left-back">行业资讯 《 <span class="back" @click="back()">返回</span></p>

      <h4 class="industryInfoDetail-left-title">最新研究发现c9ww</h4>
      <p class="industryInfoDetail-left-time">2021-02-12</p>
      <img class="industryInfoDetail-left-cover" src="@/assets/imgs/img_Product2.png" alt="">
      <p>
        利用定量模型和GIS方法，从空间布局、服务范围以及航空客流分布等方面来研究中国的机场体系及其服务水平利用定量模型和GIS方法.
        在中国大陆拥有26家分支行的汇丰银行（HSBC）表示，新条例将使其能够进一步扩大分行网络和服务范围。用定量模型和GIS方法，从空间布局、服务范围以及航空客流分布等方面来研究中国的机场体系及其服务水平利用定量模型和GIS方法.在中国大陆拥有26家分支行的汇丰银行（HSBC）表示，新条例将使其能够进一步扩大分行网络和服务范围。
        利用定量模型和GIS方法，从空间布局、服务范围以及航空客流分布等方面来研究中国的机场体系及其服务水平利用定量模型和GIS方法.在中国大陆拥有26家分支行的汇丰银行（HSBC）表示，新条例将使其能够进一步扩大分行网络和服务范围
      </p>
    </div>
    <div class="industryInfoDetail-right">
      <div class="industryInfoDetail-right-item" @click="viewArticle()">
        <img class="industryInfoDetail-right-item-img" src="@/assets/imgs/img_Product2.png" alt="">
        <h5>最新研究发现c9ww</h5>
        <p>2021-02-12</p>
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
  mounted() {
    console.log(this.$route);
  },
  methods: {
    viewArticle() {
      this.$message.info('敬请期待.')
      return
      // this.$router.push({
      //   path: "/industryInfoDetail/2"
      // });
    },
    back() {
      this.$router.push({
        path: '/industryInfo'
      })
    }
  }
};
</script>
<style lang='scss' scoped>
.industryInfoDetail {
  max-width: $content-width;
  margin: 10px auto;
  display: flex;
  color: #00215f;
  &-left {
    flex: 1;
    margin-right: 200px;
    &-back {
      .back {
        cursor: pointer;
      }
    }
    &-title {
      font-size: 28px;
      margin: 0;
    }
    &-time {
      font-size: 18px;
      margin: 0 0 14px;
    }
    &-cover {
      width: 480px;
      height: 280px;
      object-fit: cover;
    }
  }
  &-right {
    width: 264px;
    padding-top: 100px;
    &-item {
      width: 264px;
      cursor: pointer;
      &-img {
        width: 264px;
        height: 154px;
        object-fit: cover;
      }
    }
  }
}
</style>