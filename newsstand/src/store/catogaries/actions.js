
export function loadArticles ({ commit },payload) {

  this._vm.$axios.get('/top-headlines',{params:{category:payload,country:'us'}})
  .then(response=>commit('populateArticles',{type:payload,data:response.data.articles}));
  
}
export function setSelectedArticle ({ commit ,getters },payload){
  var article=getters.getArticleById(payload);
  commit('selectArticle',article);
}

