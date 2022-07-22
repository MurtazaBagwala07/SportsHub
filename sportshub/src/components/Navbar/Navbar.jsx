import React from 'react'
import { Box, Button, ButtonGroup, Flex, Spacer,Avatar, Text} from '@chakra-ui/react'
import { Link,useLocation,useNavigate } from 'react-router-dom'
import { FaCompass,FaBookmark } from 'react-icons/fa';
import {useSelector,useDispatch} from 'react-redux'

export const Navbar = () => {
    const {pathname} =useLocation();
    const dispatch = useDispatch();
    const {user} = useSelector((store) => store.auth)
    const navigate = useNavigate();
  return (
    <Flex boxShadow='md' align="center" justify="center" w='100%' height='10vh' color='text' bg='primary' px={10} py={5}>
        <Box cursor='pointer' onClick={()=>navigate('/userfeed')}>
            <Text fontSize='2rem'>SportsHub</Text>
        </Box>
        <Spacer/>
        {
            pathname!=='/signin' && pathname!=='/signup' && 
            <ButtonGroup color='primary'>
            <Button>
                <Link to='/explore'>
                    <FaCompass/>
                </Link>
            </Button>
            <Button>
                <Link to='/bookmarks'>
                    <FaBookmark/>
                </Link>
            </Button>
            <Button onClick={()=>{
                navigate(`/user/${user?.username}`, { replace: true, state: { _id: user?._id } })
            }}>
                    <Avatar name={user?.name} size='sm'/>
            </Button>
        </ButtonGroup>
        }
    </Flex>
  )
}
