import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { getAllPostsService,createPostService,deletePostService,editPostService,addCommentService,editCommentService,deleteCommentService,likePostService,unlikePostService,addBookmarkService,removeBookmarkService } from "../services/services";

const initialState={
    allPosts:[],
    bookmarks:[],
}

export const getAllPosts= createAsyncThunk('posts/getAllPosts',async(_,ThunkAPI)=>{
    try {
        const response = await getAllPostsService();
        return response.posts
    } catch (error) {
        return ThunkAPI.rejectWithValue(error.response)
    }
})

export const createPost = createAsyncThunk('posts/createPost',async({token,post},ThunkAPI)=>{
    try {
        const response = await createPostService(post,token)
        return response.posts
    } catch (error) {
        return ThunkAPI.rejectWithValue(error.response)
    }
})

export const editPost = createAsyncThunk('posts/editPost',async({postID,postData,token},ThunkAPI)=>{
    try {
        const response = await editPostService(postID,postData,token)
        return response.posts
    } catch (error) {
        return ThunkAPI.rejectWithValue(error.response)
    }
})

export const deletePost = createAsyncThunk('posts/deletePost',async({postID,token},ThunkAPI)=>{
    try {
        const response = await deletePostService(postID,token)
        return response.posts
    } catch (error) {
        return ThunkAPI.rejectWithValue(error.response)
    }
})

export const addBookmark = createAsyncThunk('posts/addBookmark',async({postID,token},ThunkAPI)=>{
    try {
        const response =await addBookmarkService(postID,token)
        return response.bookmarks
    } catch (error) {
        return ThunkAPI.rejectWithValue(error.response)
    }
})

export const removeBookmark = createAsyncThunk('posts/removeBookmark',async({postID,token},ThunkAPI)=>{
    try {
        const response = await removeBookmarkService(postID,token)
        return response.bookmarks
    } catch (error) {
        return ThunkAPI.rejectWithValue(error.response)
    }
})

export const likePost = createAsyncThunk('posts/likePost',async({postID,token},ThunkAPI)=>{
    try {
        const response = await likePostService(postID,token)
        return response.posts
    } catch (error) {
        return ThunkAPI.rejectWithValue(error.response)
    }
})

export const unlikePost = createAsyncThunk('posts/unlikePost',async({postID,token},ThunkAPI)=>{
    try {
        const response = await unlikePostService(postID,token)
        return response.posts
    } catch (error) {
        return ThunkAPI.rejectWithValue(error.response)
    }
})

export const addComment = createAsyncThunk('posts/addComment',async({postID,commentData,token},ThunkAPI)=>{
    try {
        const response = await addCommentService(postID,commentData,token)
        console.log(response)
        return response.data.posts
    } catch (error) {
        return ThunkAPI.rejectWithValue(error.response)
    }
})

export const editComment = createAsyncThunk('posts/editComment',async({postID,commentID,commentData,token},ThunkAPI)=>{
    try {
        const response = await editCommentService(postID,commentID,commentData,token)
        return response.posts
    } catch (error) {
        return ThunkAPI.rejectWithValue(error.response)
    }
})

export const deleteComment = createAsyncThunk('posts/deleteComment',async({postID,commentID,token},ThunkAPI)=>{
    try {
        const response = await deleteCommentService(postID,commentID,token)
        return response.posts
    } catch (error) {
        return ThunkAPI.rejectWithValue(error.response)
    }
})

export const postSlice=createSlice({
    name:'posts',
    initialState,
    reducers:{},
    extraReducers:{
        
        [createPost.fulfilled]:(state,action)=>{
            state.allPosts = action.payload
        },

        [getAllPosts.fulfilled]:(state,action)=>{
            state.allPosts = action.payload
        },

        [editPost.fulfilled]:(state,action)=>{
            state.allPosts= action.payload
        },

        [deletePost.fulfilled]:(state,action)=>{
            state.allPosts = action.payload
        },

        [addBookmark.fulfilled]:(state,action)=>{
            state.bookmarks = action.payload
        },

        [removeBookmark.fulfilled]:(state,action)=>{
            state.bookmarks = action.payload
        },

        [likePost.fulfilled]:(state,action)=>{
            state.allPosts= action.payload
        },

        [unlikePost.fulfilled]:(state,action)=>{
            state.allPosts= action.payload
        },

        // [addComment.fulfilled]:(state,action)=>{
        //     state.allPosts= action.payload
        // },

        // [editComment.fulfilled]:(state,action)=>{
        //     state.allPosts= action.payload
        // },

        // [deleteComment.fulfilled]:(state,action)=>{
        //     state.allPosts= action.payload
        // },
    }
})

export const postReducer = postSlice.reducer;