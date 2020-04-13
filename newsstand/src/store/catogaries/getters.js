
export function getGeneralArticles (state) {
    return state.generalArticles;
}
export function getArticleById (state){
    
    return function(payload){
        return state.generalArticles.find(o=>o.id == payload);
    }
}
export function getSelectedArticle (state){
    return state.selectedArticle;
}
