<template>
  <div class="mChannelStrategy">
    <div class="mChannelStrategy__top">
      <h3 class="mChannelStrategy__title">游玩攻略</h3>
      <a href="http://www.youxiake.com/gonglue" class="mChannelStrategy__more">
        <span>更多</span>
      </a>
    </div>
    <ul class="mChannelStrategy__list">
      <li v-for="item in list" :key="item.id">
        <a :href="item.url">
          <div class="strategy__left">
            <p>{{ item.title }}</p>
            <div class="strategy__left__info">
              <span class="strategy__browse__num">{{ item.view }}</span>
              <span class="strategy__collection__num">{{ item.likes }}</span>
            </div>
          </div>
          <i
            class="img"
            :style="'background-image: url('+item.thumb+');'"
          ></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {
        list: [],
        loc:this.$store.getters.getLoc.internalLoc
    };
  },
  created() {
    this.$axios.get(`/api/api/channel/${this.loc}`).then(res => {
    //   console.log(res.data.data.news.list);
      this.list = res.data.data.news.list
    });
  }
};
</script>
<style  scoped>
</style>