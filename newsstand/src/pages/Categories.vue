<template>
  <q-page  padding>
    <section class="row">
    <header class="col-12 q-my-lg items-center justify-between">
    <h1 class="q-mx-md q-ma-none app-headings text-subtle-grey">{{currentCategory | capitalizeFirst}} News</h1>
    </header>
    <interactivelist  :newsarticles="generalArticles" class="col-4 col-sm-12 col-xs-12 col-md-4 col-lg-4">
    </interactivelist>
    <longnewscard linkBtn imgHeight="400px" class="col-8 col-sm-12 col-xs-12 col-md-8 col-lg-4" :article="selectedArticle" content source></longnewscard>
    </section>
     
  </q-page>  
</template>
<script>
import interactivelist from '../components/interactivelist'
import longnewscard from '../components/longnewscard'

export default {
  data(){
    return {
      currentCategory:''
    }
  },
  components:{
    interactivelist,
    longnewscard
  },
  computed:{
    generalArticles:function(){

      return this.$store.getters.getArticles(this.currentCategory);
    },
    selectedArticle:function(){
        return this.$store.getters.getSelectedArticle;
    }
  },
  methods:{
  },
  created(){
  this.currentCategory=this.$router.currentRoute.params.type;
  this.$store.dispatch('loadArticles',this.currentCategory);  
  },
  beforeRouteUpdate(to,from,next){
    this.currentCategory=to.params.type;
    this.$store.dispatch('loadArticles',this.currentCategory); 
    next();
  } 
}
</script>
<style lang="scss" scoped>

</style>