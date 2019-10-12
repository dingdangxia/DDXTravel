<template>
  <div class="mIndexClassified">
    <div class="mIndexClassified__container">
      <div class="mTitle">
        <div class="title__left">
          <span>{{item.content}}</span>
        </div>
        <a href="https://m.youxiake.com/photo">
          <div class="title__right">
            <span>更多</span>
          </div>
        </a>
      </div>
      <div class="mIndexClassified__content">
        <a href="https://h5.youxiake.com/hz/767">
          <div
            class="content__banner"
            :style="'background-image: url(&quot;'+item.banner[0].thumb+'&quot;);'"
          >
            <!---->
            <div class="banner__info">
              <div class="banner__title">{{item.banner[0].title}}</div>
              <div class="banner__price">
                <span>￥</span>
                <span>{{item.banner[0].price_label}}</span>
                <span>起</span>
              </div>
            </div>
          </div>
        </a>
        <div class="content__route" v-if="item.data.length!=0">
          <a
           v-for="(item2,index2) in item.data" :key="index2"
            :href="item2.url"
            
          >
            <div class="route">
              <div
                class="route__img"
                :style="'background-image: url(&quot;'+item2.thumb+'&quot;);'"
                
              >
                <div class="route__city"  v-if="item2.place_label">
                  <span>{{item2.place_label}}</span>
                </div>
              </div>
              <div class="route__desc">
                <div class="desc__title"  style="text-align=left">
                  <span>{{item2.title}}</span>
                </div>
                <div class="desc__price">
                  <span class="price__fh">￥</span>
                  <span class="price__jg">{{item2.price_label}}</span>
                  <span class="price__dw">起</span>
                </div>
              </div>
            </div>
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
        classArr: []
      };
    },
    props: {
      item:Object
    },
    created() {
      this.$axios.get("/api/api/index?random=1570602769043").then(res => {
        this.classArr = res.data.data.classified;
      });
    }
  };
</script>

