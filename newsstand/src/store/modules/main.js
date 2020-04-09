const state={
  notifications:[],
  readingList:[],
  topAroundTheGlobe:[],
  topInRegions:{
    asia:[],
    europe:[],
    africa:[]
  }
}

const mutations={
  'setTopAroundTheGlobe'(state,payload)
  {
    state.topAroundTheGlobe=payload;
  },
  'setTopInRegions'(state,payload){
    if(payload.region=="asia"){
      state.topInRegions.asia.push(...knuthShuffle(payload.data));
      
    }
    if(payload.region=="europe"){
      state.topInRegions.europe.push(...knuthShuffle(payload.data));
    }
    if(payload.region=="africa"){
      state.topInRegions.africa.push(...knuthShuffle(payload.data));
    }
  },
  'setNotifications'(state,payload){

  },
  'addReadLater'(state,payload){

  },
  'deleteReadLater'(state,payload){

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

  },
  'getAsiaLatest'(state,getters){
    return state.topInRegions.asia;
  },
  'getEuropeLatest'(state,getters){
    return state.topInRegions.europe;
  },
  'getAfricaLatest'(state,getters){
    return state.topInRegions.africa;
  }
};

const actions={
  AddToReadingList:(store,payload)=>{

  },
   LoadTopAroundTheGlobe({commit,getters},payload){
    
    const sources=payload.join(',');

    this._vm.$axios.get('/top-headlines',{
      params:{
        sources
      }
    })
    .then(response=>{
      commit('setTopAroundTheGlobe',response.data.articles);
    })
    .catch(error=>console.log(error));

    
   },
   LoadRegionsLatest({commit,getters},payload)
   {
     Promise.all(
       [
         this._vm.$axios.get('/top-headlines',{params:{country:'cn',pageSize:10}}),
         this._vm.$axios.get('/top-headlines',{params:{country:'in',pageSize:10}}),
         this._vm.$axios.get('/top-headlines',{params:{country:'ae',pageSize:10}}),

         this._vm.$axios.get('/top-headlines',{params:{country:'at',pageSize:5}}),
         this._vm.$axios.get('/top-headlines',{params:{country:'be',pageSize:5}}),
         this._vm.$axios.get('/top-headlines',{params:{country:'bg',pageSize:5}}),
         this._vm.$axios.get('/top-headlines',{params:{country:'ch',pageSize:5}}),
         this._vm.$axios.get('/top-headlines',{params:{country:'cz',pageSize:5}}),
         this._vm.$axios.get('/top-headlines',{params:{country:'de',pageSize:5}}),

         this._vm.$axios.get('/top-headlines',{params:{country:'eg',pageSize:5}}),
         this._vm.$axios.get('/top-headlines',{params:{country:'ma',pageSize:5}}),
         this._vm.$axios.get('/top-headlines',{params:{country:'ng',pageSize:5}}),
         this._vm.$axios.get('/top-headlines',{params:{country:'za',pageSize:5}}),

       ]
     ).then(response=>{
         var countryData=[];
         response.forEach((country)=>{
          countryData.push(country.data.articles);
        });
        var [china,india,uae,austria,belgium,bulgaria,swiss,czech,germany,egypt,morroco,nigeria,sa]=countryData;
        
       commit('setTopInRegions',{
        region:'asia',
        data: [...china,...india,...uae]
        });
       commit('setTopInRegions',{
         region:'europe',
         data:[...austria,...belgium,...bulgaria,...swiss,...czech,...germany]
       });
       commit('setTopInRegions',{
         region:'africa',
         data:[...egypt,...morroco,...nigeria,...sa]
       });
       
       
     });
     
    }
}

function knuthShuffle(arr){
  var m = arr.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }
  if(arr.length>0)
  return arr.slice(arr.length-20);

  return arr;

}

export default{
  state,mutations,getters,actions
}