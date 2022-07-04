import Vue from 'vue'
import Vuex from 'vuex'
import http from "@/util/http";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityId:'310100',
    cityName:'上海',
    isShowTabbar:true,

    cinemaList:[]
  },
  getters: {
  },
  mutations: {
    changePage(state,name){
      state.cityName = name
    },
    changeId(state,cityId){
      state.cityId = cityId
    },
    hideTabbar(state,bool){
      state.isShowTabbar = bool
    },
    showTabbar(state,bool){
      state.isShowTabbar = bool
    },
    setCinemaList(state,list){
      state.cinemaList = list
    },
    clearCinemaList(state){
      state.cinemaList = []
    }
  },
  actions: {
    getCinemaList(store,cityId){
      http({
        url: `/gateway?cityId=${cityId}&ticketFlag=1&k=2500238`,
        headers: {
          "X-Host": "mall.film-ticket.cinema.list",
        },
      }).then((res) => {
        console.log(res.data.data.cinemas);
        store.commit('setCinemaList',res.data.data.cinemas)
      });
    }
  },
  modules: {
  }
})
