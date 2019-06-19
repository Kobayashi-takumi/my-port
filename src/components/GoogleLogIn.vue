<template>
    <div id="google-login">
        <el-row>
            <el-col :span="24">
                <el-dropdown>
                    <div class="login-menu">
                        <i class="el-icon-user-solid"></i>
                    </div>
                    <el-dropdown-menu slot="dropdown">
                        <div @click="doLogin" v-show="isSignIn == false">
                            <el-dropdown-item>Sign in</el-dropdown-item>
                        </div>
                        <div @click="doLogout" v-show="isSignIn">
                            <el-dropdown-item>Sign out</el-dropdown-item>
                        </div>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
            <el-col>
                <div v-show="isSignIn">
                    <p>Login User</p>
                    <p>{{ user.displayName }}</p>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Firebase from '../firebase/firebase.js'

export default {
    name: 'google-login',
    created() {
        Firebase.onAuth();
    },
    computed: {
        user() {
            return this.$store.getters.user;
        },
        isSignIn() {
            return this.$store.getters.isSignIn;
        }
    },
    methods: {
        doLogin() {
            Firebase.login();
        },
        doLogout() {
            Firebase.logout();
        }
    }
}
</script>

<style>

.login-menu {
    border: 1px solid black;
    border-radius: 30px;
    width: 50px;
    padding: 3px;
    margin: 10px;
}
</style>
