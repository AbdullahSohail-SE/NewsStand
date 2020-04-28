

export function setCurrentUser (state,payload) {
  state.currentUser=payload;
}


export function logOutUser (state,payload){
  state.currentUser={};
  localStorage.clear();
  this.$router.replace('/users/signIn');
}

