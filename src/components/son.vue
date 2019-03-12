<template>
  <div>
    <span>我是子组件</span>
    ----{{msg}}
    <button @click="senMsgToFa">向父组件传递数据</button>
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
    }
  }
}
</script>
<style scoped>
</style>
