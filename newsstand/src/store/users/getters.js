

export function getCurrentUserToken (state) {
  return state.currentUser ? state.currentUser.idToken : null;
}
export function getCurrentUser (state) {
  return state.currentUser;
}


