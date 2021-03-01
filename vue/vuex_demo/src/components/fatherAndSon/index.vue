<template>
    <div>
        <item @click="getSonString" v-bind:users="users" ref="item"/>
        <div>{{ title }}</div>
    </div>
</template>

<script>
import Item from './item'
export default {
    data() {
        return {
            title: '',
            users:['lee', 'he', 'mei'],
            paper: '父组件的一个值',
        }
    },
    components: {
        Item
    },
    methods: {
        getSonString(title) {
            this.title = title
        }
    },
    mounted() {
        // 读取第一个子组件数据，不推荐，你并不知道哪个是第一个
        console.log(this.$children[0].clips)

        //读取命名子组件数据，对应子组件的元素要设ref='item'
        console.log(this.$refs.item.clips)

        //从根组件查找组件数据
        console.log(this.$root.$children[0].name) // 入口APP
        console.log(this.$root.$children[0].$children[0].paper) // 第一个父组件，这里是自己
        console.log(this.$root.$children[0].$children[0].$children[0].clips)// 第一个子组件，这里是item
    },
}
</script>