import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    error: null
}

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    },
    extraReducers: (builder) => {
        // async thunk'lar veya diğer slice'lara bağlı ek işlemler buraya eklenebilir
    }
})

export const { setLoading, setError } = appSlice.actions;

export default appSlice.reducer;
