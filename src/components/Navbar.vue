<template>
  <v-toolbar color="blue darken-1"
      light>
    <v-toolbar-title style="font-weight: 600; color: white" @click="home()">HacktivPress</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items >
      <v-btn flat v-if="isLogged === false" style="font-weight: 600; color: white" @click="logIn()">Log In</v-btn>
      <v-btn flat v-if="isLogged === true" style="font-weight: 600; color: white" @click="logOut()">Log Out</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
import {mapActions} from 'vuex'

export default{
   data(){
      return{
        isLogged: ''
      }
   },
  methods:{
    ...mapActions([
       'signOut', 'loginStatusChange'
    ]),
    logOut(){
      this.signOut();
      this.isLogged = false;
    },
    logIn(){
      this.$router.push('/login');  
    },
    home(){
      this.$router.push('/');  
    }
  },
  created(){
    let self = this;
    if (localStorage.getItem('token')){
      self.isLogged = true;
    }
    else{
      console.log("blom log")
      self.isLogged = false;
    }
  }
}
</script>