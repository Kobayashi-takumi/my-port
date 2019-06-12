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
.app {
  background-color: aqua;
}
</style>
