<template>
  <div>
    <v-toolbar
      color="light-blue accent-3"
      dark
      tabs
      height="90px"
    >
    <v-container grid-list-xl text-xs-center>
    <v-layout row wrap>
      <v-flex xs10 offset-xs2 style="margin-bottom:10px">
        <v-text-field
          v-model="searchQuery"
          class="mx-3"
          flat
          height="12"
          clear-icon="mdi-close-circle"
          clearable
          label="Search"
          prepend-inner-icon="search"
          solo-inverted
          @keyup.enter="submit()"
        ></v-text-field>
      </v-flex>
    </v-layout>
  </v-container>
    </v-toolbar> 
    <v-tabs-items>
      <v-tab-item>
         <v-container grid-list-xl v-if="status !== 'searching'">
         <v-layout row wrap text-xs-center v-for="(article, index) in articleArr" :key=index> 
            <Article :title="article.title" :content="article.content" :category="article.category" :id="article._id" :author="article.author"> </Article>
            </v-layout>
         </v-container>
      </v-tab-item>
      <v-tab-item>
         <v-container grid-list-xl v-if="status == 'searching'">
          <v-btn rounded class="indigo white--text" @click="reset"> Clear Search </v-btn>
         <v-layout row wrap text-xs-center v-for="(article, index) in searchArr" :key=index> 
            <Article :title="article.title" :content="article.content"  :category="article.category" :id="article._id" :author="article.author"> </Article>
          </v-layout>
        </v-container>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import Article from '@/components/Article.vue';
import { mapActions, mapState } from 'vuex';

  export default {
    name: 'article',
    components:{
      Article,
    },
    data () {
      return {
        searchQuery: '',
        prevStatus: '',
        text: '',
        tabs:null,
      //   status: ''
      }
    },
    methods:{
      ...mapActions([
        'getArticles', 'resetSearch', 'searchKeyword'
      ]),
      submit(){
        console.log(this.searchQuery)
        let query = this.searchQuery;
      //   this.status = 'searching'
        this.searchKeyword(query);
        
      },
      reset(){
        this.searchQuery = '';
        this.resetSearch();
      }
    },
    computed:{
      ...mapState([
        'articleArr', 'status', 'searchArr'
      ]),
    },
    created(){
       this.getArticles();
      //  console.log("ganti g? " , this.status)
    }
  }
</script>