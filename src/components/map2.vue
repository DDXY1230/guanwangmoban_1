

<!-- 成都研发中心地址 -->
<!--百度地图容器-->
<template>
  <div style="width:1040px;height:200px;border:#ccc solid 1px;" id="dituContent2"></div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {
    this.initMap(); //创建和初始化地图
  },
  watch: {},
  methods: {
    //创建和初始化地图函数：
    initMap() {
      this.createMap(); //创建地图
      this.setMapEvent(); //设置地图事件
      this.addMapControl(); //向地图添加控件
    },

    //创建地图函数：
    createMap() {
      var map = new BMap.Map("dituContent2"); //在百度地图容器中创建一个地图
      var point = new BMap.Point(104.016564, 30.638501); //定义一个中心点坐标
      map.centerAndZoom(point, 17); //设定地图的中心点和坐标并将地图显示在地图容器中

      var myIcon = new BMap.Icon(
        require("../assets/imgs/定位.png"),
        new BMap.Size(100, 100)
      );
      var marker2 = new BMap.Marker(point, { icon: myIcon }); // 创建标注
      map.addOverlay(marker2); // 将标注添加到地图中

      window.map = map; //将map变量存储在全局
    },

    //地图事件设置函数：
    setMapEvent() {
      map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
      map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
      map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
      map.enableKeyboard(); //启用键盘上下左右键移动地图
    },

    //地图控件添加函数：
    addMapControl() {
      //向地图中添加缩放控件
      var ctrl_nav = new BMap.NavigationControl({
        anchor: BMAP_ANCHOR_TOP_LEFT,
        type: BMAP_NAVIGATION_CONTROL_LARGE
      });
      map.addControl(ctrl_nav);
      //向地图中添加缩略图控件
      var ctrl_ove = new BMap.OverviewMapControl({
        anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
        isOpen: 1
      });
      map.addControl(ctrl_ove);
      //向地图中添加比例尺控件
      var ctrl_sca = new BMap.ScaleControl({ anchor: BMAP_ANCHOR_BOTTOM_LEFT });
      map.addControl(ctrl_sca);
    }
  }
};
</script>
<style lang='scss' scoped>
</style>
