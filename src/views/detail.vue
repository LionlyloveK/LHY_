<template>
  <div id="detail">
    <iframe class="dy-inframe" frameborder="0" :src="roomId"></iframe>
    <div>{{getItem}}</div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "detail",
  data() {
    return {};
  },

  created() {
    // console.log(this.$store.state);
    // console.log(this.getItem);
    // console.log(this.get);
  },
  computed: {
    roomId() {
      return "//m.douyu.com/" + this.$route.params.id;
    },
    ...mapGetters([
      "getItem",
      'get'
    ])
  },
  methods: {
    // func () {
    //     this.$router.back()
    // }
  }
};
</script>
<style lang="scss">
.dy-inframe {
  width: 100%;
  height: 1050px;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>