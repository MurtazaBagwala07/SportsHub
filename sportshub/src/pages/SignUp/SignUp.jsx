import { Flex, Text,Box ,FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { signUp } from '../../slices/authSlice'
import { toastHandler } from '../../utility/utility'

export const SignUp = () => {

  const dispatch =useDispatch();
  const navigate =useNavigate();
  const {token} =useSelector((state)=>state.auth);
  
  const [signUpForm,setSignUpForm] = useState(
    {
      name:'',
      username:'',
      email:'',
      password:'',
    }
  )

  const signUpHandler=()=>{

    if(signUpForm.name===''||signUpForm.username===''||signUpForm.email===''||signUpForm.password===''){
      toastHandler('warn','Enter correct details')
      return
    }
    dispatch(signUp(signUpForm))
    navigate('/signin')
  }

  const changeHandler=(e)=>{
    setSignUpForm({...signUpForm,[e.target.name]:e.target.value})
  }


  return (
    <Flex h='90vh' align="center" justify='center'>
      <Flex boxShadow='dark-lg' gap='1rem' borderRadius='sm' color='text' bg='primary' direction='column' align="center" justify='space-between' p='2rem' border='2px' borderColor='primary' w='25rem' minH='30rem'>
        <Box>
          <Text fontSize='1.5rem' align="center">Sign Up</Text>
        </Box>
        <FormControl>
          <FormLabel>Name :</FormLabel>
          <Input onChange={(e)=>changeHandler(e)} value={signUpForm.name} name='name' placeholder='Enter Your Name' type="text"/>
        </FormControl>
        <FormControl>
          <FormLabel>Username :</FormLabel>
          <Input onChange={(e)=>changeHandler(e)} value={signUpForm.username} name='username' placeholder='Enter Your Username' type="text"/>
        </FormControl>
        <FormControl>
          <FormLabel>Email :</FormLabel>
          <Input onChange={(e)=>changeHandler(e)} value={signUpForm.email} name='email' placeholder='Enter Your Email Address' type="email"/>
        </FormControl>
        <FormControl>
          <FormLabel>Password :</FormLabel>
          <Input onChange={(e)=>changeHandler(e)} value={signUpForm.password} name='password' placeholder='Enter Your Password' type="password"/>
        </FormControl>
        <Button onClick={()=>signUpHandler()} borderRadius='sm' color='primary' w='100%'>Sign Up</Button>
        <Text>Already have an account? <Link to='/signin'><Text as='u'>Sign In</Text></Link></Text>
      </Flex>
      
    </Flex>
  )
}
