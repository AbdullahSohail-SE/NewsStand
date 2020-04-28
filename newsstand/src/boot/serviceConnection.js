import firebaseService from '../firebase/services'


export default async ({Vue}) => {

  const firebaseConfig = {
    apiKey: "AIzaSyDhFkzU_XvM_7TPxF05yZaueDElpnvWRWc",
    authDomain: "newsstand-656d8.firebaseapp.com",
    databaseURL: "https://newsstand-656d8.firebaseio.com",
    projectId: "newsstand-656d8",
    storageBucket: "newsstand-656d8.appspot.com",
    messagingSenderId: "965499167446",
    appId: "1:965499167446:web:87557fb32440e62c9c9f77",
    measurementId: "G-6FX4S1LW8E"
  };



  firebaseService.fBInit(firebaseConfig);

  Vue.prototype.$firebaseAuth=firebaseService.auth();
  Vue.prototype.$firebaseAuthSDK=firebaseService.authSDK;
  Vue.prototype.$firebaseDb=firebaseService.realtimeDb();
  Vue.prototype.$firebaseDbREST=firebaseService.realtimeDbREST();

}