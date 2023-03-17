import axios from "axios"

const categoriesModule={
    namespaced: true,
    state() {
      return {
          categories: [],
      }
  },
  getters: {
      getCategories(state) {
          return state.categories
      }
  }, 

  mutations: {
      SAVE_CATEGORIES(state, categories) {
          state.categories = categories
      }
  },


  actions: {
      async getCategories({commit}) {
          const res = await axios.get(`categories`).catch(e => console.log(e));
            if (res.data.success) {
              commit("SAVE_CATEGORIES", res.data.data);
            }
      },
      async addCategory({dispatch}, name) {
          await axios.post(
            `/categories`,
            {
              name,
              type: "news",
            },
            
          ).catch(e => console.log(e));
          dispatch('getCategories');
        },
        async deleteCategory({dispatch}, id) {
           await axios.delete(
            `/categories/${id}`,
            
          ).catch(e => console.log(e));
          dispatch('getCategories');
        },
        async editCategory({dispatch}, category) {
          await axios.put(
            `/categories/${category.id}`,
            {
              name: category.name,
              type: "news",
            },
            
          ).catch(e => console.log(e));
          dispatch('getCategories')
        },
        
  }
}

export default categoriesModule