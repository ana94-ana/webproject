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
  
   getCurrencies(state){
      return state.currencies
    },
 

}

export default getters