<template>
  <div class="home">
    <div class="mIndexBanner">
    <div class="mIndexBanner__header">
      <div class="header__location">
        <span>杭州</span>
        <i></i>
      </div>
      <div class="header__search">
        <i class="search__button"></i>
        <input
          readonly="readonly"
          placeholder="搜索目的地"
          type="search"
          autocomplete="off"
          class="search__input"
        />
      </div>
      <div class="header__button"></div>
    </div>
    </div>
    <swiper :options="swiperOption">
　　<swiper-slide 
          v-for="(item,index) in flash" 
          :key="index"
          >
          <img :src="item.thumb" :title="item.title">
          </swiper-slide>
　　<div class="swiper-pagination" slot="pagination"></div>
</swiper>
<!-- 首页导航 -->
<my-indexnav style="display:flex;flex-wrap:wrap;"></my-indexnav>
<!-- 本地生活 -->
<my-local></my-local>
<!-- 分类 -->
<my-classify v-for="(item,index) in classArr" :key="index" :item="item"></my-classify>
<!-- 比赛 -->
<my-race></my-race>
<!-- 全球 -->
<my-global></my-global>
<!-- 主题游 -->
<my-theme></my-theme>
<!-- 叮当日记 -->
<my-hero></my-hero>
<!-- 底部导航 -->
<!-- <my-btnav></my-btnav> -->
<!-- 推荐 -->
<my-recommend></my-recommend>
  </div>
</template>
<script>
</script>
<script>
// @ is an alias to /src
// 首页导航
import IndexNav from '@/components/IndexNav'
import '@/assets/js/test.js'
import HelloWorld from '@/components/HelloWorld.vue'
import LocalLife from '@/components/LocalLife.vue'
import Classify from '@/components/Classify.vue'
import Race from '@/components/Race.vue'
import Global from '@/components/Global.vue'
import Theme from '@/components/Theme.vue'
import HeroDaily from '@/components/HeroDaily.vue'
import BottomNav from '@/components/BottomNav.vue'
import Recommend from '@/components/Recommend.vue'
export default {
  name: 'home',
  components: {
    HelloWorld,
    "my-indexnav":IndexNav,
    "my-local":LocalLife,
    "my-classify":Classify,
    "my-race":Race,
    "my-global":Global,
    "my-theme":Theme,
    "my-hero":HeroDaily,
    "my-btnav":BottomNav,
    "my-recommend":Recommend
  },
  data() {
    return {
        swiperOption: {
      　　pagination: {
      　　　　el: '.swiper-pagination',
      　　　　clickable: true // 允许点击小圆点跳转
      　　},
      　　autoplay: {
      　　　　delay: 3000,
      　　　　disableOnInteraction: false // 手动切换之后继续自动轮播
      　　},
      　　loop: true,
      　　navigation: {
      　　　　nextEl: '.swiper-button-next',
      　　　　prevEl: '.swiper-button-prev'
      　　}
      },
      // 轮播
      flash:[],
      // 导航
      idxNav:[],
      // 分类
      classArr:[]
    }
  },
  created() {
    this.$axios.get('/api/api/index?random=1570602769043').then((res)=>{
          this.flash = res.data.data.flash
    })
    this.$axios.get('/api/api/index?random=1570602769043').then((res)=>{
          this.classArr = res.data.data.classified
    })
    // this.$axios.get('/api/api/channel/cn').then((res)=>{
    //       console.log(res)
    // })
  },
}
</script>
<style>
html {
  font-size: 55px;
}
body {
  overflow-x: hidden;
}
.mIndexBanner {
  position: relative;
  width: 7.5rem
}

.mIndexBanner .mIndexBanner__header {
  width: 7.5rem;
  background: #ffd720
}

.mIndexBanner .mIndexBanner__header,.mIndexBanner .mIndexBanner__header .header__location {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: .88rem
}

.mIndexBanner .mIndexBanner__header .header__location {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 1.55rem;
  line-height: .88rem;
  text-align: center;
  color: #333;
  text-shadow: 0 0 .08rem rgba(0,0,0,.18);
  overflow: hidden
}

