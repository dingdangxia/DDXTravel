<template>
  <div class="wrapper">
    <!-- navbar -->
    <van-nav-bar :title="title" left-arrow>
      <van-icon name="manager-o" color='#333' size='.4rem' slot="right" />
    </van-nav-bar>

      <Swiper/>
      <News/>
      <Destination/>
      <Theme/>
      <Video/>
      <Strategy/>
  </div>
</template>
<script>
import Vue from 'vue';
import { NavBar , Icon } from 'vant';

Vue.use(NavBar).use(Icon);

import Swiper from '@/components/twostage/Swiper'
import News from '@/components/twostage/News'
import Destination from '@/components/twostage/Destination'
import Theme from '@/components/twostage/Theme'
import Video from '@/components/twostage/Video'
import Strategy from '@/components/twostage/Strategy'



export default {
  components: { Swiper,News,Destination,Theme,Video,Strategy },
  props: {},
  data() {
    return {
      title:'叮当侠'
    };
  },
  methods: {
    onClickLeft() {
    Toast('返回');
    },
    onClickRight() {
    Toast('按钮');
    }
  }
};
</script>
<style>
/* banner小圆点样式 */
.van-swipe__indicator{
  width: .14rem!important;
  height: .14rem!important;
  border-radius: 50%!important;
  background-color: #fff!important;
}
.van-swipe__indicator{
  opacity: 1;
}
.van-swipe__indicator--active{
  width: .27rem!important;
  background-color: #ffa200!important;
  border-radius: .25rem!important;
}



.van-icon-arrow-left{
    color: #333 !important
}
.van-nav-bar__title{
    font-weight: 600
}
.wrapper{
  background-color: #f7f7f7;
}
body {
    background-color: #f4f4f4
}

.mTogetherChannel {
    width: 100%
}

.mTogetherChannel>div:last-of-type {
    margin-bottom: 0
}

.weui-mask {
    background: rgba(0,0,0,.6)
}

.weui-mask,.weui-mask_transparent {
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0
}

.weui-toast {
    position: fixed;
    z-index: 5001;
    width: 7.6em;
    min-height: 7.6em;
    top: 180px;
    left: 50%;
    margin-left: -3.8em;
    background: hsla(0,0%,7%,.7);
    text-align: center;
    border-radius: 5px;
    color: #fff
}

.weui-icon_toast {
    margin: 22px 0 0;
    display: block
}

.weui-icon_toast.weui-icon-success-no-circle:before {
    color: #fff;
    font-size: 55px
}

.weui-toast__content {
    margin: 0 0 15px
}

.weui-loading {
    width: 20px;
    height: 20px;
    display: inline-block;
    vertical-align: middle;
    -webkit-animation: weuiLoading 1s steps(12) infinite;
    animation: weuiLoading 1s steps(12) infinite;
    background: transparent url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=") no-repeat;
    background-size: 100%
}

.weui-loading.weui-loading_transparent {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTAwIDEwMCc+PHBhdGggZmlsbD0nbm9uZScgZD0nTTAgMGgxMDB2MTAwSDB6Jy8+PHJlY3QgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjU2KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwIC0zMCknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjUpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKDMwIDEwNS45OCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjQzKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSg2MCA3NS45OCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjM4KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA2NSA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjMyKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgxMjAgNTguNjYgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4yOCknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoMTUwIDU0LjAyIDY1KScvPjxyZWN0IHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyB4PSc0Ni41JyB5PSc0MCcgZmlsbD0ncmdiYSgyNTUsMjU1LDI1NSwuMjUpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA1MCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjIpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKC0xNTAgNDUuOTggNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4xNyknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTEyMCA0MS4zNCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjE0KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgtOTAgMzUgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4xKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgtNjAgMjQuMDIgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4wMyknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTMwIC01Ljk4IDY1KScvPjwvc3ZnPgo=")
}

@-webkit-keyframes weuiLoading {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}

@keyframes weuiLoading {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}

.vux-loading .weui-toast {
    z-index: 5001
}

.weui-icon_toast.weui-loading {
    margin: 30px 0 0;
    width: 38px;
    height: 38px;
    vertical-align: baseline;
    display: inline-block
}

.vux-mask-enter,.vux-mask-enter-active,.vux-mask-leave-active {
    position: relative;
    z-index: 1
}

.vux-mask-enter,.vux-mask-leave-active {
    opacity: 0
}

.vux-mask-enter-active,.vux-mask-leave-active {
    -webkit-transition: opacity .3s;
    transition: opacity .3s
}

.vux-loading-no-text .weui-toast {
    min-height: 98px
}

.mHead__container {
    position: relative;
    width: 7.5rem;
    height: .9rem;
    text-align: center;
    background: #f7f7f7
}

.mHead__container.fixed {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10
}

.mHead__container .mHead__container__back {
    position: absolute;
    top: 0;
    left: .3rem;
    width: .19rem;
    height: .9rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAgCAYAAADwvkPPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4YzBkZWE5MS04MWIzLTExNGItYjFhOS01MjY2NTNkNjk5MzciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjRGQTk5QUFEOTQxMTFFOUIyQURDQUZDRTdCMzBDNTciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjRGQTk5QTlEOTQxMTFFOUIyQURDQUZDRTdCMzBDNTciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZGM5MGZhNzMtMTA4Ni0yZjRmLWE1YTUtYzY2M2FmMTUyMmE1IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NDQ0YWYwZmEtMTIzNy03YzRkLWJjNmQtMDVhN2RmZDVjMjJmIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+UGkWOQAAASRJREFUeNqs1r8OwVAUBnAtG29gNHkDg8HqBbowYOsDWAxWi5FFDCJdNLEI4Xk8QQcmpL4rt3Kr/+45102+HGnTn1PpuWWFYVj616pwL3Qcp40yRTzf97dsDFAH5YhUkSbywWxDSKxVdM6i/Gby1s5ITR6a4xbH0Xn7X5A2pgNpYbpQIUaBcjEqlIlxoFSMCyUwEyiGmUJfDFAL5aJAMyqkduYqs3YCNOFsABG2R17ycxedjtgYOjmg9JCnPLYG6HI7E+AOpS9BC1lSwdijYQomHloTMHWcuGDmoHPA3C2IChZujhRQa9vWBbVfKDog6b0pwaEcPQEu1NGzOP81AIgON0hZdtrAF11tzkDjQg9lgDyQALmxO1M6rKPcgQfG2O96CzAAwm2qd2Vy14oAAAAASUVORK5CYII=) 50% no-repeat;
    background-size: .19rem .32rem
}

.mHead__container .mHead__container__title {
    display: inline-block;
    max-width: 5rem;
    height: .9rem;
    line-height: .9rem;
    font-size: .32rem;
    font-weight: 700;
    color: #333;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden
}

.mHead__container .mHead__container__user {
    display: block;
    position: absolute;
    top: 0;
    right: .3rem;
    height: .9rem;
    width: .39rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAArCAYAAAD7YZFOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjYWY3ZWJjZi1iMWFkLWJiNDctYWY3OC0zYzk0MTQyNjY5NWUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTc5MTVERjAyQjIzMTFFOEFEMDg5RkI4NDExNzJFQTciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTc5MTVERUYyQjIzMTFFOEFEMDg5RkI4NDExNzJFQTciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Mjk5YTllZTItNTQ4Ni00NDQ1LWI2NjMtNGJjNzRkOWZhOTk1IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTNjYWI3M2YtMDdjMC0xMWU4LWFjMTMtZTdhNzk1NTNhNzM0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+CHiT+QAAA7FJREFUeNrMmGlIVFEUx9+MY2kLtpKhFVmEBSGWFZFt0iLt0QJ+aaFPIfil5YMEEX0KAsOgCIoIM6SFyiIxUZHKFqf0Q1FpRlRiC7SL5dL0v/SfOA3z9L13b9iBH3PfvHl3/u/cc+859/pCoZBlZxkZGXa3BoC1YCWYCcYBP+gEzeA2uASugS7LowU8/D4P5IPhUe7HglSylUL3guJ/LW4sOEdPSfsCGkEbSKCwON6bAE6DDWAz+OxGnN/h7yaCWiGsGxSBTDAMzAALQDoFLgPl4vnVoMbG21ri1J9fB0m8bqTITeAWhUrrAGUgmyLf8/s0cJlDb0zcMTCe7TowCzxw2L8SORu85PUcxqARcVlgPdutYAX45DKum+nBdl7vEi+rJS5ftLeDdx5XhUdgH9v9wA4nD/ns1jmscckcDh+HcbqlZ/HgFSfFR5DI+PTkuUUUpuyUpW9qWEvYHsoZ7nlYp4l2pWXGqkU7XUfcGNFuMiTuqU3/rsXF8zPUW2y4sG+i3V9HXDjV+EQ60rUhov1dR1yLaE8xJG6yaL/QEVcn2osNiZP9BHXElYtabIuLIqGnIZXZpt6zuGAw+AEfV3iZykSvY7vBYLaLohQMrtPXftEucJoTo1gmxVms+wpM5Fbl+iNiWCpAskth6SzZY3i9B7wxVTKpN74vKlsVyMud5G2wDdwQRWYpKDRZz7VRzENejwJXmdI2svKVlkhRqlg4DgaKFJgDfpreQ7xl3Jzkritc62WJ2dfOgB8Z5fnDYKfbTONmeVAZ4yh4HeXeaJASRVgt9xZ5XlKgU8/NBwdYotvZVxajz8Ad7hfqddae3sQNAocYQ5HDfAFUgQamom7LsAV62O2nMPBlPmzg2leqs5PXEgdhU+mVESLeVECfYAnlpN8kUUm7NTWjWwI2HqsUwpS31oHnDjtWgu5GVNJerOavDQ6EqTXpniiRarhbd3OMEM/JEaO754j0XKEQpjy2imchbjcyOdyreh1W5bGLfzwHry1knFncOKeJnXqfmJ/C1BseFN/nomTqU2FytmaLAL4JYWc0+11j/T5Y9Bp3apk6HxaXK27s1RQWx3O8gGY/OX4MqVoylobPNOC1Ks1Of4DHBka1Qb3dEvGWxQY6VTNMHSZP0vCeGtYn6uF54ssKQ7HcIeo/rdmaJtaneus/soDYtDQh3kxVFqk8pdIZ1rIAy+5wNWvCYlnPJWj20+qPKBYtQxOi00A/XcpzZ5ncSwyJU0OiDgbnai7C1b8EGAB9/NXyRFQMbAAAAABJRU5ErkJggg==) 50% no-repeat;
    background-size: .39rem .43rem
}

.mHead__container .mHead__container__index {
    display: block;
    position: absolute;
    top: 0;
    right: .3rem;
    height: .9rem;
    width: .49rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAvCAMAAAB9ntLFAAAAeFBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZma6PfNKAAAAJ3RSTlMApvkEaZZZDPDdvVDkyBT16S4gGtOsjUA2JNh5cV9HnoWzgGYStmNPT5YBAAABiUlEQVRIx92V24KCIBRFETQV8TLeUkuz2+z//8NJKi0vSDNvs57y5EKBzZHMkuQVFcYX0cZz0EH32gLFsWBxTpHrCdsQp6fZ6ghfDqzhYad1IRYwGBmU3ZoQuOBsuNxQrEzf9uHbr4UaMFUC43CD99IZqBWCAVGOi3vQzaJhwZnZ5x2otyDsEG7n6i1oMyuYi2Pl80N5FGfF6xbTbCg36yBnOM3GMixD9L6KZQSDqGBHiHKSDSU2h5sMV6nMxmqAqqDPhvytoaSX56xEQjQI5Kv02dAhccFvioewIJrEojuUHCbRZouKkBCBvsFACXEQ6xsxnC4yaWNrjX+LBoch1wwQbtUQJd8RRASIuNuZvU8BZOqFpaBAZPW7fqnBlYaHK0lGXUad3c3kf3N8PFoHcHiibzSQ5PqGCYnxFyP7/Bn/1Djj8KHRwB/1eUm2bNghXk87SyFxWf/dsaYdP9r02SwzeS9zYV3kAIWANzbYFa84xaPhP5jrsqz2Q9yh7iF+tPxjdC+0Nvk1PyjmLwkmwCCNAAAAAElFTkSuQmCC) 50% no-repeat;
    background-size: .49rem .47rem
}

.border_bottom {
    border-bottom: 1px solid #eee
}

.mSwiperBanner {
    position: relative;
    width: 100%;
    overflow: hidden
}

.mSwiperBanner .mSwiperBanner__box {
    width: 7.5rem
}

.mSwiperBanner .mSwiperBanner__box .mSwiperBanner__link {
    height: 4.22rem!important;
    background: #fff9db 50% no-repeat;
    background-size: cover;
    overflow: hidden
}

.mSwiperBanner .mSwiperBanner__box .vux-indicator {
    bottom: .4rem!important
}

.mSwiperBanner .mSwiperBanner__box .vux-indicator .vux-icon-dot {
    width: .14rem!important;
    height: .14rem!important;
    border-radius: 50%!important;
    background-color: #fff!important
}

