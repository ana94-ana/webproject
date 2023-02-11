const mutations={
    
        ADD_AITEM_TO_CART(state, payload) {
            let product = state.products.data.find(item => item.id == payload)
            state.products.data.splice(state.products.data.indexOf(product), 1)
            state.cart.data.push(product)

        },
        REMOVE_ITEM_TO_CART(state, payload) {
            let product = state.cart.data.find(item => item.id == payload)
            state.cart.data.splice(state.cart.data.indexOf(product), 1)
            state.products.data.push(product)
        },
    }

    export default mutations