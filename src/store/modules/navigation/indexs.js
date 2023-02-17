const navigationModule = {
    state() {
        return {
            menu:[
                { routeName: 'Home', title: 'Main Page' },
                { routeName: 'About', title: 'About Us'},
                { routeName: 'Contact', title: 'Contact Us'},
                { routeName: 'Movies', title: 'Movies' },
                { routeName: 'WatchList', title: 'Watch List'},
                { routeName: 'Currency', title: 'Currencies '},
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