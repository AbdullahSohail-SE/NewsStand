<template>
  <q-page padding>
    <section class="row items-center q-mt-lg">
      <header class="row items-center justify-between col-12 header q-px-sm ">
        <h1 class="q-ma-none app-headings text-subtle-grey">Top Around The Globe</h1>
        <span class="text-h6 text-subtle-grey" style="font-weight:500">{{ new Date()|formattedDate}}</span>
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
         <div class="col-5">
           <longnewscard :article="topArticles[topArticles.length-3]" description source></longnewscard>
          </div>
        <div class="col-3 q-px-sm column">
            <div>
              <longnewscard imgHeight="200px" :article="topArticles[topArticles.length-2]" titleSize="16px"></longnewscard>
            </div>
            <div>
              <longnewscard imgHeight="200px" :article="topArticles[topArticles.length-1]" titleSize="16px"></longnewscard>
            </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import newscard from '../components/newscard'
import newslist from '../components/newslist'
import longnewscard from '../components/longnewscard'
export default {
  data(){
    return{
      dataFetched:false
    }
  },
  computed:{
    topArticles:function(){
       var articles=this.$store.getters.getTopAroundTheGlobe;
      return articles;
    }
  },
  components:{
    newscard,
    newslist,
    longnewscard
  }
}
</script>
<style lang="scss" scoped>


</style>