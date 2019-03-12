<template>
  <div>
    <span>我是子组件</span>----{{msg}}<br>
    我是子组件拿到的全局状态的{{getNum}}
    
    <button @click="senMsgToFa">向父组件传递数据</button>
    <button @click='sadd'>子组件----改变状态按钮</button>
    <button @click='saddaction'>子组件---改变状态按钮(action)</button>
  </div>
</template>
<script>
export default {
  name: "son",
  data: function() {
    return {
      toFatherMsg: "我是你的son"
    };
  },
  props: {
    msg: {
      type: String,
      default: ""
    }
  },
  methods: {
    senMsgToFa: function() {
      this.$emit("handle", this.toFatherMsg);
      //触发一个handle事件--传递一个参数
    },
    sadd:function(){
         this.$store.commit('increase') //获取状态改变事件
      },
      saddaction(){
        this.$store.dispatch('deincreaseAction')
    }
  },
  computed: {
    getNum: function() {
      return this.$store.state.num; //拿到num --88
    }
  }
};
</script>
<style scoped>
</style>
