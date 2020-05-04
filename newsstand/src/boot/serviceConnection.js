import firebaseService from '../firebase/services'


export default async ({Vue}) => {


  Vue.prototype.$firebaseAuth=firebaseService.auth();
  Vue.prototype.$firebaseDbREST=firebaseService.realtimeDbREST();

}