<template>
  <div id="app">
    <Tabbar v-show="$store.state.isShowTabbar"/>
    <router-view></router-view>
  </div>
</template>

<script>
import Tabbar from './components/Tabbar.vue';
import axios from 'axios'
export default {
  data() {
    return {
      myname: 'kerwin'
    }
  },
  mounted() {
  },
  components:{
    Tabbar
  }
}
</script>

<style lang="scss">
#app {
  margin: 0;
}

body {
  margin: 0;
}

* {
  touch-action: none;
}

// 修复了一些bug
// 子分支应该合并到main 当中的代码

</style>
