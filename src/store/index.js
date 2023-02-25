import { createStore } from 'vuex'
import mainPlugin from './plugins/mainPlugin'
import videosPlugin from './plugins/videosPlugin'

const store = createStore({
    plugins: [ mainPlugin , videosPlugin],
})

export default store