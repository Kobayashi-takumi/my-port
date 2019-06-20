<template>
    <header id="header">
        <el-row>
            <el-col :span="24">
                <google-log-in style="float: right;" />
            </el-col>
            <el-col :span="24">
                <h1>Takumi's Portfolio</h1>
            </el-col>
            <el-col :span="24">
                <div class="menu-bar">
                <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1"><router-link to="/" type="text">Home</router-link></el-menu-item>
                <el-submenu index="2">
                    <template slot="title">About me</template>
                    <el-menu-item index="2-1"><router-link to="/career" tag="p">Career</router-link></el-menu-item>
                    <el-menu-item index="2-2"><router-link to="/about" tag="p">Languages</router-link></el-menu-item>
                    <el-menu-item index="2-3"><router-link to="/github" tag="p">Github</router-link></el-menu-item>
                </el-submenu>
                <el-menu-item index="3">
                    <el-popover
                    placement="bottom"
                    title="Job chatとは？"
                    width="200"
                    trigger="hover"
                    content="仕事の依頼・スカウトなど仕事関係に関することをチャットする場所です！">
                        <el-button slot="reference" type="text"><router-link to="/chat">Job chat</router-link></el-button>
                    </el-popover>
                    </el-menu-item>
                </el-menu>
                </div>
            </el-col>
        </el-row>
    </header>
</template>

<script>
import GoogleLogIn from './GoogleLogIn.vue'

export default {
  name: 'header',
  data() {
      return {
          show: false,
          visible: false
      }
  },
  components: {
      GoogleLogIn
  },
  methods: {
      isActive() {
          this.show =! this.show
      }
  }
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
