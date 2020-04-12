<template>
  <q-card :class="cardSize" flat square>
          <q-skeleton v-if="!dataFetched" :class="cardSize" square></q-skeleton>
          <div  :class="cardSize" v-else>
            <q-img :src="article.urlToImage" height="100%" spinner-color="primary">
              <div class="absolute-bottom q-img-caption">
                <h3 class="q-img-caption-title" :class="captionSize">
                 <a :href="article.url">{{article.title}}</a> 
                </h3>
                <p v-if="description" class="q-img-caption-desc">{{article.description}}</p>
                <p v-if="content" class="q-img-caption-desc">{{article.content}}</p>
              </div>
            </q-img>
          </div>
  </q-card>
</template>
<script>
export default {
  data(){
    return{
      dataFetched:true
    }
  },
  props:{
   cardType:{
      type:String,
      required:true },
   article:{
     required:true },
   captionsize:{
     type:String,
     default:'large'
   },
   description:{
     type:Boolean,
     default:true
   },
   content:{
     type:Boolean,
     default:false
   }
  },
  watch:{
    article:function(newVal){
      if(newVal==undefined)
      {
        this.dataFetched=false;
      }
    }
  },
  computed:{
    cardSize:function(){
      if (this.cardType=="large")
           return 'height-lg';
      else if(this.cardType=="medium")
           return 'height-md';
      else if(this.cardType=="xlarge")
           return 'height-xl';
    },
    captionSize:function(){
      if (this.captionsize=="large")
           return 'q-img-caption-title-lg';
      else if(this.captionsize=="medium")
           return 'q-img-caption-title-md';
      else if(this.captionsize=="small");
           return 'q-img-caption-title-sm';
    }
  }
}
</script>
<style lang="scss" scoped>

//SASS variables
  $height-lg:510px;
  $height-md:250px;
  $height-xl:600px;

.height-lg{
  height: $height-lg;
}
.height-md{
  height: $height-md;
}
.height-xl{
  height: $height-xl;
}
.q-img-caption{
  background-color: transparent;
  background-image: linear-gradient(to bottom, transparent, rgba(0,0,0,0.9));

  &-title{
    
    font-weight: 500;
    line-height: normal;
    margin: 0;

    &-sm{
      font-size: 18px;
    }
    &-md{
      font-size: 24px;
    }
    &-lg{
      font-size: 36px;
    }
  }
  &-desc{
    margin-top: 5px;
  }
}

</style>