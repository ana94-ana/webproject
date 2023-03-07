const mutations = {
    UPDATE_SEARCH_VIDEO(state, payload) {
        payload = (payload == "") ? null : payload
        state.searchVideo = payload
    }
}
export default mutations