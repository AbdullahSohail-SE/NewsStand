<template>
  <q-layout view="hHr LpR lFf" class="bg-grey-1">
    <q-header  elevated >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />
          <q-btn flat no-caps no-wrap class="q-ml-xs">
          
          <q-toolbar-title shrink class="text-weight-bold">
           
          </q-toolbar-title>
        </q-btn>
        
      </q-toolbar>
    </q-header>
    
  </q-layout>
</template>
<script>
export default {
  data(){
    return{
      leftDrawerOpen:false
    }
  }
}
</script>