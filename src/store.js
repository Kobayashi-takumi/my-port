import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //login
    user: {},
    isSignIn: false,
    //chat
    title: '',
    message: '',
    id: '',
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setSignIn(state, isSignIn) {
      state.isSignIn = isSignIn;
    },
    setTitle(state, title){
      state.title = title
    },
    setMessage(state, message){
      state.message = message
    },
    setId(state, id){
      state.id = id
    }
  },
  getters: {
    user(state) {
      return state.user
    },
    isSignIn(state){
      return state.isSignIn
    },
    title(state){
      return state.title
    },
    message(state){
      return state.message
    },
    id(state){
      return state.id
    }
  },
  actions: {

  }
})
