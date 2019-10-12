<template>
  <div class="mIndexSport"
  >
    <div class="mTitle">
      <div class="title__left">
        <span>活动赛事</span>
      </div>
      <a href="https://h5.youxiake.com/hz/450">
        <div class="title__right">
          <span>更多</span>
        </div>
      </a>
    </div>
    <div class="mScroller__image">
      <div class="mScrollX">
        <div
          class="image__container"
          style="transition-duration: 0ms; transform: translate(0px, 0px) scale(1) translateZ(0px); transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);"
        >
          <a
            class="image__list"
            href="https://h5.youxiake.com/hz/625"
            style="pointer-events: auto;"
            v-for="(item,index) in raceArr"
            :key="index"
          >
            <div
              class="list__image__container"
              :style="'background-image: url(&quot;'+item.thumb+'&quot;);'"
            ></div>
            <div class="list__desc__container">{{item.title}}</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        raceArr:[]
      }
    },
    created() {
      this.$axios.get("/api/api/index?random=1570602769043").then(res => {
        console.log(res.data.data.classified);
        this.raceArr = res.data.data.race.data;
      });
    }
  };
</script>

<style>
  .mIndexSport {
    margin-top: 0.2rem;
    width: 6.9rem;
    height: 11.28rem;
    background: #fff;
  }

  .mIndexSport .mScroller__image .image__container {
    width: 6.9rem;
    height: 3.17rem;
    /* display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex; */
    padding: 0 0.3rem;
  }

  .mIndexSport .mScroller__image .image__container .image__list {
    display: block;
    width: 7.09rem;
    height: 5.13rem;
    margin-right: 0.15rem;
    margin-top: .2rem;
  }

  .mIndexSport
    .mScroller__image
    .image__container
    .image__list
    .list__image__container {
    width: 7.09rem;
    height: 4.31rem;
    background-color: #fff9db;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 0.1rem 0.1rem 0 0;
  }

  .mIndexSport
    .mScroller__image
    .image__container
    .image__list
    .list__desc__container {
    height: 0.76rem;
    -webkit-box-shadow: 0 0 0.2rem 0.01rem rgba(0, 0, 0, 0.15);
    box-shadow: 0 0 0.2rem 0.01rem rgba(0, 0, 0, 0.15);
    border-radius: 0 0 0.1rem 0.1rem;
    font-weight: 700;
    font-size: 0.32rem;
    color: #333;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0.09rem 0.2rem 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>