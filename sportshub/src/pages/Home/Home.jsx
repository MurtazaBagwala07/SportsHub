import React from 'react'
import {Flex,Box,Image,Grid,Heading,Text,Button} from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Grid w='100%' h='90vh' templateColumns='1fr 1fr'>
      <Box>
        <Image h='90vh' w='100%' bg='white' objectFit='cover' src='https://img.bleacherreport.net/img/images/photos/003/700/357/hi-res-c00b9958576618e65e480f7c43bd6385_crop_exact.jpg?w=1200&h=1200&q=75' alt='football'></Image>
      </Box>
      <Flex color='primary' direction='column' w='100%' align='flex-end' py='8rem' px='3rem' h='90vh' gap='2rem'>
        <Heading>SportsHub</Heading>
        <Text textAlign='right' fontSize='1.5rem'>A Social Media App to share thoughts about your favorite sports</Text>
        <Button onClick={()=>navigate('/signin')} bg='primary' color='text' p='0.5rem' fontSize='1.5rem' h='3rem'>Get Started</Button>
      </Flex>
    </Grid>
  )
}
