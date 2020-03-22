<template>
  <q-layout view="hHr LpR lFf">
    <app-header></app-header>
        <q-page-container>
          <router-view></router-view>
        </q-page-container>
    <app-footer></app-footer>
  </q-layout>
</template>
<script>
import header from './AppHeader'
import footer from './AppFooter'
export default {
  data(){
    return{

    }
  },
  components:{
    'app-header': header,
    'app-footer':footer
  }
}
</script>
<style lang="sass" scoped>

</style>