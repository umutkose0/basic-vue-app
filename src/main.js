import { createApp } from 'vue'
import Home from './views/Home.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as Tone from "tone"
const app=createApp(Home);

app.use(VueAxios,axios)

const axiosClient = axios.create({
    baseURL: 'https://jsonplaceholder.ir/',
  });
  app.config.globalProperties.http=axiosClient;


  
  app.config.globalProperties.Tone=Tone;

app.mount('#home')
