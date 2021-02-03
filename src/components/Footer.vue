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
    <p class="footer-copyright">{{$t('footer.text')}}</p>
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
  background: #00215f;
  color: #fff;
  text-align: center;
  padding: 48px 0 30px;
  margin-top: 100px;

  &-img {
    margin-bottom: 4px;
    width: 208px;
  }
  &-contact {
    margin-bottom: 16px;
  }
  &-copyright {
    font-size: 12px;
  }
}
</style>