.mSwiperBanner .mSwiperBanner__box .vux-indicator .vux-icon-dot.active {
    width: .27rem!important;
    background-color: #ffa200!important;
    border-radius: .25rem!important
}

.vux-slider {
    overflow: hidden;
    position: relative
}

.vux-slider .vux-indicator-right,.vux-slider>.vux-indicator {
    position: absolute;
    right: 15px;
    bottom: 10px
}

.vux-slider .vux-indicator-right>a,.vux-slider>.vux-indicator>a {
    float: left;
    margin-left: 6px
}

.vux-slider .vux-indicator-right>a>.vux-icon-dot,.vux-slider>.vux-indicator>a>.vux-icon-dot {
    display: inline-block;
    vertical-align: middle;
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background-color: #d0cdd1
}

.vux-slider .vux-indicator-right>a>.vux-icon-dot.active,.vux-slider>.vux-indicator>a>.vux-icon-dot.active {
    background-color: #04be02
}

.vux-slider>.vux-indicator-center {
    right: 50%;
    -webkit-transform: translateX(50%);
    transform: translateX(50%)
}

.vux-slider>.vux-indicator-left {
    left: 15px;
    right: auto
}

.vux-slider>.vux-swiper {
    overflow: hidden;
    position: relative
}

.vux-slider>.vux-swiper>.vux-swiper-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
}

.vux-slider>.vux-swiper>.vux-swiper-item>a {
    display: block;
    width: 100%;
    height: 100%
}

.vux-slider>.vux-swiper>.vux-swiper-item>a>.vux-img {
    display: block;
    width: 100%;
    height: 100%;
    background: 50% no-repeat;
    background-size: cover
}

.vux-slider>.vux-swiper>.vux-swiper-item>a>.vux-swiper-desc {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1.4em;
    font-size: 16px;
    padding: 20px 50px 12px 13px;
    margin: 0;
    background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0,transparent),to(rgba(0,0,0,.7)));
    background-image: linear-gradient(180deg,transparent 0,rgba(0,0,0,.7));
    color: #fff;
    text-shadow: 0 1px 0 rgba(0,0,0,.5);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal
}

.mChannelHotLine__has__top {
    height: 4.74rem!important
}

.mChannelHotLine__has__top .mChannelHotLine__list {
    top: -.46rem!important
}

.mChannelHotLine {
    margin-bottom: .2rem;
    width: 100%;
    height: 5.2rem;
    background-color: #fff
}

.mChannelHotLine .mChannelHotLine__list {
    position: relative;
    width: 100%;
    height: 5.2rem;
    overflow: hidden
}

.mChannelHotLine .mChannelHotLine__list li {
    position: relative;
    float: left;
    margin: 1.5rem .1rem 0 0;
    width: 2.23rem;
    border-radius: .1rem
}

.mChannelHotLine .mChannelHotLine__list li:first-of-type {
    margin-left: .3rem
}

.mChannelHotLine .mChannelHotLine__list li .line__gather {
    position: absolute;
    left: 0;
    top: .1rem;
    padding: .07rem .12rem .03rem;
    font-size: .2rem;
    color: #fff;
    background-color: rgba(0,0,0,.68);
    border-top-right-radius: .2rem;
    border-bottom-right-radius: .2rem
}

.mChannelHotLine .mChannelHotLine__list li .line__level {
    position: absolute;
    right: .08rem;
    top: 1.37rem;
    width: .48rem;
    height: .26rem;
    z-index: 100
}

.mChannelHotLine .mChannelHotLine__list li .level0 {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAaCAMAAADG6y/lAAABs1BMVEUAAAD5WU/8ZV/4Vkv0RjT7X1j4U0b2TkD3UEL5Vkv6WlD6XVX5V0z3UEL4U0f1Szv7YVr2T0D3UkX5W1H1Szr2Tj/8ZF/9Z2L5WE3zRTL6XFL0RzX7X1f1Sjn7Ylz8ZWD3VEj9Z2PzRDL6XFT0STj//v7zRDH7YVr8ZmH0RjTzRTL1Sjr5WlD6XFP2T0D7YFj6XVX5WE34VUn1TD38Ylz3Ukb3UEP9aGP9Z2P9Z2LuQjH8ZF73VEj6X1fyRTL4V0z0SDb0STjxRzf7X1f2XVbzSTn+7Ov1eHP5XFT3W1P2VkvvUUfsSz/wRzfrRDXxQzL94+H5zsv1rantTULxTD7rSj3sSTvuRTTpPy/4YVv4XVbxWFHzU0n1T0HxTkHzTD7wSTrsRznrQTD6r6r1qqX5Ylz4X1nyVUvyUkj1U0fwUUXuT0XwSj3uSTzwRTX7saz3p6TzW1T3WE/0UUTuSz/sRjj/9fX3w8DzqaX1pqP2jYf8gX36e3b0V03tRzj929r62Nb9zMn8tbL3rqr4q6b5opz2l5H5kIv8xcL8q6j9oZ7yn5nwh4Hwfnj6bGTxYlrzRzcINl8gAAAAJXRSTlMABu3g0sOpdVVANiogFg749/Lq1MK4sqecmpGPhYV7b2dlXE5IOosBbwAAAkpJREFUOMvl02dz2kAQBmDcu9N7L2fAorckVKNQRe8EkEQJxVRTjB0b3GI7vfzkrFAcmIw8yXe/nzSje2Zn9/Z4Kyurq0KhcG3NjGGYUimRSDQatVqvUJjkcpFILJbJXkv5fJVKpxMIBK9evri4wIbYnCiVOfi2NQA0EBP/7hn4jHb/AKPRZzxGOG7FlIfdHE3m0Ee9voEIgmjtd7+z4BMaghWfT6t9i2Ixj/UE2dPVavgU7aw3UKmUKu6gDzIDgMP9Y9TT/QZGnzYb30bxbMwT8O9tZjLRji3Qfo9CFZeLBVL+kWUD9fIjFRgQq3tsW95MrRaNBvwUgHLqh9/WdwIwWJLvkD0/0kN2G2XrOIDNdDhcBeAOIiYH34oMSAzAm+FYjdCDFrd6Agd7YZKkOv5AJIgqKaJUqQyA4RwQ+4LstERDnqKvAELlksvl6jsASAvNDU7gDXRzEk0ObUUAuENwvtgaTIlv4QQerzdog9sKRiLQAzRd7LccPXTEBeJxLW4GwDTdiUbcEOihJRI7ZAmmhCWZbI4CuIkYjkEJdqxuigqFSgSzSw6HM2EA0Exa8kMg9GlhqhhmTTMXV+tQ7Xa5nDINgNPpBFCwNAujwFiv42bYVjrNrAbVXocQ8mEFEIU8uxqLT+9MCiE/zQxQ0jRNkhq1Xq8gTOx6D3pQQXSC8VtPFnlMlmbvTVr/8R7Gbz5a4I1m+fmD65fOAZenHs6P8TgyNjdz48pfIDF1f254mAvNz0xfPQPX7j5b5v1PFh5PT0zcnl3i+PULofcQ/WRqJ5kAAAAASUVORK5CYII=) no-repeat;
    background-size: cover
}

.mChannelHotLine .mChannelHotLine__list li .level1 {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAaCAMAAADG6y/lAAABOFBMVEUAAAD0fxvzfRr0fhv1gBz1gR30fhzyexrxdxj2hB7yexn1gx3yehn1gRz2gx3xeBn1gh3zfRv2gx30fxvyexnxeBn2hR7yehr3hh/3hx/1gx3wdxjvdBf//v74iSDzfRv3hx/1gh30gR32hB7xeBnxexrwdxj0gBz2hR7zfxz1gx3tdxrudBfxfhzobhfrcRfxfBvnbRbueRrrdRntchfvdxnpbRbtdRnqcxnscxj75974v6DyuZ/nahXyeRnpcBjqbxbvexzlaBT41cb0u6DweBnpchnwdRfqbhb+9/T97+n2pnTvehrocBjscRb84dP2zbr7w6H87un53tLxt5/5u5P2tZLvlGH96d7618b60bvxoXP98On81Lvwr5H0q4PyqYPtm3L3oGP2llD1lVDxkU/2jDnsgDd6EChCAAAAHHRSTlMAjH44Burg1cjDs6Wbb2ZYTkUqIBb49/Lxsg8NV7fvcAAAAjZJREFUOMvlk9d62kAQRrFx7y3dG4NAgLS7KquKhCJEi+lgArik1/d/g8yiYOczafc5V3uxR7P/zChxynmZ42QB8YUoameAlM/nhXQ6LWcymUIhNeM58P8KLRQzyWZ9OLd8EHzEufwYC0M4v7kVCDHNGjIJsepXTd+yfHTNBU3TaL/5VQZhjMZyGw1TPwSzV7ZLyC6bZIKmReAdaos+wpixNmqDIPc9Smn/spCaCcQ8DyqvUCUoq1VP0RVFUVtXuIa6ruHeoLaQyQiUYYw9L5OaV7ADEGxVvRjoSllVlKpn1FBo4G/eBZNkWeL3b9BEKMwz9EAI1CIXVMdRQQhriDOaYgpCxKIvzQGmscCVc8hgnqrVUUhE0VG9qlJCLhNxo8sFQZI+vx4ZCwIpv0VTSxTr79EHvYS6BjYabkfiqceoz4xIWBCCatMXoUEDHQQ9dF34KoSGMVwzzCiEvvekoFKDwXk1aBWvwFiHCp/QUG6iGVDgVqhUbNMq6kEcWglDRXeZRiWBI0XwNghTuKtQDio2yRFVj9saFg03xBrfJQESUwjvMirMBaBn6yqpgxEPzrGwYXTOZoJEqYYbDQNHVL4TiNkjVjabcxzYDMepi2Kno0nzChKNIkqluMLx/s76zLFm6123LKs+X3AucCVGLqxu7x0nOCcHSxvWX/6Hx092jxI/8+xweePBb4SHm8vJlcQvWEkubz26L2wuHcLlP5Dc3VqdC+tLB08T/8LR3vba2s7+SWKR7zy9ukFe3XeNAAAAAElFTkSuQmCC) no-repeat;
    background-size: cover
}

.mChannelHotLine .mChannelHotLine__list li .level2 {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAaCAMAAADG6y/lAAAB71BMVEUAAAD8txn+wSn+wCb8thT+wCb8txb+wSj9vSL+vB/+viP+wCf/wir+wCj+viP+xjL9ux7/yDX9vSL/yTj+wiv+xS/9uBn+xzP9uh3/yTb9vSH/yjn8tRP+wyz+xTD/yTf/yjn8tBL/yTf9viP+wir8tRT8tRL//v7/yjj+xTD+wSj8thT/yTf+wir+xCz9vyT+xjH9vSL/yzr9vSD9ux79uRr9uhz8uBj/xzP9wi7/yDT1tC78txb9vyb3rhj+xC78vy7zqRz7sxP+9er9uBn6shf8wjD4ujD6tBn5vDHzriXyqiPxpx72rxz0qRX2qhP4z5/zsS77vCjzqBn6sRT98N/926H7wTX6vS74tyn6tyD0qx35sxzyphj1qxf5rxP748f/4ab30qH9xDP4tSb3syX5tSHwpSD7th3yoxP/+vT858j51KH9xjb8xTb2ti77vSv2syj1sCXzrSL2sCHzqh/3sR7zphPxoBP869P63bv+3qP90Gz6vjL2uDH8uyP8uiD1rBzxoxf7tBX/+/T++fT/89/+6sj41qX716H91ZL+1Xz4ynn8znj2w3b2vmT6xV/0u1n8xUb3uS7xri38vSX6uSX3rRX64r7+5bv+47L63bL42rH83aX/3pn2ypH+2Iv7zoX5y4T+zFr1tUAb0YDvAAAAJnRSTlMA/gbg0qCKe2tVS0A2IA738vHq6dTIwr64sq6nmpGFb2VcLCkXFh6Mh/cAAAKNSURBVDjL5dNnU+JgEAdwsPfrvdc1gooHqIjGYCQhEFCqNBGUDioKir333r3eP+g9uZyco97cvb//q8xkf7O7k43gJYpIJGpsrKtrlctra2UyqbSmprq6qaKiorKyqqoZwySS+vqGBrFYXF5e/ur/BSTwWZPX2tAzOY7AOHBZmuDBxwVY8GVAi6XLsgpqtUYoX47awk4bvOGAyWRKjEb3ODABvh4frIt5gOrbDHHweHDNGuzo9frhL7A5bYNAwO/YgPVmTIK9jdL0HvhOQFdbeqQdRtIePGY1m1UqlYuMBVdBl9Rqt2BTgWEUozQaX8NOrzjTIYKAAcfJsU6zy6VivdZUHHSDge9W0kFgGLGv3ACITXXwgBPpdojgag7Mut16ldc61A1cRrcH7AjQSqVxl4zxAEXU0tYOBrUG946q3DMzQZfVy3ZD0u8Y0Ok4QBEMrTxYgXPA8wm2wzKp8ytshbq5kbRaLTcStrzEKA/eL54Hc95Fm0xqg7EQAiEdqh9IKBD4DBP0LvlusvfsSJ1zcRLAGmdZluvgdzgSim/go4gPUYAVI9P3G0RGDGohbp7jl2aHhthQ0m9KEAoUyr7fT9P9xtPgOBLxqIWoRad51oXqU6mkLmDibkmhIAimX4linOrIjDTfZUgfa+qEbpz/cMPBYGrQzwPCbrfTnJia7MssLbJYcLWwtVWoGeZOI+icnj46MjX96kBR1CRDMx2oHoHSJ/dz0HnPzzf+PO9wOOx0zqBrPTxs4s8b7YBJelB6xdfuPS4VcHlRmJcj/Mv/cOXOo6eC0ykryrvp/AO4dCu/JEtwQbKK829fPgOoGw+LM8UXopKCu1dPwPUHRWWCf8mzgtzs7NzC5xe8+gFPlB3i47Zs7wAAAABJRU5ErkJggg==) no-repeat;
    background-size: cover
}

