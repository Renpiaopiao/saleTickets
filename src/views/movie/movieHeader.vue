<template>
  <div>
    <ul>
      <router-link to="/movie/nowplay" tag="li" active-class="li_red"
        >正在热播</router-link
      >
      <router-link
        :to="`/movie/comesoon/${this.id}`"
        tag="li"
        active-class="li_red"
        >即将上映</router-link
      >
      <!-- <div @click="goTo">点击</div> -->  
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 111,
      testData: "hhh",
    };
  },
  methods: {
      goTo(){
          this.$router.push({
              name:'comesoon',
              params:{
                  testData:this.testData
              }
          })
      }
  },
};
</script>

<style scoped lang="scss">
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}

ul {
  display: flex;
  // justify-content: space-around;
  padding-top: 10px;
  padding-bottom: 10px;
  li {
    flex: 1;
    text-align: center;
  }
}
.li_red {
  color: red;
  border-bottom: 3px solid red;
}
</style>
