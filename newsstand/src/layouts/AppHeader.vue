<template>
  <q-header>
    <q-toolbar class="bg-white text-black">
      
      <q-avatar font-size="42px" size="54px" text-color="teal">
        <!-- <i class="fab fa-strava"></i> -->
        <!-- <i class="fab fa-readme"></i> -->
        <i class="fab fa-hubspot"></i>
      </q-avatar>
      
      <q-toolbar-title class="title q-mr-lg" shrink>
        NEWSSTAND
      </q-toolbar-title>

      <q-tabs align="left">
        <q-route-tab label="Latest" to="/" exact ></q-route-tab>
        <q-route-tab label="General" to="/general" exact></q-route-tab>
        <q-route-tab label="Science" to="/science" exact></q-route-tab>
      </q-tabs>
      <q-btn-dropdown dropdown-icon="newspaper" flat >
        
      </q-btn-dropdown>
    </q-toolbar>
  </q-header>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.title{
font-size: 1.2rem;
}
</style>