
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


