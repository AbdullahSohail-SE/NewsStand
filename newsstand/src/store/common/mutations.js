
export function setNotifications (state, payload) {
}
export function addReadLater (state, payload) {
  state.readingList.push(payload);
}
export function deleteReadLater(state, payload) {
  
  var index=state.readingList.findIndex(article=>{
    return article.id==payload.id && article.category==payload.category;
  });
  state.readingList.splice(index,1);

}
export function clearReadingList(state){
state.readingList.length=0;
}

