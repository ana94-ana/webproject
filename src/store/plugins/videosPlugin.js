import videosModule from '../modules/videosModule'


export default function videosPlugin(store){
    store.registerModule('videos', videosModule)
}