import axios from "axios"


const actions={
    addItemToCart({commit}, payload) {
        setTimeout(()=>{
          commit('ADD_AITEM_TO_CART', payload)
    },100)   
        },
       
    removeItemFromCart({commit} ,payload) {
        commit('REMOVE_ITEM_TO_CART', payload)
    },
    getRecordById({commit},payload){
        commit('GET_MOVIE_BY_ID',payload)
       
    },
    getCurrenciesInfoNBG(context,payload){
        axios.get(import.meta.env.VITE_API_URL).then( response => context.commit('STORE_CURRENCIES', response.data[0].currencies))
    }
   

}


    export default actions