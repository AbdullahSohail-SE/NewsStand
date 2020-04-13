<template>
  <q-page  padding>
    <section class="row">
    <header class="col-12 q-my-lg items-center justify-between">
    <h1 class="q-mx-md q-ma-none app-headings text-subtle-grey">General News</h1>
    </header>
    <interactivelist  :newsarticles="generalArticles" class="col-4">
    </interactivelist>
    <longnewscard linkBtn imgHeight="400px" class="col-8" :article="selectedArticle" content source></longnewscard>
    </section>
    
  </q-page>  
</template>
<script>
import interactivelist from '../components/interactivelist'
import longnewscard from '../components/longnewscard'

export default {
  name:"general",
  components:{
    interactivelist,
    longnewscard
  },
  computed:{
    generalArticles:function(){
      return this.$store.getters.getGeneralArticles;
    },
    selectedArticle:function(){
        return this.$store.getters.getSelectedArticle;
    }
  },
  methods:{
  },
  created(){
  this.$store.dispatch('loadGeneralArticles');
} 
}
</script>
<style lang="scss" scoped>

</style>