import { createStore } from 'vuex'
import mainPlugin from './plugins/mainPlugin'
import menuPlugin from './plugins/menuPlugin'
import currencyPlugin from './plugins/currencyPlugin'

const store = createStore({
    plugins: [ mainPlugin, menuPlugin, currencyPlugin ],
})

export default store