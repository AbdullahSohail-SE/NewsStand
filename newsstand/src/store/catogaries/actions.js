
export function loadGeneralArticles (context) {
  this._vm.$axios.get('/top-headlines',{params:{category:'general',country:'us'}})
  .then(response=>context.commit('populateGeneralArticles',response.data.articles));
  
}

