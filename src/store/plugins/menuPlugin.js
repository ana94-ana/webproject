import navigationModule from "../modules/navigation/indexs"

export default function menuPlugin(store){
    store.registerModule("navigationModule", navigationModule)
}