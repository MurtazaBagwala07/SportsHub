import { Avatar, Button, Flex,Text } from '@chakra-ui/react'
import {FaEllipsisV } from 'react-icons/fa';
import {useSelector,useDispatch} from 'react-redux'
import React,{useState} from 'react'
import {openCommentModal,setCommentModalData} from '../../slices/utilitySlice'
import { deleteComment,getAllPosts } from '../../slices/postSlice';

export const Comment = ({comment}) => {

    const dispatch = useDispatch();
    const [commentOptionModal,setCommentOptionModal] = useState(false)
    const {user,token} = useSelector((store)=>store.auth)

  return (
    <Flex position="relative">
    <Flex w='100%' gap='0.5rem' justify='center' align='center'>
        <Avatar size='sm' name={comment.name}/>
        <Flex grow='1' align='center' >
            <Flex direction='column' justify='center' align='flex-start'>
                <Text fontSize='0.8rem'>{comment.name} @{comment.username}</Text>
                <Text fontSize='1rem'>{comment.text}</Text>
            </Flex>
            
            { comment.username === user.username &&
                <Button onClick={()=>setCommentOptionModal(!commentOptionModal)} ml='auto'><FaEllipsisV/></Button>
            }
        </Flex>
    </Flex>
    { commentOptionModal && 
        <Flex zIndex='99' direction='column' position='absolute' top='2rem' right='2rem' w='6rem' h='4rem' cursor='pointer' bg='primary' color='text' justify='center' align='flex-start' p='0.5rem'>
            <Flex onClick={()=>{
                dispatch(openCommentModal())
                dispatch(setCommentModalData(comment))
                setCommentOptionModal(false)
            }}>Edit</Flex>
            
            <Flex onClick={()=>{
                dispatch(deleteComment({postID:comment.postID,commentID: comment._id,token}))
                setCommentOptionModal(false)
                dispatch(getAllPosts())
            }}>Delete</Flex>
        </Flex>
    }
    </Flex>
  )
}
