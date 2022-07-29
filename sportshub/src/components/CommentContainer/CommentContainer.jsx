import { Button, Flex, Input,Text } from '@chakra-ui/react'
import React,{useState,useEffect} from 'react'
import {Comment} from '../index'
import {useDispatch,useSelector} from 'react-redux'
import {getUserPost} from '../../slices/profileSlice'
import { addComment,getAllPosts } from '../../slices/postSlice'
import {toastHandler} from '../../utility/utility'



export const CommentContainer = ({post}) => {

    const dispatch = useDispatch();
    const {token} = useSelector((store)=>store.auth)
    const [commentAdded,setCommentAdded] = useState(false)
    const [commentInput,setCommentInput] = useState('')

    

  return (
    <Flex direction="column" w='100%' gap='0.5rem'>
        <Flex w='100%' gap='0.5rem'>
            <Input onChange={(e)=>setCommentInput(e.target.value)} value={commentInput}/>
            <Button disabled={commentInput.trim()===''} onClick={()=>{
                dispatch(addComment({postID:post._id , commentData:{text:commentInput,postID:post._id},token }))
                toastHandler('success','Comment added successfully')
                dispatch(getAllPosts())
                setCommentInput('')
            }}>ADD</Button>
        </Flex>
        {post?.comments?.map((comment)=>(
            <Comment key={comment._id} comment={comment}/>
        ))}
    </Flex>
  )
}
