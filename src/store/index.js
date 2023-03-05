import { createStore } from 'vuex'
import accountPlugin from './plugins/accountPlugin'
import mainPlugin from './plugins/mainPlugin'
import videosPlugin from './plugins/videosPlugin'
 
const store = createStore({ 
    plugins: [ mainPlugin , videosPlugin, accountPlugin],
})

export default store