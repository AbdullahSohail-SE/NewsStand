<template>
  <q-page padding>
    <section class="row items-center q-mt-lg">
      <header class="row items-center justify-between col-12 header q-px-sm ">
        <h1 class="margin-0 app-headings">Top Around The Globe</h1>
        <span class="text-h6 " style="font-weight:500">{{ currentFormatDate }}</span>
      </header>
      <div class="col-7 q-px-xs q-py-lg">
        <newscard cardType="large" :article="articles[0]"></newscard>
      </div>
      <div class="col-5 q-px-xs q-py-lg">
        <newscard class="q-mb-sm" cardType="medium" :article="articles[1]"></newscard>
        <newscard cardType="medium" :article="articles[3]"></newscard>
      </div>
    </section>
  </q-page>
</template>

<script>
import newscard from '../components/newscard'
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
      return articles;
    }
  },
  components:{
    newscard
  }
}
</script>
<style lang="scss" scoped>



.app-headings{
  font-size:1.5rem;
  font-weight:500;
  display: inline;
  line-height: 1rem;
}

.margin-0{
  margin: 0;
}

.text-h6{
  font-weight:normal;
}
.header{
  margin: 0 auto;
}

</style>