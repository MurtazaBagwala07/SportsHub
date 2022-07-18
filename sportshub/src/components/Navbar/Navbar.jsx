import React from 'react'
import { Box, Button, ButtonGroup, Flex, Spacer,Avatar, Text} from '@chakra-ui/react'
import { Link,useLocation } from 'react-router-dom'
import { FaCompass,FaBookmark } from 'react-icons/fa';

export const Navbar = () => {
    const {pathname} =useLocation()
  return (
    <Flex boxShadow='md' align="center" justify="center" w='100%' height='10vh' color='text' bg='primary' px={10} py={5}>
        <Box >
            <Text fontSize='2rem' >SportsHub</Text>
        </Box>
        <Spacer/>
        {
            pathname!=='/signin' && pathname!=='/signup' && 
            <ButtonGroup color='primary'>
            <Button>
                <Link to='/'>
                    <FaCompass/>
                </Link>
            </Button>
            <Button>
                <Link to='/'>
                    <FaBookmark/>
                </Link>
            </Button>
            <Button>
                <Link to='/'>
                    <Avatar name='User' size='sm'/>
                </Link>
            </Button>
        </ButtonGroup>
        }
    </Flex>
  )
}
