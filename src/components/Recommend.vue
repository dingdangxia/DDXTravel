<template>
  <div class="mIndexLine">
    <div class="mIndexLine__header">
      <i></i>
      <span>热门目的地推荐</span>
      <i></i>
    </div>
    <div class="mIndexLine__blank" style="height: 0px;"></div>
    <div class="mIndexLine__nav" id="boxFixed" style="top: 0px;" :class="{'is_fixed' : isFixed}">
      <div class="nav__header">
        <div
          v-for="(item,index) in upperArr"
          :key="index"
          :class="upperNum==index?'focus':''"
          @click="upperNav(index)"
        >{{item}}</div>
      </div>
      <div class="nav__body">
        <div
          v-for="(item,index) in locArr[locNum]"
          :key="index"
          :class="index==focusNum?'focus':''"
          @click="changeLoc(index)"
        >{{item}}</div>
      </div>
    </div>
    <div class="mIndexLine__body">
      <router-link
      class="body__line" 
      v-for="(item,index) in productArr" 
      :key="index"
      to="/detail"
      @click.native="toDetail(item.pid)"
      >
        <div class="line__pictrue" :style="'background-image: url(&quot;'+item.thumb+'&quot;);'">
          <div class="line__type">{{item.product_type}} | {{item.place_label}}</div>
          <div class="line__box">
            <div class="line__price">{{item.price_label}}</div>
            <div class="line__day">{{item.days}}{{item.nights}}</div>
          </div>
        </div>
        <div class="line__content">
          <div class="line__title">{{item.product_name}}</div>
          <div class="line__desc">
            <span>{{item.product_type}}</span>
            &lt;{{item.sub_name}}
          </div>
        </div>
      </router-link>
    </div>
    <div class="mIndexLine__loading" style="display: none;">
      <i class="weui-loading"></i>
      <span
        style="vertical-align: middle; display: inline-block; font-size: 14px;"
      >&nbsp;&nbsp;正在加载中...</span>
    </div>
    <div class="mToTop" style="display: none;"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        productArr: [],
        upperArr: ["国内游", "出境游", "周边游"],
        locArr: [
          [
            "热门",
            "内蒙",
            "新疆",
            "西北",
            "贵州",
            "广西",
            "四川",
            "西藏",
            "云南",
            "晋南",
            "华南",
            "华北",
            "华中",
            "华东",
            "更多"
          ],
          [
            "热门",
            "中东非",
            "南亚",
            "欧洲",
            "海岛",
            "东南亚",
            "日韩朝",
            "澳新",
            "美加",
            "极地"
          ],
          [
            "热门",
            "杭州",
            "上海",
            "武汉",
            "北京",
            "成都",
            "广州",
            "苏州",
            "南京",
            "重庆"
          ]
        ],
        locNum: 0,
        focusNum: 0,
        tagId: 0,
        regId:2,
        upperNum: 0,
        isFixed:false,
      };
    },
    methods: {
      // 跳转到详情页
      toDetail(pid){
        this.$store.state.pid = pid;
      },
      // 点击地名切换数据包
      changeLoc(index) {
        this.focusNum = index;
        if (this.upperNum == 0) {
          if(index == 0) {
            this.tagId =0;
          }
          if (index == 1) {
            this.tagId = 49;
          }
          if (index == 2) {
            this.tagId = 48;
          }
          if (index == 3) {
            this.tagId = 21;
          }
          if (index == 4) {
            this.tagId = 44;
          }
          if (index == 5) {
            this.tagId = 45;
          }
          if (index == 6) {
            this.tagId = 46;
          }
          if (index == 7) {
            this.tagId = 47;
          }
          if (index == 8) {
            this.tagId = 43;
          }
          if (index == 9) {
            this.tagId = 111;
          }
          if (index == 10) {
            this.tagId = 82;
          }
          if (index == 11) {
            this.tagId = 83;
          }
          if (index == 12) {
            this.tagId = 113;
          }
          if (index == 13) {
            this.tagId = 74;
          }

        }
        else if(this.upperNum == 1) {
          if(index == 0) {
            this.tagId = 0;
          }
          if (index == 1) {
            this.tagId = 28;
          }
          if (index == 2) {
            this.tagId = 27;
          }
          if (index == 3) {
            this.tagId = 32;
          }
          if (index == 4) {
            this.tagId = 31;
          }
          if (index == 5) {
            this.tagId = 26;
          }
          if (index == 6) {
            this.tagId = 30;
          }
          if (index == 7) {
            this.tagId = 29;
          }
          if (index == 8) {
            this.tagId = 71;
          }
          if (index == 9) {
            this.tagId = 81;
          }
        }
        else if(this.upperNum == 2) {
          if(index == 0) {
            this.tagId = 0;
          }
          if (index == 1) {
            this.tagId = 1;
          }
          if (index == 2) {
            this.tagId = 2;
          }
          if (index == 3) {
            this.tagId = 4;
          }
          if (index == 4) {
            this.tagId = 5;
          }
          if (index == 5) {
            this.tagId = 6;
          }
          if (index == 6) {
            this.tagId = 7;
          }
          if (index == 7) {
            this.tagId = 10;
          }
          if (index == 8) {
            this.tagId = 13;
          }
          if (index == 9) {
            this.tagId = 14;
          }
        }
        this.$axios(`/api/api/lines?class_region_id=${this.regId}&tag_id=${this.tagId}&page=1`
        ).then(res => {
          this.productArr = res.data.data.products;
        });
      },
      upperNav(index) {
        this.upperNum=this.locNum=index;
        if(index == 0) {
          this.regId = 2;
        }else if (index == 1) {
          this.regId = 3;
        }else {
          this.regId = 1;
        }
        this.$axios(`/api/api/lines?class_region_id=${this.regId}&tag_id=${this.tagId}&page=1`
        ).then(res => {
            this.productArr = res.data.data.products;
        });
      },
      handleScroll() {
        let scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        let offsetTop = document.querySelector("#boxFixed").offsetTop;
        if(scrollTop < 3500) {
          this.isFixed=false;
        }else {
          this.isFixed=true;
        }
      }
    },
    created() {
      this.$axios(`/api/api/lines?class_region_id=${this.regId}&tag_id=${this.tagId}&page=1`
      ).then(res => {
          this.productArr = res.data.data.products;
      });
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    }
  };
