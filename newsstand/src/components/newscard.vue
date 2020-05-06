<template>
  <q-card :class="cardSize" flat square>
    <q-skeleton v-if="!dataFetched" :class="cardSize" square></q-skeleton>
    <div :class="cardSize" v-else>
      <q-img :src="article.urlToImage" height="100%" >
        <q-btn @click="bookmark" push round :icon="!bookmarked ? 'far fa-bookmark' : 'bookmark'" color=transparent  class="bookmark">
          <q-tooltip
          transition-show="scale"
          transition-hide="scale"
        >
          {{!bookmarked?'Save':'Unsave'}}
        </q-tooltip>
        </q-btn>
        <div class="absolute-bottom q-img-caption">
          <h3 class="q-img-caption-title" :class="captionSize">
            <a :href="article.url">{{article.title}}</a>
          </h3>
          <p v-if="description" class="q-img-caption-desc">{{article.description}}</p>
          <p v-if="content" class="q-img-caption-desc">{{article.content}}</p>
        </div>
        <template v-slot:loading>
          <span class="text-weight-medium q-mr-md">Loading Image</span>
          <q-spinner-oval size="1em" color="primary"></q-spinner-oval>
        </template>
      </q-img>
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
      cardType: {
        type: String,
        required: true
      },
      article: {
        required: true
      },
      captionsize: {
        type: String,
        default: 'large'
      },
      description: {
        type: Boolean,
        default: true
      },
      content: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      article:function(newVal){
        Object.keys(newVal).length > 0 ? this.dataFetched = true : this.dataFetched = false;
      }
    },
    computed: {
      cardSize: function () {
        if (this.cardType == "large")
          return 'height-lg';
        else if (this.cardType == "medium")
          return 'height-md';
        else if (this.cardType == "xlarge")
          return 'height-xl';
      },
      captionSize: function () {
        if (this.captionsize == "large")
          return 'q-img-caption-title-lg';
        else if (this.captionsize == "medium")
          return 'q-img-caption-title-md';
        else if (this.captionsize == "small");
        return 'q-img-caption-title-sm';
      },
      bookmarked:function(){
        const readingList=this.$store.getters.getReadingList;
        const index=readingList.findIndex((article)=>{
          if(
            article.category==this.article.category
            && article.author==this.article.author
            && article.title==this.article.title)
          return true;
        });
       
        return (index == -1) ? false : true;
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
    }
  }

</script>
<style lang="scss" scoped>
  //SASS variables
  $height-lg:510px;
  $height-md:250px;
  $height-xl:600px;

  .height-lg {
    height: $height-lg;
  }

  .height-md {
    height: $height-md;
  }

  .height-xl {
    height: $height-xl;
  }

  .q-img-caption {
    background-color: transparent;
    background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.9));

    &-title {

      font-weight: 500;
      line-height: normal;
      margin: 0;

      &-sm {
        font-size: 1rem;
      }

      &-md {
        font-size: 1.2rem;
      }

      &-lg {
        font-size: 1.8rem;
      }
    }

    &-desc {
      margin-top: 5px;
    }
  }
  .bookmark{
    position:absolute;
    top:4px;
    left:4px;
    box-shadow: 0 0 10px black;
  }

</style>