.mChannelHotLine .mChannelHotLine__list li .img {
    display: block;
    width: 100%;
    height: 1.52rem;
    background: #fff9db 50% no-repeat;
    background-size: cover;
    overflow: hidden;
    border-top-left-radius: .1rem;
    border-top-right-radius: .1rem
}

.mChannelHotLine .mChannelHotLine__list li .line__bottom {
    position: relative;
    width: 100%;
    height: 1.85rem;
    background-color: #fff;
    border-bottom-left-radius: .1rem;
    border-bottom-right-radius: .1rem;
    overflow: hidden
}

.mChannelHotLine .mChannelHotLine__list li .line__bottom p {
    margin: .15rem .08rem .1rem;
    height: .66rem;
    line-height: .35rem;
    font-size: .28rem;
    color: #353535;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden
}

.mChannelHotLine .mChannelHotLine__list li .line__bottom .site__gather {
    display: inline-block;
    margin: 0 0 .1rem .08rem;
    padding: .05rem .08rem;
    font-size: .2rem;
    color: #888;
    background-color: #eaeaea;
    border-radius: .08rem
}

.mChannelHotLine .mChannelHotLine__list li .line__bottom .line__price {
    position: absolute;
    left: .08rem;
    bottom: .12rem;
    line-height: .3rem;
    font-size: .26rem;
    color: #ff7100
}

.mChannelHotLine .mChannelHotLine__list li .line__bottom .line__price .price {
    margin: 0 .06rem;
    font-size: .3rem;
    font-weight: bolder
}

.mChannelHotLine .mChannelHotLine__list li .line__bottom .line__price .style__color {
    color: #888
}

.mChannelHotLine .around {
    background: url(../assets/img/around_hot.1da6a56.png) no-repeat;
    background-size: cover
}

.mChannelHotLine .en {
    background: url(/static/img/en_hot.c3c5a9c.png) no-repeat;
    background-size: cover
}

.mChannelHotLine .cn {
    background: url(/static/img/cn_hot.2483ed1.png) no-repeat;
    background-size: cover
}

.mChannelHotLine .qinzi {
    background: url(/static/img/qinzi_hot.f33f15f.png) no-repeat;
    background-size: cover
}

.mChannelHotLine .photo {
    background: url(/static/img/photo_hot.1494e9f.png) no-repeat;
    background-size: cover
}

.mChannelHotLine .outdoor {
    background: url(/static/img/outdoor_hot.2f164a4.png) no-repeat;
    background-size: cover
}

.mChannelNewCommend {
    margin-bottom: .2rem;
    width: 100%;
    background-color: #fff;
    overflow: hidden
}

.mChannelNewCommend .mChannelNewCommend__title {
    position: relative;
    padding-left: .2rem;
    height: .98rem;
    line-height: .98rem;
    font-size: .36rem;
    font-weight: bolder;
    color: #353535
}

.mChannelNewCommend .mChannelNewCommend__title:before {
    content: "";
    position: absolute;
    left: 0;
    top: .34rem;
    width: .08rem;
    height: .3rem;
    background-color: #ffd800
}

.mChannelNewCommend .mChannelNewCommend__slider {
    width: 100%;
    height: 3.6rem;
    overflow: hidden
}

.mChannelNewCommend .mChannelNewCommend__slider .mChannelNewCommend__list {
    width: 100%;
    height: 100%;
    overflow-x: auto;
    overflow-y: hidden
}

.mChannelNewCommend .mChannelNewCommend__slider .mChannelNewCommend__list li {
    position: relative;
    float: left;
    margin-right: .2rem;
    width: 3.36rem;
    height: 100%
}

.mChannelNewCommend .mChannelNewCommend__slider .mChannelNewCommend__list li:first-of-type {
    margin-left: .2rem
}

.mChannelNewCommend .mChannelNewCommend__slider .mChannelNewCommend__list li .line__gather {
    position: absolute;
    left: 0;
    top: .1rem;
    padding: .07rem .12rem .03rem;
    font-size: .2rem;
    color: #fff;
    background-color: rgba(0,0,0,.68);
    border-top-right-radius: .2rem;
    border-bottom-right-radius: .2rem
}

.mChannelNewCommend .mChannelNewCommend__slider .mChannelNewCommend__list li .img {
    display: block;
    width: 100%;
    height: 1.88rem;
    background: #fff9db 50% no-repeat;
    background-size: cover;
    overflow: hidden
}

.mChannelNewCommend .mChannelNewCommend__slider .mChannelNewCommend__list li .line__bottom {
    width: 100%;
    background-color: #fff
}

.mChannelNewCommend .mChannelNewCommend__slider .mChannelNewCommend__list li .line__bottom p {
    padding-top: .1rem;
    height: .72rem;
    line-height: .36rem;
    font-size: .3rem;
    color: #353535;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden
}

.mChannelNewCommend .mChannelNewCommend__slider .mChannelNewCommend__list li .line__bottom .line__text {
    margin-top: .24rem;
    line-height: .4rem;
    overflow: hidden
}

.mChannelNewCommend .mChannelNewCommend__slider .mChannelNewCommend__list li .line__bottom .line__text .line__price {
    float: left;
    font-size: .26rem;
    color: #ff7100
}

.mChannelNewCommend .mChannelNewCommend__slider .mChannelNewCommend__list li .line__bottom .line__text .line__price .price {
    margin: 0 .06rem;
    line-height: .34rem;
    font-size: .34rem;
    font-weight: bolder
}

.mChannelNewCommend .mChannelNewCommend__slider .mChannelNewCommend__list li .line__bottom .line__text .line__price .style__color {
    color: #888
}

.mChannelNewCommend .mChannelNewCommend__slider .mChannelNewCommend__list li .line__bottom .line__text .line__days {
    float: right;
    font-size: .26rem;
    color: #888
}

.mChannelNewCommend .mChannelNewCommend__single {
    margin: 0 auto;
    width: 7.1rem;
    height: 5.98rem
}

.mChannelNewCommend .mChannelNewCommend__single a {
    position: relative;
    display: block
}

.mChannelNewCommend .mChannelNewCommend__single a .single__line__gather {
    position: absolute;
    left: 0;
    top: .1rem;
    padding: 0 .12rem;
    height: .36rem;
    line-height: .36rem;
    font-size: .2rem;
    color: #fff;
    background-color: rgba(0,0,0,.68);
    border-top-right-radius: .2rem;
    border-bottom-right-radius: .2rem
}

.mChannelNewCommend .mChannelNewCommend__single a img {
    width: 100%;
    height: 4rem;
    vertical-align: middle
}

.mChannelNewCommend .mChannelNewCommend__single a .single__line__bottom {
    width: 100%;
    background-color: #fff
}

.mChannelNewCommend .mChannelNewCommend__single a .single__line__bottom .single__line__title {
    padding-top: .1rem;
    font-size: .32rem;
    font-weight: bolder;
    color: #353535;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden
}

.mChannelNewCommend .mChannelNewCommend__single a .single__line__bottom .single__line__desc {
    padding-top: .12rem;
    font-size: .24rem;
    color: #888;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden
}

.mChannelNewCommend .mChannelNewCommend__single a .single__line__bottom .single__line__text {
    margin-top: .28rem;
    line-height: .4rem;
    overflow: hidden
}

.mChannelNewCommend .mChannelNewCommend__single a .single__line__bottom .single__line__text .single__line__price {
    float: left;
    font-size: .26rem;
    color: #ff7100
}

.mChannelNewCommend .mChannelNewCommend__single a .single__line__bottom .single__line__text .single__line__price .price {
    margin: 0 .06rem;
    line-height: .34rem;
    font-size: .34rem;
    font-weight: bolder
}

.mChannelNewCommend .mChannelNewCommend__single a .single__line__bottom .single__line__text .single__line__price .style__color {
    color: #888
}

.mChannelNewCommend .mChannelNewCommend__single a .single__line__bottom .single__line__text .single__line__days {
    float: right;
    font-size: .26rem;
    color: #888
}

.mChannelNewCommend .mChannelNewCommend__single a .single__line__bottom .single__line__text .single__line__days span {
    float: left
}

.mChannelSingleLine {
    margin: 0 auto;
    width: 7.1rem
}

.mChannelSingleLine a {
    position: relative;
    display: block
}

.mChannelSingleLine a .single__line__gather {
    position: absolute;
    left: 0;
    top: .1rem;
    padding: .07rem .12rem .03rem;
    font-size: .2rem;
    color: #fff;
    background-color: rgba(0,0,0,.68);
    border-top-right-radius: .2rem;
    border-bottom-right-radius: .2rem
}

.mChannelSingleLine a .img {
    display: block;
    width: 100%;
    height: 4rem;
    background: #fff9db 50% no-repeat;
    background-size: cover;
    overflow: hidden
}

.mChannelSingleLine a .single__line__bottom {
    padding-bottom: .36rem;
    width: 100%;
    background-color: #fff
}

.mChannelSingleLine a .single__line__bottom .single__line__title {
    padding-top: .1rem;
    font-size: .32rem;
    color: #353535;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden
}

.mChannelSingleLine a .single__line__bottom .single__line__desc {
    padding-top: .12rem;
    font-size: .24rem;
    color: #888;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden
}

.mChannelSingleLine a .single__line__bottom .single__line__text {
    margin-top: .28rem;
    line-height: .4rem;
    overflow: hidden
}

.mChannelSingleLine a .single__line__bottom .single__line__text .single__line__price {
    float: left;
    font-size: .26rem;
    color: #ff7100
}

.mChannelSingleLine a .single__line__bottom .single__line__text .single__line__price .price {
    margin: 0 .06rem;
    line-height: .34rem;
    font-size: .34rem;
    font-weight: bolder
}

.mChannelSingleLine a .single__line__bottom .single__line__text .single__line__price .style__color {
    color: #888
}

.mChannelSingleLine a .single__line__bottom .single__line__text .single__line__days {
    float: right;
    font-size: .26rem;
    color: #888
}

.mChannelSingleLine a .single__line__bottom .single__line__text .single__line__days span {
    float: left
}

.mChannelHotPlace {
    margin-bottom: .2rem;
    padding-bottom: .3rem;
    width: 100%;
    background-color: #fff
}

.mChannelHotPlace .mChannelHotPlace__title {
    position: relative;
    padding-left: .2rem;
    height: 1.15rem;
    line-height: 1.15rem;
    font-size: .38rem;
    font-weight: bolder;
    color: #353535
}

.mChannelHotPlace .mChannelHotPlace__title:before {
    content: "";
    position: absolute;
    left: 0;
    top: .4rem;
    width: .08rem;
    height: .34rem;
    background-color: #ffd800
}

.mChannelHotPlace .mChannelHotPlace__swiper {
    width: 100%
}

.mChannelHotPlace .mChannelHotPlace__swiper .item__box {
    width: 100%;
    overflow: hidden
}

.mChannelHotPlace .mChannelHotPlace__swiper .item__box a {
    position: relative;
    float: left;
    margin: 0 0 .2rem .2rem;
    width: 2.24rem;
    height: 2.24rem;
    background: #fff9db 50% no-repeat;
    background-size: cover;
    overflow: hidden
}

.mChannelHotPlace .mChannelHotPlace__swiper .item__box a span {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: .5rem;
    line-height: .5rem;
    text-align: center;
    font-size: .3rem;
    font-weight: 700;
    color: #fff;
    background-color: rgba(0,0,0,.6)
}

.mChannelHotPlace .mChannelHotPlace__swiper .vux-indicator {
    bottom: 0!important
}

.mChannelHotPlace .mChannelHotPlace__swiper .vux-icon-dot {
    width: .14rem!important;
    height: .14rem!important;
    background-color: #ddd!important;
    border-radius: 50%!important
}

.mChannelHotPlace .mChannelHotPlace__swiper .vux-icon-dot.active {
    width: .27rem!important;
    background-color: #ffa200!important;
    border-radius: .25rem!important
}

