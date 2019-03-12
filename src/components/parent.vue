<template>
  <div>
    <span>我是父组件----{{fromSonMsg}}</span><br>
    我是父组件中拿到的全局状态{{getCount}}
    <button @click="padd">父组件----状态改变按钮</button>
    <button @click="paddaction">父组件----状态改变按钮(action)</button>
    <hr>
    <son
      :msg="toSonMsg"
      @handle="getMsgFromSon"
    ></son>

    <!--handle自定义事件 -- getMsgFromSon方法-->
  </div>
</template>


<script>
import son from "./son";
export default {
  name: "parent",
  data: function() {
    return {
      toSonMsg: "我是你的父亲",
      fromSonMsg: "" //默认空
    };
  },
  components: {
    son
  },
  methods: {
    getMsgFromSon: function(value) {
      this.fromSonMsg = value; //从子组件拿到的数据
    },
    padd: function() {
      this.$store.commit("increase"); //获取状态改变事件
    },
    paddaction(){
        this.$store.dispatch('deincreaseAction')
    }
  },
  computed: {
    getCount: function() {
      return this.$store.getters.getNum;
    }
  }
}
</script>
<style scoped>
</style>



