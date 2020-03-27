
export function populateEnglishSources (context) {
  
  this._vm.$axios.get('/sources?language=en')
  .then(response=>{
    
   const sourceIDs= response.data.sources.map(source=>source.id);
   context.commit('fetchEnglishSources',sourceIDs);
  })
  .catch(error=>{
    console.log(error);
  });
}
