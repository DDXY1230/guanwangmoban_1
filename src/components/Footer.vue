<template>
  <div class="footer">
    <img class="footer-img" src="@/assets/imgs/ECC_Logo2.png" alt="">
    <p class="footer-contact">
      <svg-icon iconClass="phone"></svg-icon>
      0755-22671619
      {{someSpace}}
      <svg-icon iconClass="email"></svg-icon>
      ecc@eclincloud.com
    </p>
    <p>© 2020-2020 易临云（深圳）科技有限公司 版权所有 粤ICP备20068916号.</p>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      someSpace: `\xa0\xa0\xa0`
    };
  }
};
</script>
<style lang="scss" scoped>
.footer {
  background: #00215F;
  color: #fff;
  text-align: center;
  padding: 60px 0 30px;
  font-size: 12px;
  margin-top: 100px;
  &-img {
    margin-bottom: 33px;
  }
  &-contact {
    margin-bottom: 26px;
  }
}
</style>