<template>
  <div class="detail">
    <div class="mLine">
      <div class="mLine__banner">
        <div class="banner__swiper">
          <!-- <div class="vux-slider mSwiperBanner">
            <div class="vux-swiper" style="height: 4.23rem;">
              <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="(item,index) in list" :key="index">
                    <img :src="item" />
                  </div>
                </div>
                <div class="swiper-pagination"></div>
              </div>
            </div>
          </div> -->
          <swiper :options="swiperOption">
　　<swiper-slide 
          v-for="(item,index) in list" 
          :key="index"
          >
          <img :src="item">
          </swiper-slide>
　　<div class="swiper-pagination" slot="pagination"></div>
</swiper>
          <!-- <div class="banner__page" style="">1/5</div> -->
        </div>
        <div class="banner__type">{{cate.cate}} · {{cate.type}} · {{cate.time}}</div>
      </div>
      <div class="mLine__title">
        <div class="title__pname">{{cate.product_name}}</div>
        <div class="title__sname">{{cate.sub_name}}</div>
      </div>
      <div class="mLine__price">
        <div>
          <div class="price__content">
            <div>
              ￥
              <span>{{cate.adultprice}}</span>起
              <b>成人</b>
            </div>
          </div>
          <div class="price__content">
            <div>
              ￥
              <span>{{cate.childprice}}</span>起
              <b>儿童</b>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div class="mLine__location">出发地：杭州</div>
      <div class="mLine__offer">
        <!---->
        <div class="offer__list">
          <div class="offer__content">
            <div class="offer__tag">立减</div>
            <div class="offer__msg">最新优惠政策</div>
          </div>
          <div class="offer__icon"></div>
        </div>
        <div class="offer__list">
          <div class="offer__content">
            <div class="offer__tag">送券</div>
            <div class="offer__msg">首次完善个人资料送100元代金券</div>
          </div>
        </div>
        <!---->
      </div>
      <div class="mLine__feature">
        <div class="feature__list" v-for="(item,index) in liangdian" :key="index">{{item}}</div>
      </div>
      <!---->
      <div class="mLine__package">
        <div class="package__head">
          <span>选择套餐类型/日期</span>
          <router-link to="/dingzhi"></router-link>
        </div>
        <!---->
        <batitem :btlist="btlist"></batitem>
      </div>
      <a href="https://m.youxiake.com/lines/batchorders?pid=28401" class="mLine__people">
        <div class="people__avatars">
          <div
            class="people__avatar"
            v-for="(item,index) in user"
            :key="index"
            :style="{ backgroundImage:`url(${item})`}"
          ></div>
        </div>
        <div class="people__number">
          436人
          <div>参加过</div>
        </div>
      </a>
      <!---->
      <div class="mLine__comment">
        <div class="comment__head">活动评价</div>
        <div class="comment__box">
          <div class="box__tags">
            <div
              class="box__tag"
              v-for="(item,index) in listdata"
              :key="index"
            >{{item.tname}} ({{item.num}})</div>
          </div>
          <div class="box__content">
            <!---->
            <div class="box__msg">
              <div class="box__avatar"></div>
              <div class="box__name">栾****普</div>
            </div>
            <div class="box__desc">行程安排的有规划 有讲解 推荐</div>
            <div class="box__btn">
              <a>查看全部评价{{cate.pj_num}}</a>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="mLine__discuss">
        <div class="discuss__head">活动咨询</div>
        <div class="discuss__box">
          <div class="box__msg">
            <div
              class="box__avatar"
              :style="{ backgroundImage:`url(${cate.lastcomment.comment.avatar})`}"
            ></div>
            <div class="box__name">{{cate.lastcomment.comment.username}}</div>
          </div>
          <div class="box__desc">不是游侠客组织吗，是跟其他旅行团吗，</div>
          <div class="box__service">
            游小侠
            <span>回复</span>
            {{cate.lastcomment.comment.username}}
            <span>:</span>
          </div>
          <div class="box__reply">是和其他旅行社一起的哦！</div>
          <div class="box__btn">
            <a href="/lines/discuss?pid=28401">查看全部咨询4</a>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="detail__container">
        <div class="detail__navbox" id="boxFixed" :class="{'is_fixed' : isFixed}">
          <div class="detail__nav">
            <div class="nav__list" :class="foclass" @click="returna1($event)">亮点</div>
            <div class="nav__list" @click="returna2($event)">行程</div>
            <div class="nav__list" @click="returna3($event)">费用</div>
            <div class="nav__list" @click="returna4($event)">须知</div>
          </div>
        </div>
      </div>
      <div class="mLineNotice">
        <div class="note__head">出团通知</div>
        <div
          class="note__context"
          v-html="cate.details.chutuantongzhi"
        >{{cate.details.chutuantongzhi}}</div>
      </div>
      <!---->
      <div class="mLineRemind">
        <div class="remind__head">报名提醒</div>
        <div class="remind__context" v-html="cate.details.remind">{{cate.details.remind}}</div>
        <div class="refund__more">
          查看更多
          <div></div>
        </div>
      </div>
      <div class="mLineRefund">
        <div class="refund__head">特殊原因退订保障</div>
        <div class="refund__context" v-html="cate.details.special">{{cate.details.special}}</div>
        <div class="refund__more">
          查看更多
          <div></div>
        </div>
      </div>
      <div class="mLine__recommend">
        <div class="recommend__head">
          <router-link to="/detail">
            <span :class="own" @click="fn($event)">猜你喜欢</span>
          </router-link>

          <router-link to="/detail/splendid">
            <span @click="fn($event)">精彩游记</span>
          </router-link>
        </div>
        <router-view></router-view>
      </div>
    </div>
    <div class="mLineBuy">
      <div class="line__bottom__service">
        <div></div>
        <span>联系客服</span>
      </div>
      <div class="line__bottom__favorite">
        <div></div>
        <span>收藏</span>
      </div>
      <!---->
      <div class="line__bottom__btn">立即报名</div>
    </div>
    <div class="mToTop" style="display: none;"></div>
    <div class="vux-toast">
      <div class="weui-mask_transparent" style="display: none;"></div>
      <div class="weui-toast weui-toast_text vux-toast-middle" style="width: auto; display: none;">
        <i class="weui-icon-success-no-circle weui-icon_toast" style="display: none;"></i>
        <p class="weui-toast__content" style="padding: 10px;"></p>
      </div>
    </div>
  </div>
