<template>
  <q-card class="q-py-sm" square flat>
    <div v-if="!dataFetched">
      <q-skeleton square height="330px"></q-skeleton>
      <q-skeleton type="text" square height="150px"></q-skeleton>
    </div>
    
    <div class="custom" ref="custom" v-else>
      <q-img :src="article.urlToImage" spinner-color="primary" :height="imgHeight"></q-img>
      <q-card-section class="q-px-none customContainer">
        <h6 class="q-ma-none q-pa-none normal-line-height customTitle" v-if="title">{{article.title}}</h6>
        <p  class="q-my-sm text-body-1 customDesc" v-if="description">{{article.description}}</p>
        <p  class=" text-body-1 customContent" v-if="content">{{article.content}}</p>
      </q-card-section>
      <q-card-section class="q-pa-none row justify-between" v-if="source">
        <span class="q-py-none text-subtle-grey">{{article.source.name}}</span>
        <span class="q-py-none text-subtle-grey">{{article.publishedAt|formattedDate}}</span>
      </q-card-section>
    </div>

  </q-card>
</template>
<script>
  export default {
    data() {
      return {
        dataFetched: false
      }
    },
    props: {
      article: {
        required: true
      },
      title: {
        default: true,
        type: Boolean
      },
      description: {
        default: false,
        type: Boolean
      },
      content: {
        default: false,
        type: Boolean
      },
      source: {
        default: false,
        type: Boolean
      },
      imgHeight:{
        default:'330px',
        type:String
      },
      titleSize:{
        default:'24px',
        type:String
      },
      descSize:{
        default:'auto',
        type:String
      },
      contentSize:{
       default:'auto',
       type:String
      }
    },
    watch: {
      article: function (newVal) {
        if (newVal != undefined)
          this.dataFetched = true;
      }
    },
    updated(){      

    var customDiv=this.$refs.custom;    
    customDiv.style.setProperty('--titleSize',this.titleSize);
    customDiv.style.setProperty('--descSize',this.descSize);
    customDiv.style.setProperty('--contSize',this.contentSize);

  }}

</script>
<style lang="scss" scoped>
.custom{
  --titleSize:'';
  --descSize:'';
  --contSize:'';

  .customTitle{
    font-size: var(--titleSize);
  }
  .customDesc{
    font-size: var(--descSize);
  }
  .customContent{
    font-size: var(--contSize);
  }
}

</style>
