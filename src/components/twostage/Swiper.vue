<template>
  <div>
    <!-- swiper -->
    <div>
      <van-swipe :autoplay="3000"  style="height:4.22rem">
        <van-swipe-item v-for="(i) in images" :key="i.id">
          <img v-lazy="i.pic" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 热门线路 -->
    <div class="mChannelHotLine mChannelHotLine__has__top">
      <ul class="mChannelHotLine__list cn" >
        <li v-for="(item) in hot_lines" :key="item.id">
          <a
            :href="item.href"
          >
            <span class="line__gather">{{ item.class_theme_name }}</span>
            <i class="line__level level0"></i>
            <i
              class="img"
              :style="'background-image: url('+item.img+')'"
            ></i>
            <div class="line__bottom">
              <p>{{ item.title }}</p>
              <span class="site__gather">{{ item.jihe }}</span>
              <div class="line__price">
                ¥
                <span class="price">{{ item.price }}</span>
                <span class="style__color">起</span>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem, Lazyload } from "vant";

Vue.use(Swipe)
  .use(SwipeItem)
  .use(Lazyload);
export default {
  data() {
    return {
      images: [],
      hot_lines: [],
      loc:'cn'
    };
  },
  created() {
    this.$axios.get(`/api/api/channel/${this.loc}`).then(res => {
      // console.log(res.data.data.hot_lines.lines);
      this.images = res.data.data.slide_show,
      this.hot_lines = res.data.data.hot_lines.lines;
    });
  }
};
</script>
<style scoped>
/* swiper */
.van-swipe-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.mChannelHotLine .cn {
  background: url(../../assets/img/cn_hot.2483ed1.png) no-repeat;
  background-size: cover;
}

</style>