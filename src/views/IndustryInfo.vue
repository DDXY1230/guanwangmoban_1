<!-- 行业资讯 -->
<template>
  <div class='industryInfo'>
    <div class="industryInfo-banner"></div>
    <div class="industryInfo-article">
      <div class="industryInfo-article-cover">
        <img class="industryInfo-article-cover-img" src="@/assets/imgs/img_Product2.png" alt="">
      </div>
      <div class="industryInfo-article-time">
        <p class="time-1">01-20</p>
        <p class="time-2">2021</p>
      </div>
      <div class="industryInfo-article-text">
        <h4 class="industryInfo-article-text-title">最新研究发现c9ww</h4>
        <p class="industryInfo-article-text-word">利用定量模型和GIS方法，从空间布局、服务范围以及航空客流分布等方面来研究中国的机场体系及其服务水平利用定量模型和GIS方法.在中国大陆拥有26家分支行的汇丰银行（HSBC）表示，新条例将使其能够进一步扩大分行网络和服务范围。</p>
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
.industryInfo {
  &-banner {
    background: url("../assets/imgs/img_industryInfo1.png") no-repeat center;
    height: 300px;
  }
  &-article {
    display: flex;
    color: #00215f;
    justify-content: center;
    max-width: $content-width;
    margin: 0 auto;
    padding: 40px 0;
    &-cover {
      width: 480px;
      height: 280px;
      &-img {
        width: 480px;
        height: 280px;
        object-fit: cover;
      }
    }
    &-time {
      width: 180px;
      padding: 0 0 0 40px;
      .time-1 {
        font-size: 48px;
        font-weight: 500px;
        margin: 4px;
      }
      .time-2 {
        font-size: 28px;
        margin: 0;
      }
    }
    &-text {
      flex: 1;
      &-title {
        font-size: 28px;
        margin: 0;
      }
      &-word {
      }
    }
  }
}
</style>