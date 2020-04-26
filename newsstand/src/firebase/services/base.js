import firebase from 'firebase/app'
import 'firebase/auth'


export const auth = () => {
  return firebase.auth()
}


export const fBInit = (config) => {
  return firebase.initializeApp(config)
}