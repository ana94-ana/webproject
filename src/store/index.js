import { createStore } from 'vuex'
import mainPlugin from './plugins/mainPlugin'
import menuPlugin from './plugins/menuPlugin'
import currencyPlugin from './plugins/currencyPlugin'
import youtubePlugin from './plugins/youtubePlugin'

const store = createStore({
    plugins: [ mainPlugin, menuPlugin, currencyPlugin, youtubePlugin ],
})

export default store