</script>

<style>
  .mIndexLine .mIndexLine__header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 7.5rem;
    height: 0.74rem;
    background: #f7f7f9;
  }

  .mIndexLine .mIndexLine__header i {
    display: inline-block;
    width: 2.1rem;
    height: 0.02rem;
    background: #ededed;
  }

  .mIndexLine .mIndexLine__header span {
    margin-left: 0.4rem;
    margin-right: 0.2rem;
    padding-left: 0.4rem;
    font-size: 0.24rem;
    color: #585858;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAABiCAYAAAEzYF2mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMzNBMEE5RUJEOTYxMUU1OTNDNkFEQzBEMUY0QzYxOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMzNBMEE5RkJEOTYxMUU1OTNDNkFEQzBEMUY0QzYxOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAzM0EwQTlDQkQ5NjExRTU5M0M2QURDMEQxRjRDNjE4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAzM0EwQTlEQkQ5NjExRTU5M0M2QURDMEQxRjRDNjE4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+kDxVEgAAD99JREFUeNpi/H9EngEL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)
      0 no-repeat;
    background-size: 0.33rem 0.33rem;
  }

  .mIndexLine .mIndexLine__nav {
    width: 7.5rem;
    background: #fff;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }
  .is_fixed {
    position: fixed;
    z-index: 999;
  }

  .mIndexLine .mIndexLine__nav .nav__header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 7.5rem;
    height: 0.9rem;
    border-bottom: 1px solid #eee;
  }

  .mIndexLine .mIndexLine__nav .nav__header div {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    height: 0.9rem;
    line-height: 0.9rem;
    text-align: center;
    font-size: 0.32rem;
    color: #000;
  }

  .mIndexLine .mIndexLine__nav .nav__header .focus:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.05rem;
    background: #ffc31a;
  }

  .mIndexLine .mIndexLine__nav .nav__body {
    padding-top: 0.2rem;
    font-size: 0;
  }

  .mIndexLine .mIndexLine__nav .nav__body div {
    display: inline-block;
    margin: 0 0.15rem;
    margin-bottom: 0.2rem;
    width: 1.2rem;
    height: 0.55rem;
    line-height: 0.55rem;
    text-align: center;
    font-size: 0.22rem;
    color: #666;
    border-radius: 0.1rem;
    background: #f7f7f7;
  }

  .mIndexLine .mIndexLine__nav .nav__body .focus {
    color: #333;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #333;
    background: #fdc72e;
  }

  .mIndexLine .mIndexLine__nav--fixed {
    position: fixed;
    top: 0;
    z-index: 999;
  }

  .mIndexLine .mIndexLine__blank {
    width: 7.5rem;
  }

  .mIndexLine .mIndexLine__body .body__line {
    position: relative;
    display: block;
    margin-bottom: 0.2rem;
    width: 7.5rem;
    height: 4.84rem;
    font-size: 0;
    background: #fff;
    overflow: hidden;
  }

  .mIndexLine .mIndexLine__body .body__line:last-child {
    margin-bottom: 0;
  }

  .mIndexLine .mIndexLine__body .body__line .line__pictrue {
    width: 100%;
    height: 3.6rem;
    position: relative;
    background: #fff9db 50% no-repeat;
    background-size: cover;
  }

  .mIndexLine .mIndexLine__body .body__line .line__pictrue .line__type {
    position: absolute;
    left: 0.26rem;
    top: 0.32rem;
    padding: 0 0.2rem;
    height: 0.44rem;
    line-height: 0.44rem;
    color: #fff;
    border-radius: 0.22rem;
    background: rgba(0, 0, 0, 0.4);
  }

  .mIndexLine .mIndexLine__body .body__line .line__pictrue .line__box {
    position: absolute;
    right: 0.1rem;
    bottom: 0.2rem;
    font-size: 0;
  }

  .mIndexLine
    .mIndexLine__body
    .body__line
    .line__pictrue
    .line__box
    .line__price {
    padding: 0 0.15rem;
    min-width: 1.1rem;
    height: 0.36rem;
    line-height: 0.36rem;
    text-align: center;
    font-size: 0.26rem;
    color: #fff;
    background: #ffc31a;
  }

  .mIndexLine .mIndexLine__body .body__line .line__pictrue .line__box .line__day {
    height: 0.36rem;
    line-height: 0.36rem;
    text-align: center;
    font-size: 0.26rem;
    color: #ffc112;
    background: #fff;
  }

  .mIndexLine .mIndexLine__body .body__line .line__content {
    padding: 0 0.25rem;
    height: 1.24rem;
  }

  .mIndexLine .mIndexLine__body .body__line .line__content .line__title {
    padding-top: 0.15rem;
    font-size: 0.28rem;
    color: #000;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .mIndexLine .mIndexLine__body .body__line .line__content .line__desc {
    margin-top: 0.15rem;
    width: 100%;
    font-size: 0.26rem;
    color: #b4b4b4;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .mIndexLine .mIndexLine__body .body__line .line__content .line__desc span {
    display: inline-block;
    margin-right: 0.1rem;
    padding: 0 0.1rem;
    height: 0.35rem;
    line-height: 0.35rem;
    vertical-align: 1px;
    text-align: center;
    font-size: 0.26rem;
    font-style: normal;
    color: #fff;
    background: #f68b6e;
  }

  .mIndexLine .mIndexLine__loading {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0.1rem 0;
  }
</style>