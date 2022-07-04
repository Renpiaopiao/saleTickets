<template>
  <div>
    <!-- <div class="lunbo">swiper</div> -->
    <movieSwiper/>
    <movieHeader class="header"/>
    <router-view></router-view>
  </div>
</template>

<script>
import movieHeader from "./movie/movieHeader.vue";
import movieSwiper from "./movie/movieSwiper.vue";
export default {
  components: {
    movieHeader,
    movieSwiper
  },
};
</script>

<style scoped>
.lunbo {
  width: 300px;
  height: 300px;
  background-color: rgb(251, 206, 27);
}

.header {
  position: sticky;
  top:0;
  background-color: #fff;
  z-index: 99;
}
</style>
