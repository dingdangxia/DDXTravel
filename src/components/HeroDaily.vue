<template>
  <div class="mIndexHero">
    <div class="mTitle">
      <div class="title__left">
        <span>{{heroObj.header}}</span>
      </div>
      <a href="https://bbs.youxiake.com/calendar.html">
        <div class="title__right">
          <span>更多</span>
        </div>
      </a>
    </div>
    <div class="mIndexHero__content">
      <a href="https://bbs.youxiake.com/y/1023655.html">
        <div class="content__banner">
          <div
            class="banner__image"
            :style="'background-image: url(&quot;'+heroObj.thumb+'&quot;);'"
          ></div>
          <div class="banner__desc">{{heroObj.title}}</div>
        </div>
        <div class="content__heroInfo">
          <div
            class="hero__image"
            :style="'background-image: url(&quot;'+heroObj.author_avatar+'&quot;);'"
          ></div>
          <div class="hero__nick">{{heroObj.author_name}}</div>
          <div class="hero__pos">{{heroObj.location}}</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        heroObj:{}
      }
    },
    created() {
      this.$axios.get("/api/api/index?random=1570602769043").then(res => {
        this.heroObj = res.data.data.post;
      });
    }
  };
</script>

<style>
  .mIndexHero {
    margin-top: 0.1rem;
    width: 7.5rem;
    background: #fff;
  }

  .mIndexHero .mIndexHero__content {
    padding-bottom: 0.3rem;
  }

  .mIndexHero .mIndexHero__content .content__banner {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .mIndexHero .mIndexHero__content .content__banner .banner__image {
    height: 3.38rem;
    background-color: #fff9db;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .mIndexHero .mIndexHero__content .content__banner .banner__desc {
    font-size: 0.28rem;
    color: #1e1e1e;
    padding: 0.3rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .mIndexHero .mIndexHero__content .content__heroInfo {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 0.53rem;
    line-height: 0.53rem;
    padding-left: 0.31rem;
  }

  .mIndexHero .mIndexHero__content .content__heroInfo .hero__image {
    width: 0.53rem;
    height: 0.53rem;
    border-radius: 50%;
    background-color: #fff9db;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .mIndexHero .mIndexHero__content .content__heroInfo .hero__nick {
    margin-left: 0.15rem;
    color: #fdc522;
    font-size: 0.28rem;
  }

  .mIndexHero .mIndexHero__content .content__heroInfo .hero__pos {
    margin-left: 0.2rem;
    font-size: 0.28rem;
    color: #979797;
  }
</style>