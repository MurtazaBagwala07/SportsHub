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

export const createPostService=async(post,token)=>{
    try {
        const response = await axios.post('/api/posts',{
            post
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

export const deletePostService=async(post,token)=>{
    try {
        const response = await axios.delete(`/api/posts/${post._id}`,{
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

export const editPostService=async(postId,post,token)=>{
    try {
        const response = await axios.post(`/api/posts/edit/${postId}`,{
            post
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

export const likePostService=async(postId,token)=>{
    try {
        const response= await axios.post(`/api/posts/like/${postId}`,{},{
            headers:{
                authorization:token,
            }
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const unlikePostService=async(postId,token)=>{
    try {
        const response = await axios.post(`/api/posts/dislike/${postId}`,{},{
            headers:{
                authorization:token,
            }
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const addBookmark=async(postId,token)=>{
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

export const removeBookmark=async(postId,token)=>{
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