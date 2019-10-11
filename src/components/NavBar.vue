<template>
  <van-nav-bar :title="title" left-arrow>
    <van-icon name="manager-o" color='#333' size='.4rem' slot="right" />
  </van-nav-bar>
</template>

<script>
import Vue from 'vue';
import { NavBar , Icon } from 'vant';

Vue.use(NavBar).use(Icon);
export default {
    data() {
        return {
            title:'国内游'
        }
    },
    methods: {
        onClickLeft() {
        Toast('返回');
        },
        onClickRight() {
        Toast('按钮');
        }
    }
};
</script>
<style>

.van-icon-arrow-left{
    color: #333 !important
}
.van-nav-bar__title{
    font-weight: 600
}
</style>