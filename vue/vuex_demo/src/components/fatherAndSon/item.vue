<template>
    <div>
        <!-- <button @click="toFatherString">
            用$emit事件触发将子组件的值传递给父组件
        </button> -->
        <!-- <ul>
            <li v-for="user in users">{{ user }}</li>
        </ul> -->
        <!-- <div>{{ this.$parent.paper }}</div> -->
        <div>{{ title }}</div>
    </div>
</template>

<script>
import event from './event'

export default {
    data() {
        return {
            title: "item自己的数据",
            clips: "来自子组件的一个值",
        };
    },
    props: {
        users: {},
    },
    methods: {
        toFatherString() {
            // 触发父组件的click事件，参数为title
            this.$emit("click", this.title);
        },
    },
    mounted() {
        event.$on("data-a", (title) => {
            this.title = title; //箭头函数内部不会产生新的this，这边如果不用=>,this指代Event
        });
    },
};
</script>