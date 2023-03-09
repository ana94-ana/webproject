import DashboardModule from "../modules/dashboardModule"
import userModule from "../modules/usersModule"

export default function accountPlugin(store){
    store.registerModule('user', userModule)
    store.registerModule('users', DashboardModule)
}