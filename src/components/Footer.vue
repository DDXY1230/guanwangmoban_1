<template>
  <div class="footer">
    <img src="@/assets/imgs/logo.png" alt="">
    <p>© 2020-2020 易临云（深圳）科技有限公司 版权所有 粤ICP备20068916号.</p>
    <p>
      <svg-icon iconClass="phone"></svg-icon>
      028-11123233
      {{someSpace}}
      <svg-icon iconClass="email"></svg-icon>
      341341241@123.com
    </p>
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
  background: #454545;
  color: #fff;
  text-align: center;
  padding: 50px 0;
}
</style>