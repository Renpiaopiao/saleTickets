<template>
  <div>我的</div>
</template>

<script>
export default {
  name:'mine',
  beforeRouteEnter (to, from, next) {
    // ...
    if(!localStorage.getItem('token')){
      next('/login')   //token为空，就拦截到登录页重登录
    }else{
      next()  //放行
    }
  }
}
</script>

<style>

</style>