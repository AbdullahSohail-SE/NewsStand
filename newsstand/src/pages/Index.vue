<template>
  <q-page padding>
    <section class="row items-center q-mt-lg">
      <header class="row items-center justify-between col-12 header q-px-sm ">
        <h1 class="margin-0 app-headings">Top Around The Globe</h1>
        <span class="text-h6 " style="font-weight:500">{{ currentFormatDate }}</span>
      </header>
      <div class="col-7 q-px-xs q-py-lg">
        <q-card class="card-height-lg" flat square>
          <q-skeleton v-if="!dataFetched" class="quasar-skeleton-lg" square>{{articles}}</q-skeleton>
          <div class="quasar-skeleton-lg" v-else>
            <q-img :src="articles[0].urlToImage" height="100%" spinner-color="primary">
              <div class="absolute-bottom q-img-caption">
                <h3 class="q-img-caption-title q-img-caption-title-lg">
                 <a :href="articles[0].url">{{articles[0].title}}</a> 
                </h3>
                <p class="q-img-caption-desc">{{articles[0].description}}</p>
              </div>
            </q-img>
          </div>
        </q-card>
      </div>
      <div class="col-5 q-px-xs q-py-lg">
        <q-card class="card-height-md q-mb-sm" flat square>
          <q-skeleton v-if="!dataFetched" class="quasar-skeleton-md" square>{{articles}}</q-skeleton>
          <div class="quasar-skeleton-md" v-else>
            <q-img :src="articles[1].urlToImage" height="100%" spinner-color="primary">
              <div class="absolute-bottom q-img-caption">
                <h3 class="q-img-caption-title q-img-caption-title-md">
                 <a :href="articles[1].url">{{articles[1].title}}</a> 
                </h3>
                <p class="q-img-caption-desc">{{articles[1].description}}</p>
              </div>
            </q-img>
          </div>
        </q-card>
        <q-card class="card-height-md" flat square>
          <q-skeleton v-if="!dataFetched" class="quasar-skeleton-md" square>{{articles}}</q-skeleton>
          <div class="quasar-skeleton-md" v-else>
            <q-img :src="articles[2].urlToImage" height="100%" spinner-color="primary">
              <div class="absolute-bottom q-img-caption">
                <h3 class="q-img-caption-title q-img-caption-title-md">
                 <a :href="articles[2].url">{{articles[2].title}}</a> 
                </h3>
                <p class="q-img-caption-desc">{{articles[2].description}}</p>
              </div>
            </q-img>
          </div>
        </q-card>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  data(){
    return{
      dataFetched:false
    }
  },
  computed:{
    currentFormatDate:function(){
      var unformated=new Date();
      var day=unformated.toDateString().split(' ')[0];
      return unformated.toDateString().replace(day,`${day},`);   
    },
    articles:function(){
      var articles=this.$store.getters.getTopAroundTheGlobe;
      if(articles.length>0)
      {
        this.dataFetched=true;
        return articles;
      }
        
    }
  }
}
</script>
<style lang="scss" scoped>

//SASS variables
  $height-lg:510px;
  $height-md:250px;

.app-headings{
  font-size:1.5rem;
  font-weight:500;
  display: inline;
  line-height: 1rem;
}

.margin-0{
  margin: 0;
}
.card-height-lg{
  min-height: $height-lg;
}
.card-height-md{
  min-height: $height-md;
}
.text-h6{
  font-weight:normal;
}
.header{
  margin: 0 auto;
}
.quasar-skeleton-lg{
  height: $height-lg;
}
.quasar-skeleton-md{
  height: $height-md;
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