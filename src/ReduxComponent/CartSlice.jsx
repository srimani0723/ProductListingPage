import { createSlice } from "@reduxjs/toolkit";

const updateLocalStorage = (state) => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
    localStorage.setItem('cartQuantity', JSON.stringify(state.cartQuantity))
    localStorage.setItem('totalCartPrice', JSON.stringify(state.totalCartPrice))
}

const CartSlice = createSlice({
    name: 'Cartslice',
    initialState: {
        cart: JSON.parse(localStorage.getItem('cart')) || [],
        cartQuantity: JSON.parse(localStorage.getItem('cartQuantity')) || 0,
        totalCartPrice: JSON.parse(localStorage.getItem('totalCartPrice')) || 0,
    },
    reducers: {
        addItemToCart: (state, action) => {

            const reqItem = action.payload

            state.cartQuantity += 1
            state.totalCartPrice += Math.round(reqItem.price)

            const item = state.cart.find(each => each.id === reqItem.id)

            if (item != undefined) {
                state.cart = state.cart.map(each => {
                    if (each.id === reqItem.id) {
                        return { ...reqItem, quantity: each.quantity + 1 }
                    }
                    return each
                })
            } else {
                state.cart = [...state.cart, { ...action.payload, quantity: 1 }]
            }

            updateLocalStorage(state)
        },
        removeAllItems: (state) => {
            state.cart = []
            state.totalCartPrice = 0
            state.cartQuantity = 0
            updateLocalStorage(state)
        },
        removeItemFromCart: (state, action) => {
            const target = action.payload
            const item = state.cart.find(each => each.id === target.id)

            if (item) {
                state.cartQuantity -= item.quantity
                state.totalCartPrice -= item.quantity * Math.round(target.price)

                state.cart = state.cart.filter(each => each.id != target.id)
                updateLocalStorage(state)
            }
        },
        removeEachItemFromCart: (state, action) => {
            const target = action.payload
            const itemIndex = state.cart.findIndex(each => each.id === target.id)

            if (itemIndex !== -1) {
                if (target.quantity < 2) {
                    state.cart.splice(itemIndex, 1)
                } else {
                    state.cart[itemIndex].quantity -= 1
                    state.totalCartPrice -= Math.round(target.price)
                }
                state.cartQuantity -= 1
                updateLocalStorage(state)
            }
        }
    }
})

export default CartSlice