<template>
  <van-grid square :column-num="5" style="cursor:pointer">
  <van-grid-item
    v-for="(item,index) in navsList"
    :key="index"
    :icon="item.thumb"
    :text="item.title"
    to="/internal"
    @click="getLoc(index)"
  />
</van-grid>
</template>

<script>
export default {
  name:'indexNav',
  components:{

  },
  data() {
    return {
      navsList:[]
    }
  },
  created() {
    this.$axios.get('/api/api/index?random=1570602769043').then((res)=>{
          console.log(res.data.data.navs)
          this.navsList = res.data.data.navs
    })
  },
  methods: {
    getLoc(index) {
      this.$store.state.internalNum = index;
      console.log(this.$store.state.internalNum)
      console.log(this.$store.getters.getLoc.internalLoc)
    }
  },
  computed: {
  },
}
</script>

<style>
img {
  width: 39px;
}
.van-grid-item {
  padding-top: 10px !important;
}
</style>