.mChannelSmallLine {
    margin-bottom: .2rem;
    width: 100%;
    background-color: #fff;
    overflow: hidden
}

.mChannelSmallLine .mChannelSmallLine__title {
    position: relative;
    padding-left: .2rem;
    height: 1.1rem;
    line-height: 1.1rem;
    font-size: .38rem;
    font-weight: bolder;
    color: #353535
}

.mChannelSmallLine .mChannelSmallLine__title:before {
    content: "";
    position: absolute;
    left: 0;
    top: .4rem;
    width: .08rem;
    height: .34rem;
    background-color: #ffd800
}

.mChannelSmallLine .mChannelSmallLine__nav {
    margin-bottom: .1rem;
    width: 100%;
    overflow: hidden
}

.mChannelSmallLine .mChannelSmallLine__nav li {
    float: left;
    margin: 0 0 .2rem .2rem;
    width: 1.62rem;
    height: .6rem;
    line-height: .6rem;
    text-align: center;
    font-size: .32rem;
    font-weight: 700;
    color: #999;
    background-color: #f3f3f3;
    overflow: hidden
}



.mChannelSmallLine .mChannelSmallLine__list {
    margin: 0 .2rem;
    overflow: hidden
}

.mChannelSmallLine .mChannelSmallLine__list li {
    position: relative;
    float: left;
    margin-right: .2rem;
    width: 3.45rem;
    height: 3.6rem
}

.mChannelSmallLine .mChannelSmallLine__list li:nth-of-type(2n) {
    margin-right: 0
}

.mChannelSmallLine .mChannelSmallLine__list li .line__gather {
    position: absolute;
    left: 0;
    top: .1rem;
    padding: .07rem .12rem .03rem;
    font-size: .2rem;
    color: #fff;
    background-color: rgba(0,0,0,.68);
    border-top-right-radius: .2rem;
    border-bottom-right-radius: .2rem
}

.mChannelSmallLine .mChannelSmallLine__list li .img {
    display: block;
    width: 100%;
    height: 1.94rem;
    background: #fff9db 50% no-repeat;
    background-size: cover;
    overflow: hidden
}

.mChannelSmallLine .mChannelSmallLine__list li .line__bottom {
    width: 100%;
    overflow: hidden;
    background-color: #fff
}

.mChannelSmallLine .mChannelSmallLine__list li .line__bottom p {
    padding-top: .1rem;
    height: .7rem;
    line-height: .36rem;
    font-size: .3rem;
    color: #353535;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden
}

.mChannelSmallLine .mChannelSmallLine__list li .line__bottom .line__text {
    margin-top: .26rem;
    line-height: .4rem;
    overflow: hidden
}

.mChannelSmallLine .mChannelSmallLine__list li .line__bottom .line__text .line__price {
    float: left;
    font-size: .26rem;
    color: #ff7100
}

.mChannelSmallLine .mChannelSmallLine__list li .line__bottom .line__text .line__price .price {
    margin: 0 .06rem;
    line-height: .34rem;
    font-size: .34rem;
    font-weight: bolder
}

.mChannelSmallLine .mChannelSmallLine__list li .line__bottom .line__text .line__price .style__color {
    color: #888
}

.mChannelSmallLine .mChannelSmallLine__list li .line__bottom .line__text .line__days {
    float: right;
    font-size: .26rem;
    color: #888
}

.mChannelSmallLine .mChannelSmallLine__list li .line__bottom .line__text .line__days span {
    float: left
}

.mChannelSmallLine .mChannelSmallLine__more {
    margin: 0 .2rem;
    border-top: 2px solid #f4f4f4
}

.mChannelSmallLine .mChannelSmallLine__more a {
    display: block;
    margin: .28rem auto .4rem;
    width: 2.4rem;
    height: .6rem;
    line-height: .6rem;
    text-align: center;
    font-size: .26rem;
    color: #333;
    background-color: #ffd800;
    border-radius: .35rem
}

.mChannelSmallLine .mChannelSmallLine__more a span {
    margin-left: .1rem;
    padding-right: .2rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAUCAYAAAC58NwRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplODBhNTEyYi00OTI1LTRkYWUtYTU2NS05OWIxZjNiNDQ3YmIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkI3RTRBQjg4NUIzMTFFOEFGQTVCOTBDQTIyRDRFNTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkI3RTRBQjc4NUIzMTFFOEFGQTVCOTBDQTIyRDRFNTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhmNTJiMTZkLTY4NmQtNGY0Ny05N2Y1LTVhY2U2N2FkZDk5YyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDplODBhNTEyYi00OTI1LTRkYWUtYTU2NS05OWIxZjNiNDQ3YmIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz497KshAAABb0lEQVR42oSTvUoDQRDH7/buAcTOcJ6JKAQLSbBIY1ol+ImCoo8idj6Bhc8Q8AMFMQbESkISWxuxiJAghzZaWJ334W/gDoJ4m4EfM7fMf2b3ZtfM5XI1x3EWfd8/tm37I45jQ7Asy4iiyDBN0xCTWNaU67pbQRAc8NFgfcIYYYrkI6p0iBegCVNaAe37CDagRTzP2gXxTKYg8bL3PXwr6XQGszqB2AB2E1GJQ57iXZ1A7A224UFEdL3FT+sEYu+wTvI9Z5nD30FRJxD7ImkTfyMdkk4lnUAG9g1rhNf4PFwSF1U6xdRkyqmxbvFtJ+s/zCxSmhmNUbUJNeJn2SK82BnJ43AFVUmGFehlnWESGlSuUvGJeIm4l/WXCsnhKtBFsAyD4YThLeWhLlcDURe/A156vf92kCtwTrUKtEna57v/3+GkQ0FuKJSVUo9hGMrV8HS39ZCKZXwHwSqxp3sP0qHOgF7Zygmv7nPUi/sVYAC15ZuhH6dPhgAAAABJRU5ErkJggg==) 100% no-repeat;
    background-size: .12rem .2rem
}

.mChannelNoContent__center {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%)
}

.mChannelNoContent {
    margin: .3rem auto 0;
    padding-bottom: .3rem;
    text-align: center;
    overflow: hidden
}

.mChannelNoContent i {
    display: block;
    margin: 0 auto .2rem;
    width: 1.3rem;
    height: 1.3rem;
    background: url(data:image/png;base64,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) no-repeat;
    background-size: cover
}

.mChannelNoContent span {
    font-size: .28rem;
    color: #999
}

.mChannelFilm {
    margin-bottom: .2rem;
    background-color: #fff
}

.mChannelFilm,.mChannelFilm .mChannelFilm__top {
    width: 100%;
    overflow: hidden
}

.mChannelFilm .mChannelFilm__top .mChannelFilm__title {
    position: relative;
    float: left;
    padding-left: .2rem;
    height: .98rem;
    line-height: .98rem;
    font-size: .36rem;
    font-weight: bolder;
    color: #353535
}

.mChannelFilm .mChannelFilm__top .mChannelFilm__title:before {
    content: "";
    position: absolute;
    left: 0;
    top: .34rem;
    width: .08rem;
    height: .3rem;
    background-color: #ffd800
}

.mChannelFilm .mChannelFilm__top .mChannelFilm__more {
    float: right;
    margin: .25rem .21rem 0 0;
    width: 1.12rem;
    height: .46rem;
    line-height: .46rem;
    text-align: center;
    font-size: .26rem;
    color: #333;
    background-color: #ffd800;
    border-radius: .35rem
}

.mChannelFilm .mChannelFilm__top .mChannelFilm__more span {
    margin-left: .1rem;
    padding-right: .18rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAUCAYAAAC58NwRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplODBhNTEyYi00OTI1LTRkYWUtYTU2NS05OWIxZjNiNDQ3YmIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkI3RTRBQjg4NUIzMTFFOEFGQTVCOTBDQTIyRDRFNTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkI3RTRBQjc4NUIzMTFFOEFGQTVCOTBDQTIyRDRFNTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhmNTJiMTZkLTY4NmQtNGY0Ny05N2Y1LTVhY2U2N2FkZDk5YyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDplODBhNTEyYi00OTI1LTRkYWUtYTU2NS05OWIxZjNiNDQ3YmIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz497KshAAABb0lEQVR42oSTvUoDQRDH7/buAcTOcJ6JKAQLSbBIY1ol+ImCoo8idj6Bhc8Q8AMFMQbESkISWxuxiJAghzZaWJ334W/gDoJ4m4EfM7fMf2b3ZtfM5XI1x3EWfd8/tm37I45jQ7Asy4iiyDBN0xCTWNaU67pbQRAc8NFgfcIYYYrkI6p0iBegCVNaAe37CDagRTzP2gXxTKYg8bL3PXwr6XQGszqB2AB2E1GJQ57iXZ1A7A224UFEdL3FT+sEYu+wTvI9Z5nD30FRJxD7ImkTfyMdkk4lnUAG9g1rhNf4PFwSF1U6xdRkyqmxbvFtJ+s/zCxSmhmNUbUJNeJn2SK82BnJ43AFVUmGFehlnWESGlSuUvGJeIm4l/WXCsnhKtBFsAyD4YThLeWhLlcDURe/A156vf92kCtwTrUKtEna57v/3+GkQ0FuKJSVUo9hGMrV8HS39ZCKZXwHwSqxp3sP0qHOgF7Zygmv7nPUi/sVYAC15ZuhH6dPhgAAAABJRU5ErkJggg==) 100% no-repeat;
    background-size: .12rem .2rem
}

.mChannelFilm .mChannelFilm__slider {
    margin-bottom: .4rem;
    width: 100%;
    height: 3.47rem;
    overflow: hidden
}

.mChannelFilm .mChannelFilm__slider .mChannelFilm__list {
    width: 100%;
    height: 3.47rem;
    overflow-x: auto;
    overflow-y: hidden
}

.mChannelFilm .mChannelFilm__slider .mChannelFilm__list .van-swipe-item {
    position: relative;
    float: left;
    margin-right: .2rem;
    width: 3.25rem;
    height: 100%;
    border: 2px solid #f7f7f7;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: .1rem
}

.mChannelFilm .mChannelFilm__slider .mChannelFilm__list .van-swipe-item:first-of-type {
    margin-left: .2rem
}

.mChannelFilm .mChannelFilm__slider .mChannelFilm__list  .film__top {
    position: relative;
    width: 100%;
    height: 1.8rem;
    background: #fff9db 50% no-repeat;
    background-size: cover;
    overflow: hidden;
    border-top-left-radius: .1rem;
    border-top-right-radius: .1rem
}

.mChannelFilm .mChannelFilm__slider .mChannelFilm__list  .film__top .film__play {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -.35rem;
    margin-top: -.35rem;
    width: .7rem;
    height: .7rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAyVBMVEUAAAAAAADy8vJ0dHT+/v7Nzc3////////IyMj////r6+v////Z2dlPT0////+2tranp6cjIyP+/v7u7u6SkpL///////+8vLxcXFwsLCz39/fy8vKVlZX////8/Pz////////////39/f////T09P////09PT////////////////CwsKwsLCbm5v////////////////m5ubV1dX19fX///////+IiIjo6Ojj4+Pg4ODc3NyhoaH///9AQED////////////////l9mJTAAAAQnRSTlNAAN5h7KDd9ppGzhOwU9iJfkfx028JlY5XSejZcgv3vXZV7OKoT+LRtKaclYR1bR4cBcWs5MNya8nAurV5V08jjo1uyr/0AAADbUlEQVRYw72Z61baQBRGTzEk4RYg3G/lIhcVKghWrVXb7vd/qCbENrUmwySw3L9c/thk1pc5Z+ZEPqkp5EZXQ8ewsAxzMbwa5Qqf1KiEjVnT4R1Oc9ZIJcxdWoHhdju1W6tVy55ub9ljXeaSCgfXJj69bL0j/9CpZ3v4mNeDBMLGnYFHN9uWCNrZLh7GXUNXODPxyD9JLE95PM5nWsLNBR61vijp1/C42BwWjl1/sRU5SMVfuDs+ILxp4rGrigbVHR7NG5Ww8BUw+qJJ3wC+FuKFaweolUSbUg1w1nHCH+dAURJR9NP+ES3cmEBWEpL1jesoYWEBtCQxLcAsvBfeDIGypKDsJ3PzTtgElpKKJdD8XzgO8kjHDnh+K9y4kJfU5MHdvBFewORFUvMygYtQGCy4LkdQB8ahsGHCTo5iB2bjr/AOulU5imoXRn+EAwMqciQVMAavwmt1wvpJX78KTbiP+93v20e7LTrcgxkIc/EPmGVPsaT5iLm98BK+SDQuAZ+zHTnIF7j0hQ2LeVz9BKOcwWeiUYfmWANPmANbojmDjEh5gk/mSQ5gw8wT/oK2Uiid7Gd88veipA1NT7igJyqhT+k7ex7VgfdwPkkBsmph8OcDPtb0Rd0OCpKDukoYhhik49pVVYnIyQiqWsK/6XRXsRsaRnJFRvSEYTq9vkST4UqGfNMWhuk8RKfzjaE4THWFwf/ywd6JfMgpjhgsEwjDdNx2ZP8zxKKsKQxpGTE9sowlsNIXhulEF4AViJVGWLVdbmOERoolr7rAY8ySzcSh1Hv7mM9iQlkkfW227H1PMa9Nwhf7pcie2lnci51o61XtYOvNK/FbL1Fx6Cq7QVAc9MtXvRf2K0X5SlRgg46qLrCaLeA1i+2ZqKjhaDSpMIuaXpOaabbR24pmGx0caPRBFoZ2oz/9UeT0hyX1ce4h4XHu9AfO0x+Jg0P7pCNH0ZnA6M21oihHUfSvFW8vPv3TXXyCq5lRktSUjH+vZj5rF2qSmhq461Do83zM9bYIPEddwG1JhQ00o0cELUlBKxgRnHiIETtmsdOs93z9MYOg9KOqjxmmpR/3nXYg+fzBI9OA8Tke+S+KfhQMdccJx87z6G5SsufqsXP6wXj60f2yXKmUlylH9yGN2c8F71j8VH5c0P78gWU4Op8/fgO/ouQfcbpNZQAAAABJRU5ErkJggg==) no-repeat;
    background-size: contain
}

