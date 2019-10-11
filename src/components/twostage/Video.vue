<template>
  <div class="mChannelFilm">
    <div class="mChannelFilm__top">
      <h3 class="mChannelFilm__title">目的地视频</h3>
      <a href="/film/class" class="mChannelFilm__more">
        <span>更多</span>
      </a>
    </div>
    <div class="mChannelFilm__slider">
    <van-swipe class="mChannelFilm__list" 
      :width="173" 
      :show-indicators='false' 
      :loop='false' 
      >
      <!-- <ul class="mChannelFilm__list" style="width: 870px;"> -->
        <van-swipe-item v-for="f in film" :key="f.id">
        <!-- <li v-for="f in film" :key="f.id"> -->
          <a :href="f.url">
            <div
              class="film__top"
              :style="'background-image: url('+f.thumb+');'+'height: 1.8rem;'+'position: relative;overflow: hidden;border-top-left-radius: .1rem;border-top-right-radius: .1rem'"
            >
              <i class="film__play"></i>
              <p class="film__time">{{ f.duration }}</p>
            </div>
            <div class="film__bottom">
              <p>{{ f.title }}</p>
              <div class="film__bottom__info">
                <span class="film__play__num">{{ f.view_count }}万</span>
                <span class="film__comment__num">{{ f.comments }}</span>
              </div>
            </div>
          </a>
        </van-swipe-item>
        <!-- </li> -->
      </van-swipe>
      <!-- </ul> -->
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);
export default {
  components: {},
  data() {
    return {
        film:[],
    };
  },
  created() {
    this.$axios.get("/api/api/channel/cn").then(res => {
    //   console.log(res.data.data.film.list);
      this.film = res.data.data.film.list
    });
  }
  
};
</script>
<style  scoped>
</style>