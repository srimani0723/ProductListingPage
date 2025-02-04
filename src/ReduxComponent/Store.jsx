import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./LoginSlice";
import HeaderSlice from "./HeaderSlice";
import ProductsSlice from "./ProductsSlice";
import CartSlice from "./CartSlice";

const Store = configureStore({
    reducer: {
        LoginState: LoginSlice.reducer,
        HeaderState: HeaderSlice.reducer,
        productsState: ProductsSlice.reducer,
        CartState: CartSlice.reducer,
    },
})

export default Store