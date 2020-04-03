<template>
  <q-page padding>
    <section class="row items-center q-mt-lg">
      <header class="row items-center justify-between col-12 header q-px-sm ">
        <h1 class="q-ma-none app-headings text-subtle-grey">Top Around The Globe</h1>
        <span class="text-h6 text-subtle-grey" style="font-weight:500">{{ currentFormatDate }}</span>
      </header>
      <div class="col-7 q-px-xs q-py-lg">
        <newscard cardType="large" :article="topArticles[0]" :captionsize="'large'"></newscard>
      </div>
      <div class="col-5 q-px-xs q-py-lg">
        <newscard class="q-mb-sm" cardType="medium" :article="topArticles[1]" :captionsize="'small'"></newscard>
        <newscard cardType="medium" :article="topArticles[2]" :captionsize="'small'"></newscard>
      </div>
      <div class="row col-12" >
        <div class="col-12">
          <q-item-label class="q-px-none" header>More News</q-item-label>
        </div>
        <div class="col-4 q-pr-md">
          <newslist :articles="topArticles.slice(3)"></newslist>
        </div>
         <div class="col-5 bg-red">
           <q-card class="q-py-md" square flat>
             <q-img class="bg-red" spinner-color="primary" height="330px"></q-img>
             <q-card-section class="q-px-none">
               <h6 class="q-ma-none q-pa-none normal-line-height">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
              <p class="q-my-sm text-body-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi sit animi perferendis quia optio provident doloribus aliquam repellendus ipsam commodi.</p>
             </q-card-section>
             <q-card-section class="q-pa-none row justify-between">
               <span class="q-py-none text-subtle-grey">NyTimes.com</span>
               <span class="q-py-none text-subtle-grey">22 March 2109</span>
             </q-card-section>
           </q-card>
          </div>
        <div class="col-3 q-px-sm column">
            <div>
              <q-card class="q-py-md" square flat>
                <q-img spinner-color="primary" class="bg-red" height="150px"></q-img>
                <q-card-section class="q-pa-none">
                  <p class="q-my-sm text-body-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, ipsum..</p>
                </q-card-section>
              </q-card>
            </div>
            <div>
              <q-card class="q-py-md" square flat>
                <q-img spinner-color="primary" class="bg-red" height="150px"></q-img>
                <q-card-section class="q-pa-none">
                  <p class="q-my-sm text-body-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, ipsum..</p>
                </q-card-section>
              </q-card>
            </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import newscard from '../components/newscard'
import newslist from '../components/newslist'
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
    topArticles:function(){
       var articles=this.$store.getters.getTopAroundTheGlobe;
      return articles;
    }
  },
  components:{
    newscard,
    newslist
  }
}
</script>
<style lang="scss" scoped>


</style>