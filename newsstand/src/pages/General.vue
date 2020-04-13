<template>
  <q-page  padding>
    <section class="row">
    <header class="col-12 q-my-lg items-center justify-between">
    <h1 class="q-ma-none app-headings text-subtle-grey">Top Around The Globe</h1>
    </header>
    <interactivelist :newsarticles="generalArticles" class="col-4">
    </interactivelist>
    </section>
  </q-page>  
</template>
<script>
import interactivelist from '../components/interactivelist'
import state from '../store/catogaries/state';

export default {
  name:"general",
  components:{
    interactivelist
  },
  computed:{
    generalArticles:function(){
      return this.$store.getters.getGeneralArticles;
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