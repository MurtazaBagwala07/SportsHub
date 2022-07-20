import axios from 'axios'

export const loginService=async(userLogin)=>{
    try {
        const response = await axios.post('/api/auth/login',userLogin)
        if(response.status===200||response.status===201){
            localStorage.setItem('token',response.data.encodedToken)
            localStorage.setItem('user',JSON.stringify(response.data.foundUser))
            return response.data;
        }
    } catch (error) {
        console.error(error)
    }
}

export const signUpService=async(userSignUp)=>{
    try {
        const response = await axios.post('/api/auth/signup',userSignUp)
        if(response.status===200||response.status===201){
            localStorage.setItem('token',response.data.encodedToken)
            localStorage.setItem('user',JSON.stringify(response.data.createdUser))
            return response.data;
        }
    } catch (error) {
        console.error(error)   
    }
}

export const getAllPostsService=async()=>{
    try {
        const response = await axios.get('/api/posts')
        if(response.status===200||response.status===201){
            return response.data
        }
    } catch (error) {
        console.error(error)
    }
}

export const createPostService=async(postData,token)=>{
    try {
        const response = await axios.post('/api/posts',{
            postData
        },{
            headers:{
                authorization:token
            }
        })
        if(response.status===200||response.status===201){
            return response.data
        }
    } catch (error) {
        console.error(error)
    }
}

export const deletePostService=async(postID,token)=>{
    try {
        const response = await axios.delete(`/api/posts/${postID}`,{
            headers:{
                authorization:token,
            }
        })
        if(response.status===200||response.status===201){
            return response.data
        }
    } catch (error) {
        console.error(error)
    }
}

export const editPostService=async(postID,postData,token)=>{
    try {
        const response = await axios.post(`/api/posts/edit/${postID}`,{
            postData
        },{
            headers:{
                authorization:token,
            }
        })
        if (response.status===200||response.status===201){
            return response.data
        }
    } catch (error) {
        console.error(error)
    }
}

export const addCommentService=async(postId,comment,token)=>{
    try {
        const response = await axios.post(`/api/comments/add/${postId}`,{
            comment
        },{
            headers:{
                authorization:token,
            }
        })
        if(response.status===200||response.status===201){
            return response.data
        }
    } catch (error) {
        console.error(error)
    }
}

export const editCommentService=async(postId,commentId,comment,token)=>{
    try {
        const response = await axios.post(`/api/comments/edit/${postId}/${commentId}`,{
            comment,
        },{
            headers:{
                authorization:token,
            }
        })
        if(response.status===200||response.status===201){
            return response.data
        }
    } catch (error) {
        console.error(error)
    }
}

export const deleteCommentService =async(postId,commentId,token)=>{
    try {
        const response= await axios.delete(`/api/comments/delete/${postId}/${commentId}`,{
            headers:{
                authorization:token,
            }
        })
        if(response.status===200||response.status){
            return response.data
        }
    } catch (error) {
        console.log(error)
    }
}

export const likePostService=async(postID,token)=>{
    try {
        const response= await axios.post(`/api/posts/like/${postID}`,{},{
            headers:{
                authorization:token,
            }
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const unlikePostService=async(postID,token)=>{
    try {
        const response = await axios.post(`/api/posts/dislike/${postID}`,{},{
            headers:{
                authorization:token,
            }
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const addBookmarkService=async(postId,token)=>{
    try {
        const response = await axios.post(`/api/users/bookmark/${postId}`,{},{
            headers:{
                authorization:token,
            }
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const removeBookmarkService=async(postId,token)=>{
    try {
        const response = await axios.post(`/api/users/remove-bookmark/${postId}`,{},{
            headers:{
                authorization:token,
            }
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}