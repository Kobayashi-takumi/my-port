<template>
    <div id="login-form">
        <el-card class="box-card">
            <div class="form-contents">
                <p>Login</p>
                <el-input placeholder="Please e-mail" v-model="email" clearable />
                <el-input placeholder="Please input password" v-model="password" show-password></el-input>
                <el-button type="primary" round @click="emailLogin">Submit</el-button>
                <el-button type="danger" round @click="cancelEvent">Cancel</el-button>
                <div v-if="showError">{{ errorMessage }}</div>
            </div>
        </el-card>
    </div>
</template>

<script>
import firebase from 'firebase/app'
import router from '../router'

export default {
    name: 'login-form',
    data() {
        return {
            email: '',
            password: '',
            errorMessage: '',
            showError: false,
            userName: '',

        }
    },
    methods: {
        cancelEvent() {
            this.$emit('login-show');
        },
        emailLogin() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(result => {
                console.log(result);
                router.push('/about')
            }).catch(error => {
                this.errorMessage = error.message
                this.showError = true
            })
        },
        googleLogin() {
            const provider = new firebase.auth.GoogleAuthProvider()

            firebase.auth().signInWithPopup(provider).then(result => {
                console.log(result);
                router.push('/');
            }).catch(error => {
                this.errorMessage = error.message;
                this.showError = true;
            })
        }
    }
}

</script>
<style scoped>
.box-card {
    width: 300px;
    display: flex;
}

.form-content {
    margin: auto;
}

.el-input {
    padding: 10px;
    width: 80%;
}

.el-button {
    padding: 5px;
    padding-top: 10px;
}
</style>
