<template>
 
  <div id="q-app">
    <router-view />
    
  </div>
</template>

<script>
export default {
  created(){
    this.$store.dispatch('syncNotifications');
    this.$store.dispatch('syncData');
  }
}
</script>
