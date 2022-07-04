<template>
  <div>
    <van-nav-bar title="标题"  @click-left = "handleLeft" @click-right = "handleright">
      <template #left>
        {{$store.state.cityName}}<van-icon name="arrow-down" />
      </template>
      <template #right>
        <van-icon name="search" size="23" />
      </template>
    </van-nav-bar>
    <div class="cinema">
      <div v-for="item in $store.state.cinemaList" :key="item.cinemaId">
        <div>{{ item.name }}</div>
        <div class="adress">{{ item.address }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/util/http";
// import BetterScroll from 'better-scroll'

export default {
  data() {
    return {
      cinemaList: [],
    };
  },
  methods:{
    handleLeft(){
      // 清空cinema的状态
      this.$store.commit('clearCinemaList')
      this.$router.push('/city')
    },
    handleright(){
      this.$router.push('/cinema/search')
    }
  },
  mounted() {
    if(this.$store.state.cinemaList.length == 0){
      this.$store.dispatch('getCinemaList',this.$store.state.cityId)
    }else{
      console.log('缓存');
    }
    // http({
    //   url: `/gateway?cityId=${this.$store.state.cityId}&ticketFlag=1&k=2500238`,
    //   headers: {
    //     "X-Host": "mall.film-ticket.cinema.list",
    //   },
    // }).then((res) => {
    //   console.log(res.data.data.cinemas);
    //   this.cinemaList = res.data.data.cinemas;
      // store.commit('setCinemaList', res.data.data.cinemas)
      // 状态修改，但是dom异步渲染
      // this.$nextTick(() => {
      //   new BetterScroll('.cinema')
      // })
    // });
  },
};
</script>

<style scoped lang="scss">
.adress {
  font-size: 12px;
  margin-bottom: 5px;
  color: rgb(167, 166, 166);
}

.cinema {
  // height: 500px;
  height: calc(100vh - 50px);
  overflow: scroll;
}
</style>
