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

export const addCommentService=async(postID,commentData,token)=>{
    console.log(postID,commentData,token)
    try {
        const response = await axios.post(
            `/api/comments/add/${postID}`,
            { commentData },
            { headers: { authorization: token } }
        );
        if(response.status===200||response.status===201){
            console.log(response.data)
            return response
        }
    } catch (error) {
        console.error(error)
    }
}

export const editCommentService=async(postID,commentID,commentData,token)=>{
    try {
        const response = await axios.post(`/api/comments/edit/${postID}/${commentID}`,{
            commentData,
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

export const deleteCommentService =async(postID,commentID,token)=>{
    
    try {
        const response= await axios.post(
            `/api/comments/delete/${postID}/${commentID}`,
            {},
            { headers: { authorization: token } }
        );
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

export const addBookmarkService=async(postID,token)=>{
    try {
        const response = await axios.post(`/api/users/bookmark/${postID}`,{},{
            headers:{
                authorization:token,
            }
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const removeBookmarkService=async(postID,token)=>{
    try {
        const response = await axios.post(`/api/users/remove-bookmark/${postID}`,{},{
            headers:{
                authorization:token,
            }
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getUserService=async(userID)=>{
    try {
        const response = await axios.get(`/api/users/${userID}`)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const getUserPostsService=async(username)=>{
    try {
        const response = await axios.get(`/api/posts/user/${username}`);
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const followUserService=async(userID,token)=>{
    try {
        const response = await axios.post(`/api/users/follow/${userID}`,{},{ 
            headers: { authorization: token } 
        })
            return response.data
    } catch (error) {
        console.error(error)
    }
}

export const unfollowUserService=async(userID,token)=>{
    try {
        const response = await axios.post(`/api/users/unfollow/${userID}`,{},{
            headers:{
                authorization:token,
            }
        })
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const editProfileService=async(token,userData)=>{
    try {
        const response = await axios.post(`/api/users/edit`,{userData},{
          headers:{
            authorization:token
          }  
        })
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const getAllUsersService=async()=>{
    try {
        const response = await axios.get("/api/users");
        return response.data
    } catch (error) {
        console.error(error)
    }
}