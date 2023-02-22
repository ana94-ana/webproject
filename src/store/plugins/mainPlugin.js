import mainModule from '../modules/mainModule/'


export default function mainPlugin(store){
    store.registerModule('mainModule', mainModule)
}
