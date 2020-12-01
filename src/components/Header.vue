<template>
  <div class="header-wrap">
    <div class="header">
      <div class="left">
        <img src="@/assets/imgs/logo.png" alt="">
      </div>
      <div class="center">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="/">{{$t('header.home')}}</el-menu-item>
          <el-menu-item index="/about">{{$t('header.about')}}</el-menu-item>
          <el-menu-item index="/service">{{$t('header.service')}}</el-menu-item>
          <el-menu-item index="/contact">{{$t('header.contact')}}</el-menu-item>
        </el-menu>
      </div>
      <div class="right">
        <span @click="languageFunc('cn')" :class="{isActive:isCurrLocal == 'cn'}">中</span>/
        <span @click="languageFunc('en')" :class="{isActive:isCurrLocal == 'en'}">En</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      activeIndex: '/'
    }
  },
  computed: {
    isCurrLocal() {
      return this.$i18n.locale
    }
  },
  watch: {
    $route(newVal, oldVal) {
      console.log(newVal, oldVal)
      switch (newVal.name) {
        case 'Home': 
         this.activeIndex = '/'
         break
        case 'About':
         this.activeIndex = '/about'
         break
        case 'Service': 
         this.activeIndex = '/service'
         break
        case 'Contact': 
         this.activeIndex = '/contact'
         break
        default: 
         this.activeIndex = '/'
      }
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
      this.$router.push(key)
    },
    languageFunc(e) {
			this.$i18n.locale = e;
      localStorage.setItem('lang', e)
		},
  }
}
</script>
<style lang="scss" scoped>
.header-wrap {
  height: 60px;
  background: #fff;
}
.header {
  height: 60px;
  max-width: 1230px;
  margin: 0 auto;
  display: flex;
  .left {
    width: 100px;
    align-items: center;
    display: flex;
  }
  .center {
    flex: 1;
    padding-left: 30px;
  }
  .right {
    width: 60px;
    align-items: center;
    display: flex;
    span {
      cursor: pointer;
    }
    .isActive {
      color: #1672F7;
    }
  }
  ::v-deep .el-menu.el-menu--horizontal {
    border: none;
  }
}
</style>