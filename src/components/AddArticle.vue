<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="500px" min-height="400px">
      <v-btn slot="activator" class="blue-grey darken-3  white--text">Create New Article</v-btn>
      <v-card class="blue-grey darken-3 white--text">
        <v-card-title >
          <span class="headline">New Article</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                 <v-text-field 
                     v-validate="'required:true'" 
                     name="title" 
                     type="text" 
                     v-model="article.title"
                     label="Article title" 
                     :error-messages="errors.collect('title')"
                     data-vv-as="title"
                     required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-textarea
                  name="content"
                  v-model="article.content" 
                  label="Content">
               </v-textarea>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  label="Category"
                  v-model="article.category" 
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="cancel()">Cancel</v-btn>
          <v-btn color="blue darken-1" flat @click="save()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
import {mapActions, mapState} from 'vuex'
  export default {
    data: () => ({
      dialog: false,
      article:{
         title: '',
         content: '',
         category: ''
      }
    }),
    methods:{
      ...mapActions([
          'addArticle', 'getArticles'
      ]),
      save(){
         let validation = false;
         let self = this;

         this.$validator.validateAll()
         .then(function(res){
            console.log(res)
           validation = res;
           console.log("!!", validation)
         
           if(validation){
               self.addArticle(self.article);
               self.cancel();
               self.dialog = false;
            }
         })
         .catch(function(err){
            console.log(err)
         })
      },
      cancel(){
         this.article.title = ''
         this.article.content = ''
         this.article.category = ''
         this.$validator.reset()
         this.dialog = false;
      }
    },
    computed:{
      ...mapState([
        'isLogged'
      ])
    }
  }
</script>