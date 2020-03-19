<template>
  <div>
    Clicked: {{ count }} times,count is {{ evenOrOdd }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
    <div>
      <div>Recent History (last 5entries): {{ recentHistory }}</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['count','recentHistory']),
  },
  methods: {
    ...mapActions(['increment','decrement','incrementIfOdd','incrementAsync'])
  },
}
</script>
