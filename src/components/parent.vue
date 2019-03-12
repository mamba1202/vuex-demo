<template>
  <div>
    <span>我是父组件</span>
    ----{{fromSonMsg}}
    <hr>
    <son :msg="toSonMsg" @handle="getMsgFromSon"></son>  
    <!--handle自定义事件 -- getMsgFromSon方法-->
  </div>
</template>


<script>
import son from './son'
       export default {
           name: "parent",
          data:function(){
             return{
                 toSonMsg: '我是你的父亲',
                 fromSonMsg: '' //默认空
             }
},
  components:{
      son
  },
  methods:{
     getMsgFromSon:function(value){
          this.fromSonMsg = value   //从子组件拿到的数据
      }
  }
}
</script>
<style scoped>
</style>



