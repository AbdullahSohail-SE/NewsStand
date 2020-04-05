<template>
<q-card class="q-py-sm" square flat>
             <q-skeleton square v-if="!dataFetched" height="330px"></q-skeleton>
             <q-img :src="article.urlToImage" spinner-color="primary" height="330px" v-else></q-img>
             <q-skeleton type="text" square height="150px" v-if="!dataFetched"></q-skeleton>
             <q-card-section class="q-px-none" v-if="dataFetched">
               <h6 class="q-ma-none q-pa-none normal-line-height" >{{article.title}}</h6>
              <p class="q-my-sm text-body-1" >{{article.description}}</p>
              <p class=" text-body-1" >{{article.content}}</p>
             </q-card-section>
             <q-card-section class="q-pa-none row justify-between" v-if="dataFetched">
               <span class="q-py-none text-subtle-grey">{{article.source.name}}</span>
               <span class="q-py-none text-subtle-grey">{{article.publishedAt}}</span>
             </q-card-section>
           </q-card>  
</template>
<script>
export default {
  data(){
    return{
      dataFetched:false
    }
  },
  props:{
    article:{
      required:true
    },
    size:{
     
      type:String
    },
    title:{
      default:true,
      type:Boolean
    },
    desciption:{
      default:true,
      type:Boolean
    },
    content:{
      default:true,
      type:Boolean
    },
    source:{
      default:true,
      type:Boolean
    }
  },
  watch:{
    article:function(newVal){
      if(newVal!=undefined)
        this.dataFetched=true;
    }
  }
}
</script>
<style lang="scss" scoped>

</style>