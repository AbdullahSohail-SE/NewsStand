<template>
  <q-header>
    
    <!-- desktop-version -->

    <q-toolbar   class="desktop-only row bg-white text-black">
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
          <div class="row q-pa-md text-weight-medium" style="width:200px">
    
            <div class="col">
              <q-list>
                <q-item :to="{name:'categories',params:{type:'health'}}" class="cursor-pointer">
                  <q-item-section >Health</q-item-section>
                </q-item>
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
        
              </q-list>
              
            </div>
          </div>
      </q-btn-dropdown>
      <q-input dense outlined placeholder="Search News" v-model="searchQuery" input-class="text-left" class="q-ml-md ">
          <template v-slot:append>
            <q-icon name="search" @click="searchNews"></q-icon>
          </template>
      </q-input>
      </div>
      
      
      <q-space></q-space>

      <div class="col-4 row items-center justify-end">
      <q-tabs shrink inline-label >
        <q-btn-dropdown  menu-anchor="bottom middle" menu-self="top middle" content-class="bookmarks" label="saved" style="height:100%"  flat dense   >
        <template v-slot:label >
        <q-badge   color="teal" class="resp-badge" >{{bookmarked}}</q-badge>
        </template>
        <q-list v-if="bookmarked" style="width:300px" class="q-mx-md" separator padding>
          <q-item v-for="article in bookmarkedArticles" :key="article.title">
            <q-item-section>
              <span  class="bookmark-text text-weight-medium">{{article.title}}</span>
            </q-item-section>
            <q-item-section side>
               <q-btn @click="removeBookmark(article)" icon="fa fa-trash" round flat color="teal" size="10px"></q-btn>
            </q-item-section>
          </q-item>
        </q-list>
        </q-btn-dropdown>
        <q-btn-dropdown @before-hide="notificationsRead" icon="notifications" menu-anchor="bottom middle" menu-self="top middle" content-class="bookmarks" style="height:100%"  flat  >
        <template v-slot:label >
        <q-badge  color="teal" class="resp-badge" >{{notificationsCount}}</q-badge>
        </template>
        <q-list v-if="notificationsCount" style="width:200px" class="q-mx-md" separator padding>
          <q-item v-for="notification in notifications" :key="Object.keys(notification)[0]">
            <q-item-section>
              <span  class="bookmark-text text-weight-medium">{{notification[Object.keys(notification)[0]]}}</span>
            </q-item-section>
          </q-item>
        </q-list>
        </q-btn-dropdown>
      
        <q-btn-dropdown  content-class="bookmarks" icon="person"  menu-anchor="bottom middle" menu-self="top middle"  :label="userName" style="height:100%"  flat  dropdown-icon="settings"  >
          <q-list   separator >
            <q-item  @click="logoutUser" clickable>
              <q-item-section avatar="">
                  <q-icon  color="teal" name="fas fa-sign-out-alt"></q-icon>
              </q-item-section>
              <q-item-section>
              <span class="text-weight-medium">Sign Out</span>
            </q-item-section>
            
            </q-item>
          </q-list>
        </q-btn-dropdown>

      </q-tabs>
      </div>
    </q-toolbar>

    <!-- mobile version for better understanding -->
    <div ref="branding" style="position:relative" class="bg-teal mobile-only">
      <div style="height:3rem" class="col-2 row items-center justify-center no-wrap">
      <q-avatar font-size="2rem" size="2.5rem" text-color="white">
        <i class="fab fa-hubspot"></i>
      </q-avatar>
    
      <span class="text-weight-medium text-white">NewsStand</span>
      </div>
    </div>
    
    <q-toolbar ref="mobileToolbar" class="items-stretch mobile-only bg-white ">
      
      <div class="col-12 row items-center justify-between">
        <div ref="bars" @click="toggleDrawer" class="drawer__icon"></div> <!--drawer__icon-opened-->
        <!-- <q-btn flat round dense icon="fas fa-bars" color="teal" /> -->
        <q-btn @click.stop="toggleSearch" flat size="lg"  dense icon="search" color="teal" />
        <q-btn-dropdown   menu-anchor="bottom middle" menu-self="top middle" content-class="bookmarks" text-color="teal" icon="bookmark" dropdown-icon=" " style="height:100%;overflow:hidden;width:3rem"  flat dense   >
        <template v-slot:label >
        <q-badge   color="teal" class="resp-badge" >{{bookmarked}}</q-badge>
        </template>
        <q-list v-if="bookmarked" style="width:15rem" class="q-mx-md" separator padding>
          <q-item v-for="article in bookmarkedArticles" :key="article.title">
            <q-item-section>
              <span  class="bookmark-text text-weight-medium">{{article.title}}</span>
            </q-item-section>
            <q-item-section side>
               <q-btn @click="removeBookmark(article)" icon="fa fa-trash" round flat color="teal" size="10px"></q-btn>
            </q-item-section>
          </q-item>
        </q-list>
        </q-btn-dropdown>


        <q-btn-dropdown  @before-hide="notificationsRead" dropdown-icon=" " icon="notifications" menu-anchor="bottom middle" color="teal" menu-self="top middle" content-class="bookmarks" style="height:100%;overflow:hidden;width:3rem" dense  flat  >
        <template v-slot:label >
        <q-badge  color="teal" class="resp-badge" >{{notificationsCount}}</q-badge>
        </template>
        <q-list v-if="notificationsCount" style="width:200px" class="q-mx-md" separator padding>
          <q-item v-for="notification in notifications" :key="Object.keys(notification)[0]">
            <q-item-section>
              <span  class="bookmark-text text-weight-medium">{{notification[Object.keys(notification)[0]]}}</span>
            </q-item-section>
          </q-item>
        </q-list>
        </q-btn-dropdown>

        <q-btn-dropdown  color="teal" content-class="bookmarks" icon="person"  menu-anchor="bottom middle" menu-self="top middle"  :label="userName" style="height:100%;overflow:hidden;width:6rem" dropdown-icon=" " flat   >
          <q-list   separator >
            <q-item  @click="logoutUser" clickable>
              <q-item-section avatar="">
                  <q-icon  color="teal" name="fas fa-sign-out-alt"></q-icon>
              </q-item-section>
              <q-item-section>
              <span class="text-weight-medium">Sign Out</span>
            </q-item-section>
            
            </q-item>
          </q-list>
        </q-btn-dropdown>


      </div>
      
    </q-toolbar>
    <div ref="drawer" class="drawer row items-center mobile-only  justify-center">
        <q-list @click="toggleDrawer"  class="text-weight-medium drawer__list">
          <q-item exact  class="drawer__item text-center" to="/" active-class="drawer__item-active">
            <q-item-section>Latest</q-item-section>
          </q-item>
          <q-item exact :to="{name:'categories',params:{type:'general'}}" class="drawer__item text-center" active-class="drawer__item-active">
            <q-item-section>General</q-item-section>
          </q-item>
          <q-item exact :to="{name:'categories',params:{type:'health'}}" class="drawer__item text-center" active-class="drawer__item-active"><q-item-section>Health</q-item-section></q-item>
          <q-item exact :to="{name:'categories',params:{type:'entertainment'}}" class="drawer__item text-center" active-class="drawer__item-active"><q-item-section>Entertainment</q-item-section></q-item>
          <q-item exact :to="{name:'categories',params:{type:'sports'}}" class="drawer__item text-center" active-class="drawer__item-active"><q-item-section>Sports</q-item-section></q-item>
          <q-item exact :to="{name:'categories',params:{type:'science'}}" class="drawer__item text-center" active-class="drawer__item-active"><q-item-section>Science</q-item-section></q-item>
          <q-item exact :to="{name:'categories',params:{type:'business'}}" class="drawer__item text-center" active-class="drawer__item-active"><q-item-section>Business</q-item-section></q-item>
          <q-item exact :to="{name:'categories',params:{type:'technology'}}" class="drawer__item text-center" active-class="drawer__item-active"><q-item-section>Technology</q-item-section></q-item>
          
        </q-list>
    </div>
    <div style="position:relative;" class="row justify-center mobile-only bg-white ">
      <q-input ref="mobileSearch" style="width:95vw;" square="" dense outlined placeholder="Search News" v-model="searchQuery" input-class="text-left" bg-color="white" class=" search search-open" >
          <template v-slot:append>
            <q-icon  name="search" @click="searchNews();toggleSearch()"></q-icon>
          </template>
      </q-input>
    </div>
    
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
     return this.$store.getters.getReadingList;
     
    },
    userName:function(){
      return this.$store.getters.getCurrentUser.displayName;
    },
    notificationsCount:function(){
      return this.$store.getters.getNumberNotifications;
    },
    notifications:function(){
      return this.$store.getters.getNotifications;
    }
  
  },
  methods:{
    removeBookmark:function(payload){
      this.$store.dispatch('unbookmark',payload);
    },
    logoutUser:function(){
      this.$store.dispatch('logOut');
    },
    searchNews:function(){
      if(this.searchQuery=="" || this.searchQuery == " ")
      return;
      this.$router.push({ name: 'search', params: { query: this.searchQuery } });
      this.searchQuery="";

    },
    notificationsRead:function(evt){
      this.$store.dispatch('notificationsRead');
    },
    toggleDrawer:function(){
    
    let drawer=this.$refs.drawer;
    let bars=this.$refs.bars;
    
     if(drawer.classList.contains("drawer-open")){
        drawer.classList.remove("drawer-open");
        this.$root.$emit("drawerOpen",false)
        }
     else{
        drawer.classList.add("drawer-open");
        this.$root.$emit("drawerOpen",true);
        }

      if(bars.classList.contains("drawer__icon-opened"))
        bars.classList.remove("drawer__icon-opened")
      else
        bars.classList.add("drawer__icon-opened");

    },
    toggleSearch:function(){
      let search=this.$refs.mobileSearch.$el;
      if(search.classList.contains("search-open"))
         search.classList.remove("search-open");
      else
         search.classList.add("search-open");
    }
  }
}
</script>
<style lang="scss" scoped>



