<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  created(){
    this.$store.dispatch('LoadTopAroundTheGlobe');
    this.$store.dispatch('LoadRegionsLatest');
    this.$store.dispatch('LoadCoronaLatest');
  }
}
</script>
