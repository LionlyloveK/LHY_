import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import {imgTurn} from './assets/js/imgTurn'
import './assets/css/reset.css'
import './assets/css/common.css'
import './assets/icon/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Cookies from 'js-cookie'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store/store.js'
// console.log(imgTurn)
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.prototype.imgPlay = imgTurn
Vue.prototype.cookie = Cookies
Vue.use(VueAwesomeSwiper)
Vue.use(MintUI)
var bus = new Vue();
new Vue({
  // el: '#app',
  data:{
    bus
  },
  store,
  router,
  render: h => h(App)
}).$mount('#app')
//  el 和 $mount 都是表示的挂在点 功能上没有区别， 只是写法不同
