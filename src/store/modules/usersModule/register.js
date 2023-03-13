const registerModule = {
    namespaced: true,
    state() {
        return {
            token: null,
            user: []
        }
    },
    getters: {
        getinfo(state) {
            return state.user
        },
        getApiUrl: (state) => {
            return import.meta.env.VITE_USER_API_URL
        },
        token(state) {
            return state.token
        }

    },
    mutations: {
        TOKEN(state, payload) {
            state.token = payload
        },
        USER_REGISTER(state, user) {
            state.user.push(user)

        }
    },
    actions: {
        token({ commit }, token) {
            commit("TOKEN", token)
        },
        register({ commit }, getinfo) {
            commit("USER_REGISTER", getinfo)


        }
    },
}



export default registerModule