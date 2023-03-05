const userModule = {
    namespaced: true,
    state() {
        return {
            autentificated: null,
            users: [
                {
                    id: 1,
                    name: 'natali',
                    email: 'natali@gmail.com',
                    password: 'natali'
                },
                {
                    id: 2,
                    name: 'nanuka',
                    email: 'nanuka@gmail.com',
                    password: 'nanuka'
                },
                {
                    id: 3,
                    name: 'natali3',
                    email: 'natali3@gmail.com',
                    password: 'natali3'
                }
            ]
        }
    },
    getters: {
        userAutentificated(state) {
            return state.autentificated
        }
    },
    mutations: {
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

    },
    actions: {
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
}
export default userModule