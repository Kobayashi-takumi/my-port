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
  //api key を設定
}
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
