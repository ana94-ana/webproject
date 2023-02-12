const getters = {

   getProductsObject(state) {
      return state.products
   },
   getCartObject(state) {
      return state.cart
   },
   getactiveMovies(state) {
      return state.activeMovies
   }

}

export default getters