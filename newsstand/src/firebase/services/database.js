import firebase from 'firebase/app'
import 'firebase/database'


export const realtimeDb=()=>{
  return firebase.database();
}