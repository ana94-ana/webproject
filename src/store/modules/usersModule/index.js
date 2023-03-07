import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

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
    getters,
    mutations,
    actions,
}
export default userModule