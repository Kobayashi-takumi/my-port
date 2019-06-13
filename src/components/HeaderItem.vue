<template>
    <header id="header">
        <el-row>
            <el-col :span="24">
                <transition class="login-btn">
                <el-button type="info" icon="el-icon-user-solid" circle class="ligin" style="float: right;" @click="isActive" v-show="show == false"></el-button>
                </transition>
            </el-col>
            <el-col :span="24">
                <transition class="login-form" mode="out-in">
                <login-form style="float: right;" v-show="show" @login-show="isActive"/>
                </transition>
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
                    <el-menu-item index="2-2"><router-link to="/about" tag="p">portfolio</router-link></el-menu-item>
                    <el-menu-item index="2-3"><router-link to="/github" tag="p">Github</router-link></el-menu-item>
                </el-submenu>
                <el-menu-item index="3"><router-link to="/jobrequest">Job request</router-link></el-menu-item>
                <el-menu-item index="4"><router-link to="/recruitment">Recruitment</router-link></el-menu-item>
                </el-menu>
                </div>
            </el-col>
        </el-row>
    </header>
</template>

<script>
import LoginForm from './LoginForm.vue'

export default {
  name: 'header',
  data() {
      return {
          show: false
      }
  },
  components: {
      LoginForm
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

.login-form-enter {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
}

.login-form-enter-to {
    opacity: 1;
}
.login-form-leave {
    opacity: 1;
}
.login-form-leave-to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
}
</style>
