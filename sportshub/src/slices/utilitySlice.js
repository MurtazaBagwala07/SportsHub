import {createSlice} from '@reduxjs/toolkit'

const initialState={
    postModalState : false,
    postModalData : null,
    commentModalState : false,
    commentModalData : null,
    profileModalState : false,
    profileModalData : null,
}

export const utilitySlice = createSlice({
    name:'utility',
    initialState,
    reducers:{
        openPostModal:(state,action)=>{
            state.postModalState = true;
        },
        closePostModal:(state,action)=>{
            state.postModalState = false;
        },
        setPostModalData:(state,action)=>{
            state.postModalData = action.payload
        },
        openCommentModal:(state,action)=>{
            state.commentModalState = true;
        },
        closeCommentModal:(state,action)=>{
            state.commentModalState= false
        },
        setCommentModalData:(state,action)=>{
            state.commentModalData= action.payload
        },
        openProfileModal:(state,action)=>{
            state.profileModalState= true
        },
        closeProfileModal:(state,action)=>{
            state.profileModalState= false
        },
        setProfileModalData:(state,action)=>{
            state.profileModalData= action.payload
        }
        
    },
})


export const {openPostModal,openCommentModal,openProfileModal,closePostModal,closeCommentModal,closeProfileModal,setCommentModalData,setPostModalData,setProfileModalData} = utilitySlice.actions
export const utilityReducer = utilitySlice.reducer