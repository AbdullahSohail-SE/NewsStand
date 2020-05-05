<template>
  <q-page >
    <section>
      <header class="row  q-mt-lg items-center">
        <h1 class="app-headings desktop-only q-mx-md text-subtle-grey">Search Results</h1>
        <h1 class=" mobile-only app-headings q-mx-md text-subtle-grey">Search Results</h1>
      </header>
 
      <q-list  >
          <q-item v-for="art in searchArticles" :key="art.url">
            <landscapeCard :article="art"></landscapeCard>
          </q-item>
      </q-list>

    </section>
  </q-page>
</template>

<script>
  import landscapeCard from 'components/landscapeNewscard'
  export default {
    data() {
      return {
        
      }
    },
    components: {
      landscapeCard
    },
    computed: {
      searchArticles: function () {
        return this.$store.getters.getSearchedList.slice(0, 20);
      }
    },
    beforeRouteUpdate(to, from, next) {

      const searchQuery = to.path.replace("/search/", "");
      this.$store.dispatch('searchNews', searchQuery);

      next();
    },
    created() {
      const searchQuery = this.$route.path.substring(this.$route.path.lastIndexOf("/") + 1, this.$route.path.length);
      this.$store.dispatch('searchNews', searchQuery);
    },
    methods:{
      loadMore(index,done){
        console.log("loadded");
        setTimeout(() => {
          this.items.push({}, {}, {}, {}, {}, {}, {});
          done();
        }, 2000);
      }
    }
  }

</script>
