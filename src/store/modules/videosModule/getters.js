const getters={
    getVideos(state) {
        return state.videos
    },
    getSearch(state) {


        if (state.searchVideo !== null) {
            return state.videos.filter(video => video.name.toLowerCase().includes(state.searchVideo.toLowerCase()))
        }
        else {
            return state.videos
        }
    }
}
export default getters