import { createStore } from 'vuex'
import mainPlugin from './plugins/mainPlugin'

const store = createStore({
    plugins: [ mainPlugin ],
})

export default store