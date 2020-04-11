import Vue from 'vue'
import axios from 'axios'

const instance=axios.create({
  baseURL:"http://newsapi.org/v2",
  params:{
    apiKey:"2483f43df60e4446ae7a45dff8257c76"
  }
});

Vue.prototype.$axios = instance;
