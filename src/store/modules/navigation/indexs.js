const navigationModule = {
    state() {
        return {
            menu:[
                { routeName: 'Youtube', title: 'Youtube '}
              
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