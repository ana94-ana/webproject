

const routes = [
    {
        path: '/',
        name: "Home",
        component: () => import('@/views/Home.vue'),
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
        component: { template: '<div>Sports</div>' }
    },
    {
        path: '/account/:id',
        name: "Account",
        component: () => import('@/views/account/Account.vue'),
        children: [
            {
                path: 'info',
                name: "AccountInfo",
                component:() => import('@/views/account/AccountInfo.vue'),
            },
            {
                path: 'update',
                name: "AccountUpdate",
                component: () => import('@/views/account/AccountUpdate.vue'),
            }

        ]
    },
    {
        path: '/userform',
        name: "UserForm",
        component: () => import('@/components/users/UserForm.vue'),
        children: [
            {
                path: 'register',
                name: "Register",
                component: () => import('@/components/users/Register.vue'),

            },
            {
                path: 'login',
                name: "Login",
                component:() => import('@/components/users/Login.vue'),
            },
            {
                path: 'categories',
                name: "Categories",
                component: () => import('@/views/categories/Categories.vue'),
            }
        ]
    },
    


]

export default routes

