import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { loginService,signUpService } from "../services/services";

const initialState ={
    token: localStorage.getItem('token'),
    user: localStorage.getItem('user'),
}

export const signUp = createAsyncThunk('auth/signUp',async(signUpData,thunkAPI)=>{
    try {
        return await signUpService(signUpData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)   
    }
})

export const login = createAsyncThunk('auth/login',async(loginData,thunkAPI)=>{
    try {
        return await loginService(loginData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        logout:(state)=>{
            state.token=null;
            state.user=null;
        }
    },
    extraReducers:{
        [signUp.fulfilled]:(state,action)=>{
            state.user = action.payload.createdUser;
            state.token = action.payload.encodedToken;
        },
        [login.fulfilled]:(state,action)=>{
            state.user = action.payload.foundUser;
            state.token = action.payload.encodedToken;
        },
    }
})

export const {logout} = authSlice.actions
export const authReducer = authSlice.reducer