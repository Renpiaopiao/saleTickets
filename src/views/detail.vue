<template>
  <v-touch @swiperight="onSwiperRight">
    <div v-if="filminfo">
      <detailHeader v-top :title="filminfo.name" />
      <div
        class="poster"
        :style="{ backgroundImage: `url(${filminfo.poster})` }"
      ></div>
      <h3>{{ filminfo.name }} - {{ filminfo.filmType.name }}</h3>
      <div>{{ filminfo.premiereAt | dataFilter }} 上映</div>
      <div :class="isShow ? '' : 'movieText'">{{ filminfo.synopsis }}</div>
      <div style="text-align: center" @click="isShow = !isShow">
        <i
          class="iconfont"
          :class="isShow ? 'icon-less' : 'icon-moreunfold'"
        ></i>
      </div>

      <!-- 演员表轮播 -->
      <h3>演职人员</h3>
      <div class="xlist">
        <div class="xItem" v-for="item in filminfo.actors" :key="item.name">
          <img :src="item.avatarAddress" alt="" />
          <div>{{ item.name }}</div>
          <div>{{ item.role }}</div>
        </div>
      </div>

      <!-- 照片轮播 -->
      <h3>剧照</h3>
      <div class="xlist">
        <div
          class="xItem"
          @click="handleImage(index)"
          v-for="(item, index) in filminfo.photos"
          :key="item"
        >
          <img class="videoImg" :src="item" alt="" />
        </div>
      </div>
    </div>
  </v-touch>
</template>

<script>
import Vue from "vue";
import http from "../util/http";
import moment from "moment";
import { ImagePreview } from "vant";
import { Toast } from "vant";

import VueTouch from "vue-touch";
Vue.use(VueTouch, { name: "v-touch" });

Vue.filter("dataFilter", (date) => {
  return moment(date).format("YYYY-MM-DD");
});

Vue.directive("top", {
  inserted(el) {
    el.style.display = "none";
    window.onscroll = () => {
      if (
        (document.body.scrollTop || document.documentElement.scrollTop) > 50
      ) {
        el.style.display = "block";
      } else {
        el.style.display = "none";
      }
    };
  },
  unbind() {
    // 解绑window.onscroll事件
    window.onscroll = null;
  },
});

import detailHeader from "./detail/detailHeader.vue";

export default {
  data() {
    return {
      filminfo: null,
      isShow: false,
    };
  },
  components: {
    detailHeader,
  },
  mounted() {
    // console.log("this.$route:", this.$route.query);
    this.$store.commit("hideTabbar", false);
    Toast.loading({
      message: "加载中...",
      forbidClick: true,
      loadingType: "spinner",
    });
    http({
      url: `/gateway?filmId=${this.$route.query.id}&k=6951879`,
      headers: {
        "X-Host": "mall.film-ticket.film.info",
      },
    }).then((res) => {
      console.log(res.data.data.film);
      this.filminfo = res.data.data.film;
      Toast.clear();
    });
  },
  methods: {
    handleImage(index) {
      ImagePreview({
        images: this.filminfo.photos,
        startPosition: index,
      });
    },
    onSwiperRight() {
      console.log("右滑了");
    },
  },
  beforeDestroy() {
    this.$store.commit("showTabbar", true);
  },
};
</script>

<style lang="scss" scoped>
h3 {
  margin: 0;
}

.xItem .videoImg {
  width: 202px;
  height: 100px;
}

.poster {
  width: 100%;
  height: 200px;
  // object-fit: cover;
  background-size: cover;
  background-position: center;
}
.movieText {
  height: 50px;
  overflow: hidden;
}

.xlist {
  display: flex;
  overflow: scroll;
}

.xItem {
  // width:140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  & > img {
    width: 131px;
    height: 180px;
  }
}

@keyframes folder {
  0% {
    height: 50px;
  }
  100% {
    height: 100%;
  }
}
</style>
