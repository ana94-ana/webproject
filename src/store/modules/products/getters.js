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
   getCurrency(state){
      return state.env
   },
  

}

export default getters