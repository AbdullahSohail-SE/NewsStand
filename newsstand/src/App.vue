<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  created(){
    this.$store.dispatch('populateEnglishSources');
    this.$store.dispatch('LoadRegionsLatest');
  }
}
</script>
