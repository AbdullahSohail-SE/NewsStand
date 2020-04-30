

export function getNotifications(state, getters) {
  return state.notifications;
}
export function getNumberReadingList(state, getters) {
  return state.readingList.length;
}
export function getNumberNotifications(state, getters) {
  return Object.keys(state.notifications).length;
}
export function getReadingList(state,getters){
  return state.readingList;
}
