import { Flex, Text,Box ,FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const SignUp = () => {
  return (
    <Flex h='90vh' align="center" justify='center'>
      <Flex boxShadow='dark-lg' gap='1rem' borderRadius='sm' color='text' bg='primary' direction='column' align="center" justify='space-between' p='2rem' border='2px' borderColor='primary' w='25rem' minH='30rem'>
        <Box>
          <Text fontSize='1.5rem' align="center">Sign Up</Text>
        </Box>
        <FormControl>
          <FormLabel>Name :</FormLabel>
          <Input placeholder='Enter Your Name' type="text"/>
        </FormControl>
        <FormControl>
          <FormLabel>Username :</FormLabel>
          <Input placeholder='Enter Your Username' type="text"/>
        </FormControl>
        <FormControl>
          <FormLabel>Email :</FormLabel>
          <Input placeholder='Enter Your Email Address' type="email"/>
        </FormControl>
        <FormControl>
          <FormLabel>Password :</FormLabel>
          <Input placeholder='Enter Your Password' type="password"/>
        </FormControl>
        <Button borderRadius='sm' color='primary' w='100%'>Sign Up</Button>
        <Text>Already have an account? <Link to='/signin'><Text as='u'>Sign In</Text></Link></Text>
      </Flex>
      
    </Flex>
  )
}
