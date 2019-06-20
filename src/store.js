import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //login
    user: {},
    isSignIn: false,
    //chat
    roomId: '',
    title: '',
    message: '',
    createdAt: '',
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setSignIn(state, isSignIn) {
      state.isSignIn = isSignIn;
    },
    
  },
  getters: {
    user(state) {
      return state.user
    },
    isSignIn(state){
      return state.isSignIn
    }
  },
  actions: {

  }
})
