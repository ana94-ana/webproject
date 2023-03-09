import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'

var user_url=import.meta.env.VITE_USER_API_URL
var register_url=user_url + 'auth/register'
var login_url=user_url + 'auth/login'

let res= await axios.post(login_url,{
    email:'abramishvili2@gmail.com',
    password:'password'
})
console.log(res.data)
createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