.search{

  position: absolute;
  opacity: 0;
  transition: all .4s;
  display: none;

  &-open{
    display: block;
  }
}

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
.drawer{
  


  background-color: white;
  height: calc(100vh - 5rem);
  position: fixed;
  width: 0;
  z-index: 1000;
  transition: all .8s cubic-bezier(0.86, 0, 0.07, 1);
  overflow: hidden;

&-open{
width: 100%;

}
&__item{
  font-size: 1.2rem;
  color: $primary;
  width: 100%;
  
}

&__item-active{
 
  transition: all .2s;
  background-color: $primary;
  color: white;
  
  &::before{
    content: " ";
    height: 100%;
    background-color: $primary;
    width: 3px;
    position: absolute;
    left: -5px;
    top: 50%;
    transform: translateY(-50%);
  }
}



&__icon {
        position: relative;
        margin-right: -4px;
        margin-top: -3px;
        &,
        &::before,
        &::after {
            width: 1.6rem;
            height: 3px;
            background-color: teal;
            display: inline-block;
        }

        &::before,
        &::after {
            content: "";
            position: absolute;
            left: 0;
            transition: all .2s;
        }

        &::before { top: -.55rem; }
        &::after { top: .55rem; }

        &-opened {
        background-color: transparent;
        }

        &-opened::before{
          top: 0;
          transform: rotate(135deg);
        }

        &-opened::after{
           top: 0;
           transform: rotate(-135deg);
        }

    }

    

  
}

</style>