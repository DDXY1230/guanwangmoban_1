<!-- eCOA -->
<template>
  <div class='eCOA'>
    <div class="eCOA-banner">
      <div class="eCOA-banner-title">
        <p class="eCOA-banner-title-1">eCOA</p>
        <p class="eCOA-banner-title-2">临床研究管理系统</p>
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
.eCOA {
  &-banner {
    height: 400px;
    background: url("../../assets/imgs/img_ecoa1.png") center top no-repeat;
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
}
</style>