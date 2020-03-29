<template>
  <div class="about">
    <!-- 两种传参的方法 -->
    <div v-if="item">
      <h1><span @click="show">你好，</span>{{ name }}</h1>
      <h2>你今年 {{ $route.query.age }} 岁了</h2>
    </div>  
    

    <!-- 两种写法 -->
    <!-- <router-link :to="'/user/' + $route.params.name +'/usermore'">您的更多信息</router-link> -->
    <router-link @click.native="show" v-if="item" to="usermore" append>您的更多信息</router-link>


    <router-view ></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: true
    }
  },
  props: ['name'],
  methods: {
    show(){
      this.item = !this.item
    }
  }
}
</script>
