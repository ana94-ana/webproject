const registerModule = {
    namespaced: true,
    state() {
        return {
            token: null,
            user: null,
            categories:[]
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
        },
        getCategories(state){
            return state.categories
        }

    },
    mutations: {
        SAVE_TOKEN(state, payload) {
            state.token = payload
        },
        SAVE_USER(state, payload) {
            state.user = payload
        },
        USER_REGISTER(state, user) {
            state.user.push(user)

        },
        SAVE_CATEGORIES(state, payload){
            state.categories = payload
        }
    },
    actions: {
        token({ commit }, {user, token}) {
            commit("SAVE_TOKEN", token)
            commit("SAVE_USER", user)
        },
        register({ commit }, getinfo) {
            commit("USER_REGISTER", getinfo)

        },
        getUserInfo({commit}){
            axios.get('/categories').then( response => commit('SAVE_CATEGORIES', response.data.data))
        },
        addCategories({getters, dispatch}, name) {
            axios.post('/categories',
              {
                name,
                type: "product",
              },
              {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer'(getters.token),
                },
              }
            )
            dispatch('getCategories')
          },
          deleteCategory({getters, dispatch}, id) {
           axios.delete('categories'(id),
             {
               headers: {
                 Accept: "application/json",
                 Authorization: 'Bearer'(getters.token) ,
               },
             }
           )
           dispatch('getCategories')
         },
         editCategory({getters, dispatch}, category) {
             axios.put('categories'(category.id),
              {
                name: user.name,
                type: "news",
              },
              {
                headers: {
                  Accept: "application/json",
                  Authorization: 'Bearer'(getters.token),
                },
              }
            )
            dispatch('getCategories')
          },

    },
}



export default registerModule