import { Notify } from 'quasar'

export function logInUser ({commit,dispatch},payload) {
  
  return this._vm.$firebaseAuth.post('/accounts:signInWithPassword',null, {
        params: {
          email:payload.email,
          password:payload.password
        }})
        .then(resp=>{
          dispatch('tokenExpireLogout',3600);
          return this._vm.$firebaseDbREST.get('Users/'+ resp.data.localId+'.json')
        })
        .then(resp=>{
          commit('setCurrentUser',resp.data);
          dispatch('syncNotifications');
          dispatch('pushLocalStorage',{ data:resp.data, expiresIn:3600});
          dispatch('syncData');
          this._vm.$emit("logInPending",true);
          this.$router.push('/');
        })
        .catch(err=>{
          if(err.response.data.error.message=="INVALID_PASSWORD")
          Notify.create({
                color:"negative",
                message:"Incorrect Password!",
                icon:"lock"
            });
          if(err.response.data.error.message=="EMAIL_NOT_FOUND")
          Notify.create({
            color:"negative",
            message:"Invalid Email!",
            icon:"mail"
              });
        })
        
  
}
export function syncNotifications({state,commit}){
  if (state.currentUser == null || state.currentUser == undefined)
  return;
  const source=new EventSource('https://newsstand-656d8.firebaseio.com/Notifications/'+ state.currentUser.userId +'.json');
  source.addEventListener("put", function (e) {
    const parsedResponse=JSON.parse(e.data);
    if(parsedResponse.path=="/")
    commit('setNotifications',parsedResponse.data);
    else if(parsedResponse.data==null)
    commit('deleteNotification',parsedResponse);
    else
    commit('addNotification',parsedResponse);
  }, false);
}

export function pushLocalStorage(context,payload){
  const now=new Date();
  const expirationDate=new Date(now.getTime() + payload.expiresIn * 1000);
  const stringifiedData=JSON.stringify(payload.data);
  localStorage.setItem('data',stringifiedData);
  localStorage.setItem('expirationDate',expirationDate);
}
export function autoLogin(context,payload){
  const data=JSON.parse(localStorage.getItem('data'));
  if(!data){
    return;
  }
  const expirationDate=localStorage.getItem('expirationDate');
  const now=new Date();
  if (now >= expirationDate){
    return;
  }
  // const expirationTime=new Date(expirationDate).getMilliseconds()-now.getMilliseconds();
  // console.log('expiration time: '+expirationTime);
  context.commit('setCurrentUser',data);
  // context.dispatch('tokenExpireLogout',expirationTime);
}

export function logOut({ commit }){

  commit('clearReadingList');
  commit('clearNotifications');
  commit('clearIndex');
  commit('logOutUser');
}

export function tokenExpireLogout({commit},payload){
  setTimeout(() => {
    commit('logOutUser');
  }, payload * 1000 );
}

export function signUpUser({commit,dispatch},payload){
  this._vm.$firebaseAuth.post('/accounts:signUp',null,{
    params:{
      email:payload.email,
      password:payload.password
    }
  })
  .then(result=>{
    const userData={
      idToken:result.data.idToken,
      userId:result.data.localId,
      displayName:payload.displayName,
      email:result.data.email
    }
    commit('setCurrentUser',userData);
    dispatch('storeUserInDb',userData);
    dispatch('pushLocalStorage',{ data:userData, expiresIn:3600});
    this.$router.push('/');
  });
}
export function storeUserInDb(context,payload){

  this._vm.$firebaseDbREST.patch('Users/'+[payload.userId]+'.json',payload)
  
}