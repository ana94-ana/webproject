import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import WatchList from '../views/watchlist.vue'
import Movies from '../views/Movies.vue'


const routes= [
    {
        path: '/',
        name: "Home",
        component: Home
    },
    {
        path: '/about',
        name: "About",
        component: About
    },
    {
        path: '/contact',
        name: "Contact",
        component: Contact
    },
    {
        path: '/watchlist',
        name: "WatchList",
        component: WatchList
    },
    {
        path: '/movies',
        name: "Movies",
        component: Movies
    }
]

export default routes

