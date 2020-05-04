
import axios from 'axios'




export const realtimeDbREST=()=>{
  return axios.create(
    {
      baseURL:"https://newsstand-656d8.firebaseio.com/"
    })
}