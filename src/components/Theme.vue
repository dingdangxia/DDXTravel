<template>
  <div class="mIndexTheme">
    <div class="mTitle">
      <div class="title__left">
        <span>多彩主题游</span>
      </div>
      <a href="https://m.youxiake.com/zty">
        <div class="title__right">
          <span>更多</span>
        </div>
      </a>
    </div>
    <div class="mBanner__image">
      <div class="mBanner__left">
        <a href="https://h5.youxiake.com/hz/693">
          <div
            class="left__image"
            :style="'background-image: url(&quot;'+themeArr[0].thumb+'&quot;);'"
          ></div>
        </a>
      </div>
      <div class="mBanner__right">
        <div class="right__up">
          <!---->
          <a href="https://h5.youxiake.com/hz/721">
            <div
              class="up__image"
              :style="'background-image: url(&quot;'+themeArr[1].thumb+'&quot;);'"
            ></div>
          </a>
          <!---->
          <!---->
        </div>
        <div class="right__down">
          <!---->
          <!---->
          <a href="https://h5.youxiake.com/hz/538">
            <div
              class="down__image"
              :style="'background-image: url(&quot;'+themeArr[2].thumb+'&quot;);'"
            ></div>
          </a>
          <a
            href="https://m.youxiake.com/search/results/0-0-0-0-0-0.html?keyword=%E6%88%BF%E8%BD%A6"
          >
            <div
              class="down__image"
              :style="'background-image: url(&quot;'+themeArr[3].thumb+'&quot;);'"
            ></div>
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
        themeArr:[1,2,3,4]
      }
    },
    created() {
      this.$axios.get("/api/api/index?random=1570602769043").then(res => {
        this.themeArr = res.data.data.theme.data;
      });
    }
  };
</script>

<style>
  .mIndexTheme {
    margin-top: 0.2rem;
    width: 7.5rem;
    background: #fff;
  }

  .mIndexTheme .mBanner__image {
    display: felx;
    display: -webkit-flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0 0.28rem;
    padding-bottom: 0.3rem;
    height: 4.66rem;
  }

  .mIndexTheme .mBanner__image a {
    display: block;
    color: #fff;
  }

  .mIndexTheme .mBanner__image .mBanner__left .left__image {
    width: 2.29rem;
    height: 4.66rem;
    background-color: #fff9db;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .mIndexTheme .mBanner__image .mBanner__right {
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

  .mIndexTheme .mBanner__image .mBanner__right .right__up .up__image {
    width: 4.63rem;
    height: 2.35rem;
    background-color: #fff9db;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .mIndexTheme .mBanner__image .mBanner__right .right__down {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    display: -webkit-flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .mIndexTheme .mBanner__image .mBanner__right .right__down .down__image {
    width: 2.3rem;
    height: 2.29rem;
    background-color: #fff9db;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
  }

  .mIndexTheme
    .mBanner__image
    .mBanner__right
    .right__down
    .down__image:last-child {
    width: 2.31rem;
  }
</style>