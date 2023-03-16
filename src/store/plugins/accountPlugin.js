
import userModule from "../modules/usersModule"
import registerModule from "../modules/usersModule/register"

export default function accountPlugin(store){
    store.registerModule('user', userModule)
    store.registerModule('register', registerModule)

}