</template>

<script>
import Batlist from "@/views/batlist.vue";
var deviceWidth = document.documentElement.clientWidth;
if (deviceWidth > 750) deviceWidth = 750;
document.documentElement.style.fontSize = deviceWidth / 7.5 + "px";
export default {
  components: {
    batitem: Batlist
  },
  data() {
    return {
      list: [],
      cate: {"lastcomment":{"comment":{}},"details":{}},
      liangdian: [],
      user: [],
      btlist: [],
      own: "focus",
      foclass: "nav__list nav__list--focus",
      isFixed: false,
      des:{},
      listdata:[],
      // cate:{"comment":"123"},
      pid:this.$store.state.pid,
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
    };
  },
  created() {
    this.$axios
      .get(
      `/api/api/lines/newdetails?id=${this.pid}&spm=eyJjb2RlIjoxMDcwLCJmcm9tIjoxMDczLCJvcmlnaW5hbF9pZCI6MH0`
      )
      .then(res => {
        //   console.log(res.data.data.product.flash_pic)
        let arr = [];
        let d = res.data.data.product.flash_pic;
        d.forEach(obj => {
          arr.push(obj);
        });
        this.list = arr; //轮播
        let str = res.data.data.product;
        this.cate = str;
        this.listdata=this.cate.lastpj.tags
        this.liangdian = res.data.data.liangdian;
        this.user = res.data.data.latest_orders.users;
        // console.log(res.data.data.latest_orders.users)
        this.btlist = res.data.data.batches_list;
      });


       this.$axios.get(
        "/api/api/lines/evaluationlist?pid=28401&page=1"
      ).then(res=>{
          console.log(res.data.data);
          this.des=res.data.data
          
      })
  },
  updated() {
    // var mySwiper = new Swiper(".swiper-container", {
    //   loop: true, // 循环模式选项
    //   autoplay: true,
    //   pagination: {
    //     el: ".swiper-pagination"
    //   }
    // });
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    evaluate(str,obj){
        this.$router.push({
          name:str,
          query: {
            'dataobj':obj
          }
        })
    },
    fn(e) {
      var spans = document.querySelectorAll(
        ".mLine__recommend .recommend__head span"
      );
      for (var i = 0; i < spans.length; i++) {
        spans[i].className = "";
      }
      var target = e.target;
      // console.log(target)
      target.className = this.own;
    },
     //滚动监听
    handleScroll() {
      setTimeout(() => {
let scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop; // 滚动条偏移量
    let offsetTop = document.querySelector("#boxFixed").offsetTop; // 要滚动到顶部吸附的元素的偏移量
    // console.log(scrollTop);
    // console.log(offsetTop);
    if(scrollTop > offsetTop){
        this.isFixed=true;
    }
    if(scrollTop < 1360){
        this.isFixed=false;
    }
      },200)
    
    // this.isFixed = scrollTop > offsetTop ? true : false;
  },
    //锚点跳转
    returna1(e) {
      const returnEle = document.querySelector(".mLineNotice");
      if (!!returnEle) {
        returnEle.scrollIntoView(true);
      }
      var as = document.querySelectorAll(".nav__list");
      for (var i = 0; i < as.length; i++) {
        as[i].className = "nav__list";
      }
      var target = e.target;
      // console.log(target)
      target.className = this.foclass;
    },
    returna2(e) {
      const returnEle = document.querySelector(".mLineRemind");
      if (!!returnEle) {
        returnEle.scrollIntoView(true);
      }
      var as = document.querySelectorAll(".nav__list");
      for (var i = 0; i < as.length; i++) {
        as[i].className = "nav__list";
      }
      var target = e.target;
      // console.log(target)
      target.className = this.foclass;
    },
    returna3(e) {
      const returnEle = document.querySelector(".mLineRefund");
      if (!!returnEle) {
        returnEle.scrollIntoView(true);
      }
      var as = document.querySelectorAll(".nav__list");
      for (var i = 0; i < as.length; i++) {
        as[i].className = "nav__list";
      }
      var target = e.target;
      // console.log(target)
      target.className = this.foclass;
    },
    returna4(e) {
      const returnEle = document.querySelector(".mLine__recommend");
      if (!!returnEle) {
        returnEle.scrollIntoView(true);
      }
      var as = document.querySelectorAll(".nav__list");
      for (var i = 0; i < as.length; i++) {
        as[i].className = "nav__list";
      }
      var target = e.target;
      // console.log(target)
      target.className = this.foclass;
    }
  },
 
  
};
</script>

