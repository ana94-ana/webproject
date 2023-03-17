const registerModule = {
  namespaced: true,
  state() {
    return {
      token: null,
      user: null,
    }
  },
  getters: {
    getInfo(state) {
      return state.user
    },
    token(state) {
      return state.token
    },
    getUserAvatar(state, getters) {
      return getters.getInfo ? state.user.avatar : null;
    },
    getUserName(state, getters) {
      return getters.getInfo ? state.user.name : null;
    },
    getEmail(state, getters) {
      return getters.getInfo ? state.user.email : null;
    },
  },

  mutations: {
    replaceToken(state, val) {
      state.token = val
    },
    SAVE_TOKEN(state, payload) {
      state.token = payload
    },
    SAVE_USER(state, payload) {
      state.user = payload
    },
  },


  actions: {
    token({ commit }, { user, token }) {
      commit("SAVE_TOKEN", token)
      commit("SAVE_USER", user)
      localStorage.setItem("token", JSON.stringify(token))
      localStorage.setItem("user", JSON.stringify(user))
    },

  }
}

export default registerModule