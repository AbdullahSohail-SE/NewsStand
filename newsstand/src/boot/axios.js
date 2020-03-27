import Vue from 'vue'
import axios from 'axios'

const instance=axios.create({
  baseURL:"http://newsapi.org/v2",
  params:{
    apiKey:"65517718757b4edf826bca9a0d8c5bcf"
  }
});

Vue.prototype.$axios = instance;