<style>
.mLine__recommend{
    z-index:-1;
    position: relative;
}
#YSF-BTN-HOLDER {
  position: fixed;
  right: 30px;
  bottom: 24px;
  cursor: pointer;
  overflow: visible;
  filter: alpha(opacity=100);
  opacity: 1;
  z-index: 9990;
}
#YSF-BTN-HOLDER:hover {
  filter: alpha(opacity=95);
  opacity: 0.95;
}
#YSF-BTN-HOLDER img {
  display: block;
  overflow: hidden;
}
#YSF-BTN-CIRCLE {
  display: none;
  position: absolute;
  right: -5px;
  top: -6px;
  width: auto;
  min-width: 12px;
  height: 20px;
  padding: 0 4px;
  background-color: #f00;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  font-family: sans-serif;
  border-radius: 10px;
  z-index: 1;
}
#YSF-BTN-BUBBLE {
  display: none;
  position: absolute;
  left: -274px;
  bottom: -15px;
  width: 278px;
  height: 80px;
  box-sizing: border-box;
  padding: 14px 22px;
  filter: alpha(opacity=100);
  opacity: 1;
  background: url(https://qiyukf.com/sdk//res/img/sdk/bg_floatMsg2x.png)
    no-repeat;
  background: url(https://qiyukf.com/sdk//res/img/sdk/bg_floatMsg.png) 9;
  background-size: 278px 80px;
  z-index: 1;
}
#YSF-BTN-HOLDER.layer-6 {
  bottom: 0;
}
#YSF-BTN-HOLDER.layer-1 #YSF-BTN-BUBBLE {
  top: 0;
}
#YSF-BTN-HOLDER.layer-6 #YSF-BTN-BUBBLE {
  bottom: -6px;
}
#YSF-BTN-BUBBLE:hover {
  filter: alpha(opacity=95);
  opacity: 0.95;
}
#YSF-BTN-CONTENT {
  height: 45px;
  padding: 0;
  white-space: normal;
  word-break: break-all;
  text-align: left;
  font-size: 14px;
  line-height: 1.6;
  color: #222;
  overflow: hidden;
  z-index: 0;
}
#YSF-BTN-ARROW {
  display: none;
}
#YSF-BTN-CLOSE {
  position: absolute;
  width: 15px;
  height: 15px;
  right: 4px;
  top: -3px;
  filter: alpha(opacity=90);
  opacity: 0.9;
  cursor: pointer;
  background: url(https://qiyukf.com/sdk//res/img/sdk/btn-close.png) no-repeat;
  z-index: 1;
}
#YSF-BTN-CLOSE:hover {
  filter: alpha(opacity=100);
  opacity: 1;
}
#YSF-PANEL-CORPINFO.ysf-chat-layeropen {
  width: 511px;
  height: 500px;
  border-radius: 8px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
}
#YSF-PANEL-CORPINFO {
  position: fixed;
  bottom: 0px;
  right: 20px;
  width: 0;
  height: 0;
  z-index: 99999;
}
#YSF-PANEL-INFO.ysf-chat-layeropen {
  width: 360px;
  height: 500px;
  border-radius: 8px;
  filter: alpha(opacity=100);
  opacity: 1;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
}
#YSF-PANEL-INFO {
  position: fixed;
  bottom: 0px;
  right: 20px;
  width: 0px;
  height: 0px;
  filter: alpha(opacity=0);
  opacity: 0;
  z-index: 99999;
}
#YSF-PANEL-INFO .u-btn {
  background-color: #f2a654;
}
#YSF-CUSTOM-ENTRY {
  background-color: #f96868;
}
#YSF-CUSTOM-ENTRY-0 {
  position: relative;
  width: auto;
  background-color: #f2a654;
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.25);
}
#YSF-CUSTOM-ENTRY-1 {
  position: relative;
  width: auto;
  background-color: #f2a654;
  border-radius: 14px;
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.25);
}
#YSF-CUSTOM-ENTRY-2 {
  position: relative;
  width: auto;
  background-color: #f2a654;
  border-radius: 8px;
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.25);
}
#YSF-CUSTOM-ENTRY-3 {
  position: relative;
  width: auto;
  background-color: #f2a654;
  border-radius: 50%;
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.25);
}
#YSF-CUSTOM-ENTRY-4 {
  position: relative;
  width: auto;
  background-color: #f2a654;
  border-radius: 50%;
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.25);
}
#YSF-CUSTOM-ENTRY-5 {
  position: relative;
  width: auto;
  background-color: #f2a654;
  border-radius: 8px;
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.25);
}
#YSF-CUSTOM-ENTRY-6 {
  position: relative;
  width: auto;
  background-color: #f2a654;
  border-radius: 8px;
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.25);
}
#YSF-CUSTOM-ENTRY-7 {
  position: relative;
  width: auto;
  background-color: #f2a654;
  border-radius: 50%;
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.25);
}
#YSF-CUSTOM-ENTRY-8 {
  position: relative;
  width: auto;
  background-color: #f2a654;
  border-radius: 8px;
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.25);
}
#YSF-CUSTOM-ENTRY-0 img {
  max-width: 300px;
  height: auto;
}
#YSF-CUSTOM-ENTRY-1 img {
  width: 28px;
  height: auto;
}
#YSF-CUSTOM-ENTRY-2 img {
  width: 58px;
  height: auto;
}
#YSF-CUSTOM-ENTRY-3 img {
  width: 60px;
  height: auto;
}
#YSF-CUSTOM-ENTRY-4 img {
  width: 60px;
  height: auto;
}
#YSF-CUSTOM-ENTRY-5 img {
  width: 60px;
  height: auto;
}
#YSF-CUSTOM-ENTRY-6 img {
  width: 58px;
  height: auto;
}
#YSF-CUSTOM-ENTRY-7 img {
  width: 60px;
  height: auto;
}
#YSF-CUSTOM-ENTRY-8 img {
  width: 60px;
  height: auto;
}
#YSF-IFRAME-LAYER {
  border: 0;
  outline: none;
}
.ysf-online-invite-wrap {
  z-index: 10001;
  position: fixed;
  _position: absolute;
  top: 50%;
  left: 50%;
}
.ysf-online-invite {
  position: relative;
  top: -50%;
  left: -50%;
  cursor: pointer;
}
.ysf-online-invite img {
  display: block;
  width: 250px;
}
.ysf-online-invite .ysf-online-invite-img {
  width: 100%;
  height: 100%;
}
.ysf-online-invite .text {
  position: absolute;
  top: -11px;
  left: 0;
  right: 0;
  overflow: hidden;
  margin: 36px 20px 0 67px;
  line-height: 140%;
  color: #526069;
  font-size: 14px;
  font-family: "Microsoft YaHei", "微软雅黑", tahoma, arial, simsun, "宋体";
  text-align: left;
  white-space: normal;
  word-wrap: break-word;
}
.ysf-online-invite .close {
  position: absolute;
  top: -6px;
  right: -6px;
  width: 32px;
  height: 32px;
  background: url(https://qiyukf.com/sdk/res/img/invite-close.png) no-repeat;
  cursor: pointer;
}
.ysf-online-invite .close.custom {
  top: -16px;
  right: -16px;
}
#YSF-PANEL-MOBILE {
  background: rgba(46, 47, 49, 0.7);
  position: fixed;
  bottom: 0px;
  right: 0px;
  width: 100%;
  height: 0px;
  transition-property: height, bottom;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0s;
  z-index: 99999;
}
#YSF-PANEL-MOBILE.ysf-chat-layeropen {
  width: 100%;
  height: 100%;
  transition-property: height, bottom;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0s;
}
#YSF-IFRAME-LAYER.ysf-chat-mobile-layeropen {
  height: 90% !important;
  transition-property: height, bottom;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0s;
}
#YSF-IFRAME-LAYER {
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0px;
  width: 0px;
  height: 0px;
  transition-property: height, bottom;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0s;
  z-index: 9999;
}
.YSF-PANEL-BODY-FIXED {
  position: fixed !important;
  left: 0;
  right: 0;
}
/* .vux-swiper img {
  height: 4.23rem;
  width: 100%;
} */

.is_fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
/* 轮播 */
.swiper-slide img {
  width: 100%;
}
</style>
 