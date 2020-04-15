
export function loadArticles (context,payload) {

  this._vm.$axios.get('/top-headlines',{params:{category:payload,country:'us'}})
  .then(response=>context.commit('populateArticles',{type:payload,data:response.data.articles}));
  
}
export function setSelectedArticle (context,payload){
  var article=context.getters.getArticleById(payload);
  context.commit('selectArticle',article);
}

