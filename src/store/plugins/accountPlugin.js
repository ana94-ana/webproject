
import categoriesModule from "../modules/categoriesModule"
import userModule from "../modules/usersModule"
import registerModule from "../modules/usersModule/register"

export default function accountPlugin(store){
    store.registerModule('user', userModule)
    store.registerModule('register', registerModule)
    store.registerModule('categories', categoriesModule)

}