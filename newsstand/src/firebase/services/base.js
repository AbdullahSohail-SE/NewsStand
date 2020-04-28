import firebase from 'firebase/app'
import  'firebase/auth'
import axios from 'axios'


export const auth = () => {
  return axios.create(
  {
    baseURL:"https://identitytoolkit.googleapis.com/v1",
    params:{
    key:"AIzaSyDhFkzU_XvM_7TPxF05yZaueDElpnvWRWc"
    }
  })
};

export const authSDK = () => {
  return firebase.auth();
}

export const fBInit = (config) => {
  return firebase.initializeApp(config)
}