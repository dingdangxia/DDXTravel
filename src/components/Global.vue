<template>
  <div class="mIndexGlobal">
    <div class="mTitle">
      <div class="title__left">
        <span>全球推荐目的地</span>
      </div>
      <a href="https://m.youxiake.com/out">
        <div class="title__right">
          <span>更多</span>
        </div>
      </a>
    </div>
    <div class="mBanner__image">
      <div class="mBanner__left">
        <a href>
          <div
            class="left__image"
            :style="'background-image: url(&quot;'+globalArr.banner[0].media_thumb+'&quot;);'"
          ></div>
        </a>
        <!---->
        <!---->
      </div>
      <div class="mBanner__right">
        <!---->
        <a
          href="https://m.youxiake.com/search/results/0-0-0-0-0-0.html?keyword=%E6%96%B0%E5%8A%A0%E5%9D%A1"
        >
          <div
            class="right__image"
            :style="'background-image: url(&quot;'+globalArr.banner[1].thumb+'&quot;);'"
          >
            <div>{{globalArr.banner[1].title}}</div>
          </div>
        </a>
        <a
          href="https://m.youxiake.com/search/results/0-0-0-0-0-0.html?keyword=%E8%B4%9D%E5%8A%A0%E5%B0%94%E6%B9%96"
        >
          <div
            class="right__image"
           :style="'background-image: url(&quot;'+globalArr.banner[2].thumb+'&quot;);'"
          >
            <div>{{globalArr.banner[2].title}}</div>
          </div>
        </a>
      </div>
    </div>
    <div class="mScroller__image">
      <div class="mScrollX globalScroll">
        <div
          class="image__container"
          style="transition-duration: 0ms; transform: translate(0px, 0px) scale(1) translateZ(0px); transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);"
        >
          <a
            class="image__list"
            style="pointer-events: auto;"
            :style="'background-image: url(&quot;'+item.thumb+'&quot;);'"
            href="https://m.youxiake.com/lines.html?id=20631"
            v-for="(item,index) in globalArr.data"
            :key="index"
          >
            <div class="list__title">{{item.title}}</div>
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
        globalArr:{"banner":[1,2,3]}
      }
    },
    created() {
      this.$axios.get("/api/api/index?random=1570602769043").then(res => {
        this.globalArr = res.data.data.photo_mdd;
      });
    }
  };
</script>

<style scoped>
.globalScroll {
  overflow-x: scroll;
}
  .mIndexGlobal {
    margin-top: 0.2rem;
    width: 7.5rem;
    background: #fff;
  }

  .mIndexGlobal .mBanner__image {
    display: felx;
    display: -webkit-flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding-bottom: 0.15rem;
  }

  .mIndexGlobal .mBanner__image span {
    position: relative;
    top: 1.1rem;
    left: 0.15rem;
    font-size: 0.28rem;
  }

  .mIndexGlobal .mBanner__image .mBanner__left a {
    display: block;
    color: #fff;
  }

  .mIndexGlobal .mBanner__image .mBanner__left a:first-child {
    padding-right: 0.01rem;
  }

  .mIndexGlobal .mBanner__image .mBanner__left a .left__image {
    background-color: #fff9db;
    background-size: cover;
    background-repeat: no-repeat;
    width: 5.46rem;
    height: 3.1rem;
  }

  .mIndexGlobal .mBanner__image .mBanner__right {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    display: -webkit-flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .mIndexGlobal .mBanner__image .mBanner__right a {
    display: block;
    color: #fff;
  }

  .mIndexGlobal .mBanner__image .mBanner__right a:first-child {
    padding-bottom: 0.01rem;
  }

  .mIndexGlobal .mBanner__image .mBanner__right a .right__image {
    position: relative;
    background-color: #fff9db;
    background-size: cover;
    background-repeat: no-repeat;
    width: 2.01rem;
    height: 1.53rem;
  }

  .mIndexGlobal .mBanner__image .mBanner__right a .right__image div {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(transparent),
      to(rgba(0, 0, 0, 0.4))
    );
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.4));
  }

  .mIndexGlobal .mScroller__image {
    height: 2.45rem;
  }

  .mIndexGlobal .mScroller__image .image__container {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    padding: 0 0.3rem;
  }
  .mIndexGlobal .mScroller__image .image__container .image__list {
    display: block;
    width: 2.02rem;
    height: 2rem;
    border-radius: 0.1rem;
    background-color: #fff9db;
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 0.11rem;
    overflow: hidden;
    position: relative;
  }

  .mIndexGlobal .mScroller__image .image__container .image__list .list__title {
    color: #fff;
    font-size: 0.28rem;
    position: absolute;
    bottom: 0;
    width: 2.02rem;
    height: 0.5rem;
    line-height: 0.5rem;
    background: rgba(0, 0, 0, 0.4);
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>