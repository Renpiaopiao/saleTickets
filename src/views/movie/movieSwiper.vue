<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>swiper第1页</van-swipe-item>
      <van-swipe-item>swiper第2页</van-swipe-item>
      <van-swipe-item>swiper第3页</van-swipe-item>
      <van-swipe-item>swiper第4页</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
    
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
