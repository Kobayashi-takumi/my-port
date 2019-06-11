<template>
  <div id="app">
    <header-item/>
    <router-view/>
</div>
</template>

<script>
import HeaderItem from './components/HeaderItem.vue'
export default {
    name: 'app',
    components: {
      HeaderItem
    }
  };
</script>


<style scoped>  
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>
