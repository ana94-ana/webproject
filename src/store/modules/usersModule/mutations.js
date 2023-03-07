const mutations={
    AUTENTIFICATE(state, payload) {
        let user = state.user.find(value => value.email === payload.email && value.password === payload.password)
        if (user) {
            state.autentificated = user
        }

    },
    REGISTER_USER(state, payload) {
        state.user.push(payload)
    },
    UPDATE_USER(state, payload) {
        state.users.find(user => state.autentificated.id === user.id).name = payload.name
        state.users.find(user => state.autentificated.id === user.id).email = payload.email
        state.users.find(user => state.autentificated.id === user.id).password = payload.password
    }

}
export default mutations