.mIndexBanner .mIndexBanner__header .header__location span {
  display: inline-block;
  max-width: 1rem;
  font-size: .32rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis
}

.mIndexBanner .mIndexBanner__header .header__location i {
  display: inline-block;
  margin-left: .1rem;
  width: .22rem;
  height: .12rem;
  vertical-align: 2px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAMCAYAAABm+U3GAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjMzJmODZmZS01ZGI3LTQ1MzgtOTk5MC1iNTJhYTc0NmE4YTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzVCOEY4QTQ5N0RFMTFFOTgwRENDNzFFMDdDQUE3MzciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzVCOEY4QTM5N0RFMTFFOTgwRENDNzFFMDdDQUE3MzciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MGQ1OGRmZjQtODMzMS00ZjQ2LWEyMzYtMTliODM1ZDAzMWQxIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6Njc4MDE3ZTItODAwNC0xMWU4LTk4MzItZGE5YThmODNkZTNjIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+sIDilQAAAM1JREFUeNqc0kEKwjAQBdBJV4LHaW+kuLEq6EI34lJBrGCtiF4pR3HpPv7AVMaQpLGB34Z0eJmEqjzPD0RUIg2y0Vob6jGKolB4VcgEOSnAb0yG/P2KzP/FGX0gY156ZXjcRI3t/MKFfVE77hZe98UD6Bkn3mZ87NKD1zE8gi7txHZMAm9E0TSE89rTQasW/cICn3XhAh056Epurowxvm5qRtvR8KaUgnrhDnyQggbhCE4p6M8duyNw50lotGOn8z2yQGzxEeiu6x//CDAA5U1ph7g726YAAAAASUVORK5CYII=) 50% no-repeat;
  background-size: .22rem .12rem
}

.mIndexBanner .mIndexBanner__header .header__search {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 4.83rem;
  height: .6rem;
  border-radius: .1rem;
  background: #fff;
  -webkit-box-shadow: 0 0 .06rem rgba(0,0,0,.06);
  box-shadow: 0 0 .06rem rgba(0,0,0,.06)
}

.mIndexBanner .mIndexBanner__header .header__search .search__button {
  display: inline-block;
  margin: 0 .2rem;
  width: .3rem;
  height: .3rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjMzJmODZmZS01ZGI3LTQ1MzgtOTk5MC1iNTJhYTc0NmE4YTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkJGMzQwMzc4MjdDMTFFOEJFQjNCQ0FDOTUyMjBDMTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkJGMzQwMzY4MjdDMTFFOEJFQjNCQ0FDOTUyMjBDMTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NmE0N2E2MDQtZmM1Zi1hNjQzLTllOGYtNWViNjg2OTQ5ZTgyIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6Njc4MDE3ZTItODAwNC0xMWU4LTk4MzItZGE5YThmODNkZTNjIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+qApnjwAAAlpJREFUeNq8l1uITWEUx78zTJo8oMajGQ1Rw6hR5J4HFDIjckpeGMybogzlwYskD/IwlEOSF8mQSBGO3EtjGOUyRgq5ayhybTR+q/5Tu3H2Pnuf83VW/VprX/99+/u+tdZOZTIZl8eGwzSYA7U69xGuwk145RLa4Ihrk2ATrA65vl7+MuyDM8WK7oYtgWMb0UWNMAVDYSoshXniPKyBD0lFyyELs3W8B1rhZcjzFdAEO2EhPNE0PIwSLRtwfEuCb6EeNkcImv2E/VAFZ2EE3IXquKKHYAq8gYnQmWBtfIVGaIMhcCWOqI1qneJZ8MUVZmnohhrYlk+0VX47vHDFWVp+h+Y8p+gomAl9sMsVbw/ght6dDhNtVHwcep0fOyjfECY6TvFt588eyY8PEx2p+JNH0W752lzzaqKDFPd6FP0ln8qV9coC26PSo+gYeSsG33KJvlNc7VF07IDP/J9oVvFKj6KL5e+Eidqe+gyjYa4HQZvDZsVHojJSf8o67EH0gIStFD6PEs0o/dUo8RdqK2Ct4uY4VWaBvCX+vQUI2po4oXhVVEkMij5TB2C2UXNdH0OsUjX1WODcsiSdQ1ZtyCmVuHsqzicVv9d9w7Qt0oHPabYBFsFyaNe7+uL0SO16oZWmFiXthjyjbVNZ7FKTZnl8uroIE/4b1a702x/Yqrxs3eBpeArf4Qe8hutq3iZoxF2B52fANZgMHeq9YrWgZj1wVCQ12/OXtE461Ar9jhqpL5sPF6BOa6KiFKJOrek5lbn79sdQClGzJfoDsKL+uFSiTn8Dtv16/gkwAP1kd6Xdo9UmAAAAAElFTkSuQmCC) 50% no-repeat;
  background-size: .29rem .29rem
}

