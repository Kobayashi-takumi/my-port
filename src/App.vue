<template>
  <div id="app">
    <header-item/>
    <div class="contents"><router-view/></div>
  </div>
</template>

<script>
import HeaderItem from './components/HeaderItem.vue'

export default {
  name: 'app',
  data() {
    return {
      isActive: false,
    }
  },
  components: {
    HeaderItem
  },
  methods: {
    toggle_switch() {
      this.isActive = !this.isActive;
    }
  }
}
</script>


<style scoped>  

</style>
