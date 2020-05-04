<template>
  <q-card square flat>
    <q-card-section horizontal>
      <div class="col-3">
      <q-img :src="article.urlToImage" spinner-color="primary" height="300px" >
        <template v-slot:loading>
          <span class="text-weight-medium q-mr-md text-primary" >Loading Image</span>
          <q-spinner-oval size="1em" color="primary"></q-spinner-oval>
        </template>
      </q-img>
      </div>
      <q-card-section class="row col-9 items-center" >
        <div class="col-12 ">
          <div class="row items-center justify-between">
            <h6 class="q-ma-none q-pa-none normal-line-height">{{article.title}}</h6>
            
          </div>
            <p  class="q-mt-lg text-body-1 " >{{article.description}}</p>
            <p  class=" text-body-1 q-my-none" >{{article.content}}</p>
            
        </div>
        
        <div  class="col-12   row justify-between  self-end">
        <span  class="q-py-none text-subtle-grey">{{article.source.name}}</span>
        <span  class="q-py-none text-subtle-grey">{{article.publishedAt|formattedDate}}</span>
      </div>
      </q-card-section>


      </q-card-section>
      
    
  </q-card>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  },
  props:{
    article:{
      required:true
    }
  }
}
</script>
