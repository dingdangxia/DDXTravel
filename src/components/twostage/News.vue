<template>
  <div class="mChannelNewCommend">
    <h3 class="mChannelNewCommend__title">{{ block.block_name }}</h3>
    <div class="mChannelNewCommend__slider">
      <van-swipe class="mChannelNewCommend__list" 
      :width="180" 
      :show-indicators='false' 
      :loop='false' 
      style="padding-left: 0.2rem"
      >
        <van-swipe-item v-for="item in lines" :key="item.id" style="margin-right: 0.2rem;">
          <a :href='item.href' >
            <span class="line__gather">{{ item.class_theme_name }} | {{ item.jihe }}</span>
            <i
              class="img"
              :style="'background-image: url('+item.img+')'"
            ></i>
            <div class="line__bottom">
              <p>{{ item.title }}</p>
              <div class="line__text">
                <div class="line__price">
                  ¥
                  <span class="price">{{ item.price }}</span>
                  <span class="style__color">起</span>
                </div>
                <div class="line__days">
                  <span>{{ item.time }}</span>
                </div>
              </div>
            </div>
          </a>
        </van-swipe-item>
      </van-swipe>
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
      block:'',
      lines:[]
    };
  },
  created() {
    this.$axios.get("/api/api/channel/cn").then(res => {
      // console.log(res.data.data.new_lines);
      this.block = res.data.data.new_lines.block
      this.lines = res.data.data.new_lines.lines
    });
  }
};
</script>


<style scoped>
.mChannelNewCommend {
  background-color: #fff;
}
.mChannelNewCommend_title {
  position: relative;
  padding-left: 10px;
  line-height: 50px;
  font-size: 18px;
  font-weight: bolder;
  color: #353535;
}
.mChannelNewCommend_title > span {
  position: absolute;
  left: 0;
  top: 18px;
  width: 4px;
  height: 16px;
  background-color: #ffd800;
}

/* khlhl */

.mChannelNewCommend {
  margin-bottom: 0.2rem;
  width: 100%;
  background-color: #fff;
  overflow: hidden;
}

.mChannelNewCommend .mChannelNewCommend__title {
  position: relative;
  padding-left: 0.2rem;
  height: 0.98rem;
  line-height: 0.98rem;
  font-size: 0.36rem;
  font-weight: bolder;
  color: #353535;
}

.mChannelNewCommend .mChannelNewCommend__title:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.34rem;
  width: 0.08rem;
  height: 0.3rem;
  background-color: #ffd800;
}

.mChannelNewCommend .mChannelNewCommend__slider {
  width: 100%;
  height: 3.6rem;
  overflow: hidden;
}

.mChannelNewCommend .mChannelNewCommend__slider .mChannelNewCommend__list {
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
}

.mChannelNewCommend .mChannelNewCommend__slider .mChannelNewCommend__list .van-swipe__track {
  position: relative;
  float: left;
  margin-right: 0.2rem;
  width: 3.36rem;
  height: 100%;
}

.mChannelNewCommend
  .mChannelNewCommend__slider
  .mChannelNewCommend__list
  .van-swipe__track:first-of-type {
  margin-left: 0.2rem;
}

.mChannelNewCommend
  .mChannelNewCommend__slider
  .mChannelNewCommend__list
  .van-swipe__track
  .line__gather {
  position: absolute;
  left: 0;
  top: 0.1rem;
  padding: 0.07rem 0.12rem 0.03rem;
  font-size: 0.2rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.68);
  border-top-right-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
}

.mChannelNewCommend
  .mChannelNewCommend__slider
  .mChannelNewCommend__list
  .van-swipe__track
  .img {
  display: block;
  width: 100%;
  height: 1.88rem;
  background: #fff9db 50% no-repeat;
  background-size: cover;
  overflow: hidden;
}

.mChannelNewCommend
  .mChannelNewCommend__slider
  .mChannelNewCommend__list
  .van-swipe__track
  .line__bottom {
  width: 100%;
  background-color: #fff;
}

