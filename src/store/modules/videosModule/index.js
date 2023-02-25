const videosModule = {
    namespaced: true,
    state() {
        return {
            videos: [
                {
                    image:'',
                    url:'',
                    name:""
                
                },
              
            ]
        }
    },
    getters: {
        getVideos(state) {
            return state.videos
        },
    }

}

export default videosModule