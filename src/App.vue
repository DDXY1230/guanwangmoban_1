<template>
  <div id="app">
    <!-- 头部导航栏 -->
    <Header></Header>
    <div class="main">
      <router-view/>
    </div>
    <Footer></Footer>
    <quick-to-top></quick-to-top>

  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import QuickToTop from '@/components/QuickToTop'

export default {
  components: {
    Header,
    Footer,
    QuickToTop
  }
}
</script>

<style lang="scss">
@font-face {
  src: url('./fonts/SourceHanSerifCN-Bold-2.otf') format('truetype');
  font-family: 'SourceHanSerifCN-Bold-2';
}
body {
  margin: 0;
  width: 100%;
  overflow-x: auto;
  min-width: 1280px;
}
#app {
  font-family: 'PingFangSC-Regular', 'PingFang SC','Avenir', 'Helvetica', 'Arial', 'sans-serif';
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
.highlight {
    color: #ee8a1d;
}
</style>
