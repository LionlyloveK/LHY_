<template>
  <div class="room">
    <div class="title">
      <span>{{ cateName }}</span>
      <strong>{{ gameName }}</strong>
    </div>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
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
    <!-- <div class="btn" @click="add">
      <p>加载更多</p>
    </div>-->
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import { InfiniteScroll } from "mint-ui";
import { Indicator } from 'mint-ui'
export default {
  props: ["aa"],
  components: {},
  data() {
    return {
      list: [],
      cateName: "",
      gameName: "",
      page: 1,
      flag: true
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // console.log(vm)
      vm.flag = true;
      // vm.getRooms();
    });
  },
  // beforeCreate() {
  //   this.$root.bus.$on("cate2Name", data => {
  //     console.log(data);
  //     this.cateName = data;
  //   });
  // },
  created() {
    // console.log(1111);
    this.getRooms();
    this.cateName = this.cookie.get("cate1Name");
    this.gameName = this.cookie.get("cate2Name");
  },
  methods: {
    getRooms() {
      
      if (this.flag) {
        Indicator.open({
          text: '正在拼命的加载...',
          spinnerType: 'double-bounce'
        });
        this.$http.get(`/api/room/list?page=${this.page}&type=${this.$route.params.id}`).then(res => {
            var list = res.data.data.list;
            // console.log(list);
            if (list.length == 0) {
              Toast({
                message: "无更多",
                position: "middle",
                duration: 1000
              });
              this.flag=false
            } else {
              list.forEach(v => {
                this.list.push(v);
              });
              // console.log(this.list);
            }
            Indicator.close();
          });
      }
    },
    loadMore() {
      this.loading = true;
      this.page++;
      this.getRooms()
    },
    goDetail(id) {
      this.$router.push({
        name: "detail",
        params: {
          id: id
        }
      });
    }
  },

  beforeRouteLeave(to, from, next) {
    this.flag = false;
    next();
  }
};
</script>
<style scoped>
.room {
  padding-top: 46.23px;
}
.title {
  font-size: 12px;
  margin-left: 10px;
  line-height: 0.8333333rem;
}
.title strong {
  margin-left: 4px;
  color: #fa7122;
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
.btn {
  width: 100%;
  height: 50px;
  line-height: 40px;
  text-align: center;
  font-size: 18px;
  padding: 5px 10px;
  color: #333;
}
.btn p {
  border: 1px solid black;
  border-radius: 15px;
}
</style>