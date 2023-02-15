import currencyModule from "../modules/currencyModule"


export default function currencyPlugin(store){
    store.registerModule('currencyModule', currencyModule)
}