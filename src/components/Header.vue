<template>
  <div class="header">
    <div class="header-content">
      <div class="left">
        <img class="yly-icon" src="@/assets/imgs/logo.png" alt="" />
      </div>
      <div class="center">
        <!-- web端菜单 -->
        <el-menu :default-active="activeIndex" class="el-menu-demo is-web-show" mode="horizontal" @select="handleSelect">
          <el-menu-item index="/">{{ $t("header.home") }}</el-menu-item>
          <el-submenu index="/service">
            <template slot="title">服务与解决方案</template>
            <el-menu-item index="/service/CTMS">CTMS临床研究管理系统</el-menu-item>
            <el-menu-item index="/service/EDC">EDC电子数据采集</el-menu-item>
            <el-menu-item index="/service/eCOA">eCOA电子临床结局评估</el-menu-item>
            <el-menu-item index="/service">RTSM随机与药物管理</el-menu-item>
            <el-menu-item index="/service">eTMF文档管理</el-menu-item>
            <el-menu-item index="/service/eConsent">eConsent电子知情同意系统</el-menu-item>
          </el-submenu>
          <el-menu-item index="/industryInfo">行业资讯</el-menu-item>
          <el-menu-item index="/about">{{ $t("header.about") }}</el-menu-item>
          <el-menu-item index="/contact">{{
            $t("header.contact")
          }}</el-menu-item>
        </el-menu>
        <!-- 手机端菜单 -->
        <el-dropdown class="is-phone-show" trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            {{ currentItem }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="/">{{
              $t("header.home")
            }}</el-dropdown-item>
            <el-dropdown-item command="/about">{{
              $t("header.about")
            }}</el-dropdown-item>
            <el-dropdown-item command="/service">{{
              $t("header.service")
            }}</el-dropdown-item>
            <el-dropdown-item command="/contact">{{
              $t("header.contact")
            }}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="right">
        <span @click="languageFunc('cn')" :class="{ isActive: isCurrLocal == 'cn' }">中</span>/
        <span @click="languageFunc('en')" :class="{ isActive: isCurrLocal == 'en' }">En</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      activeIndex: "/",
      currentItem: "首页"
    };
  },
  computed: {
    isCurrLocal() {
      return this.$i18n.locale;
    }
  },
  watch: {
    $route(newVal) {
      this.getCurrentPageTitle(newVal.name);
    }
  },
  methods: {
    handleCommand(command) {
      console.log(command);
      this.$router.push({
        path: command
      });
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$router.push({
        path: key
      });
    },
    languageFunc(e) {
      this.$i18n.locale = e;
      localStorage.setItem("lang", e);
      this.getCurrentPageTitle(this.$route.name);
    },
    getCurrentPageTitle(name) {
      switch (name) {
        case "Home":
          this.activeIndex = "/";
          this.currentItem = this.$t("header.home");
          break;
        case "About":
          this.activeIndex = "/about";
          this.currentItem = this.$t("header.about");
          break;
        case "Service":
          this.activeIndex = "/service";
          this.currentItem = this.$t("header.service");
          break;
        case "Contact":
          this.activeIndex = "/contact";
          this.currentItem = this.$t("header.contact");
          break;
        default:
          this.activeIndex = "/";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  height: 60px;
  background: #fff;
  &-content {
    max-width: $content-width;
    margin: 0 auto;
    display: flex;
    .left {
      width: 100px;
      align-items: center;
      display: flex;
      background-color: #00215f;
      padding: 0 30px;
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
        color: #1672f7;
      }
    }
    ::v-deep .el-menu.el-menu--horizontal {
      border: none;
    }
  }
  .is-phone-show {
    display: none;
  }
}
.el-menu.el-menu--horizontal > .el-menu-item.is-active {
  background-color: #00215f !important;
  border: none;
  color: #fff;
}
::v-deep .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  background-color: #00215f !important;
  border: none !important;
  color: #fff !important;
}
// 适配移动端
@media only screen and (max-width: 770px) {
  .header {
    height: 45px;
    .is-web-show {
      display: none;
    }
    .is-phone-show {
      display: inline-block;
      padding: 10px;
    }
    .left {
      .yly-icon {
        height: 30px;
      }
    }
    .center {
      padding: 0;
      .el-menu-demo .el-menu-item {
        padding: 0 3px;
        height: 45px;
      }
    }
  }
}
</style>
<style >
</style>
