import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    users:[],
    loading : false
}

export const getAllUsers = createAsyncThunk('users', async()=>{
    
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(response.data);
    return response.data;
})

export const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        //http isteği olmazsa kullanlır. olursa extrareducer kullanlıyor.
    },
    extraReducers : (builder) => {

    }
})

export const { } = userSlice.actions 
export default userSlice.reducer