const state={
  notifications:[],
  readingList:[],
  topAroundTheGlobe:[]
}

const mutations={
  'setTopAroundTheGlobe'(state,payload)
  {
    state.topAroundTheGlobe=payload;
  },
 
  'setNotifications'(state,payload){

  },
  'addReadLater'(state,payload){

  },
  'deleteReadLater'(state,payload){

  },
  'randomize'(state,payload){
    
  }
};

const getters={
  'getNotifications'(state,getters){

  },
  'getTopAroundTheGlobe'(state,getters){
    return state.topAroundTheGlobe;
  },
  'getNumberReadingList'(state,getters){

  },
  'getNumberNotifications'(state,getters){

  }
};

const actions={
  AddToReadingList:(store,payload)=>{

  },
  LoadTopAroundTheGlobe(store,payload){
    const sources=payload.join(',');
    this._vm.$axios.get('/top-headlines',{
      params:{
        sources
      }
    })
    .then(response=>{
      store.commit('setTopAroundTheGlobe',response.data.articles);
    })
    .catch(error=>console.log(error));

    
  }
}
export default{
  state,mutations,getters,actions
}