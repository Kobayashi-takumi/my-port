import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import firebase from 'firebase'

Vue.use(ElementUI)

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyCnJ0r_lJWEV3x34jYcgybYVPbOpA0cV1U",
  authDomain: "my-portfolio-e30a6.firebaseapp.com",
  databaseURL: "https://my-portfolio-e30a6.firebaseio.com",
  projectId: "my-portfolio-e30a6",
  storageBucket: "my-portfolio-e30a6.appspot.com",
  messagingSenderId: "68910039940",
  appId: "1:68910039940:web:222c3191a5578736"
}
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
