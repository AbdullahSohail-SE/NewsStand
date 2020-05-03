import Vue from 'vue'
import axios from 'axios'
import {Notify} from 'quasar'

const instance=axios.create({
  baseURL:"http://newsapi.org/v2",
  params:{
    apiKey:"65517718757b4edf826bca9a0d8c5bcf"
  }
});

// instance.interceptors.response.use((config)=>config,error=>{
  
//   if(error.response.status==400)
//   Notify.create({
//     type:"negative",
//     message:"Hello there!"
//   });

// });

Vue.prototype.$axios = instance;

//65517718757b4edf826bca9a0d8c5bcf
//9768e0e22f7e495494ed89aec5a63180

//9e6d606bbd9d48df9f08aeb5a34a6cc2


