import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// vant 引入
import { Swipe, SwipeItem,Button,NavBar,Icon,Search  } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Button);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Search);

// 引入默认样式清除
// import '../public/iconfont/demo.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
