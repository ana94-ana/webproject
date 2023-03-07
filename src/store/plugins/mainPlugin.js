import mainModule from '../modules/mainModule/'
import navigationModule from '../modules/navigationModule'
import tagsModule from '../modules/tags'

export default function mainPlugin(store){
    store.registerModule('mainModule', mainModule)
    store.registerModule('sidebar', navigationModule)
    store.registerModule('tags', tagsModule)

}
