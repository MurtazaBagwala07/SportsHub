import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import {getUserService , getAllUsersService ,getUserPostsService , followUserService, unfollowUserService ,editProfileService} from '../services/services'

const initialState={
    userPosts:[],
    allUsers : [],
    userProfile:{},
}

export const getUser = createAsyncThunk(
    "profile/getUser",
    async (userID, ThunkAPI) => {
        try {
            const response = await getUserService(userID);
            return response;
        } catch (error) {
            return ThunkAPI.rejectWithValue(error.response);
        }
    }
);

export const getAllUsers = createAsyncThunk(
    "profile/getAllUsers",
    async (_, ThunkAPI) => {
        try {
            const response = await getAllUsersService();
            return response;
        } catch (error) {
            return ThunkAPI.rejectWithValue(error.response.data);
        }
    }
);
export const getUserPost = createAsyncThunk('profile/getUserPost',
    async ({ username }, ThunkAPI) => {
        try {
            const response = await getUserPostsService(username);
            return response
        }
        catch (error) {
            return ThunkAPI.rejectWithValue(error.response.data)
        }
    })


export const follow = createAsyncThunk('profile/follow',
    async ({ userID, token }, ThunkAPI) => {
        try {
            const response = await followUserService(userID, token);
            return response
        }
        catch (error) {
            return ThunkAPI.rejectWithValue(error.response.data)
        }
    })

export const unfollow = createAsyncThunk('profile/unfollow',
    async ({ userID, token }, ThunkAPI) => {
        try {
            const response = await unfollowUserService(userID, token);
            return response
        }
        catch (error) {
            return ThunkAPI.rejectWithValue(error.response.data)
        }
    })

export const editProfileData = createAsyncThunk('profile/editUser',
    async ({ token, userData }, ThunkAPI) => {
        try {
            const response = await editProfileService(token, userData);
            return response
        }
        catch (error) {
            return ThunkAPI.rejectWithValue(error.response.data)
        }
    });

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        reset: (state) => {
            state.userProfile = null;
        },
    },
    extraReducers: {
        [getUser.fulfilled]: (state, action) => {
            state.userProfile = action.payload.user
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.allUsers = action.payload.users
        },
        [getUserPost.fulfilled]: (state, action) => {
            state.userPosts = action.payload.posts
        },
        [follow.fulfilled]: (state, action) => {
            state.allUsers = state.allUsers.map((currUser) =>
                currUser.username === action.payload.user.username ? action.payload.user : currUser
            );
            state.allUsers = state.allUsers.map((currUser) =>
                currUser.username === action.payload.followUser.username ? action.payload.followUser : currUser
            );
            state.userProfile = action.payload.followUser
        },
        [unfollow.fulfilled]: (state, action) => {
            state.allUsers = state.allUsers.map((currUser) =>
                currUser.username === action.payload.user.username ? action.payload.user : currUser
            );
            state.allUsers = state.allUsers.map((currUser) =>
                currUser.username === action.payload.followUser.username ? action.payload.followUser : currUser
            );
            state.userProfile = action.payload.followUser
        },
        [editProfileData.fulfilled]: (state, action) => {
            state.allUsers = state.allUsers.map((currUser) =>
                currUser.username === action.payload.user.username ? action.payload.user : currUser
            );
            state.userProfile = action.payload.user
        }
    }
})
export const profileReducer = profileSlice.reducer
export const { reset } = profileSlice.actions