<template>
  <div>
    <van-search v-model="value" show-action placeholder="请输入搜索关键词"  @cancel="handleCancel"/>
    <div class="cinema">
      <div v-for="item in computedCinemaList" :key="item.cinemaId">
        <div>{{ item.name }}</div>
        <div class="adress">{{ item.address }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  mounted() {
    if (this.$store.state.cinemaList.length == 0) {
      this.$store.dispatch("getCinemaList", this.$store.state.cityId);
    } else {
      console.log("缓存");
    }
  },
  computed:{
    computedCinemaList(){
      if(this.value === '')  return []
      return this.$store.state.cinemaList.filter(item => item.name.toUpperCase().includes(this.value.toUpperCase()) || item.address.toUpperCase().includes(this.value.toUpperCase()))
    }
  },
  methods:{
    handleCancel(){
      this.$router.replace('/cinemar')
    }
  }
};
</script>

<style scoped>
.adress {
  font-size: 12px;
  margin-bottom: 5px;
  color: rgb(167, 166, 166);
}

.cinema {
  /* height: 500px; */
  height: calc(100vh - 50px);
  overflow: scroll;
}

</style>