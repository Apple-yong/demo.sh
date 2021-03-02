<template>
    <div>
        <ItemB @click="getSonString" />
        <ItemC @click="getSonString" />
        <item @click="getSonString" v-bind:users="users" ref="item"/>
        <div>{{ title }}</div>
    </div>
</template>

<script>
import Item from './item'
import ItemB from './itemB'
import ItemC from './itemC'
import event from './event'
export default {
    data() {
        return {
            title: '父组件自己的值',
            users:['lee', 'he', 'mei'],
            paper: '父组件的一个值',
        }
    },
    components: {
        Item,
        ItemB,
        ItemC
    },
    methods: {
        getSonString(title) {
            this.title = title
        }
    },
    mounted() {
        event.$on("data-a", (title) => {
            this.title = title; //箭头函数内部不会产生新的this，这边如果不用=>,this指代Event
        });

        // 读取第一个子组件数据，不推荐，你并不知道哪个是第一个
        console.log(this.$children[0].clips)

        //读取命名子组件数据，对应子组件的元素要设ref='item'
        console.log(this.$refs.item.clips)

        //从根组件查找组件数据
        console.log(this.$root.$children[0].name) // 入口APP
        console.log(this.$root.$children[0].$children[0].paper) // 第一个父组件，这里是自己
        console.log(this.$root.$children[0].$children[0].$children[0].clips)// 第一个子组件，这里是item
    },
    beforeDestroy() {
        // 及时销毁，否则可能造成内存泄露
        event.$off('data-a', this.title)
    }
}
</script>