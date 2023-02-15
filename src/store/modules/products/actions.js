


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
   

}


    export default actions