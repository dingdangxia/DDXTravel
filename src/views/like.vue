<template>
   <div class="recommend__body">
       
                <a href="#" 
                class="recommend__list"
                v-for="(item,index) in list" :key="index"
                >
                    <div class="list__pic" :style="{ backgroundImage:`url(${item.pro_pic})`}">
                        <!---->
                        <div class="list__tag">{{item.product_type}} | {{item.place_label}}</div>
                    </div>
                    <div class="list__box">
                        <div class="list__type">{{item.product_cat}} · {{item.days}}</div>
                        <div class="list__title">{{item.product_name}}</div>
                        <div class="list__tags"></div>
                        <div class="list__desc">{{item.liangdianLabel}}</div>
                        <div class="list__price">￥<b>{{item.price}}</b>起<span>{{item.peopleCount}}人已报名</span></div>
                    </div>
                </a>
            
            </div>
</template>

<script>
export default {
    data(){
        return{
            list:[],
        }
    },
    created(){
        this.$axios.get('/api/api/lines/likeLines?pid=28401').then((res)=>{
            // console.log(res);
            this.list=res.data.data.recommend_product
        })
    },
    methods: {
         
    },

}
</script>

<style>
</style>