<template>
  <q-header>
    <q-toolbar class=" row bg-white text-black">
      <div class="col-2 row items-center no-wrap">
      <q-avatar font-size="42px" size="54px" text-color="teal">
        <i class="fab fa-hubspot"></i>
      </q-avatar>
      
      <q-toolbar-title class="title q-mr-lg" shrink>
        NEWSSTAND
      </q-toolbar-title>
      </div>

      <div class="col-6 row items-center no-wrap">
      <q-tabs>
        <q-route-tab class="resp-tab"  label="Latest" to="/" exact ></q-route-tab>
        <q-route-tab class="resp-tab"  label="General" to="/general" exact></q-route-tab>
        <q-route-tab class="resp-tab"  label="Science" to="/science" exact></q-route-tab>
        <q-route-tab class="resp-tab"  label="Business" to="/science" exact></q-route-tab>
      </q-tabs>
      <q-btn-dropdown menu-anchor="bottom middle" menu-self="top middle" content-class="menu"  flat dense dropdown-icon="none" class="icon_catogary">
          <div class="row q-pa-md text-weight-medium" style="width:430px">
            <div class="col">
              <q-list>
                <q-item>
                  <q-item-section class="cursor-pointer">Coronavirus</q-item-section>
                </q-item>
                <q-item >
                  <q-item-section class="cursor-pointer">U.S</q-item-section>
                </q-item>
                <q-item >
                  <q-item-section class="cursor-pointer">U.K</q-item-section>
                </q-item>
                <q-item >
                  <q-item-section class="cursor-pointer">Health</q-item-section>
                </q-item>
              </q-list>
            </div>
            <div class="col">
              <q-list>
                <q-item >
                  <q-item-section class="cursor-pointer">
                    Entertainment
                  </q-item-section>
                </q-item>
                <q-item >
                  <q-item-section class="cursor-pointer">
                    Sports
                  </q-item-section>
                </q-item>
                <q-item >
                  <q-item-section class="cursor-pointer">
                    Technology
                  </q-item-section>
                </q-item>
                <q-item >
                  <q-item-section class="cursor-pointer">2020 Elections</q-item-section>
                </q-item>
              </q-list>
              
            </div>
          </div>
      </q-btn-dropdown>
      <q-input  dense outlined placeholder="Search News" v-model="searchQuery" input-class="text-left" class="q-ml-md ">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
      </q-input>
      </div>
      
      
      <q-space></q-space>

      <div class="col-4 row items-center justify-end">
      <q-tabs shrink inline-label >
        <q-route-tab  class="resp-tab"  dense icon="bookmarks" label="Saved" to="/readinglist" exact >
        <q-badge   color="red" class="resp-badge" >2</q-badge>
        </q-route-tab>
      
        <q-route-tab  class="resp-tab" icon="notifications" to="/notifications">
        <q-badge  color="red" class="resp-badge">5</q-badge>
        </q-route-tab>
        <q-route-tab to="/user">
          <q-avatar >
            <img style="z-index:10000" src="https://cdn.quasar.dev/img/avatar.png">
          </q-avatar>
          <span  class="text-weight-medium q-ml-sm">Abdullah Sohail</span>
        </q-route-tab>
      </q-tabs>
      </div>
    </q-toolbar>
    
  </q-header>
</template>
<script>

export default {
  data(){
    return{
      searchQuery:""
    }
  }
}
</script>
<style lang="scss" scoped>
.title{
font-size: 1.2rem;
}
.icon_catogary::before{
content: url('~assets/catogaries.svg');
    position: absolute;
    top: 60%;
    left: 50%;
    transform:translateX(-50%) translateY(-50%);
    
}
@media only screen and (min-width:"1440px") {
  .resp-tab{
    width: 5rem;
    height: 100%;
    position: relative;
    
  }
}
.resp-badge{
    transform: translate(4px,-10px);;
  }


</style>