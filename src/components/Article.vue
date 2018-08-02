<template>
  <v-flex xs8 offset-xs2 >
      <v-card dark color="light-blue" style="padding: 20px 0px" >
        <v-card color="white" style="margin: 20px;">
          <v-card-text style="color: black">
            <h3 class="cardDesc"> Title: </h3> 
            <p class="cardEntry">{{title}} </p>
            <h3 class="cardDesc"> Content: </h3> 
            <p class="cardEntry">{{content}} </p> 
            <h3 class="cardDesc"> Category: </h3> 
            <v-btn flat small style="font-size: 15px; color: blue" @click="search(category)">{{category}} </v-btn> 
            <p class="cardEntry"> created by: {{author.name}} </p>
            <br>
          </v-card-text>
        </v-card>
        <v-card-actions>
        <v-spacer></v-spacer>

          <v-btn fab dark small color="red darken-4 " v-if="isAuthor === true" @click="deleteThis(id)"><v-icon class="material-icons">
            delete_outline
          </v-icon>Delete</v-btn>
          <v-btn v-if="isAuthor === true" fab dark small color="green accent-4" style="margin-left: 15px" @click="edit(id)"><v-icon class="material-icons">
            check_circle_outline
          </v-icon> Edit</v-btn>
      </v-card-actions>

      </v-card>
    </v-flex>
</template>
<script>
import {mapActions, mapState} from 'vuex'

export default{
  data(){
    return{
      isAuthor: ''
    }
  },
  props:['title', 'content', 'category', 'id', 'author'],
  methods:{
    ...mapActions([
      'searchByCategory', 'deleteArticle', 'checkAuthorId'
    ]),
    deleteThis(id){
      this.deleteArticle(id);
    },
    search(category){
      this.searchByCategory(category);
    }
  },
  computed:{
   //   author(){
   //      if(this.author._id === localStorage.getItem('authorId')){
   //         console.log("sama")
   //      }
   //   }
  }
}
</script>

<style scoped>
.cardDesc{
  font-size: 20px;
  font-weight: 600;
}

.cardEntry{
  font-size: 20px;
}
</style>
