import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//创建一个状态仓库
//Store--state不能修改
export default new Vuex.Store({
    //导出store
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