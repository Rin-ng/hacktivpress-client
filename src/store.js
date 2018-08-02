import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'
/* eslint-disable */

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   isLogged: '',
   articleArr: '',
   searchArr:'',
   status: ''
  },
  mutations: {
    isLogged(state,payload){
      state.isLogged = payload
    },
    articleArr(state, payload){
      state.articleArr = payload
    },
    searchArr(state,payload){
      state.searchArr = payload
    },
    status(state, payload){
      console.log("masuk mutation")
      state.status = payload
      console.log("status = ", state.status)
    }
  },
  actions: {
    signIn({commit}, payload){
      console.log(payload);
      axios.post('https://hacktivpress-server.rin-ng.me/users/login', payload)
      .then(function({data}){
        swal({
          title: "You have successfully logged in!",
          text: `Welcome Back, ${data.user.name}!`, 
          icon: "success"
        });
        localStorage.setItem("authorId", data.user._id);
        localStorage.setItem("token", data.token);
        commit('isLogged', true)
        router.push('/')
      })
      .catch(function(err){
        swal({
          title: "Oops! Something went wrong",
          text: `${err.message}`,
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
      })

    },
    register({commit}, payload){
      console.log(payload)
      axios.post('https://hacktivpress-server.rin-ng.me/users/register', payload)
      .then(function({data}){
        console.log(data)
        swal({
          title: "You have successfully registered!", 
          icon: "success"
        });
        router.push('/login');
        
      })
      .catch(function(err){
        swal({
          title: "Oops! Something went wrong",
          text: `${err.message}`,
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
      })
    },
    signOut({commit}){
      localStorage.clear();
      commit('isLogged', false)
      router.push('/')
    },
    getArticles({commit}){
      axios.get('https://hacktivpress-server.rin-ng.me/')
      .then(function({data}){
        console.log(data);
        commit('articleArr', data)
      })
      .catch(function(err){
        console.log(err)
      })
    },
    searchByCategory({commit}, category){
      axios.get(`https://hacktivpress-server.rin-ng.me/find?category=${category}`)
      .then(function({data}){
        console.log("category: ", data)
        let status = 'searching'
        commit('status', status)
        commit('searchArr', data.articles)
        router.push('/')
      })
      .catch(function(err){
        console.log(err)
      })
    }
  }
})
