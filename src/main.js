import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL=import.meta.env.VITE_BASE_API_URL
axios.defaults.headers['Accept'] = 'Application/json'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
