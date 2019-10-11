<template>
  <div class="mChannelHotPlace">
    <h3 class="mChannelHotPlace__title">热门目的地</h3>
    <div class="vux-slider mChannelHotPlace__swiper" >
      <div class="vux-swiper" style="height: 5.1rem;">
        <!-- <div class="vux-swiper-item" style="transform: translate3d(0px, 0px, 0px);"> -->
          <div 
          class="item__box" 
          v-for="item in des_lines" 
          :key="item.admin_id"
          style="display: contents;">
            <a 
            :href="item.target_url"
            :style="'background-image: url('+item.pic+')'"
            >
              <span>{{ item.title}}</span>
            </a>
          </div>
        <!-- </div> -->


      </div>
      <!-- <div class="vux-indicator vux-indicator-center">
        <a href="javascript:">
          <i class="vux-icon-dot active"></i>
        </a>
        <a href="javascript:">
          <i class="vux-icon-dot"></i>
        </a>
        <a href="javascript:">
          <i class="vux-icon-dot"></i>
        </a>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
        des_lines:[],
        des_all:[]
    };
  },
  created() {
    this.$axios.get("/api/api/channel/cn").then(res => {
    //   console.log(res.data.data.des_lines.lines);
      this.des_lines = res.data.data.des_lines.lines[0]
      this.des_all = res.data.data.des_lines.lines
    });
  }
};
</script>
<style>
/* .mChannelHotPlace .mChannelHotPlace__title {
    position: relative;
    padding-left: .2rem;
    height: 1.15rem;
    line-height: 1.15rem;
    font-size: .38rem;
    font-weight: bolder;
    color: #353535;
    background: #fff
}

.mChannelHotPlace .mChannelHotPlace__title:before {
    position: absolute;
    left: 0;
    top: .4rem;
    width: .08rem;
    height: .34rem;
    background-color: #ffd800
}

.mChannelHotPlace .mChannelHotPlace__swiper {
  width: 100%;
}
.vux-swiper-item{
  display: flex;
}
.mChannelHotPlace .mChannelHotPlace__swiper .item__box {
  width: 100%;
  overflow: hidden;
  flex-wrap: wrap ;
}

.mChannelHotPlace .mChannelHotPlace__swiper .item__box a {
  position: relative;
  float: left;
  margin: 0 0 0.2rem 0.2rem;
  width: 2.24rem;
  height: 2.24rem;
  background: #fff9db 50% no-repeat;
  background-size: cover;
  overflow: hidden;
}

.mChannelHotPlace .mChannelHotPlace__swiper .item__box a span {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  font-size: 0.3rem;
  font-weight: 700;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
}

.mChannelHotPlace .mChannelHotPlace__swiper .vux-indicator {
  bottom: 0 !important;
}

.mChannelHotPlace .mChannelHotPlace__swiper .vux-icon-dot {
  width: 0.14rem !important;
  height: 0.14rem !important;
  background-color: #ddd !important;
  border-radius: 50% !important;
}

.mChannelHotPlace .mChannelHotPlace__swiper .vux-icon-dot.active {
  width: 0.27rem !important;
  background-color: #ffa200 !important;
  border-radius: 0.25rem !important;
} */
</style>