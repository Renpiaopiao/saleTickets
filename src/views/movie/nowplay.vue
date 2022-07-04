<template>
  <div style="margin-bottom:50px">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :immediate-check="false"
    >
      <van-cell
        class="movieItem"
        v-for="item in movieList"
        :key="item.filmId"
        @click="handleClick(item.filmId)"
      >
        <img :src="item.poster" alt="" />
        {{ item.name }}
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import http from "../../util/http";
import { List, Cell } from "vant";
import Vue from "vue";

Vue.use(List).use(Cell);

export default {
  data() {
    return {
      movieList: [],

      // vant 列表
      loading: false, //是否正在加载中,到底之后会自动改为ture
      finished: false,

      current: 1, //第几页数据
      total:0   //总长度
    };
  },
  mounted() {
    
    http({
      url: `/gateway?cityId=${this.$store.state.cityId}&pageNum=1&pageSize=10&type=1&k=136082`,
      headers: {
        "X-Host": "mall.film-ticket.film.list",
      },
    }).then((res) => {
      console.log(res.data.data);
      this.movieList = res.data.data.films;
      this.total = res.data.data.total
    });
  },
  methods: {
    onLoad() {
      console.log("到底了！！");
      if(this.movieList.length == this.total && this.movieList.length != 0){
        this.finished = true
        return 
      }
      this.current++;
      // 1、请求新数据
      http({
        url: `/gateway?cityId=${this.$store.state.cityId}&pageNum=${this.current}&pageSize=10&type=1&k=136082`,
        headers: {
          "X-Host": "mall.film-ticket.film.list",
        },
      }).then((res) => {
        // 2、合并新数据到老数据
        this.movieList = [...this.movieList, ...res.data.data.films];
      // 3、loading改为false
        this.loading = false
      });
    },
    handleClick(id) {
      // this.$router.push('/detail'+`/${id}`)
      this.$router.push({
        name: "detail",
        query: {
          id: id,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.movieItem {
  img {
    width: 100px;
  }
}
</style>
