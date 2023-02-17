import axios from "axios"


const actions={  

    getCurrenciesInfoNBG(context,payload){
        axios.get(import.meta.env.VITE_API_URL).then( response => context.commit('STORE_CURRENCIES', response.data[0].currencies))
    }, 

   
}


    export default actions