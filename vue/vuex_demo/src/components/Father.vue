<template>
  <div>
    <div @click="$store.state.dialog.show = !$store.state.dialog.show">点击</div>
    <t-son></t-son>
  </div>
  
</template>

<script>
import Son from './Son'
export default {
  components: {
    "t-son" : Son
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
