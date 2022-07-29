import { Flex, Text,Box ,FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
import React,{useState,useEffect} from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import {login} from '../../slices/authSlice'
import {useDispatch,useSelector} from 'react-redux'
import {toastHandler} from '../../utility/utility'

export const SignIn = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {token} = useSelector((state)=>state.auth)

  const [loginForm,setLoginForm] = useState({
    username:'',
    password:'',
  })

  const loginHandler=()=>{

    if(loginForm.username===''||loginForm.password===''){
      toastHandler('warn','Enter correct details')
    }else{
      dispatch(login(loginForm))
    }

  }

  useEffect(()=>{
    if(token){
      navigate('/userfeed')
      toastHandler('success','Logged In Successfully')
    }
  },[token])

  const guestLoginHandler=()=>{
    dispatch(login({username:'sergioR',password:'sergioRamos'}))
  }



  return (

    <Flex boxShadow='dark-lg' h='90vh' align="center" justify='center'>
      <Flex borderRadius='sm' color='text' bg='primary' direction='column' align="center" justify='space-between' p='2rem' border='2px' borderColor='primary' w='25rem' minH='30rem'>
        <Box>
          <Text fontSize='1.5rem' align="center">Sign In</Text>
        </Box>
        <FormControl>
          <FormLabel>Username:</FormLabel>
          <Input onChange={(e)=>setLoginForm({...loginForm,username:e.target.value})} value={loginForm.username} placeholder='Enter Your Username' type="text"/>
        </FormControl>
        <FormControl>
          <FormLabel>Password:</FormLabel>
          <Input onChange={(e)=>setLoginForm({...loginForm,password:e.target.value})} value={loginForm.password} placeholder='Enter Your Password' type="password"/>
        </FormControl>
        <Button onClick={()=>loginHandler()} borderRadius='sm' color='primary' w='100%'>Sign In</Button>
        <Button onClick={()=>guestLoginHandler()} borderRadius='sm' color='primary' w='100%'>Sign In as a Guest</Button>
        <Text>Dont have an account? <Link to='/signup'><Text as='u'>Sign Up</Text></Link></Text>
      </Flex>
      
    </Flex>
    
  )
}
