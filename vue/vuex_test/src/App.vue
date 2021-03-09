<template>
  <div id="app">
    <HelloWorld/>
    <p>{{ $store.state.name }}</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>

</style>
