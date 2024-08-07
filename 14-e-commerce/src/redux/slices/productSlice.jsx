import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    products: [],
    selectedProduct: {},
    loading: false
}

const BASE_URL = "https://fakestoreapi.com"

export const getAllProducts = createAsyncThunk("product/getAllProducts", async () => {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
})

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        })
        builder.addCase(getAllProducts.rejected, (state) => {
            state.loading = false;
        })
    }
})

export const {} = productSlice.actions

// `getAllProducts` fonksiyonunu yalnızca bir kez dışa aktarın.
export default productSlice.reducer;
