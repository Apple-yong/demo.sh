<template>
    <div>
        <button @click="toFatherString">
            用$emit事件触发将子组件的值传递给父组件
        </button>
        <ul>
            <li v-for="user in users">{{ user }}</li>
        </ul>
        <div>{{ this.$parent.paper }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "来自子组件的值",
            clips: "来自子组件的一个值"
        };
    },
    props: {
        users: {
            
        },
    },
    methods: {
        toFatherString() {
            // 触发父组件的click事件，参数为title
            this.$emit("click", this.title);
        },
    },
};
</script>