<template>
  <div id="app">
    <Index/>
  </div>
</template>

<script>
import Index from './components/fatherAndSon/index'

export default {
  name: 'App',
  data() {
      return {
          name: 'APP'
      }
  },
  components: {
    Index
  }
}
</script>

<style>

</style>
