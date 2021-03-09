<template>
  <div>
    <p>{{ name }}</p>
    <Jason/>
  </div>
</template>

<script>
import Jason from './Jason'
import { mapState } from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
      ...mapState({
          'name':state=>state.Hello.name
      })
  },
  methods: {
      
  },
  components: {
      Jason
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
