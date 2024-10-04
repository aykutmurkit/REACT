import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../redux/slices/productSlice'
import appReducer from '../redux/slices/appSlice' // İki nokta eksikti
import authReducer from '../redux/slices/authSlice' // İki nokta eksikti


export const store = configureStore({
    reducer: {
        product: productReducer,
        app: appReducer,
        auth : authReducer
    },
});