.mChannelFilm .mChannelFilm__slider .mChannelFilm__list .van-swipe-item .film__top .film__time {
    position: absolute;
    right: .2rem;
    bottom: .1rem;
    font-size: .26rem;
    color: #fff
}

.mChannelFilm .mChannelFilm__slider .mChannelFilm__list .van-swipe-item .film__bottom {
    width: 100%;
    background-color: #fff
}

.mChannelFilm .mChannelFilm__slider .mChannelFilm__list .van-swipe-item .film__bottom p {
    margin: .1rem .15rem 0;
    height: .72rem;
    line-height: .36rem;
    font-size: .28rem;
    color: #353535;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden
}

.mChannelFilm .mChannelFilm__slider .mChannelFilm__list .van-swipe-item .film__bottom .film__bottom__info {
    margin-top: .25rem;
    overflow: hidden
}

.mChannelFilm .mChannelFilm__slider .mChannelFilm__list .van-swipe-item .film__bottom .film__bottom__info span {
    font-size: .26rem;
    color: #999
}

.mChannelFilm .mChannelFilm__slider .mChannelFilm__list .van-swipe-item .film__bottom .film__bottom__info .film__play__num {
    float: left;
    margin-left: .17rem;
    padding-left: .38rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAaCAYAAACkVDyJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplODBhNTEyYi00OTI1LTRkYWUtYTU2NS05OWIxZjNiNDQ3YmIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUEwMjY2Mjg4NUJBMTFFODg3MzhEOTk1RUYwOTk3OTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUEwMjY2Mjc4NUJBMTFFODg3MzhEOTk1RUYwOTk3OTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhmNTJiMTZkLTY4NmQtNGY0Ny05N2Y1LTVhY2U2N2FkZDk5YyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDplODBhNTEyYi00OTI1LTRkYWUtYTU2NS05OWIxZjNiNDQ3YmIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Qf3e8AAADMklEQVR42qSWe2iNcRjHz3l33NNscjmTyxBy31ArlzgO+UNRlEtGTbmVUGKGFH8gJEqNXP5w/UcR0dpZLrVizG1p5jLbGJu7ojkmx+dZz7tex3nfc97jV5+ec/k9z/d9n9/v9zw/byQS8TiNUCjUDbMUpsJY6BI15QOUQTEcDQaD35ziee0EEWqH2QobwQd1cBHuwXvxhZ4wDmZBD/gBW2A/wr8TFkRsGOYMjFSRXQS4FScTQcxmmAw3YQk+NXEFcQxgSuAjLMCp2ONi4D9PHzYME/EvtxVksrzRQ6iFKUx+6UliECcLcw0krVnEqTX/MyyTOmEuQBNMMsX4PcWtIL73RQjS4BIxvP8IMnZAJszEoc7yewSHTYrPhag88EIYAev+SimB/LoLzzExN0aKjmHy4BHkM+eqi/TewAyHvnJkzDecr1t/u42fbIBPIEflCkGKYFSCmvmQLplrSSmOqdjlcJsneGbj1BEaYQyshOnwAN/dkB5H8A5Uw2I52/KGA2CwvL2Dk2zl9jzQdyjkc284ARugkkDLHNbyF+a6Viq/oYsq42kC69FBg7yGPK0ysq6H+a9Mz3CsUQltoZ+h5cmja+R2+9+FaXwMaKZKEL0MmVFTzdh+w5Ky/xmGVibrmkcvScuQndmghTgtiYqSjdkrVQnksM/gjYtiTO2qtkEEH+uXQQlohFXIr11kDXyB9Qjtc/CTTdkMNZKK51AlS5KAmA+x1eojYjthiJOYlsaAnoI3BpPlCY9ADn8OtPFr0n5XAQehFEbjWwCNcR5UdnJ/OMncsFkbpZ3sgW2QG8MpRdf4LczF8byLpZa4X6WItxZvAsjGOQCLos8S38W8ggKpNG7E8JWSOUFKpnn1aO2H/NkZ8wLaSNfQVHu0tXjtrgwOYhnaEJ5I8cY/ZgOWqlOuqRsvFSXJBjxU1/knZBOnPlY/lNRWaFXvI53foVQ5ic3Ro5aqvbU+kUuU7KyzWq5OQSGOpXGEpMStgtnSSaTl4VPl5pooa7rW0iOrtepLu3mn1UkKQI7e1HrpPOnuhxBrdnUvtQh3x6wASVWGXoTN4yRBP4Os9Wk4bm42u/FHgAEAv9NNMLyEcBwAAAAASUVORK5CYII=) 0 no-repeat;
    background-size: .28rem .27rem
}

.mChannelFilm .mChannelFilm__slider .mChannelFilm__list .van-swipe-item .film__bottom .film__bottom__info .film__comment__num {
    float: right;
    margin-right: .25rem;
    padding-left: .38rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAbCAYAAACAyoQSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplODBhNTEyYi00OTI1LTRkYWUtYTU2NS05OWIxZjNiNDQ3YmIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Qjk1MDhFMTM4NUJBMTFFODk2QTRDOTkzNkQzMzBBQzQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Qjk1MDhFMTI4NUJBMTFFODk2QTRDOTkzNkQzMzBBQzQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhmNTJiMTZkLTY4NmQtNGY0Ny05N2Y1LTVhY2U2N2FkZDk5YyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDplODBhNTEyYi00OTI1LTRkYWUtYTU2NS05OWIxZjNiNDQ3YmIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7jEWs9AAACL0lEQVR42sSWz0sVURTHZ6bJ0rdQ0FVIS8VNVqsQQqQphKREULKSWlSE5B9QG0GFXCeuaqNQ5CIyEeH5nohPF/VcvEVCq6IoIqhc6CI1dfocOE8ug5NPndEDH86977w737k/zrlj+75v5S2dTt/AnYYEbFr7NweWIet53qv8j7aIIlZGewiuWPHZKNxF/JedSqVK6DyDdpiEXvgORREIrcEJ6AYPxuGqq7MTwQX5gTdZiXiGn+AiqzmDb4LLsuYXNDgcg6Bp3errRLRUO7+teG1RfcIxTumRmEWPqt8UUd86GLPNPAo1Nj8RdSxUlEE2dNKcxffB8UC8C5fRWHEg9kBjPbBt2rkhL1MDg9o+A281x+ShVbgnGjsLkgopIzYQiE0VNFNMUudHfuNhyYitGjErEPsDP0Ni/xclXyWhO2BEPP2MEfuCuw0v4Rr9d0bsK+46vIA2+vO7WV55QFpWLCSWxCV3O66g0xuXHZqoYxyYOG0jrymCfwNlKu6KtC6iWe20kGdujKJ31H+QS7yCxnO4BNPwRnPR0dM9y4nMafIfw93SC35jBxHfWMHz0Aof4Zz5uSKV5OY2g/sRfch/KuXOhYY9zlRS7D7P+mwHPsxqcad0hvU6qy4tBHNQre0JKDZvjpA9dLS6vYccgutbH2YhRb8Z91oT/SRIXX3MwEf73Vy3gEvXU38PwadRnCi3gMIhy9OO4OhBVKRyPW2NUQruNFO5WcYQ/BZ1wv4TYABlXL4uc9pvswAAAABJRU5ErkJggg==) left .06rem no-repeat;
    background-size: .29rem .27rem
}

.mChannelFilm .mChannelFilm__single {
    margin-bottom: .4rem;
    width: 100%;
    overflow: hidden
}

.mChannelFilm .mChannelFilm__single .mChannelFilm__list {
    width: 100%;
    overflow: hidden
}

.mChannelFilm .mChannelFilm__single .mChannelFilm__list .van-swipe-item {
    position: relative;
    margin: 0 auto;
    width: 7.1rem;
    height: 5.4rem;
    border: 2px solid #f7f7f7;
    border-radius: .1rem
}

.mChannelFilm .mChannelFilm__single .mChannelFilm__list .van-swipe-item .film__top {
    position: relative;
    width: 100%;
    height: 4rem;
    background: #fff9db 50% no-repeat;
    background-size: cover;
    overflow: hidden;
    border-top-left-radius: .1rem;
    border-top-right-radius: .1rem
}

.mChannelFilm .mChannelFilm__single .mChannelFilm__list .van-swipe-item .film__top .film__play {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -.4rem;
    margin-top: -.4rem;
    width: .8rem;
    height: .8rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAyVBMVEUAAAAAAADy8vJ0dHT+/v7Nzc3////////IyMj////r6+v////Z2dlPT0////+2tranp6cjIyP+/v7u7u6SkpL///////+8vLxcXFwsLCz39/fy8vKVlZX////8/Pz////////////39/f////T09P////09PT////////////////CwsKwsLCbm5v////////////////m5ubV1dX19fX///////+IiIjo6Ojj4+Pg4ODc3NyhoaH///9AQED////////////////l9mJTAAAAQnRSTlNAAN5h7KDd9ppGzhOwU9iJfkfx028JlY5XSejZcgv3vXZV7OKoT+LRtKaclYR1bR4cBcWs5MNya8nAurV5V08jjo1uyr/0AAADbUlEQVRYw72Z61baQBRGTzEk4RYg3G/lIhcVKghWrVXb7vd/qCbENrUmwySw3L9c/thk1pc5Z+ZEPqkp5EZXQ8ewsAxzMbwa5Qqf1KiEjVnT4R1Oc9ZIJcxdWoHhdju1W6tVy55ub9ljXeaSCgfXJj69bL0j/9CpZ3v4mNeDBMLGnYFHN9uWCNrZLh7GXUNXODPxyD9JLE95PM5nWsLNBR61vijp1/C42BwWjl1/sRU5SMVfuDs+ILxp4rGrigbVHR7NG5Ww8BUw+qJJ3wC+FuKFaweolUSbUg1w1nHCH+dAURJR9NP+ES3cmEBWEpL1jesoYWEBtCQxLcAsvBfeDIGypKDsJ3PzTtgElpKKJdD8XzgO8kjHDnh+K9y4kJfU5MHdvBFewORFUvMygYtQGCy4LkdQB8ahsGHCTo5iB2bjr/AOulU5imoXRn+EAwMqciQVMAavwmt1wvpJX78KTbiP+93v20e7LTrcgxkIc/EPmGVPsaT5iLm98BK+SDQuAZ+zHTnIF7j0hQ2LeVz9BKOcwWeiUYfmWANPmANbojmDjEh5gk/mSQ5gw8wT/oK2Uiid7Gd88veipA1NT7igJyqhT+k7ex7VgfdwPkkBsmph8OcDPtb0Rd0OCpKDukoYhhik49pVVYnIyQiqWsK/6XRXsRsaRnJFRvSEYTq9vkST4UqGfNMWhuk8RKfzjaE4THWFwf/ywd6JfMgpjhgsEwjDdNx2ZP8zxKKsKQxpGTE9sowlsNIXhulEF4AViJVGWLVdbmOERoolr7rAY8ySzcSh1Hv7mM9iQlkkfW227H1PMa9Nwhf7pcie2lnci51o61XtYOvNK/FbL1Fx6Cq7QVAc9MtXvRf2K0X5SlRgg46qLrCaLeA1i+2ZqKjhaDSpMIuaXpOaabbR24pmGx0caPRBFoZ2oz/9UeT0hyX1ce4h4XHu9AfO0x+Jg0P7pCNH0ZnA6M21oihHUfSvFW8vPv3TXXyCq5lRktSUjH+vZj5rF2qSmhq461Do83zM9bYIPEddwG1JhQ00o0cELUlBKxgRnHiIETtmsdOs93z9MYOg9KOqjxmmpR/3nXYg+fzBI9OA8Tke+S+KfhQMdccJx87z6G5SsufqsXP6wXj60f2yXKmUlylH9yGN2c8F71j8VH5c0P78gWU4Op8/fgO/ouQfcbpNZQAAAABJRU5ErkJggg==) no-repeat;
    background-size: contain
}