.mIndexBanner .mIndexBanner__header .header__search .search__input {
  width: 3.5rem;
  height: .59rem;
  font-size: .28rem;
  color: #333
}

.mIndexBanner .mIndexBanner__header .header__search .search__service {
  display: inline-block;
  margin-left: .05rem;
  width: .4rem;
  height: .32rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgCAYAAABgrToAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjMzJmODZmZS01ZGI3LTQ1MzgtOTk5MC1iNTJhYTc0NmE4YTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjBFN0Y5NkI4MjdDMTFFOEE2MDhFQkQwMzIzNEM0MTIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjBFN0Y5NkE4MjdDMTFFOEE2MDhFQkQwMzIzNEM0MTIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NmE0N2E2MDQtZmM1Zi1hNjQzLTllOGYtNWViNjg2OTQ5ZTgyIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6Njc4MDE3ZTItODAwNC0xMWU4LTk4MzItZGE5YThmODNkZTNjIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+4eW/JAAABRhJREFUeNqsmHtsFUUUh2/XSypogQooECJv0VQIiikRH4UYDIk8TAQEJBqNVkjQIqRJ8Q9FI74qPngEKcT4iG8RNcG3RlAxBQ3RopHaIBDBIilQitxexF5/x3ybjMPm3t7rnuTL7O7szpw5c+acmS3KZDKJQqWurq6Pil7iXNGb6zPFEdEiDlIeEif87ysrK3P2kSxAqWIVF4uJYrK4Iscn+8Wn4h2xQ+zNp79knsqNVXE7mLSJ78Sv4oBoFWlRgkUHi0HiFvhFPCPewrrxKCjFbArvFA/yyCzxidgkvhF/Zfn8fHGtmITFV4kbxX3ii1x9F+XyQSl3kYrVYoL4TawVa+Q/LarL10NMyXliGveL1M5TBSsoBUareE2MEB+JJWpwh1Pvf9JDdGHq01n6XSAe4v0VolrtnsxLQXU+XMWHYohYJ6rUSMp7ZwCLZTz+Zq5QzCq2xbGdBbI1oourxQv4qFlxsdrPdMoH1XE/HHkIUzrf/Vj1pSoWslj6iz/Ej/imWaKnGCquEw8w0FrxudPNFnG92CjuYQGtyWlBdV7EiKoY/WQpl3bqzVorCTVv4wLbCR9uY6ZkGQvkbu5N2aVuHFR7NgPvinazqp7tdPUJIgxYIe4QjeJmT7mZWOMsHP0G8abY4ylnclR8Le4XY5kJu36Z70MlLRosFzYrtcxOtIKqLMFy3cSz+vh3p84s8Sqdjlfde3ms3kZW7yIxh6jgyuO4h63yy7NZsAy/+ZaFESo3kpHXixlSbl+B2dFcp5qgvcSxYhsWNrlN/XU9TUE97MsUWJjYrY+OOw1XkxkW6vnhxP+TJxjsUvVZ7jzfTSaaKub+ZxXrRVtxr4sx4eJxFLcAPVssk3LbEvHIw2IKUz6LZx0iRWysxYqrA11010WNo1zCc3hr4E/xUiI++Uk8b2FG/Y/imaXLv52A/6htRGyKh4lbvQYyWM9evIYs0piIVz4gqFdwb/HzlFNvFpwbKniG93GHs2gsWNf7UR7Ll7rugP+W0rifAnt671pgbxaXct/uWDCUywIaTERZkCyRYpPg52jbyWzDwgGDrCECrCBUmYwig3yF34VykPjZn/sTngX/DfYBo/AlHMk5dNzm1ZtzX4n1FxB4zUL3YnELI+Ow2GysVEY0SDhT2uoYKMqCh0zBnyO24x1OWcw23pXvWTg24p04uFm6gU72sIHN4LspFPohYi9w0lkkvgW3JMmhtcRA34ItjiVdeZLR9ybBt4dBlhRYz0o1eYXptkE+57RxNtO7y3ErV8Fj9m0g57fGnyanhr5XQtnEyEZ4h52MWE8oaHWqzJrL2GSEkia1LWcbFspgaHKehYawFHuX7T0DOjwqZpKHN5JvwxxqZ45phJw4pRyrbuY+xa7mDXGT9HnxtP2gHq5kKxXep6WYKfwYi2JTTMolWUh7HWMcU39V/otBJxr7kvLCGK1nG9Wr7IQnpY6EbhP1YmcU7Ed5OCblenH0NN9bH8excw4hZWsMylm8fJ9BX8I2K6sEOY6c49g116mxXc7zQhbMMDKKLY7pxNKcku1UV86+zcLEDOLSGA7fEwgpj5DuskkXsk0NYWQKx4bC/81IuQrCTSmRfgNBuQ+Kbua4OQmrfMyWvZkBmYUv4Dg6kesNHJoa4vg304TvnSdGEribyQ4NpLKB/MKYRWax7HOcbNCVTLGf3xuLxWfEurykM78+kkzHqYg6KwaQsiwr9GVKDzAg2wXtc1Jh3r/f/hFgACLNtnMPtI4pAAAAAElFTkSuQmCC) 50% no-repeat;
  background-size: .4rem .32rem
}

