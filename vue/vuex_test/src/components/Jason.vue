<template>
    <div>
        <button @click="handle1">点击加一</button>
        <p>{{ $store.state.Hello.count }}</p>

        <button @click="handle2">点击带参数第二种办法</button>
        <p>{{ count }}</p>

        <button @click="handle3">异步点击加一</button>
        <p>{{ count }}</p>

        <button @click="addAsync(4)">异步带参数点击加一</button>
        <p>{{ showNum }}</p>


    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
    methods: {
        ...mapMutations(['add', 'addN']),
        ...mapActions(['addAsync']),
        
        handle1() {
            this.addN(4);
        },
        handle2() {
            this.$store.commit('addN', 4);
        },
        handle3() {
            this.$store.dispatch('addAsync')
        },
        handle4() {
            this.addAsync(4)
        }
    },
    computed: {
        ...mapState({
            'count': (state) => state.Hello.count,
        }),
        ...mapGetters(['showNum'])
    },
};
</script>
<style>
</style>