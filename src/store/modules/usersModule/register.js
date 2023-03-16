const registerModule = {
    namespaced: true,
    state() {
      return {
          token: null,
          user: null,
      }
  },
  getters: {
      getInfo(state){
          return state.user
      },
      token(state) {
          return state.token
      },
  }, 

  mutations: {
      SAVE_TOKEN(state, payload) {
          state.token = payload
      },
      SAVE_USER(state, payload){
          state.user = payload
      },
  },


  actions: {
      token({ commit }, {user, token}) {
          commit("SAVE_TOKEN", token)
          commit("SAVE_USER", user)
          localStorage.setItem("token", JSON.stringify(token))
      }
        
  }
}

export default registerModule