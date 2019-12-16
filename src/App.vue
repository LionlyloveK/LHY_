<template>
  <div id="app">
    <header-nav @open="openSidebar"></header-nav>
    <side-bar :nav-status="LeftNavStatus" @close="closeSidebar"></side-bar>
    <keep-alive>
      <router-view :key="$route.fullPath" :aa='zhen'></router-view>
    </keep-alive>
  </div>
</template>
<script>
import headerNav from "@/components/nav";
import sideBar from "@/components/sideBar";
export default {
  components: {
    headerNav,
    sideBar
  },
  data() {
    return {
      LeftNavStatus: false,
      zhen:null
    };
  },
  methods: {
    openSidebar() {
      this.LeftNavStatus = true;
    },
    closeSidebar() {
      this.LeftNavStatus = false;
    }
  },
  watch: {
  '$route': function(to){
    console.log(to)
    if (to.name == "rooms") {
      console.log(55);
      this.zhen=true
    }
  }
  }
};
</script>
<style>
/* app 组件是根组件 虽然不会往里面填充太多东西，但是是整个项目基础 */
#app {
  font-family: "Helvetica Neue", "Arial", "PingFang SC", "Hiragino Sans GB",
    "STHeiti", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
