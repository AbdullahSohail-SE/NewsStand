import Vue from 'vue'
import axios from 'axios'
import {Notify} from 'quasar'

const instance=axios.create({
  baseURL:"http://newsapi.org/v2",
  params:{
    apiKey:"65517718757b4edf826bca9a0d8c5bcf"
  }
});

// indicates if error has occured
let err=false;

instance.interceptors.response.use(response=>response,response=>{

  if(err) return;

  if(response.response.status == 429){
    err=true;
    
  Notify.create({
    type:"negative",
    message:
    `!Oops it looks like i have exausted my Api Limit Cap :( ! Contact Me To Let Me Know!  abdullahsohailofficial123@gmail.com`,
    progress:true,
    icon:"fas fa-exclamation-circle",
    position:"center",
    timeout:"5000",
    multiLine:true
  });
  }
  
 

 setTimeout(() => {
  window.localStorage.clear();
  window.location.reload();
 }, 5000);
  
})


Vue.prototype.$axios = instance;

//65517718757b4edf826bca9a0d8c5bcf
//9768e0e22f7e495494ed89aec5a63180

//9e6d606bbd9d48df9f08aeb5a34a6cc2


