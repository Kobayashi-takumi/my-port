<template>
    <header id="header">
        <h1>My Portfolio</h1>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"><router-link to="/home">Home</router-link></el-menu-item>
        <el-submenu index="2">
            <template slot="title">About me</template>
            <el-menu-item index="2-1"><router-link to="/about" tag="p">portfolio</router-link></el-menu-item>
            <el-menu-item index="2-2">Github</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">Job request</el-menu-item>
        <el-menu-item index="4">Recruitment</el-menu-item>
        </el-menu>
    </header>
</template>

<script>
export default {
  name: 'header',
}
</script>

<style scoped>
header {
    text-align: center;
}
</style>
