import getters from "../products/getters"
import mutations from "../products/mutations"
import actions from "../products/actions"
import axios from "axios"

const currencyModule={
    state() {
        return {
            currencies:[]
    
}
    }, 
   getters:{
      getCurrencies(state){
        return state.currencies
      }
   },
   mutations:{
    STORE_CURRENCIES(state,payload){
        state.currencies=payload
    }
   },
   actions:{
    getCurrenciesInfoNBG(context,payload){
        axios.get(import.meta.env.VITE_API_URL).then( response => context.commit('STORE_CURRENCIES', response.data[0].currencies))
    }
   }

}



export default currencyModule