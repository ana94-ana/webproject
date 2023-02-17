import youtubeModule from '../modules/youtubeModule/'


export default function currencyPlugin(store){
    store.registerModule('youtubeModule', youtubeModule)
}
