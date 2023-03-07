const actions={
    autentificate({ commit }, payload) {
        commit('AUTENTIFICATE', payload)
    },
    registration({ commit }, payload) {
        commit('REGISTER_USER', payload)
        commit('AUTENTIFICATE', payload)
    },
    updateUser({ commit }, payload) {
        commit('UPDATE_USER', payload)
    }
}
export default actions