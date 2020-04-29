import firebase from 'firebase/app'
import 'firebase/database'
import axios from 'axios'


export const realtimeDb=()=>{
  return firebase.database();
}

export const realtimeDbREST=()=>{
  return axios.create(
    {
      baseURL:"https://newsstand-656d8.firebaseio.com/"
    })
}