import { createStore } from 'vuex'
import youtubePlugin from './plugins/youtubePlugin'

const store = createStore({
    plugins: [ youtubePlugin ],
})

export default store