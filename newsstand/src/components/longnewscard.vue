<template>
  <q-card class="q-py-sm" square flat>
    <div v-if="!dataFetched">
      <q-skeleton v-if="dataFetched" style="height:330px" square></q-skeleton>
    </div>
    
    <div class="custom" ref="custom" v-else>
      <q-img :src="article.urlToImage" spinner-color="primary" :height="imgHeight">
        <q-btn ref="bookmarkBtn" @click="bookmark" push round :icon="!bookmarked ? 'far fa-bookmark' : 'bookmark'" color=transparent  class="bookmark">
          <q-tooltip
          transition-show="scale"
          transition-hide="scale"
        >
          {{!bookmarked?'Save':'Unsave'}}
        </q-tooltip>
        </q-btn>
        <template v-slot:loading>
          <span class="text-weight-medium q-mr-md text-primary" >Loading Image</span>
          <q-spinner-oval size="1em" color="primary"></q-spinner-oval>
        </template>
      </q-img>
      <q-card-section class="q-px-none customContainer">
        <a :href="article.url">
        <h6 class="q-ma-none q-pa-none normal-line-height customTitle" v-if="title">{{article.title}}
        </h6>
        
        </a>
        <p  class="q-my-sm text-body-1 customDesc" v-if="description">{{article.description}}</p>
        <p  class=" text-body-1 q-my-md customContent" v-if="content">{{article.content}}</p>
        <q-btn class="q-mb-md" v-if="linkBtn" type="a" :href="article.url" label="Visit"  color="primary" unelevated="" no-caps icon-right="fas fa-external-link-square-alt" target="_blank" />
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
        dataFetched: false
      }
    },
    computed: {
      bookmarked: function () {
        const readingList = this.$store.getters.getReadingList;
        const index = readingList.findIndex((article) => {
          if (
            article.category == this.article.category &&
            article.author == this.article.author &&
            article.title == this.article.title
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
      linkBtn: {
        default: false,
        type: Boolean
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
      imgHeight: {
        default: '330px',
        type: String
      },
      titleSize: {
        default: '24px',
        type: String
      },
      descSize: {
        default: 'auto',
        type: String
      },
      contentSize: {
        default: 'auto',
        type: String
      }
    },
    watch: {
      article: function (newVal) {
        Object.keys(newVal).length > 0 ? this.dataFetched = true : this.dataFetched = false;
      }
    },
    methods: {
      bookmark: function () {
        const bookmarkBtn = this.$refs.bookmarkBtn.$el;
        bookmarkBtn.disabled = true;

        if (!this.bookmarked) {
          if (this.article.title.includes("&")) {
            this.$q.notify({
              message: "Bad Link! Cannot add this to read later list :(",
              type: "warning"
            })
            return;
          }
          this.$store.dispatch('AddToReadingList', this.article)
            .then(() => {
              bookmarkBtn.disabled = false;
            })
            .catch((er) => {
              this.$q.notify({
                message: "Network error occured perhaps reload the app :(",
                icon: "fas fa-wifi",
                type: "warning"
              });
              bookmarkBtn.disabled = false;
            })
        } else {
          this.$store.dispatch('unbookmark', this.article)
          .then(()=>{bookmarkBtn.disabled=false})
          .catch((er)=>{
            this.$q.notify({
                message: "Network error occured perhaps reload the app :(",
                icon: "fas fa-wifi",
                type: "warning"
              });
            bookmarkBtn.disabled=false
            });
        }
      }
    },
    updated() {

      var customDiv = this.$refs.custom;
      customDiv.style.setProperty('--titleSize', this.titleSize);
      customDiv.style.setProperty('--descSize', this.descSize);
      customDiv.style.setProperty('--contSize', this.contentSize);

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
