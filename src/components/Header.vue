<template>
  <div class="header">
    <div class="header-content">
      <div class="left">
        <img class="yly-logo" src="@/assets/imgs/ECC_Logo.png" alt="" />
      </div>
      <div class="center">
        <!-- web端菜单 -->
        <el-menu :default-active="activeIndex" class="el-menu-demo is-web-show" mode="horizontal" menu-trigger="click" @select="handleSelect">
          <el-menu-item index="/">{{ $t("header.home") }}</el-menu-item>
          <el-submenu index="/service">
            <template slot="title">{{ $t("header.service") }}</template>
            <el-menu-item index="/service/CTMS">{{ $t("header.ctms") }}</el-menu-item>
            <el-menu-item index="/service/EDC">{{ $t("header.edc") }}</el-menu-item>
            <el-menu-item index="/service/eCOA">{{ $t("header.ecoa") }}</el-menu-item>
            <el-menu-item index="/service/RTSM">{{ $t("header.rtsm") }}</el-menu-item>
            <el-menu-item index="/service/eTMF">{{ $t("header.etmt") }}</el-menu-item>
            <el-menu-item index="/service/eConsent">{{ $t("header.econsent") }}</el-menu-item>
          </el-submenu>
          <el-menu-item index="/industryInfo">{{ $t("header.news") }}</el-menu-item>
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
      if (key === "/service/eTMF") {
        this.$message.info("努力开发中💪  ,敬请期待!");
        return;
      }
      this.$router.push({
        path: key
      });
    },
    languageFunc(e) {
      // if (e == "en") {
      //   this.$message.info("努力开发中💪  , 敬请期待!");
      //   return;
      // }
      this.$i18n.locale = e;
      localStorage.setItem("lang", e);
      this.getCurrentPageTitle(this.$route.name);
    },
    getCurrentPageTitle(name) {
      console.log(name);
      switch (name) {
        case "Home":
          this.activeIndex = "/";
          this.currentItem = this.$t("header.home");
          break;
        case "About":
          this.activeIndex = "/about";
          this.currentItem = this.$t("header.about");
          break;
        case "IndustryInfo":
          this.activeIndex = "/industryInfo";
          this.currentItem = this.$t("header.news");
          break;
        case "IndustryInfoDetail":
          this.activeIndex = "/industryInfo";
          this.currentItem = this.$t("header.news");
          break;
        case "Service":
        case "CTMS":
        case "EDC":
        case "eCOA":
        case "RTSM":
        case "eTMF":
        case "eConsent":
          this.activeIndex = "/service/CTMS";
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
  height: 100px;
  background: #fff;
  &-content {
    max-width: $content-width;
    margin: 0 auto;
    display: flex;
    .left {
      width: 100px;
      align-items: center;
      display: flex;
      // background-color: #00215f;
      padding: 0 30px;
      .yly-logo {
        width: 120px;
        height: 60px;
      }
    }
    .center {
      flex: 1;
      padding-left: 30px;
    }
    .right {
      width: 60px;
      align-items: center;
      display: flex;
      font-size: 18px;
      span {
        cursor: pointer;
      }
      .isActive {
        color: #00215f;
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
.el-menu-item {
  padding: 0 42px;
  font-size: 18px;
}
.el-menu.el-menu--horizontal > .el-menu-item {
  height: 100px;
  font-weight: bold;
  color: #00215f;
  line-height: 100px;
}
::v-deep .el-menu--horizontal > .el-submenu .el-submenu__title {
  height: 100px;
  line-height: 100px;
  font-weight: bold;
  font-size: 18px !important;
  color: #00215f;
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
.el-menu--horizontal .el-menu--popup {
  .el-menu-item {
    color: #00215f;
    height: 40px;
  }
}
// 适配移动端
@media only screen and (max-width: 770px) {
}
</style>
<style >
</style>
