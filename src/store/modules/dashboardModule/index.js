import axios from "axios"
const DashboardModule={
    namespaced: true,
    state() {
        return {
            users: []
        }
    },
    getters:{
        getUsers(state){
          return state.users
        }
     },
     mutations:{
      STORE_USERS(state,payload){
          state.users=payload
      }
     },
     actions:{
      getUserInfo(context){
          axios.get(import.meta.env.USER_API_URL).then( response => context.commit('STORE_USERS', response.data[0].users))
      }
     }

    }
    
export default DashboardModule