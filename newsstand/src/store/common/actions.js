export function AddToReadingList (context,payload)  {
  context.commit('addReadLater',payload);
}
export function unbookmark(context,payload){
  context.commit('deleteReadLater',payload);
}

