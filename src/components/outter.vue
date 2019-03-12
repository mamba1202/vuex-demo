<template>
  <div>
    我是outter组件拿到的全局状态{{getOutterCount}}
    <button @click='oadd'>outter----组件改变状态按钮</button>
    <button @click='oaddaction'>outter组件----改变状态按钮(action)</button>
  </div>

</template>

<script>
export default {
  name: "outter",
  computed: {
    getOutterCount: function() {
      return this.$store.state.num;
    }
  },
  methods:{
      oadd:function(){
         this.$store.commit('increase') //获取状态改变事件
      },
      oaddaction(){
        this.$store.dispatch('deincreaseAction')
    }
  }
}
</script>
<style scoped>
</style>