.mChannelFilm .mChannelFilm__single .mChannelFilm__list .van-swipe-item .film__top .film__time {
    position: absolute;
    right: .2rem;
    bottom: .1rem;
    font-size: .26rem;
    color: #fff
}

.mChannelFilm .mChannelFilm__single .mChannelFilm__list .van-swipe-item .film__bottom {
    position: relative;
    width: 100%;
    height: 1.4rem;
    background-color: #fff
}

.mChannelFilm .mChannelFilm__single .mChannelFilm__list .van-swipe-item .film__bottom p {
    margin: 0 .2rem;
    padding-top: .12rem;
    font-size: .32rem;
    color: #353535;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden
}

.mChannelFilm .mChannelFilm__single .mChannelFilm__list .van-swipe-item .film__bottom .film__bottom__info {
    position: absolute;
    right: .2rem;
    bottom: .3rem;
    margin-top: .45rem;
    overflow: hidden
}

.mChannelFilm .mChannelFilm__single .mChannelFilm__list .van-swipe-item .film__bottom .film__bottom__info span {
    font-size: .26rem;
    color: #999
}

.mChannelFilm .mChannelFilm__single .mChannelFilm__list .van-swipe-item .film__bottom .film__bottom__info .film__play__num {
    margin-right: .6rem;
    padding-left: .38rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAaCAYAAACkVDyJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplODBhNTEyYi00OTI1LTRkYWUtYTU2NS05OWIxZjNiNDQ3YmIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUEwMjY2Mjg4NUJBMTFFODg3MzhEOTk1RUYwOTk3OTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUEwMjY2Mjc4NUJBMTFFODg3MzhEOTk1RUYwOTk3OTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhmNTJiMTZkLTY4NmQtNGY0Ny05N2Y1LTVhY2U2N2FkZDk5YyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDplODBhNTEyYi00OTI1LTRkYWUtYTU2NS05OWIxZjNiNDQ3YmIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Qf3e8AAADMklEQVR42qSWe2iNcRjHz3l33NNscjmTyxBy31ArlzgO+UNRlEtGTbmVUGKGFH8gJEqNXP5w/UcR0dpZLrVizG1p5jLbGJu7ojkmx+dZz7tex3nfc97jV5+ec/k9z/d9n9/v9zw/byQS8TiNUCjUDbMUpsJY6BI15QOUQTEcDQaD35ziee0EEWqH2QobwQd1cBHuwXvxhZ4wDmZBD/gBW2A/wr8TFkRsGOYMjFSRXQS4FScTQcxmmAw3YQk+NXEFcQxgSuAjLMCp2ONi4D9PHzYME/EvtxVksrzRQ6iFKUx+6UliECcLcw0krVnEqTX/MyyTOmEuQBNMMsX4PcWtIL73RQjS4BIxvP8IMnZAJszEoc7yewSHTYrPhag88EIYAev+SimB/LoLzzExN0aKjmHy4BHkM+eqi/TewAyHvnJkzDecr1t/u42fbIBPIEflCkGKYFSCmvmQLplrSSmOqdjlcJsneGbj1BEaYQyshOnwAN/dkB5H8A5Uw2I52/KGA2CwvL2Dk2zl9jzQdyjkc284ARugkkDLHNbyF+a6Viq/oYsq42kC69FBg7yGPK0ysq6H+a9Mz3CsUQltoZ+h5cmja+R2+9+FaXwMaKZKEL0MmVFTzdh+w5Ky/xmGVibrmkcvScuQndmghTgtiYqSjdkrVQnksM/gjYtiTO2qtkEEH+uXQQlohFXIr11kDXyB9Qjtc/CTTdkMNZKK51AlS5KAmA+x1eojYjthiJOYlsaAnoI3BpPlCY9ADn8OtPFr0n5XAQehFEbjWwCNcR5UdnJ/OMncsFkbpZ3sgW2QG8MpRdf4LczF8byLpZa4X6WItxZvAsjGOQCLos8S38W8ggKpNG7E8JWSOUFKpnn1aO2H/NkZ8wLaSNfQVHu0tXjtrgwOYhnaEJ5I8cY/ZgOWqlOuqRsvFSXJBjxU1/knZBOnPlY/lNRWaFXvI53foVQ5ic3Ro5aqvbU+kUuU7KyzWq5OQSGOpXGEpMStgtnSSaTl4VPl5pooa7rW0iOrtepLu3mn1UkKQI7e1HrpPOnuhxBrdnUvtQh3x6wASVWGXoTN4yRBP4Os9Wk4bm42u/FHgAEAv9NNMLyEcBwAAAAASUVORK5CYII=) 0 no-repeat;
    background-size: .28rem .27rem
}

.mChannelFilm .mChannelFilm__single .mChannelFilm__list .van-swipe-item .film__bottom .film__bottom__info .film__comment__num {
    padding-left: .38rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAbCAYAAACAyoQSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplODBhNTEyYi00OTI1LTRkYWUtYTU2NS05OWIxZjNiNDQ3YmIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Qjk1MDhFMTM4NUJBMTFFODk2QTRDOTkzNkQzMzBBQzQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Qjk1MDhFMTI4NUJBMTFFODk2QTRDOTkzNkQzMzBBQzQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhmNTJiMTZkLTY4NmQtNGY0Ny05N2Y1LTVhY2U2N2FkZDk5YyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDplODBhNTEyYi00OTI1LTRkYWUtYTU2NS05OWIxZjNiNDQ3YmIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7jEWs9AAACL0lEQVR42sSWz0sVURTHZ6bJ0rdQ0FVIS8VNVqsQQqQphKREULKSWlSE5B9QG0GFXCeuaqNQ5CIyEeH5nohPF/VcvEVCq6IoIqhc6CI1dfocOE8ug5NPndEDH86977w737k/zrlj+75v5S2dTt/AnYYEbFr7NweWIet53qv8j7aIIlZGewiuWPHZKNxF/JedSqVK6DyDdpiEXvgORREIrcEJ6AYPxuGqq7MTwQX5gTdZiXiGn+AiqzmDb4LLsuYXNDgcg6Bp3errRLRUO7+teG1RfcIxTumRmEWPqt8UUd86GLPNPAo1Nj8RdSxUlEE2dNKcxffB8UC8C5fRWHEg9kBjPbBt2rkhL1MDg9o+A281x+ShVbgnGjsLkgopIzYQiE0VNFNMUudHfuNhyYitGjErEPsDP0Ni/xclXyWhO2BEPP2MEfuCuw0v4Rr9d0bsK+46vIA2+vO7WV55QFpWLCSWxCV3O66g0xuXHZqoYxyYOG0jrymCfwNlKu6KtC6iWe20kGdujKJ31H+QS7yCxnO4BNPwRnPR0dM9y4nMafIfw93SC35jBxHfWMHz0Aof4Zz5uSKV5OY2g/sRfch/KuXOhYY9zlRS7D7P+mwHPsxqcad0hvU6qy4tBHNQre0JKDZvjpA9dLS6vYccgutbH2YhRb8Z91oT/SRIXX3MwEf73Vy3gEvXU38PwadRnCi3gMIhy9OO4OhBVKRyPW2NUQruNFO5WcYQ/BZ1wv4TYABlXL4uc9pvswAAAABJRU5ErkJggg==) left .06rem no-repeat;
    background-size: .29rem .27rem
}

.mChannelStrategy {
    margin-bottom: .2rem;
    background-color: #fff
}

.mChannelStrategy,.mChannelStrategy .mChannelStrategy__top {
    width: 100%;
    overflow: hidden
}

.mChannelStrategy .mChannelStrategy__top .mChannelStrategy__title {
    position: relative;
    float: left;
    padding-left: .2rem;
    height: .9rem;
    line-height: .9rem;
    font-size: .36rem;
    font-weight: bolder;
    color: #353535
}

.mChannelStrategy .mChannelStrategy__top .mChannelStrategy__title:before {
    content: "";
    position: absolute;
    left: 0;
    top: .3rem;
    width: .08rem;
    height: .3rem;
    background-color: #ffd800
}

.mChannelStrategy .mChannelStrategy__top .mChannelStrategy__more {
    float: right;
    margin: .25rem .21rem 0 0;
    width: 1.12rem;
    height: .46rem;
    line-height: .46rem;
    text-align: center;
    font-size: .26rem;
    color: #333;
    background-color: #ffd800;
    border-radius: .35rem
}

.mChannelStrategy .mChannelStrategy__top .mChannelStrategy__more span {
    margin-left: .1rem;
    padding-right: .18rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAUCAYAAAC58NwRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplODBhNTEyYi00OTI1LTRkYWUtYTU2NS05OWIxZjNiNDQ3YmIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkI3RTRBQjg4NUIzMTFFOEFGQTVCOTBDQTIyRDRFNTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkI3RTRBQjc4NUIzMTFFOEFGQTVCOTBDQTIyRDRFNTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhmNTJiMTZkLTY4NmQtNGY0Ny05N2Y1LTVhY2U2N2FkZDk5YyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDplODBhNTEyYi00OTI1LTRkYWUtYTU2NS05OWIxZjNiNDQ3YmIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz497KshAAABb0lEQVR42oSTvUoDQRDH7/buAcTOcJ6JKAQLSbBIY1ol+ImCoo8idj6Bhc8Q8AMFMQbESkISWxuxiJAghzZaWJ334W/gDoJ4m4EfM7fMf2b3ZtfM5XI1x3EWfd8/tm37I45jQ7Asy4iiyDBN0xCTWNaU67pbQRAc8NFgfcIYYYrkI6p0iBegCVNaAe37CDagRTzP2gXxTKYg8bL3PXwr6XQGszqB2AB2E1GJQ57iXZ1A7A224UFEdL3FT+sEYu+wTvI9Z5nD30FRJxD7ImkTfyMdkk4lnUAG9g1rhNf4PFwSF1U6xdRkyqmxbvFtJ+s/zCxSmhmNUbUJNeJn2SK82BnJ43AFVUmGFehlnWESGlSuUvGJeIm4l/WXCsnhKtBFsAyD4YThLeWhLlcDURe/A156vf92kCtwTrUKtEna57v/3+GkQ0FuKJSVUo9hGMrV8HS39ZCKZXwHwSqxp3sP0qHOgF7Zygmv7nPUi/sVYAC15ZuhH6dPhgAAAABJRU5ErkJggg==) 100% no-repeat;
    background-size: .12rem .2rem
}

.mChannelStrategy .mChannelStrategy__list {
    width: 100%;
    overflow: hidden
}

.mChannelStrategy .mChannelStrategy__list li {
    margin: 0 .2rem .29rem;
    height: 1.8rem;
    border-bottom: 1px solid #efefef;
    overflow: hidden
}

.mChannelStrategy .mChannelStrategy__list li:last-of-type {
    margin-bottom: 0;
    border-bottom: 0
}

.mChannelStrategy .mChannelStrategy__list li .strategy__left {
    float: left;
    width: 4.6rem
}

.mChannelStrategy .mChannelStrategy__list li .strategy__left p {
    height: .8rem;
    line-height: .4rem;
    font-size: .28rem;
    color: #353535;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden
}

.mChannelStrategy .mChannelStrategy__list li .strategy__left .strategy__left__info {
    margin-top: .32rem;
    overflow: hidden
}

.mChannelStrategy .mChannelStrategy__list li .strategy__left .strategy__left__info span {
    font-size: .26rem;
    color: #999
}

