import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Animate from 'animate.css'
import './firebase/firebase.js'
import './firebase/firestore.js'
import './assets/sass/style.scss'

Vue.use(ElementUI)
Vue.use(Animate)


Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
