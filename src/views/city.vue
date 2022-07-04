<template>
  <div>
    <van-index-bar :index-list="computedLetterList" @select="handleSelect">
      <div v-for="(item,index) in cityList" :key="index" >
        <van-index-anchor :index="item.type" />
        <van-cell :title="cell.name" v-for="cell in item.list" @click="handleBaclk(cell.name,cell.cityId)" :key="cell.cityId"/>
      </div >
    </van-index-bar>
  </div>
</template>

<script>
import Vue from "vue";
import { IndexBar, IndexAnchor, Cell, Toast } from "vant";
import http from "@/util/http";

Vue.use(IndexBar).use(Cell);
Vue.use(IndexAnchor);
export default {
  data() {
    return {
      cityList: [],
    };
  },
  computed:{
    computedLetterList(){
        return this.cityList.map(item => item.type)
    }
  },
  mounted() {
    http({
      url: `/gateway?k=2323046`,
      headers: {
        "X-Host": "mall.film-ticket.city.list",
      },
    }).then((res) => {
      console.log(res.data.data.cities);
      this.cityList = this.handleCitis(res.data.data.cities);
    });
  },
  methods: {
    handleCitis(data) {
      const letterArr = [];
      const newCitis = [];
      for (let code = 65; code < 91; code++) {
        letterArr.push(String.fromCharCode(code));
      }

      letterArr.forEach((letter) => {
        const list = data.filter(
          (item) => item.pinyin.substring(0, 1).toUpperCase() === letter
        );
        console.log(list);
        if (list.length > 0) {
          newCitis.push({
            type: letter,
            list: list,
          });
        }
      });

      return newCitis;
    },
    handleSelect(index){
        Toast(index)
    },
    handleBaclk(name,cityId){
        this.$store.commit('changePage',name)
        this.$store.commit('changeId',cityId)
        this.$router.back()
    }
  },
};
</script>

<style>
</style>