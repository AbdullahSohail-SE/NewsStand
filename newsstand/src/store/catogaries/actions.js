
export function loadGeneralArticles (context) {
  this._vm.$axios.get('/top-headlines',{params:{category:'general',country:'us'}})
  .then(response=>context.commit('populateGeneralArticles',response.data.articles));
  
}
export function setSelectedArticle (context,payload){
  var article=context.getters.getArticleById(payload)
  context.commit('selectArticle',article);
}

