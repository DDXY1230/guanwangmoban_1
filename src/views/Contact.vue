<template>
  <div class="contact">
    <div class="contact-banner">
      <div class="contact-banner-content">
        <h2 class="content-title">{{$t('header.contact')}}</h2>
        <p class="content-desc">CONTACT US</p>
        <span class="content-icon"></span>
      </div>
    </div>
    <div class="contact-content">
      <div class="contact-content-item">
        <h3 class="contact-content-item-address"><img src="@/assets/imgs/icon-办公.png" alt="">深圳研发中心</h3>
        <p class="contact-content-item-way"><img src="@/assets/imgs/icon-地址.png" alt="">
          <span class="contact-content-item-way-title">{{$t('common.address')}}:</span>
          广东省深圳市深圳湾科技生态园12栋B座2楼13号
        </p>
        <p class="contact-content-item-way"><img src="@/assets/imgs/icon-电话.png" alt="">
          <span class="contact-content-item-way-title">{{$t('common.tel')}}:</span>
          0755-22671619
        </p>
        <p class="contact-content-item-way"><img src="@/assets/imgs/icon-邮件.png" alt="">
          <span class="contact-content-item-way-title">{{$t('common.email')}}:</span>
          huangyamei@eclincloud.com
        </p>
      </div>
      <div class="contact-content-item">
        <h3 class="contact-content-item-address"><img src="@/assets/imgs/icon-办公.png" alt="">成都研发中心</h3>
        <p class="contact-content-item-way"><img src="@/assets/imgs/icon-地址.png" alt="">
          <span class="contact-content-item-way-title">{{$t('common.address')}}:</span>
          四川省成都市武侯区武侯大道双楠段112号武侯庭园E3座
        </p>
        <p class="contact-content-item-way"><img src="@/assets/imgs/icon-电话.png" alt="">
          <span class="contact-content-item-way-title">{{$t('common.tel')}}:</span>
          028-67136918
        </p>
        <p class="contact-content-item-way"><img src="@/assets/imgs/icon-邮件.png" alt="">
          <span class="contact-content-item-way-title">{{$t('common.email')}}:</span>
          huangyamei@eclincloud.com
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      liData: [
        {name: 'CTMS'},
        {name: 'EDC'},
        {name: 'RTSM'},
        {name: 'ECOA'},
        {name: 'ECOMSENT'},
      ],
      currentIndex: 0,
    }
  },
  methods: {
    handleClickLi(item,index) {
      console.log(item,index)
      this.currentIndex = index
    }
  }
}
</script>
<style lang="scss" scoped>
.contact {
  background: url('../assets/imgs/联系我们-头图.png') no-repeat center top;
  &-banner {
    height: 424px;
    max-width: 1230px;
    margin: 0 auto;
    &-content {
      .content {
        &-title {
          color:#3F4C6E;
          font-size: 36px;
          margin: 0;
          padding: 120px 0 0;
        }
        &-desc {
          color: #7F879B;
          font-size: 14px;
        }
        &-icon {
          display: inline-block;
          width: 40px;
          height: 10px;
          background: #1672F7;
        }
      }

    }
  }
  &-content {
    max-width: 1230px;
    margin: 24px auto;
    background: #fff;
    padding: 20px;
    &-item {
      border-bottom: 1px solid #ccc;
      img {
        margin-right: 10px;
      }
      &-address {
        display: flex;
        align-items: center;
      }
      &-way {
        padding-left: 20px;
        &-title {
          font-weight: 700;
        }
      }
    }
  }
}

</style>