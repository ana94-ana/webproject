import userModule from "../modules/usersModule"

export default function accountPlugin(store){
    store.registerModule('users', userModule)
}