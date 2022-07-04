<template>
  <nav>
    <ul>
      <router-link tag="li" to="/movie" active-class="hong">
        <i class="iconfont icon-training"></i>
        <span>电影</span>
      </router-link>
      <router-link tag="li" to="/cinemar" active-class="hong">
        <i class="iconfont icon-all"></i>
        <span>影院</span>
      </router-link>
      <router-link tag="li" to="/mine" active-class="hong">
        <i class="iconfont icon-account"></i>
        <span>我的</span>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  /* line-height: 50px; */
  background-color: #fff;
  z-index: 99;
}

ul {
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 0;
}

li {
  list-style-type: none;
  /* background-color: rgb(250, 10, 10); */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hong {
  background-color: rgb(255, 13, 13);
}
</style>
