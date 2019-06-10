<template>
    <header id="header">
        <h1>My Portfolio</h1>
        <el-button type="info" round @click="toggle_switch()" icon="el-icon-menu"></el-button>
        <nav id="header-nav" v-show="isActive">
                <router-link id="home-nav" to="/">home</router-link>
                <router-link id="about-nav" to="/about">about</router-link>
        </nav>
    </header>
</template>

<script>
export default {
  name: 'header',
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    toggle_switch() {
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style scoped>
.header {
    display: grid;
    background-color: aqua;
}
</style>
