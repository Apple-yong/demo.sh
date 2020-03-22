<template>
  <div v-show="show" @click="sendMsg">
    1111
    <!-- 获取父组件中的值 -->
    <div>{{ this.$parent.name }}</div>
  </div>
  
</template>

<script>
import {mapState} from 'vuex';
export default {
  data() {
    return {
      msg: '儿子传值给爸爸'
    }
  },
  computed:{
    //这里的三点叫做 : 扩展运算符
    ...mapState({
      show:state=>state.dialog.show
    })
  },
  methods:{
         sendMsg(){
             //func: 是父组件指定的传数据绑定的函数，this.msg:子组件给父组件传递的数据
             this.$emit('func',this.msg)
         }
     }
}
</script>

<style scoped>
  
</style>