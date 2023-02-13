import buttonsModule from "../modules/products/buttons/"
import productsModule from "../modules/products/indexs"

export default function mainPlugin(store){
    
    store.subscribe((mutation, state) => {

    })

    store.subscribeAction({
        before: (action, state) => {
         
        },
        after: (action, state) => {
         
        }
      })

    store.registerModule('productsModule', productsModule)
    store.registerModule('buttonsModule', buttonsModule)

}