<style>
  .mIndexClassified {
    margin-top: 0.2rem;
    padding-bottom: 0.3rem;
    width: 7.5rem;
    background: #fff;
  }

  .mIndexClassified .mIndexClassified__container .mIndexClassified__content {
    padding: 0 0.3rem;
  }

  .mIndexClassified
    .mIndexClassified__container
    .mIndexClassified__content
    .content__banner {
    height: 3.35rem;
    background-color: #fff9db;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
  }

  .mIndexClassified
    .mIndexClassified__container
    .mIndexClassified__content
    .content__banner
    .banner__tag {
    position: absolute;
    left: 0;
    top: 0;
    display: inline-block;
    padding: 0 0.1rem;
    height: 0.36rem;
    white-space: nowrap;
    color: #fff;
    font-size: 0.24rem;
    background: rgba(0, 0, 0, 0.5);
  }

  .mIndexClassified
    .mIndexClassified__container
    .mIndexClassified__content
    .content__banner
    .banner__info {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    width: 100%;
    height: 1.67rem;
    position: absolute;
    left: 0;
    bottom: 0;
    background: url(/static/img/img28.86e92d0.png) 50% no-repeat;
    background-size: 100% 1.67rem;
  }

  .mIndexClassified
    .mIndexClassified__container
    .mIndexClassified__content
    .content__banner
    .banner__info
    .banner__title {
    margin-bottom: 0.2rem;
    color: #fff;
    font-size: 0.32rem;
    font-weight: 700;
    width: 4.34rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .mIndexClassified
    .mIndexClassified__container
    .mIndexClassified__content
    .content__banner
    .banner__info
    .banner__price {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
    margin-bottom: 0.15rem;
  }

  .mIndexClassified
    .mIndexClassified__container
    .mIndexClassified__content
    .content__banner
    .banner__info
    .banner__price
    span {
    font-size: 0.22rem;
    color: #ff6000;
  }

  .mIndexClassified
    .mIndexClassified__container
    .mIndexClassified__content
    .content__banner
    .banner__info
    .banner__price
    span:nth-child(2) {
    font-size: 0.34rem;
  }

  .mIndexClassified
    .mIndexClassified__container
    .mIndexClassified__content
    .content__route {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    padding-top: 0.15rem;
  }

  .mIndexClassified
    .mIndexClassified__container
    .mIndexClassified__content
    .content__route
    a {
    margin-left: 0.1rem;
  }

  .mIndexClassified
    .mIndexClassified__container
    .mIndexClassified__content
    .content__route
    a:first-child {
    margin-left: 0;
  }

  .mIndexClassified
    .mIndexClassified__container
    .mIndexClassified__content
    .content__route
    .route {
    width: 2.22rem;
    height: 2.93rem;
    background-color: #f9f9f9;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    overflow: hidden;
    border-radius: 0.1rem;
  }

  .mIndexClassified
    .mIndexClassified__container
    .mIndexClassified__content
    .content__route
    .route
    .route__img {
    position: relative;
    background-color: #fff9db;
    background-size: cover;
    background-repeat: no-repeat;
    width: 2.22rem;
    height: 1.48rem;
  }

  .mIndexClassified
    .mIndexClassified__container
    .mIndexClassified__content
    .content__route
    .route
    .route__img
    .route__city {
    position: absolute;
    left: 0;
    top: 0;
    display: inline-block;
    padding: 0 0.1rem;
    height: 0.36rem;
    white-space: nowrap;
    color: #fff;
    font-size: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  .mIndexClassified
    .mIndexClassified__container
    .mIndexClassified__content
    .content__route
    .route
    .route__img
    .route__city
    span {
    display: inline-block;
    max-width: 1.7rem;
    height: 0.36rem;
    line-height: 0.36rem;
    vertical-align: middle;
    font-size: 0.24rem;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;
  }

  .mIndexClassified
    .mIndexClassified__container
    .mIndexClassified__content
    .content__route
    .route
    .route__desc {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0.16rem;
    height: 1.15rem;
  }

  .mIndexClassified
    .mIndexClassified__container
    .mIndexClassified__content
    .content__route
    .route
    .route__desc
    .desc__title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    color: #333;
    font-size: 0.28rem;
  }

  .mIndexClassified
    .mIndexClassified__container
    .mIndexClassified__content
    .content__route
    .route
    .route__desc
    .desc__price {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
    color: #ff7100;
  }

  .mIndexClassified
    .mIndexClassified__container
    .mIndexClassified__content
    .content__route
    .route
    .route__desc
    .desc__price
    span.price__jg {
    font-size: 0.32rem;
  }
  .mTitle {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    display: -webkit-flex;
    height: 0.9rem;
    line-height: 0.9rem;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .mTitle .title__left {
    -ms-flex-item-align: start;
    align-self: flex-start;
    color: #333;
  }

  .mTitle .title__left span {
    position: relative;
    left: 0.32rem;
    font-size: 0.32rem;
    font-weight: 700;
  }

  .mTitle .title__left:before {
    content: "";
    display: inline-block;
    width: 0.08rem;
    height: 0.3rem;
    background: #fed101;
    position: relative;
    top: 0.02rem;
  }

  .mTitle .title__right {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: 0.3rem;
    color: #999;
  }

  .mTitle .title__right span {
    font-size: 0.28rem;
  }

  .mTitle .title__right:after {
    content: "";
    display: inline-block;
    width: 0.15rem;
    height: 0.26rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAaCAMAAABfE/ZQAAAAOVBMVEX///+ZmZnZ2dnV1dW8vLz9/f25ubnX19e/v7/09PTq6urd3d3CwsLv7+/k5OTQ0NClpaWhoaGcnJx7nC3iAAAAW0lEQVQY05WPSxKAMAhDS1Fq8e/9D6tlUZAFo9klLwyQ0rpvyaieAGg8w6OsflwA3o2hBcUGvjF9a+D/RjaBHOYmLrXU8NzfcOMkNqSlUwppvIiViuoh1ATIxt2clAHxNWcKAAAAAABJRU5ErkJggg==);
    background-size: cover;
  }
</style>