.mChannelStrategy .mChannelStrategy__list li .strategy__left .strategy__left__info .strategy__browse__num {
    float: left;
    margin-right: .33rem;
    padding-left: .44rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAZCAYAAABZ5IzrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplODBhNTEyYi00OTI1LTRkYWUtYTU2NS05OWIxZjNiNDQ3YmIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDEyQzBFM0Q4NUJBMTFFOEI5MTI4QzE1OUY3REIxOEUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDEyQzBFM0M4NUJBMTFFOEI5MTI4QzE1OUY3REIxOEUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhmNTJiMTZkLTY4NmQtNGY0Ny05N2Y1LTVhY2U2N2FkZDk5YyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDplODBhNTEyYi00OTI1LTRkYWUtYTU2NS05OWIxZjNiNDQ3YmIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5ZvGb0AAADeElEQVR42qyXe2iPYRTHf/sRueVWJLkmw9wtJRoyu/xFGeYSckmu/8wlzCW5ZxMTYUQrl8ilFM0ocmcuafgHcw+FMJds5nPyfbVme5/3N3vq09ne9zznOe95znOe84sqLS0NRTry8vK6INpBJ2gJTfTqPbyEh/A4Pj7+QaS2o4I6hBONERNhBAwIaP8iHIF9OPexWhzCkXqIhZAGdfX4HORCPthCX/S8PjSCWEiAwXpeBBshE8c+VdkhnEk2I9qaV7AHdmD0RcCoNkNMg1nQAgphDvNPRuwQxpYiVurfRZCFoaJQFYaiPAfW6lE6tlYHdggD2YgpcB8mMDk/VA0Du7aVeyEGdmJ3utMhJm1DzIALMJxJHxyL9EJ0hB9w07Wd6DdEnICBsB39mZU6hPJ8xAY4A0ko/3Lk1zroXu5VDixh7nOfuTUQpyEe5qGb8Y9D+tJbSrw+KL33MTgZsVv/HodrOl2J0BMe2WKMQh8bTbVea5uD7t2/DvGyFn/fgc7Qj5dXfQz1lQPPtaW3yr235N2i/LMP++5jqx/iMhTIqeKw3k2SM7v8nNHIlBxb3pnQn7BkqeZYNZ/gZwjdK4p0jHwIhfHSilk6fLW9dyRkK0R/uIqxiz6qm6BEJ9U1FsM3WGa+WIQsOW2hrSzyzjG5k+Rlx5dbEX0G0S5v0H1rNU4+JIeVxDZ6BPga70iGA+iGy+i7Rk/JwjAe3tBJSSRkiY6JBZJxjq1to9NTEKBYJuneO2a+eF/qlfGNjvC+Vo3qjaEEH1W7jKOsGgeIjrfmqr+hZ6GbSsSuLLTMYSBNCXsA3SGV3IFW6c3mfkd0VuiEZXgntmxhrCkjlkujUDjsYygF4b0/rzbETutQNW5W0xKVsJXZGI04KN1YdEsqujp6yHgNGcz1MdhfYR5U5nGRWpTlfneg8uYUFNv2o3vP73KNUwNmTo1B+aAj7F4raxU539WAoZ9q2y1nBqF/KUj7YaE/qm1YD2tcCwXsiSw/FyiSw7B5NpIGza6SQ9BNtcqMHbD7JkJH7J5M0fxo3XHjsHOnKi1sbcRcixBY0j9VIlrjfttLxArmma51DyMhVVW4WJ3nZub9/K9fHSzQHjEbpkIDPf6sU2nRe6NnzaGtmnxPz7Y6W1fTk2r7GSTH6iDGq1JbG9KhgmukRP3QdXWdOX4tSPnxW4ABAGeEgpcyTTS7AAAAAElFTkSuQmCC) 0 no-repeat;
    background-size: .36rem .25rem
}

.mChannelStrategy .mChannelStrategy__list li .strategy__left .strategy__left__info .strategy__collection__num {
    float: left;
    padding-left: .38rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplODBhNTEyYi00OTI1LTRkYWUtYTU2NS05OWIxZjNiNDQ3YmIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTkwNjg3QTg4NUJBMTFFOEI4NUNBNkNCNzA4RTlGNTkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTkwNjg3QTc4NUJBMTFFOEI4NUNBNkNCNzA4RTlGNTkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhmNTJiMTZkLTY4NmQtNGY0Ny05N2Y1LTVhY2U2N2FkZDk5YyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDplODBhNTEyYi00OTI1LTRkYWUtYTU2NS05OWIxZjNiNDQ3YmIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5dxyq0AAAC/0lEQVR42rSWbWiNYRjHz5khPhsrPshsh7EYTSEljrdCXvOWvKVQ8gEfUCZaKWRfJEI2afmC0IZz8sXJVtuYLS9bWJPJPhhlLInjd9X/6OnsOc55Tufc9et6Xq7n+t/XfV/nuo8/Go36vI5wOBzAVIAfjgaDwRdeY/i9CiOai2mCKXpkoqWI//ISJ8fnfWyRaD1EYBJsy2rGZGsTfQVFMBksy3Z4a8/I+k+2Ml4n0RbbV+jguhEKYHNWlppsB2GO6Pa441Xs+hA+g7OR8Vrt53MyvRV7yPU9TDMEtCKZEyaToY5sj7m4lMselm/SkZtAaJz2skCZzFUxWWHddfmkFtqgxPac7x9jbf/fwRu7ZmV+D6hqHE1kE5RJrMgluFXuVgJEEkx2JqYKCl1ev4dO2ya4TIxWfygUGs1NA4xxOPYog3Y1CKOZD74n2ZJhmOkwQfVQKDvW4fbJErSlniPRDjWHr9CNyDevTYFv+tVUInH1kQ8jtCI2kVkm/BRs/cerCVT7MjiI9xPTxQQWYieq6bTkqAmsBus6VTic9WV4KOZFJbjSNP+1TF4uwdyGIXCFlzsyJGqCO5XpMuI+GNCrcbKqtoYwEm7Ceq+nTpzodcxG+AxLidWQ8JDA2aqyDvLgjn2YrJpdBIdjrsEqiS4mRtN/OxcOzfo9P4PlsDeNZPdItNVixYsmbJk4dmGu6jYvDeHYN9XE6vTaq0tkG9MQjmVYnM4hMUP2ZRrCr2XLPAlTHPlqe33wIQ3hbrCCDBBrVMqnk04i+z03sEe9LhObh9kFdvCfx+dhXI304tPC5Wy1yJ5UhWN70xonOB+zzxqB4/EKnoewlQjWOp63SdhW7lGqwtMc56wJ2nm835qAntvyn4R+/UFYYGgCZ9Sd6rQqU70utY1Sgm3HrtH9RzgFlwjep0ndUEs84JhAjaMoi70IP9G5WqF7+y2ehhoEv8TtpxVRJWJ2qm2Ag7KxUe9FuFyFY3+B7sMFBH4kOf6sCM8xATtzd8MinfEn3Pz/CjAAAi8amg9OW50AAAAASUVORK5CYII=) 0 no-repeat;
    background-size: .3rem .28rem
}

.mChannelStrategy .mChannelStrategy__list li .img {
    float: right;
    width: 2.2rem;
    height: 1.52rem;
    background: #fff9db 50% no-repeat;
    background-size: cover;
    overflow: hidden;
    border-radius: .1rem
}

.geetest_wind {
    position: absolute!important;
    display: none!important
}

.geetest_radar_btn {
    display: none!important;
    border: none!important;
    border-radius: .1rem!important;
    background: #f7f8f7!important
}

.geetest_radar_tip_content {
    display: none!important;
    font-size: .28rem!important;
    color: #666!important
}

.geetest_goto_wrap,.geetest_logo,.geetest_success_btn,.geetest_success_logo {
    display: none!important
}

.mGuideReg .mGuideReg__container {
    position: fixed;
    left: 0;
    top: 0;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    z-index: 999
}

.mGuideReg .mGuideReg__container,.mGuideReg .mGuideReg__container .container__box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.mGuideReg .mGuideReg__container .container__box {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    width: 6rem;
    height: 8rem;
    background: url(/static/img/img1.d7f4560.png) 50% no-repeat;
    background-size: cover
}

.mGuideReg .mGuideReg__container .container__box .box__phone {
    padding: 0 .3rem;
    width: 4.18rem;
    height: .88rem;
    font-size: .26rem;
    color: #333;
    border-radius: .1rem;
    background: #fff
}

.mGuideReg .mGuideReg__container .container__box .box__phone::-webkit-input-placeholder {
    font-size: .26rem;
    color: #cbcbcb
}

.mGuideReg .mGuideReg__container .container__box .box__phone::-moz-placeholder {
    font-size: .26rem;
    color: #cbcbcb
}

.mGuideReg .mGuideReg__container .container__box .box__phone::-ms-input-placeholder {
    font-size: .26rem;
    color: #cbcbcb
}

.mGuideReg .mGuideReg__container .container__box .box__phone::placeholder {
    font-size: .26rem;
    color: #cbcbcb
}

.mGuideReg .mGuideReg__container .container__box .box__code {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: .24rem;
    width: 4.78rem;
    height: .88rem;
    border-radius: .1rem;
    background: #fff
}

.mGuideReg .mGuideReg__container .container__box .box__code input {
    padding: 0 .3rem;
    width: 2.43rem;
    font-size: .26rem;
    color: #333
}

.mGuideReg .mGuideReg__container .container__box .box__code input::-webkit-input-placeholder {
    font-size: .26rem;
    color: #cbcbcb
}

.mGuideReg .mGuideReg__container .container__box .box__code input::-moz-placeholder {
    font-size: .26rem;
    color: #cbcbcb
}

.mGuideReg .mGuideReg__container .container__box .box__code input::-ms-input-placeholder {
    font-size: .26rem;
    color: #cbcbcb
}

.mGuideReg .mGuideReg__container .container__box .box__code input::placeholder {
    font-size: .26rem;
    color: #cbcbcb
}

.mGuideReg .mGuideReg__container .container__box .box__code div {
    position: relative;
    padding-left: .15rem;
    width: 1.44rem;
    height: .88rem;
    line-height: .88rem;
    text-align: center;
    font-size: .26rem;
    font-weight: 700;
    color: #cbcbcb
}

.mGuideReg .mGuideReg__container .container__box .box__code div:before {
    content: "";
    position: absolute;
    left: 0;
    top: .27rem;
    width: 1px;
    height: .3rem;
    background: #cbcbcb
}

.mGuideReg .mGuideReg__container .container__box .box__register {
    margin-top: .24rem;
    width: 4.78rem;
    height: .88rem;
    line-height: .88rem;
    text-align: center;
    font-size: .34rem;
    font-weight: 700;
    color: #fff;
    border-radius: .1rem;
    background: -webkit-gradient(linear,left top,right top,from(#f85c25),to(#fe3e3e));
    background: linear-gradient(90deg,#f85c25,#fe3e3e)
}

.mGuideReg .mGuideReg__container .container__box .box__agree {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: .3rem 0;
    height: .44rem;
    font-size: .24rem;
    color: #fff;
    z-index: 999
}

.mGuideReg .mGuideReg__container .container__box .box__agree i {
    display: inline-block;
    margin-right: .1rem;
    width: .24rem;
    height: .24rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0Mjc2MmU2NS05OTBlLTE3NDItOTc5NC0wYWNjODg5OTI2ZmYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjMxRTU3MENDRDRDMTFFOTk4NEFCREM4NTU5QzM0REQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjMxRTU3MEJDRDRDMTFFOTk4NEFCREM4NTU5QzM0REQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Mzg3Mzc4NmQtOGFhMy03ZjRkLWIyZWUtODkyNzAyZmQ1YTA2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQyNzYyZTY1LTk5MGUtMTc0Mi05Nzk0LTBhY2M4ODk5MjZmZiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhIcRcoAAAIHSURBVHjaYvx/OI0BD5AHYl8gtgZiNSAWBuLfQPwciJ8A8TEg3gTEj3AZwIjDAmkgrgZiPyBmYsAP/kEtaQXip+iS2DS7AfF+IA4gwnCYGSC1B6A0XgtSgHgeEPMwkA64gXgqEKfhsgAUHI1EuhpnkANxPdQsFAtAYd4LVUApYISaJY1sQRXUi+QDXgVWBgFNNqTgqoFZIAPE/hQZLqTHzqBXKsygnSfMwMQCCwVQ8pZhghrORJHhmumCDIxAg18c+srw789/pOD3Z4JmIgSQcuZiEDPnIMvwuys+oamwZgESGog0BVSoGMLPwAj0JRv/J4Ynu74SZfjzg0DDlwMN/4+uSgPkAyFEngR6796qj2C2QhAfg4wbNwWGg4AwC4bQ8/3fwAlNKZwfbAkIIPtEWJ+dQSONGMPhEfEOQ/QZ0JJ7KzF9QqLhQPAW5IObQCyB1RIGJJ9wSbEwiJpykmA4CNwA+eAITmmQJXehPhGz5CLRcBA4ygQtav/hVPIcasn/fyA2KYaDi3FQED0G4s14czPIkpeHvyNlImIAyMzHsBzcAsRf8buHJMO/Qs2EFxGgmqiEgUi/EwD/oWY9Ra8PNkLL8n8UGt4MNQtrjTYHiJOA+AsZhoOCJQeIZxCqk3cBsSPUFf+ITC0gtQ5AvJ7YVgW2Zos6tNkCzqHQDHoUmloe4jIAIMAAEa6yRrXosG8AAAAASUVORK5CYII=) 50% no-repeat;
    background-size: cover
}

.mGuideReg .mGuideReg__container .container__box .box__agree .box__agree--disagree {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0Mjc2MmU2NS05OTBlLTE3NDItOTc5NC0wYWNjODg5OTI2ZmYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTQ2Qjk3NzhDRDUxMTFFOTlBQUFFRTk0QjU5NzMxMzciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTQ2Qjk3NzdDRDUxMTFFOTlBQUFFRTk0QjU5NzMxMzciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWI0OTVhYTctNTUzZS1lNzQwLWFiNzMtODc1MDYyOWQzYzRkIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQyNzYyZTY1LTk5MGUtMTc0Mi05Nzk0LTBhY2M4ODk5MjZmZiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpjiCL8AAAHvSURBVHjarJZNKERhFIbvDCNSSDELGxFFFpQUKUxKwsZ2pFn4i4UtC7OSzILCyt8G69EskCgZP8XGwl9RymoyRE1paGS8p95Pt5thzNxTT2e+e+/3vnPm3nvOWKIHfVqMsIBG0Anqgd1w/gEcAS/YA9EfRWIY1IJxUKY79goegQ3kM6u4BmPgOB6DITAKrCAA1sA2uDJcVw5aQDerkwrmgEdfjdFgArjAB5gBsyCi/R6ZYAAMg1SwAkbUSavuwl6Kh0EXmIpDXP10U9wTZkW9xgoqwBYN5cCGlli0gQXwCVrBharADVLAUhLiGvcuUsutKpCbtQtCoIY5mcgCp8zNUkEHT6ybIK5Rw8vPHWJQx8WOZl7sqvdJDIq4uDPR4JK5WAyyuQiYaPDEnGPlSyWRYaKBaiMRMQhyYTfRoIA5aNX1mEoTDaqZr8TAz0W7iQZKyy8GPvAGHIb2nGiIRhM1fWLwwg5oYau1JXlzPexpq6KtetE0H9NqtuxEY4IaAXbY73Yd0rVqJ5gEaf8QTuMeJzVcqu3o58E56GF/l56+yVn8Vzg48WTPO+inVsyRKTdpGRRyfUuBE85k+bZ5oIojs4TX3YNBcBbP0E/n4BFy/6jgmTNgnk9OXP8q9E9FA3+qUp2ZiN6AQ7D/22j9EmAAfIZ7rVoZ/ckAAAAASUVORK5CYII=)
}

.mGuideReg .mGuideReg__container .container__close {
    margin-top: .5rem;
    width: .7rem;
    height: .7rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplNGRkMzE0Ny0zNzRjLWRhNGUtYWU0OS04NDUwNWNiM2I2OWUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTRBRjU4ODRGNzk3MTFFODgyQ0ZGNTgyMjMwMzZDRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTRBRjU4ODNGNzk3MTFFODgyQ0ZGNTgyMjMwMzZDRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MmM1ZDc4Y2QtMjdmNy0zZTRhLWEyYzYtZWUzNmM3ZThkNjBhIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmU0ZGQzMTQ3LTM3NGMtZGE0ZS1hZTQ5LTg0NTA1Y2IzYjY5ZSIv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) 50% no-repeat;
    background-size: cover
}

