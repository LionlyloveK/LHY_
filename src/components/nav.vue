<template>
    <div id="headerNav">
        <div>
            <span class="left-text" @click='showNav'><i class="iconfont icon-xuanxiang" @click='showNav'></i>直播分类</span>
            <span class="right-text" @click="goHome">斗鱼TV</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'headerNav',
    methods: {
        showNav(){
            this.$emit('open')
        },
        goHome(){
            this.$router.push({
                path:'/'
            })
        }
    },
}
</script>
<style scoped>
    #headerNav{
        position: fixed;
        width: 100%;
        margin-bottom: 50px;
        z-index: 50;
    }
    #headerNav div{
        display: flex;
        justify-content: space-between;
        background: #282828;
        height: 1.233rem;
        line-height: 1.233rem;
        padding: 0 20px 0 15px;
    }
    #headerNav div .left-text{
        font-size: 0.427rem;
        color: #ffffff;
    }
    .right-text{
        font-size: .427rem;
        color: #f70;
        font-weight: bold;
    }
    i{
        padding: 0 10px 0 0;
    }
</style>