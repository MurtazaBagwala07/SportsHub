import {configureStore} from '@reduxjs/toolkit'
import {authReducer} from '../slices/authSlice'
import { postReducer } from '../slices/postSlice'
import { utilityReducer } from '../slices/utilitySlice'

export const store= configureStore({
    reducer:{
        auth : authReducer,
        posts : postReducer,
        utilities : utilityReducer
    }
})