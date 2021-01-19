<template>
  <div id="app">
    <!-- 头部导航栏 -->
    <Header></Header>
    <div class="main">
      <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #F7FCFF;
}
.main {
  min-height: calc(100vh - 120px);
  // border: 1px solid transparent;
  box-sizing: border-box;
}
</style>
