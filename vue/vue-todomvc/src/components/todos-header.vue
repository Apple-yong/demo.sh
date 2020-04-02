<template>
  <div class="header">
    <h1>todos</h1>
    <input class="new-todo" placeholder="What needs to be done?">
  </div>
</template>

<script>
export default {
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .header{
    margin-top: 50px;
    h1{
      width: 100%;
      font-size: 100px;
      font-weight: 100;
      text-align: center;
      color: rgba(175, 47, 47, 0.15);
    }
    .new-todo {
      width: 474px;
      height: 28px;
      padding: 16px 16px 16px 60px;
      border: none;
      background: rgba(255, 255, 255, 0.925);
      box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    }
  }
</style>
