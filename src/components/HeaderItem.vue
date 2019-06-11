<template>
    <header id="header">
        <h1>My Portfolio</h1>
        <div class="menu-bar">
            <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1"><router-link to="/" type="text">Home</router-link></el-menu-item>
            <el-submenu index="2">
                <template slot="title">About me</template>
                <el-menu-item index="2-1"><router-link to="/about" tag="p">portfolio</router-link></el-menu-item>
                <el-menu-item index="2-2"><router-link to="/github" tag="p">Github</router-link></el-menu-item>
            </el-submenu>
            <el-menu-item index="3">Job request</el-menu-item>
            <el-menu-item index="4">Recruitment</el-menu-item>
            </el-menu>
        </div>
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

.menu-bar {
    display: flex;
    width: 100%;
    padding: 10px;
}

.el-menu {
    margin: auto;
}
</style>
