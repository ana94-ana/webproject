

const mainModule = {
    namespaced: true,
    state() {
        return {
           menuOn:false
        }
    },
    getters:{
        menuOn(state){
            return state.menuOn
        }
    },
    mutations:{
        TOGLE_MENU(state){
            state.menuOn=!state.menuOn
        }
    },
    actions:{
       togleMenu({commit}) {
        commit('TOGLE_MENU')
       }
    }
    
}

export default mainModule