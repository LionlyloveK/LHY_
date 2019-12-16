<template>
  <div class="home">
    <swiper></swiper>
    <ul>
      <li v-for="item in list" :key="item.rid" @click="goDetail(item.rid)">
        <div class="roomBox">
          <img :src="item.roomSrc" alt />
          <!-- section标签标记文档的一个节 -->
          <section class="nickHnBox">
            <span>{{item.nickname}}</span>
            <span>{{item.hn}}</span>
          </section>
        </div>
        <h3>
          <span>{{item.roomName}}</span>
        </h3>
      </li>
    </ul>
  </div>
</template>

<script>
import swiper from "@/components/v-swiper";

export default {
  components: {
    swiper
  },
  name: "home",
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    // 请求默认渲染的直播间数据
    getData() {
      this.$http.get("/api/home/mix").then(res => {
        console.log(res);
        this.list = res.data.data[0].list;
      });
    },
    goDetail(id) {
      this.$router.push({
        name: "detail",
        params: {
          id: id
        }
      });
    }
  }
};
</script>
<style scoped>
.home {
  padding-top: 46.23px;
}
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
li {
  position: relative;
  display: block;
  margin: 0.13333333rem;
  width: 4.6rem;
  height: 3.28rem;
  color: #333;
  font-size: 12px;
}
li img {
  width: 100%;
  border-radius: 5px;
}
.roomBox {
  position: relative;
}
.nickHnBox {
  width: 100%;
  color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
h3 {
  font-weight: normal;
  font-size: 12px;
  color: #333;
  text-align: center;
}
h3 span {
  display: inline-block;
  width: 4rem;
  color: #000;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 0.66666667rem;
}
.my-swipe img {
  width: 100%;
  height: 180px;
}
.swiper-pagination {
  bottom: 20px !important;
}
</style>
