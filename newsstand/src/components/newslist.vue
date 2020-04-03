<template>
  <q-list class="quasar-list" separator>
            <q-skeleton v-if="!dataFetched" class="q-mt-md " style="min-height:500px"  square><span class="ellipsis">{{newsarticles}}</span></q-skeleton>
            <q-item v-for="article in newsarticles" :key="article.url" v-else>
                <q-item-section class="text-weight-600 hoverunderline">{{article.title}}</q-item-section>
            </q-item>
  </q-list>
</template>

<script>
export default {
  data(){
    return{
      dataFetched:false
    }
  },
  props:{
    number:{
      type:Number,
      default:10
    },
    articles:{
      type:Array,
      required:true
    }

  },
  computed:{
    newsarticles:function(){
      if(this.articles.length>0)
      {
        this.dataFetched=true;
        return this.articles.slice(0,this.number);
      }
    }
  }

}
</script>

<style lang="scss" scoped>

.quasar-list > div{
  padding-left: 0;
  padding-right: 0;
}


</style>
