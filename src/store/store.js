import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice'
import cartSlice from './cartSlice'
import addressSlice from './addressSlice'

const store = configureStore({
    reducer : {
        auth : authSlice,
        cart: cartSlice,
        address: addressSlice,
    }
})

export default store