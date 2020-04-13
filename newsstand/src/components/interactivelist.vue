<template>
  <q-list class="quasar-list" >
    <q-item v-for="article in articles" :key="article.id" :data-id="article.id" @click="loadArticle" :active="activeId==article.id"  active-class="active-item" clickable >
      <q-item-section class="text-weight-600 ">{{article.title}}</q-item-section>
    </q-item>
  </q-list>
  
</template>
<script>
  export default {
    data(){
      return {
        activeId:0
      }
    },
    props: {
      newsarticles: {
        required: true
      },
      number:{
        type:Number,
        default:10
      }
    },
    computed:{
      articles:function(){
        return this.newsarticles.slice(0,this.number);
      },
      selectedArticle:function(){
        console.log(this.$store.getters.getSelectedArticle);
      }
    },
    methods:{
      loadArticle:function(e){
        var selectedId=e.target.closest('[data-id]').dataset.id;
        this.activeId=selectedId;
        this.$store.dispatch('setSelectedArticle', selectedId);
      }
    }
  }
</script>
<style lang="scss" scoped>
// .quasar-list > div{
//   padding-left: 0;
//   padding-right: 0;
// }
.active-item {
  // border-top: 2px solid $primary;
  // border-bottom: 2px solid $primary;
  // border-radius: 2px solid $primary;
  box-shadow: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

 
}
</style>