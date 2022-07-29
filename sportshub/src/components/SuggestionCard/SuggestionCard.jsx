import { Avatar, Button, Flex,Text,Box } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import {follow} from '../../slices/profileSlice'
import {toastHandler} from '../../utility/utility'

export const SuggestionCard = ({userSuggestion}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const {token} = useSelector((state)=>state.auth)

  return (
    <Flex gap='1rem' justify='flex-start' align='center' p='0.25rem'>
        <Avatar cursor='pointer' onClick={()=>navigate(`/user/${userSuggestion?.username}`, { replace: true, state: { _id: userSuggestion?._id } })} size='sm' name={userSuggestion?.name}/>
        <Flex direction='column' align='flex-start' justify='center'>
            <Box fontSize='1rem'>{userSuggestion?.name}</Box>
            <Box fontSize='0.75rem'>@{userSuggestion?.username}</Box>
        </Flex>
        <Button onClick={()=>{dispatch(follow({token,userID:userSuggestion._id})); toastHandler('success', 'User Followed')}} ml='auto'>Follow</Button>
    </Flex>
  )
}
