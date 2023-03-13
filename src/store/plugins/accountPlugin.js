import DashboardModule from "../modules/dashboardModule"
import userModule from "../modules/usersModule"
import categoriesModule from "../modules/usersModule/categories"
import registerModule from "../modules/usersModule/register"

export default function accountPlugin(store){
    store.registerModule('user', userModule)
    store.registerModule('users', DashboardModule)
    store.registerModule('register', registerModule)
    store.registerModule('categories', categoriesModule)
}