.mChannelNewCommend
  .mChannelNewCommend__slider
  .mChannelNewCommend__list
  .van-swipe__track
  .line__bottom
  p {
  padding-top: 0.1rem;
  height: 0.72rem;
  line-height: 0.36rem;
  font-size: 0.3rem;
  color: #353535;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.mChannelNewCommend
  .mChannelNewCommend__slider
  .mChannelNewCommend__list
  .van-swipe__track
  .line__bottom
  .line__text {
  margin-top: 0.24rem;
  line-height: 0.4rem;
  overflow: hidden;
}

.mChannelNewCommend
  .mChannelNewCommend__slider
  .mChannelNewCommend__list
  .van-swipe__track
  .line__bottom
  .line__text
  .line__price {
  float: left;
  font-size: 0.26rem;
  color: #ff7100;
}

.mChannelNewCommend
  .mChannelNewCommend__slider
  .mChannelNewCommend__list
  .van-swipe__track
  .line__bottom
  .line__text
  .line__price
  .price {
  margin: 0 0.06rem;
  line-height: 0.34rem;
  font-size: 0.34rem;
  font-weight: bolder;
}

.mChannelNewCommend
  .mChannelNewCommend__slider
  .mChannelNewCommend__list
  .van-swipe__track
  .line__bottom
  .line__text
  .line__price
  .style__color {
  color: #888;
}

.mChannelNewCommend
  .mChannelNewCommend__slider
  .mChannelNewCommend__list
  .van-swipe__track
  .line__bottom
  .line__text
  .line__days {
  float: right;
  font-size: 0.26rem;
  color: #888;
}

.mChannelNewCommend .mChannelNewCommend__single {
  margin: 0 auto;
  width: 7.1rem;
  height: 5.98rem;
}

.mChannelNewCommend .mChannelNewCommend__single a {
  position: relative;
  display: block;
}

.mChannelNewCommend .mChannelNewCommend__single a .single__line__gather {
  position: absolute;
  left: 0;
  top: 0.1rem;
  padding: 0 0.12rem;
  height: 0.36rem;
  line-height: 0.36rem;
  font-size: 0.2rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.68);
  border-top-right-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
}

.mChannelNewCommend .mChannelNewCommend__single a img {
  width: 100%;
  height: 4rem;
  vertical-align: middle;
}

.mChannelNewCommend .mChannelNewCommend__single a .single__line__bottom {
  width: 100%;
  background-color: #fff;
}

.mChannelNewCommend
  .mChannelNewCommend__single
  a
  .single__line__bottom
  .single__line__title {
  padding-top: 0.1rem;
  font-size: 0.32rem;
  font-weight: bolder;
  color: #353535;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.mChannelNewCommend
  .mChannelNewCommend__single
  a
  .single__line__bottom
  .single__line__desc {
  padding-top: 0.12rem;
  font-size: 0.24rem;
  color: #888;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.mChannelNewCommend
  .mChannelNewCommend__single
  a
  .single__line__bottom
  .single__line__text {
  margin-top: 0.28rem;
  line-height: 0.4rem;
  overflow: hidden;
}

.mChannelNewCommend
  .mChannelNewCommend__single
  a
  .single__line__bottom
  .single__line__text
  .single__line__price {
  float: left;
  font-size: 0.26rem;
  color: #ff7100;
}

.mChannelNewCommend
  .mChannelNewCommend__single
  a
  .single__line__bottom
  .single__line__text
  .single__line__price
  .price {
  margin: 0 0.06rem;
  line-height: 0.34rem;
  font-size: 0.34rem;
  font-weight: bolder;
}

.mChannelNewCommend
  .mChannelNewCommend__single
  a
  .single__line__bottom
  .single__line__text
  .single__line__price
  .style__color {
  color: #888;
}

.mChannelNewCommend
  .mChannelNewCommend__single
  a
  .single__line__bottom
  .single__line__text
  .single__line__days {
  float: right;
  font-size: 0.26rem;
  color: #888;
}

.mChannelNewCommend
  .mChannelNewCommend__single
  a
  .single__line__bottom
  .single__line__text
  .single__line__days
  span {
  float: left;
}
</style>