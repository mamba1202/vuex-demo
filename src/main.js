// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.use(Vuex)

Vue.config.productionTip = false


//创建一个状态仓库
//Store--state不能修改
var store = new Vuex.Store({
  state: {
    num: 88
  },
  //只能同步
  mutations: {
    //定义状态改变事件
    increase: function (state) {
      state.num++;
    },
    decrease(state) {
      state.num = state.num-20;
    }
  },
  //可以异步
  actions: {
    deincreaseAction(context) { //conent为上下文对象
      //action中只能对mutations进行操作
      setTimeout(function () {
        context.commit('decrease')
      }, 1000) //异步
    }
  },
  getters: {
    getNum: function (state) {
      return state.num > 0 ? state.num : 0
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //ES6语法键和值一样可省略 router: router
  store,
  components: { App },
  template: '<App/>'
})
