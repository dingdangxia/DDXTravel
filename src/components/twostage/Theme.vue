<template>
  <div class="mChannelSmallLine">
    <h3 class="mChannelSmallLine__title">主题旅游</h3>
    <ul class="mChannelSmallLine__nav" >
      <li
      v-for="(item,index) in theme_tag" 
      :key="index"
      :class="index==activeNum?'active':''"  
      @click="change(index)">
        {{ item.block_alias }}
      </li>
    </ul>
    <div>
      <ul class="mChannelSmallLine__list">
        <li v-for="th in theme_lines" :key="th.id">
          <a :href="th.href">
            <span
              class="line__gather"
            >{{ th.class_type_name || th.class_theme_name || '休闲游' }} | {{ th.jihe}}</span>
            <i class="img" :style="'background-image: url('+th.img+');'"></i>
            <div class="line__bottom">
              <p>{{ th.title }}</p>
              <div class="line__text">
                <div class="line__price">
                  ¥
                  <span class="price">{{ th.price }}</span>
                  <span class="style__color">起</span>
                </div>
                <div class="line__days">
                  <span>{{ th.time }}</span>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <div class="mChannelSmallLine__more">
        <a
          href="/new/channel/searchlist?source_id=203&amp;site_code=&amp;site_name=&amp;page_type=cn&amp;module_type=theme&amp;theme_id=60&amp;theme_name=%E4%BC%91%E9%97%B2%E6%B8%B8"
        >
          <span>更多活动</span>
        </a>
      </div>
    </div>
    <div class="mChannelNoContent" style="display: none;">
      <i></i>
      <span>暂无数据</span>
    </div>

  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
        theme_tag:[],
        theme_lines:[],
        id:'',
        activeNum:0
    };
  },
  methods: {
    change(index){
      this.activeNum = index
      if(index==0){
        this.id = ''
      }else if(index==1){
        this.id = 399 
      }else if(index==2){
        this.id = 397
      }else if(index==3){
        this.id = 398 
      }else if(index==4){
        this.id = 535 
      }else if(index==5){
        this.id = 401 
      }else if(index==6){
        this.id = 435 
      }else if(index==7){
        this.id = 400 
      }else if(index==8){
        this.id = 404 
      }else if(index==9){
        this.id = 402
      }else if(index==10){
        this.id = 437 
      }else if(index==11){
        this.id = 406 
      }
      this.$axios.get(`/api/api/channel/theme?source_id=203&block_one_id=256&block_second_id=${this.id}&day=0&tag_type=2`).then(res => {
        console.log(res.data.data.theme_lines);
        this.theme_lines = res.data.data.theme_lines
      });
    }
  },
  created() {
    this.$axios.get("/api/api/channel/cn").then(res => {
      // console.log(res.data.data.theme_lines);
      this.theme_tag = res.data.data.theme_lines.lines.theme_tag
      this.theme_lines = res.data.data.theme_lines.lines.theme_lines
    })
  },

};
</script>
<style  scoped>
.active{
  color: #333!important;
  background-color: #fee880 !important
}
</style>