const getters = {

   getProductsObject(state) {
      return state.products
   },
   getCartObject(state) {
      return state.cart
   },
   getactiveMovie(state) {
      return state.activeMovie
   },
  
    getSearch(state){
      return state.srch
    }
 
}

export default getters