<template>
  <div class="home">
    <Navbar></Navbar>
    <Searchbar></Searchbar>
    <AddArticle  v-if="isLogged === true"> </AddArticle> 
   <!-- <Article></Article> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Searchbar from '@/components/Searchbar.vue'
import AddArticle from '@/components/AddArticle.vue';
import {mapActions} from 'vuex'
export default {
  name: 'home',
  components: {
    Navbar,
    Searchbar,
    AddArticle
  },
  data(){
    return{
      isLogged: ''
    }
  },
  methods:{
    ...mapActions([
      'getArticles'
    ])
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
    // this.getArticles();
  }, 
  // computed:{
  //   loginStatus(){
  //      let self = this;
  //     if (localStorage.getItem('token')){
  //       self.isLogged = true;
  //     }
  //     else{
  //       console.log("blom log")
  //       self.isLogged = false;
  //     }
  //   }
  // }
}
</script>