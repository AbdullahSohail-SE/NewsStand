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
      <div class="row col-12">
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
            <longnewscard imgHeight="200px" :article="topArticles[topArticles.length-2]" titleSize="16px">
            </longnewscard>
          </div>
          <div>
            <longnewscard imgHeight="200px" :article="topArticles[topArticles.length-1]" titleSize="16px">
            </longnewscard>
          </div>
        </div>
      </div>
    </section>
    <section class="row items-center q-my-lg">
      <header class="col-12 q-my-lg items-center">
        <h1 class="q-my-lg app-headings text-subtle-grey">Asia Top</h1>
      </header>
      <div class="justify-between col-12 row ">
        <div class="col-2">
          <newscard class="q-pa-xs" :article="topArticles[0]" cardType="medium" captionsize="small" :description=false>
          </newscard>
        </div>
        <div class="col-2">
          <newscard class="q-pa-xs" :article="asiaLatest[1]" cardType="medium" captionsize="small" :description=false>
          </newscard>
        </div>
        <div class="col-2">
          <newscard class="q-pa-xs" :article="asiaLatest[2]" cardType="medium" captionsize="small" :description=false>
          </newscard>
        </div>
        <div class="col-2">
          <newscard class="q-pa-xs" :article="asiaLatest[3]" cardType="medium" captionsize="small" :description=false>
          </newscard>
        </div>
        <div class="col-2">
          <newscard class="q-pa-xs" :article="asiaLatest[4]" cardType="medium" captionsize="small" :description=false>
          </newscard>
        </div>
        <div class="col-2">
          <newscard class="q-pa-xs" :article="asiaLatest[5]" cardType="medium" captionsize="small" :description=false>
          </newscard>
        </div>
      </div>
    </section>
    <section class="row items-top justify-between q-my-lg">
      <header class="col-12 q-my-lg ">
        <h1 class="q-my-sm app-headings text-subtle-grey">Europe Latest</h1>
      </header>
      <div class="col-9 q-mt-md" >
        <newscard  :article="europeLatest[0]" cardType="large"></newscard>
      </div>
      <div class="col-3 q-px-md ">
        <newslist :number="9" :articles="europeLatest.slice(3)"></newslist>
      </div>
    </section>
    <section class="row items-stretch justify-between q-my-lg">
      <header class="col-12 q-my-lg ">
        <h1 class="q-my-sm app-headings text-subtle-grey">Africa Now</h1>
      </header>
      <div class="col-3 q-pa-xs">
        <longnewscard :article="africaLatest[0]" description source></longnewscard>
      </div>
      <div class="col-3 q-pa-xs">
        <longnewscard :article="africaLatest[1]" description source></longnewscard>
      </div>
      <div class="col-3 q-pa-xs">
        <longnewscard :article="africaLatest[2]" description source></longnewscard>
      </div>
      <div class="col-3 q-pa-xs">
        <longnewscard :article="africaLatest[3]" description source></longnewscard>
      </div>
    </section>
    <section class="row q-my-lg">
      <header class="col-12 q-my-lg">
        <h1 class="q-my-sm app-headings text-subtle-grey">Coronavirus</h1>
      </header>
      <div class="col-12">
        <newscard cardType="large" :article="coronaUpdates[0]" :captionsize="'large'"></newscard>
      </div>
    </section>
  </q-page>
</template>

<script>
  import newscard from '../components/newscard'
  import newslist from '../components/newslist'
  import longnewscard from '../components/longnewscard'
  export default {
    name:"index",
    data() {
      return {
        dataFetched: false
      }
    },
    computed: {
      topArticles: function () {
        return this.$store.getters.getTopAroundTheGlobe;
        
      },
      asiaLatest:function(){
        return this.$store.getters.getAsiaLatest;
      },
      europeLatest:function(){
        return this.$store.getters.getEuropeLatest;
      },
      africaLatest:function(){
        return this.$store.getters.getAfricaLatest;
      },
      coronaUpdates:function(){
        return this.$store.getters.getCoronaLatest;
      }
    },
    components: {
      newscard,
      newslist,
      longnewscard
    },
    created(){
      this.$store.dispatch('LoadTopAroundTheGlobe');
      this.$store.dispatch('LoadRegionsLatest');
      this.$store.dispatch('LoadCoronaLatest');
    }
  }
</script>
<style lang="scss" scoped>


</style>