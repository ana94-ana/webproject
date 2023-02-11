import { createStore } from 'vuex'
import productsModule from './modules/products/indexs'
import buttonsModule from './modules/products/buttons'




const store = createStore({
    modules: [ productsModule, buttonsModule ]
})

export default store