import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    sessionID: "",
    loading: false
};

const username = "demo";
const password = "123456";
const BASE_URL = "http://10.3.26.28:49152/api/user/login";

// Kullanıcı adı ve şifreyi Base64 formatına dönüştürme
const basicAuthHeader = `Basic ${btoa(`${username}:${password}`)}`;

// `createAsyncThunk` ile login işlemi
export const login = createAsyncThunk("product/getAllProducts", async () => {
    const response = await axios.get(`${BASE_URL}`, {
        headers: {
            "Authorization": basicAuthHeader // Basic Auth header'ı
        }
    });
    
    console.log(response.data);
    return response.data;
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setSessionID: (state, action) => {
            state.sessionID = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.sessionID = action.payload; // Session ID'yi state'e kaydediyoruz
        });
        builder.addCase(login.rejected, (state) => {
            state.loading = false;
        });
    }
});

export const { setSessionID } = authSlice.actions;

export default authSlice.reducer;
