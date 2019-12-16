<template>
  <div id="category">
    <div class="n-list clearfix">
      <a
        v-for="(catelist, index) in list"
        :key="index"
        class="n-list-item"
        @click="goRoom(catelist)"
      >
        <img class="live-feature" :src="catelist.icon" />
        <p class="title">{{ catelist.cate2Name }}</p>
      </a>
    </div>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui'
export default {
  data() {
    return {
      list: [],
      str:''
    };
  },
  beforeCreate() {
    this.$root.bus.$on("cate1Name", data => {
      console.log(data);

    });
  },
  created() {
    this.getData();
  },
  methods: {
    goRoom(id) {
        console.log(id);
      //   window.EventBus.$emit('cate2Name', id.cate2Name)
      // console.log(this.str)
      //   this.$root.bus.$emit("cate2Name", id.cate2Name);
      this.cookie.set("cate2Name", id.cate2Name);
      this.str=id.cate2Name
      this.$router.push({
        name: "rooms",
        params: {
          id: id.shortName
        }
      });
    },
    getData() {
      Indicator.open({
          text: '正在拼命的加载...',
          spinnerType: 'double-bounce'
        });
      this.$http.get("/api/cate/list").then(res => {
        const cate1Id = this.$route.params.id;
        const cate2Info = res.data.data.cate2Info;
        const result = cate2Info.filter(function(v) {
          return v.cate1Id == cate1Id;
        });
        // const result = cate2Info.filter(aaa => aaa.cate1Id == cate1Id)
        this.list = result;
        // console.log(result);
        Indicator.close()
      });
    }
  }
  // beforeDestroy() {
  //   this.$root.bus.$emit("cate2Name", this.str);
  //   // 销毁监听事件
  //   this.$root.bus.$off('cate1Name')
  //   // var obj = {
  //   //   str: this.str,
  //   //   cate2Name: id.cate2Name
  //   // };
  //   // this.$root.bus.$emit("cate2Name", obj);
  // }
};
</script>

<style lang="scss">
#category{
  padding-top: 46.23px;
}
.n-list {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: #f4f4f4;
  z-index: 4;
  .n-list-item {
    margin: 0;
    padding: 0;
    float: left;
    width: 3.3rem;
    height: 3.3rem;
    border-right: 1px dashed #ddd;
    border-bottom: 1px dashed #ddd;
    text-align: center;
    font-size: 0.32rem;
    color: #000;
    margin-left: 1px;
    &:nth-child(3n) {
      border-right: none;
    }
    img {
      margin-top: 0.66666666rem;
      margin-bottom: 0.133333333rem;
      width: 1.62666666rem;
      height: 1.62666666rem;
      border-radius: 0.8133333rem;
    }
  }
}
</style>