import { Flex, Text,Box ,FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const SignIn = () => {
  return (

    <Flex boxShadow='dark-lg' h='90vh' align="center" justify='center'>
      <Flex borderRadius='sm' color='text' bg='primary' direction='column' align="center" justify='space-between' p='2rem' border='2px' borderColor='primary' w='25rem' minH='30rem'>
        <Box>
          <Text fontSize='1.5rem' align="center">Sign In</Text>
        </Box>
        <FormControl>
          <FormLabel>Email:</FormLabel>
          <Input placeholder='Enter Email Address' type="email"/>
        </FormControl>
        <FormControl>
          <FormLabel>Password:</FormLabel>
          <Input placeholder='Enter Your Password' type="password"/>
        </FormControl>
        <Button borderRadius='sm' color='primary' w='100%'>Sign In</Button>
        <Button borderRadius='sm' color='primary' w='100%'>Sign In as a Guest</Button>
        <Text>Dont have an account? <Link to='/signup'><Text as='u'>Sign Up</Text></Link></Text>
      </Flex>
      
    </Flex>
    
  )
}
