import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import cinemar from '../views/cinemar.vue' 
import search from '../views/search.vue' 
import mine from '../views/mine.vue'
import movie from '../views/movie.vue'
import city from '../views/city.vue'
import nowplay from '../views/movie/nowplay.vue'
import comesoon from '../views/movie/comesoon.vue'

// import login from '../views/login.vue'
import detail from '../views/detail.vue'

const routes = [
    {
      path:'/cinemar',
      component:cinemar
    },
    {
      path:'/cinema/search',
      component:search
    },
    {
      path:'/mine',
      component:mine
    },
    {
      path:'/movie',
      component:movie,
      children:[
        {
          path:'/movie/nowplay',
          component:nowplay
        },
        {
          path:'/movie/comesoon/:id',
          component:comesoon,
          name:'comesoon'
        },
        {
          path:'',
          redirect:'/movie/nowplay'
        }
      ]
    },
    {
      path:'/detail',
      component:detail,
      name:'detail'
    },
    {
      path:'/city',
      component:city,
      name:'city'
    },
    {
      path:'/login',
      component:() => import('../views/login.vue'),
      name:'login'
    },
    { 
      path:'*',
      redirect:'/movie'
    }
]

// 默认情况是hash模式
const router = new VueRouter({
  // mode:'history',
  routes
})

// 前置守卫
router.beforeEach((to,from,next) =>{
  // 需要做验证的路由页面
  let auth = ['/mine','/sell','/card']

  if(auth.includes(to.fullPath)){
    if(!localStorage.getItem('token')){
      next('/login')   //token为空，就拦截到登录页重登录
    }else{
      next()  //放行
    }
    console.log('验证是否登录');
  }else{
    next()
  }

})

// 

export default router
