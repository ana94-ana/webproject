
const routes = [
    {
        path: '/',
        name: "Home",
        component: () => import('@/views/Home.vue'),
    },
    {
        path: '/home',
        name: "Homes",
        component: { template: '<div>Homes</div>' },
    },
    {
        path: '/sorts',
        name: "Sorts",
        component: { template: '<div>Sorts</div>' },
    },
    {
        path: '/subscriptions',
        name: "Subscriptions",
        component: { template: '<div>Subscriptions</div>' },
    },
    {
        path: '/library',
        name: "Library",
        component: { template: '<div>Library</div>' },
    },
    {
        path: '/history',
        name: "History",
        component: { template: '<div>History</div>' },
    },
    {
        path: '/yourVideos',
        name: "YourVideos",
        component: { template: '<div>YourVideos</div>' },
    },
    {
        path: '/seeLater',
        name: "SeeLater",
        component: { template: '<div>SeeLater</div>' },
    },
    {
        path: '/likedVideos',
        name: "LikedVideos",
        component: { template: '<div>LikedVideos</div>' },
    },
    {
        path: '/voisesShorts',
        name: "VoisesShorts",
        component: { template: '<div>VoisesShorts</div>' },
    },
    {
        path: '/popularOnes',
        name: "PopularOnes",
        component: { template: '<div>PopularOnes</div>' },
    },
    {
        path: '/music',
        name: "Music",
        component: { template: '<div>Music</div>' },
    },
    {
        path: '/videoGames',
        name: "VideoGames",
        component: { template: '<div>VideoGames</div>' },
    },
    {
        path: '/sports',
        name: "Sports",
        component: { template: '<div>Sports</div>' },
    },


]

export default routes

