<template>
  <div id="app" style="font-family: Montserrat">
    <header-item/>
    <router-view style="padding: 20px;"/>

</div>
</template>

<script>
import HeaderItem from './components/HeaderItem.vue'

export default {
    name: 'app',
    components: {
      HeaderItem,
    }
  };
</script>


<style scoped>  

</style>
