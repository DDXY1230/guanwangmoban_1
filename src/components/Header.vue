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
          <el-menu-item index="/about">{{ $t("header.about") }}</el-menu-item>
          <el-menu-item index="/service">{{
            $t("header.service")
          }}</el-menu-item>
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
