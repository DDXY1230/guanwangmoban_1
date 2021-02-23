<template>
  <div class="header">
    <div class="header-content">
      <div class="left">
        <img class="yly-logo" src="@/assets/imgs/ECC_Logo.png" alt="" />
      </div>
      <div class="center">
        <!-- web端菜单 -->
        <el-menu :default-active="activeIndex" class="el-menu-demo is-web-show" mode="horizontal" @select="handleSelect">
          <el-menu-item index="/">{{ $t("header.home") }}</el-menu-item>
          <el-submenu index="/about">
            <template slot="title">{{ $t("header.about") }}</template>
            <el-menu-item index="/about/company">{{ $t("header.profile") }}</el-menu-item>
            <el-menu-item index="/about/team">{{ $t("header.team") }}</el-menu-item>
          </el-submenu>
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
          <el-menu-item index="/joinUs">{{ $t("header.joinUs") }}</el-menu-item>
          <el-menu-item index="/contact">{{
            $t("header.contact")
          }}</el-menu-item>
        </el-menu>
        <!-- 手机端菜单 -->
        <el-dropdown class="is-phone-show" @command="handleCommand">
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
  mounted() {
    console.log(this.$route.name);
    this.getCurrentPageTitle(this.$route.name);
  },
  methods: {
    handleCommand(command) {
      console.log(command);
      this.$router.push({
        path: command
      });
    },
    handleSelect(key, keyPath) {
      if (key === "/service/eTMF") {
        this.$message.info("努力开发中 ,敬请期待!");
        return;
      }
      if (this.$route.path == key) return;
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
      console.log(name)
      switch (name) {
        case "Home":
          this.activeIndex = "/";
          this.currentItem = this.$t("header.home");
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
          this.activeIndex = "/service/CTMS";
          this.currentItem = this.$t("header.service");
          break;
        case "EDC":
          this.activeIndex = "/service/EDC";
          this.currentItem = this.$t("header.service");
          break;
        case "eCOA":
          this.activeIndex = "/service/eCOA";
          this.currentItem = this.$t("header.service");
          break;
        case "RTSM":
          this.activeIndex = "/service/RTSM";
          this.currentItem = this.$t("header.service");
          break;
        case "eTMF":
          this.activeIndex = "/service/eTMF";
          this.currentItem = this.$t("header.service");
          break;
        case "eConsent":
          this.activeIndex = "/service/eConsent";
          this.currentItem = this.$t("header.service");
          break;
        case "About":
        case "Company":
          this.activeIndex = "/about/company";
          this.currentItem = this.$t("header.about");
          break;
        case "Team":
          this.activeIndex = "/about/team";
          this.currentItem = this.$t("header.about");
          break;
        case "JoinUs":
          this.activeIndex = "/joinUs";
          this.currentItem = this.$t("header.joinUs");
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
      width: 140px;
      align-items: center;
      display: flex;
      // background-color: #00215f;
      padding: 0 10px;
      .yly-logo {
        width: 140px;
        height: 60px;
        object-fit: cover;
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
      line-height: 20px;
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
  padding: 0 42px !important;
  line-height: 20px;
  font-size: 20px;
  &:hover {
    color: red;
  }
}
.el-menu.el-menu--horizontal > .el-menu-item {
  height: 100px;
  font-weight: bold;
  color: #00215f;
  line-height: 100px;
  &:hover {
    color: #ee8a1d;
  }
}
::v-deep .el-menu--horizontal > .el-submenu .el-submenu__title {
  height: 100px;
  line-height: 100px;
  font-weight: bold;
  font-size: 18px !important;
  color: #00215f;
  &:hover {
    color: #ee8a1d;
  }
}
.el-menu.el-menu--horizontal > .el-menu-item.is-active {
  background-color: #00215f !important;
  border: none;
  color: #fff;
}
::v-deep .el-menu--horizontal > .el-submenu.is-active > .el-submenu__title {
  background-color: #00215f !important;
  border: none !important;
  color: #fff !important;
  &:hover {
    color: #ee8a1d;
  }
}
.el-menu--horizontal .el-menu .el-menu-item.is-active,
.el-menu--horizontal .el-menu .el-submenu.is-active > .el-submenu__title {
  color: #ee8a1d;
}
.el-menu--horizontal .el-menu--popup {
  .el-menu-item {
    color: #00215f;
    height: 54px;
    line-height: 54px;
    &:hover {
      color: #ee8a1d;
    }
  }
}
// 适配移动端
@media only screen and (max-width: 770px) {
}
</style>
<style >
</style>
