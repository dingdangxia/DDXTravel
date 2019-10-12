<template>
  <div class="packge__box">
                <div class="package__scroller">
                    <div class="mScrollX" ref=mscroll>
                        <div class="package__scroll" ref='pagescroll'>
                            <div 
                            ref="wscroll"
                            class="package__list" 
                            v-for="(item,index) in btlist" :key="index"                           
                            >
                                <div class="package__date">{{item.dateline}}</div>
                                <div class="package__title">{{item.pkg_name}}</div>
                                <div class="package__price">￥{{item.price}}</div>
                            </div>
                        </div>
                    </div>
           
                </div>
            </div>


</template>

<script>
import BScroll from 'better-scroll'
export default {
    props: {
        btlist: {
        type: Array,
        }
  },
    data(){
       return{

       }
    },
    created() {
    this.$nextTick(() => {
      this.personScroll();
    });
  },
  methods: {
    personScroll() {
      //默认有this.btlist.length这么多个子元素，每个宽度为170px
      let width = this.btlist.length * 170;
      this.$refs.pagescroll.style.width = width + "px";
      // this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.mscroll, {
            startX: 0,
            click: true,
            scrollX: true,
            // 忽略竖直方向的滚动
            scrollY: false,
            eventPassthrough: "vertical"
          });
        } else {
          this.scroll.refresh();
        }
      });
    }
  }
     
}
</script>

<style>


</style>