
export function searchNews ({commit},payload) {

  this._vm.$axios.get('/everything',{
    params:{
      q:payload,
      pageSize:100,
      page:1
    }
  })
  .then(res=>{
    commit('populateSearchList',res.data);
  })
}

