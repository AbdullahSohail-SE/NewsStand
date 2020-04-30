
export function setNotifications (state, payload) {
 
  for (var key in payload) {
    if (payload.hasOwnProperty(key)) {
      state.notifications.push({[key]:payload[key]});
    }

}
  
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
export function deleteNotification(state,payload){

  var filtered=state.notifications.filter(e=>{
    return !e[payload.path.replace("/","")];
  });
  
  state.notifications=filtered;
}
export function addNotification(state,payload){
   state.notifications.push({[payload.path.replace("/","")]:payload.data});
}
