const navigationModule = {
    state() {
        return {
            menu:[
                { routeName: 'Home', title: 'Home '}
              
              ]
        }
    },
    getters: {
        topNavigationMenu(state) {
            return state.menu
        }
    }
}

export default navigationModule