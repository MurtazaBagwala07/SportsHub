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