.mIndexBanner .mIndexBanner__header .header__button {
  width: 1.1rem;
  height: .6rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAApCAYAAAB3LnrpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjMzJmODZmZS01ZGI3LTQ1MzgtOTk5MC1iNTJhYTc0NmE4YTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDg5QzU0N0U5N0RFMTFFOTkwOEVFOUFCQTYyMzMzOTgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDg5QzU0N0Q5N0RFMTFFOTkwOEVFOUFCQTYyMzMzOTgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MGQ1OGRmZjQtODMzMS00ZjQ2LWEyMzYtMTliODM1ZDAzMWQxIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6Njc4MDE3ZTItODAwNC0xMWU4LTk4MzItZGE5YThmODNkZTNjIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WLbK6wAAAMdJREFUeNrslzEKAjEQRSeLt7FQSEoLTyCWgiLewNpTeAULvYcHiKCtCIsniT+QatGto74PLywDA3nFEr7z3g/N7CRG4iIW4mHv48RaTMt3Dcl33Q90HItEjhcHMfmwtM1LVl9Co2PcHfYszK3OzLLItTOMPQttpSLPLLIStzLI/8imZ2EnziJVJHEXS5dSshCCfXNijNbYjwQRRBBBBBFEEEGkwjgaIg2RhkhDpCHyjiCCCCKIIIIIIojQEGmINMR/aogvAQYAwSxE5fHQ+8kAAAAASUVORK5CYII=) 50% no-repeat;
  background-size: .5rem .4rem
}
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  text-decoration: none;
  list-style: none;
  font-size: .26rem;
  font-family: \\5FAE\8F6F\96C5\9ED1;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent
}

/* 轮播 */
.swiper-slide img {
  width: 100%;
}
/* 导航 */
.van-grid-item {
  cursor: pointer;
}
</style>
