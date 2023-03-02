import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import customPlugin from '../plugins/custom'


createApp(App)
    .use(store)
    .use(router)
    .use(customPlugin)
    .mount('#app')
