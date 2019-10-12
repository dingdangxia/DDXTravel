<template>
    
</template>
<script>
 var deviceWidth = document.documentElement.clientWidth
      if (deviceWidth > 750) deviceWidth = 750
      document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px'
export default {
  data() {
    return {};
  },
  created() {
    console.log(this.$route.query.dataobj);
  },
  methods: {}
};
</script>

<style>

</style>