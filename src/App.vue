<template>
  <div id="app">    
    
    <router-view name='internal'/>
  </div>
</template>
<script>
export default {
  name: 'app',
  components: {

  }
}
</script>
<style >
body,p,h3,h4,h5,ul{
  padding: 0;
  margin: 0;
  color: #333;
}
li{
  list-style: none;
}
a{
  text-decoration: none
}
/* swipe */
.van-swipe__indicators{
  bottom: .666667rem /* 25/37.5 */ !important;
}
html{
    font-size: 55px;
}
</style>