.mGuideReg .mGuideReg__box {
    position: fixed;
    left: .2rem;
    bottom: 1.28rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 7.1rem;
    height: .88rem;
    border-radius: .16rem .16rem 0 0;
    background: rgba(0,0,0,.8);
    z-index: 998
}

.mGuideReg .mGuideReg__box i {
    display: inline-block;
    margin-left: .14rem;
    margin-right: .1rem;
    width: .73rem;
    height: .72rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABICAYAAAC6L9h5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0Mjc2MmU2NS05OTBlLTE3NDItOTc5NC0wYWNjODg5OTI2ZmYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkJFQjRENjFDRDUxMTFFOUJDQjBCQ0VERUQ5NEM2NUUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkJFQjRENjBDRDUxMTFFOUJDQjBCQ0VERUQ5NEM2NUUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Mzg3Mzc4NmQtOGFhMy03ZjRkLWIyZWUtODkyNzAyZmQ1YTA2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQyNzYyZTY1LTk5MGUtMTc0Mi05Nzk0LTBhY2M4ODk5MjZmZiIv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) 50% no-repeat;
    background-size: cover
}

.mGuideReg .mGuideReg__box span {
    font-size: .28rem;
    color: #fff
}

.mGuideReg .mGuideReg__box div {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    right: .24rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 1.81rem;
    height: .6rem;
    font-size: .28rem;
    border-radius: .3rem;
    background: -webkit-gradient(linear,left top,right top,from(#ffd800),to(#ffc000));
    background: linear-gradient(90deg,#ffd800,#ffc000)
}

.mGuideReg .mGuideReg__box div:after {
    content: "";
    display: inline-block;
    margin-left: .09rem;
    width: .1rem;
    height: .18rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASCAYAAABit09LAAAAz0lEQVQoU43SQUqCURQG0COFO2gB0jRbRKSNctq8lmADg4IUtBbQClpBc6tF1ES3ETmQCuKGD54/z9/e+PDdx71fA3vYxwIzfCm8Bi5xjg/c4hnfVRvwEWfYxTsGJRzwFCMcrlICX2GaJwds4gh3dThgvBh7XIcT3IZfcpjjMdrYwRtuqjDhLh7QwhJPJRgpJ9tgoA4mOMhGX+eJCd2v/hffSAd4TbAOxeJ/8oWXkv5QRAfsYZhdJdYRJ1wrR7UURZQS+7j4T81ScT8x31TcX5GXPgYLHZ6uAAAAAElFTkSuQmCC) 50% no-repeat;
    background-size: cover
}

.mGuideReg .mGuideReg__ad {
    position: fixed;
    right: .2rem;
    bottom: 3.2rem;
    display: block;
    width: 1.6rem;
    height: 1.6rem;
    background: 50% no-repeat;
    background-size: cover;
    z-index: 999
}

.mGuideReg .fade-enter-active,.mGuideReg .fade-leave-active {
    -webkit-transition: opacity .5s;
    transition: opacity .5s
}

.mGuideReg .fade-enter,.mGuideReg .fade-leave-to {
    opacity: 0
}

.vux-fade-enter-active,.vux-fade-leave-active {
    opacity: 1;
    -webkit-transition: opacity .2s linear;
    transition: opacity .2s linear
}

.vux-fade-enter,.vux-fade-leave-to {
    opacity: 0
}

.vux-dialog-enter-active {
    -webkit-animation: vux-dialog-in .5s;
    animation: vux-dialog-in .5s
}

.vux-dialog-leave-active {
    -webkit-animation: vux-dialog-out .3s;
    animation: vux-dialog-out .3s
}

@-webkit-keyframes vux-dialog-in {
    0% {
        -webkit-transform: scale(1.185);
        transform: scale(1.185);
        opacity: 0
    }

    to {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1
    }
}

@keyframes vux-dialog-in {
    0% {
        -webkit-transform: scale(1.185);
        transform: scale(1.185);
        opacity: 0
    }

    to {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1
    }
}

@-webkit-keyframes vux-dialog-out {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1
    }

    to {
        -webkit-transform: scale(.85);
        transform: scale(.85);
        opacity: 0
    }
}

@keyframes vux-dialog-out {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1
    }

    to {
        -webkit-transform: scale(.85);
        transform: scale(.85);
        opacity: 0
    }
}

.vux-mask-enter,.vux-mask-leave-active {
    opacity: 0
}

.vux-mask-enter-active,.vux-mask-leave-active {
    -webkit-transition: opacity .3s;
    transition: opacity .3s
}

.weui-mask {
    background: rgba(0,0,0,.6)
}

.weui-mask,.weui-mask_transparent {
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0
}

@font-face {
    font-weight: 400;
    font-style: normal;
    font-family: weui;
    src: url("data:application/octet-stream;base64,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") format("truetype")
}

[class*=" weui-icon-"],[class^=weui-icon-] {
    display: inline-block;
    vertical-align: middle;
    font: normal normal normal 14px/1 weui;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased
}

[class*=" weui-icon-"]:before,[class^=weui-icon-]:before {
    display: inline-block;
    margin-left: .2em;
    margin-right: .2em
}

.weui-icon-circle:before {
    content: "\EA01"
}

.weui-icon-download:before {
    content: "\EA02"
}

.weui-icon-info:before {
    content: "\EA03"
}

.weui-icon-safe-success:before {
    content: "\EA04"
}

.weui-icon-safe-warn:before {
    content: "\EA05"
}

.weui-icon-success:before {
    content: "\EA06"
}

.weui-icon-success-circle:before {
    content: "\EA07"
}

.weui-icon-success-no-circle:before {
    content: "\EA08"
}

.weui-icon-waiting:before {
    content: "\EA09"
}

.weui-icon-waiting-circle:before {
    content: "\EA0A"
}

.weui-icon-warn:before {
    content: "\EA0B"
}

.weui-icon-info-circle:before {
    content: "\EA0C"
}

.weui-icon-cancel:before {
    content: "\EA0D"
}

.weui-icon-search:before {
    content: "\EA0E"
}

.weui-icon-clear:before {
    content: "\EA0F"
}

.weui-icon-back:before {
    content: "\EA10"
}

.weui-icon-delete:before {
    content: "\EA11"
}

[class*=" weui-icon_"]:before,[class^=weui-icon_]:before {
    margin: 0
}

.weui-icon-success {
    font-size: 23px;
    color: #09bb07
}

.weui-icon-waiting {
    font-size: 23px;
    color: #10aeff
}

.weui-icon-warn {
    font-size: 23px;
    color: #f43530
}

.weui-icon-info {
    font-size: 23px;
    color: #10aeff
}

.weui-icon-success-circle,.weui-icon-success-no-circle {
    font-size: 23px;
    color: #09bb07
}

.weui-icon-waiting-circle {
    font-size: 23px;
    color: #10aeff
}

.weui-icon-circle {
    font-size: 23px;
    color: #c9c9c9
}

.weui-icon-download,.weui-icon-info-circle {
    font-size: 23px;
    color: #09bb07
}

.weui-icon-safe-success {
    color: #09bb07
}

.weui-icon-safe-warn {
    color: #ffbe00
}

.weui-icon-cancel {
    color: #f43530;
    font-size: 22px
}

.weui-icon-clear,.weui-icon-search {
    color: #b2b2b2;
    font-size: 14px
}

.weui-icon-delete.weui-icon_gallery-delete {
    color: #fff;
    font-size: 22px
}

.weui-icon_msg {
    font-size: 93px
}

.weui-icon_msg.weui-icon-warn {
    color: #f76260
}

.weui-icon_msg-primary {
    font-size: 93px
}

.weui-icon_msg-primary.weui-icon-warn {
    color: #ffbe00
}

.weui-toast {
    position: fixed;
    z-index: 5001;
    width: 7.6em;
    min-height: 7.6em;
    top: 180px;
    left: 50%;
    margin-left: -3.8em;
    background: hsla(0,0%,7%,.7);
    text-align: center;
    border-radius: 5px;
    color: #fff
}

.weui-icon_toast {
    margin: 22px 0 0;
    display: block
}

.weui-icon_toast.weui-icon-success-no-circle:before {
    color: #fff;
    font-size: 55px
}

.weui-icon_toast.weui-loading {
    margin: 30px 0 0;
    width: 38px;
    height: 38px;
    vertical-align: baseline
}

.weui-toast__content {
    margin: 0 0 15px
}

.weui-toast.vux-toast-top {
    top: 10px
}

.weui-toast.vux-toast-bottom {
    top: auto;
    bottom: 10px;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%)
}

.weui-toast.vux-toast-middle {
    top: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%)
}

.vux-slide-from-top-enter,.vux-slide-from-top-leave-active {
    opacity: 0;
    -webkit-transform: translateX(-50%) translateY(-100%)!important;
    transform: translateX(-50%) translateY(-100%)!important
}

.vux-slide-from-bottom-enter,.vux-slide-from-bottom-leave-active {
    opacity: 0;
    -webkit-transform: translateX(-50%) translateY(100%)!important;
    transform: translateX(-50%) translateY(100%)!important
}

.vux-slide-from-bottom-enter-active,.vux-slide-from-bottom-leave-active,.vux-slide-from-top-enter-active,.vux-slide-from-top-leave-active {
    -webkit-transition: all .4s cubic-bezier(.36,.66,.04,1);
    transition: all .4s cubic-bezier(.36,.66,.04,1)
}

.weui-toast {
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    margin-left: 0!important
}

.weui-toast.weui-toast_forbidden {
    color: #f76260
}

.weui-toast.weui-toast_forbidden .weui-toast__content {
    margin-top: 10px
}

.weui-toast.weui-toast_text {
    min-height: 0
}

.weui-toast_text .weui-toast__content {
    margin: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 15px
}

.weui-toast__content {
    font-size: 16px
}

.weui-loading_toast .weui-toast__content {
    margin-top: 0
}

.weui-toast_success .weui-icon_toast:before {
    content: "\EA08"
}

.weui-toast_cancel .weui-icon_toast:before {
    content: "\EA0D"
}

.weui-toast_forbidden .weui-icon_toast.weui-icon-success-no-circle:before {
    content: "\EA0B";
    color: #f76260
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

#app,body {
    width: 7.5rem
}

#app {
    overflow-x: hidden
}

.clearfix:after,.clearfix:before {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0
}

.clearfix {
    zoom:1}

a {
    -webkit-tap-highlight-color: rgba(255,255,255,0);
    -webkit-user-select: none;
    -moz-user-focus: none;
    -moz-user-select: none
}

a,a:active,a:hover,a:visited {
    color: #333
}

.weui-dialog__btn_primary {
    color: #fcbc00!important
}

</style>