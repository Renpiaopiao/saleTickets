<template>
  <div class="detailHeader">{{title}}</div>
</template>

<script>
export default {
    name:'detailHeader',
    props:{
        title:{
            
        }
    }
}
</script>

<style scoped lang="scss">
.detailHeader {
    position: fixed;
    top:0;
    background-color: #fff;
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
}
</style>