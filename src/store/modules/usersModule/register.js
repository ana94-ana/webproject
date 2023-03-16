import axios from "axios"

const registerModule = {
    namespaced: true,
    state() {
      return {
          token: null,
          user: null,
          categories: [],
      }
  },
  getters: {
      getInfo(state){
          return state.user
      },
      token(state) {
          return state.token
      },
      getCategories(state) {
          return state.categories
      }
  }, 

  mutations: {
      SAVE_TOKEN(state, payload) {
          state.token = payload
      },
      SAVE_USER(state, payload){
          state.user = payload
      },
      SAVE_CATEGORIES(state, categories) {
          state.categories = categories
      }
  },


  actions: {
      token({ commit }, {user, token}) {
          commit("SAVE_TOKEN", token)
          commit("SAVE_USER", user)
          localStorage.setItem("token", JSON.stringify(token))
      },
      async getCategories({commit}) {
          const res = await axios.get(`/categories`).catch(e => console.log(e));
            if (res.data.success) {
              commit("SAVE_CATEGORIES", res.data.data);
            }
      },
      async addCategory({getters, dispatch}, name) {
          await axios.post(
            `/categories`,
            {
              name,
              type: "news",
            },
            {
              headers: {
                Accept: "application/json",
                  Authorization: `Bearer ${getters.token}`,
              },
            }
          ).catch(e => console.log(e));
          dispatch('getCategories');
        },
        async deleteCategory({getters, dispatch}, id) {
           await axios.delete(
            `/categories/${id}`,
            {
              headers: {
                Accept: "application/json",
                Authorization: `Bearer ${getters.token}`,
              },
            }
          ).catch(e => console.log(e));
          dispatch('getCategories');
        },
        async editCategory({getters, dispatch}, category) {
          await axios.put(
            `/categories/${category.id}`,
            {
              name: category.name,
              type: "news",
            },
            {
              headers: {
                Accept: "application/json",
                Authorization: `Bearer ${getters.token}`,
              },
            }
          ).catch(e => console.log(e));
          dispatch('getCategories');
          console.log('getCategories')
        },
        
  }
}

export default registerModule