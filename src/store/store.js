import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        recruitScrollY: 0,
        items: [
            {
                name: "张三",
                num: "1"
            },
            {
                name: "李四",
                num: "2"
            },
            {
                name: "王五",
                num: "3"
            }
        ],
    },
    getters: {
        getItem(state) {
            return state.items
        },
        get(state) {
            return state.recruitScrollY+10
        }
    },
    mutations: {

    },
})

export default store