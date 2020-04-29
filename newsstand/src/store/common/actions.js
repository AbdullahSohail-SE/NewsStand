
export function AddToReadingList ({commit,getters},payload)  {
  const userId=getters.getCurrentUser.userId;
  this._vm.$firebaseDbREST.post('Saved/'+userId+'.json',payload)
  .then(()=>{
    commit('addReadLater',payload);
  })
  
}
export function unbookmark({commit,getters},payload){
  const userId=getters.getCurrentUser.userId;
  this._vm.$firebaseDbREST
  .get(`Saved/${userId}.json?orderBy="title"&equalTo="${payload.title}"`)
  .then(resp=>{
    return Object.keys(resp.data)[0];
  })
  .then(key=>{
    this._vm.$firebaseDbREST.delete(`Saved/${userId}/${key}.json`);
    commit('deleteReadLater',payload);
  })
}
export function syncData({getters,commit},payload){
  const userId=getters.getCurrentUser.userId;
  this._vm.$firebaseDbREST.get('Saved/' + userId + '.json')
  .then(resp=>{
    for (var article in resp.data) {
      if (resp.data.hasOwnProperty(article)) { 
        commit('addReadLater',resp.data[article]);
      }
  }
  });
}




