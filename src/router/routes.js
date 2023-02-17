


const routes = [
    {
        path: '/',
        name: "Home",
        component: () => import('@/views/Home.vue'),
    },
    {
        path: '/about',
        name: "About",
        component: () => import('@/views/About.vue'),
    },
    {
        path: '/contact',
        name: "Contact",
        component: () => import('@/views/Contact.vue'),
    },
    {
        path: '/watchlist',
        name: "WatchList",
        component: () => import('@/views/watchlist.vue'),

    },
    {
        path: '/movies',
        name: "Movies",
        component: () => import('@/views/Movies.vue'),

    },
    {
        path: '/movie/:id',
        name: "Movie",
        component: () => import('@/components/menus/DisplayMovies.vue')
    },
    {
        path: '/currency',
        name: "Currency",
        component: () => import('@/views/Currency.vue'),
    },
    {
        path: '/youtube',
        name: "Youtube",
        component: () => import('@/views/Youtube.vue'),
    }
]

export default routes

