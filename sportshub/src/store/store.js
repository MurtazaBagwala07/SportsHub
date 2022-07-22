import {configureStore} from '@reduxjs/toolkit'
import {authReducer} from '../slices/authSlice'
import { postReducer } from '../slices/postSlice'
import { utilityReducer } from '../slices/utilitySlice'
import { profileReducer } from '../slices/profileSlice'

export const store= configureStore({
    reducer:{
        auth : authReducer,
        posts : postReducer,
        utilities : utilityReducer,
        profile: profileReducer,
    }
})