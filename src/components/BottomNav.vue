<template>
  <van-tabbar v-model="active">
  <van-tabbar-item>
    <span>首页</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? icon.active : icon.normal"
    >
  </van-tabbar-item>
  <van-tabbar-item icon="search">订单</van-tabbar-item>
  <van-tabbar-item icon="setting-o">个人中心</van-tabbar-item>
</van-tabbar>
</template>

<script>
export default {
data() {
    return {
      active: 1,
      icon: {
        normal: '//img.yzcdn.cn/icon-normal.png',
        active: '//img.yzcdn.cn/icon-active.png'
      }
    }
  }
}
</script>

<style>

</style>