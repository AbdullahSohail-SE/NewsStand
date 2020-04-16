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

      <div class="col-6 row justify-around no-wrap">
      <q-tabs style="width:80%">
        <q-route-tab class="resp-tab"  label="Latest" to="/" exact ></q-route-tab>
        <q-route-tab class="resp-tab"  label="General" :to="{name:'categories',params:{type:'general'}}" exact></q-route-tab>
        <q-route-tab class="resp-tab"  label="Science" :to="{name:'categories',params:{type:'science'}}" exact></q-route-tab>
        <q-route-tab class="resp-tab"  label="Business" :to="{name:'categories',params:{type:'business'}}" exact></q-route-tab>
      </q-tabs>
      <q-btn-dropdown menu-anchor="bottom middle" menu-self="top middle" content-class="menu"  flat dense dropdown-icon="none" class="icon_catogary">
          <div class="row q-pa-md text-weight-medium" style="width:430px">
            <div class="col">
              <q-list>
                <q-item >
                  <q-item-section class="cursor-pointer">Coronavirus</q-item-section>
                </q-item>
                <q-item >
                  <q-item-section class="cursor-pointer">U.S</q-item-section>
                </q-item>
                <q-item >
                  <q-item-section class="cursor-pointer">U.K</q-item-section>
                </q-item>
                <q-item :to="{name:'categories',params:{type:'health'}}" class="cursor-pointer">
                  <q-item-section >Health</q-item-section>
                </q-item>
              </q-list>
            </div>
            <div class="col">
              <q-list>
                <q-item :to="{name:'categories',params:{type:'entertainment'}}">
                  <q-item-section class="cursor-pointer">
                    Entertainment
                  </q-item-section>
                </q-item>
                <q-item :to="{name:'categories',params:{type:'sports'}}">
                  <q-item-section  class="cursor-pointer">
                    Sports
                  </q-item-section>
                </q-item>
                <q-item :to="{name:'categories',params:{type:'technology'}}" class="cursor-pointer">
                  <q-item-section >
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
        <q-btn-dropdown  menu-anchor="bottom middle" menu-self="top middle" content-class="bookmarks" label="saved" style="height:100%"  flat dense   >
        <template v-slot:label >
        <q-badge   color="red" class="resp-badge" >{{bookmarked}}</q-badge>
        </template>
        <q-list v-if="bookmarked" style="width:300px" class="q-mx-md" separator padding>
          <q-item v-for="article in bookmarkedArticles" :key="article.title">
            <q-item-section>
              <span  class="bookmark-text text-weight-medium">{{article.title}}</span>
            </q-item-section>
            <q-item-section side>
               <q-btn @click="removeBookmark({id:article.id,category:article.category})" icon="fa fa-trash" round flat color="red" size="10px"></q-btn>
            </q-item-section>
          </q-item>
        </q-list>
        </q-btn-dropdown>
      
        <q-route-tab  class="resp-tab resp-tab-noti" icon="notifications" to="/notifications">
        <q-badge  color="red" class="resp-badge">5</q-badge>
        </q-route-tab>
        <q-route-tab to="/user">
          <q-avatar >
            <img  src="https://cdn.quasar.dev/img/avatar.png">
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
  },
  computed:{
    bookmarked: function(){
     return this.$store.getters.getNumberReadingList;
    },
    bookmarkedArticles:function(){
     return this.$store.getters.getReadingList
    }
  },
  methods:{
    removeBookmark:function(payload){
      this.$store.dispatch('unbookmark',payload);
    }
  }
}
</script>
<style lang="scss" scoped>
.title{
font-size: 1.1rem;
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
    &-noti{
      width: 3rem;
      margin-right: -10px;
    }
  }
}
.resp-badge{
    transform: translate(4px,-10px);;
  }
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
}
.bookmark-text{
  font-size:12px;
  cursor:pointer;
  
  &:hover{
    text-decoration: underline;
  }
}


</style>