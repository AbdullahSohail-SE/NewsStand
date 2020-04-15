
export function getArticles (state) {
    return function(payload){
        return state.articles[payload];
    }
}
export function getArticleById (state){
    
    return function(payload){
        return state.articles[payload.category].find(article=>article.id==payload.id);
    }
}
export function getSelectedArticle (state){
    return state.selectedArticle;
}
