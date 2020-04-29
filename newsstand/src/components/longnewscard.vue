<template>
  <q-card class="q-py-sm" square flat>
    <div v-if="!dataFetched">
      <q-skeleton square height="330px"></q-skeleton>
      <q-skeleton type="text" square height="150px"></q-skeleton>
    </div>
    
    <div class="custom" ref="custom" v-else>
      <q-img :src="article.urlToImage" spinner-color="primary" :height="imgHeight">
        <q-btn @click="bookmark" push round :icon="!bookmarked ? 'far fa-bookmark' : 'bookmark'" color=transparent  class="bookmark">
          <q-tooltip
          transition-show="scale"
          transition-hide="scale"
        >
          {{!bookmarked?'Save':'Unsave'}}
        </q-tooltip>
        </q-btn>
      </q-img>
      <q-card-section class="q-px-none customContainer">
        <h6 class="q-ma-none q-pa-none normal-line-height customTitle" v-if="title">{{article.title}}</h6>
        <p  class="q-my-sm text-body-1 customDesc" v-if="description">{{article.description}}</p>
        <p  class=" text-body-1 customContent" v-if="content">{{article.content}}</p>
        <q-btn class="q-mb-md" v-if="linkBtn" type="a" :href="article.url" label="News Link" outline color="teal" icon-right="link" target="_blank" />
      </q-card-section>
      <q-card-section class=" row justify-between q-pa-none move-end" v-if="source">
        <span  class="q-py-none text-subtle-grey">{{article.source.name}}</span>
        <span  class="q-py-none text-subtle-grey">{{article.publishedAt|formattedDate}}</span>
      </q-card-section>
    </div>

  </q-card>
</template>
<script>
  export default {
    data() {
      return {
        dataFetched: true
      }
    },
    computed:{
      bookmarked:function(){
        const readingList=this.$store.getters.getReadingList;
        const index=readingList.findIndex((article)=>{
          if(
            article.category==this.article.category
            && article.author==this.article.author
            && article.title==this.article.title
            )
          return true;
        });
       
        return (index == -1) ? false : true;
      }
    },
    props: {
      article: {
        required: true
      },
      linkBtn:{
        default:false,
        type:Boolean
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
        if (newVal == undefined)
          this.dataFetched = false;
      }
    },
    methods:{
      bookmark:function(){
        if(!this.bookmarked){
        this.$store.dispatch('AddToReadingList',this.article);
        }
        else
        {
          this.$store.dispatch('unbookmark',this.article);
        }
      }
    },
    updated(){      

    var customDiv=this.$refs.custom;    
    customDiv.style.setProperty('--titleSize',this.titleSize);
    customDiv.style.setProperty('--descSize',this.descSize);
    customDiv.style.setProperty('--contSize',this.contentSize);

  }
  }

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
.move-end{
  position:absolute;
  bottom:0;
  width: 100%;
}
.bookmark{
  position: absolute;
  right: 4px;
  top: 4px;
  box-shadow: 0 0 10px black;
}
</style>
