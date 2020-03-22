<template>
  <div>
    <!-- 使用 $store.commit('switch_dialog') 来触发 mutations 中的 switch_dialog 方法 -->
    <!-- 使用 $store.dispatch('switch_dialog') 来触发 action 中的 switch_dialog 方法。 -->
    <div @click="$store.dispatch('switch_dialog')">点击</div>
    <!-- 父组件获取子组件的值 -->
    <t-son @func="getMsgFormSon"></t-son>
    <div>{{ sonData }}</div>
  </div>
  
</template>

<script>
import Son from './Son'
export default {
  data() {
    return {
      name: '父亲的值',
      sonData: null
    }
  },
  components: {
    "t-son" : Son
  },
  methods: {
    getMsgFormSon(data){
        this.sonData = data 
    }

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
