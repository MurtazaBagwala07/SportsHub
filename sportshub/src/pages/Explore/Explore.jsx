import { Flex,Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,Button,Input } from '@chakra-ui/react'
import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Post } from '../../components'
import {closeCommentModal} from '../../slices/utilitySlice'
import { getAllPosts,editComment } from '../../slices/postSlice'

export const Explore = () => {

    const dispatch = useDispatch();
    const {commentModalState,commentModalData} = useSelector((store)=>store.utilities)
    const {user,token} = useSelector((store)=>store.auth)
    const {allPosts} = useSelector((store)=>store.posts)

    const explorePosts = allPosts?.filter((post) => post.username!==user?.username)

    const [editCommentContent,setEditCommentContent] = useState(commentModalData)

  
    const editCommentHandler=()=>{
      dispatch(editComment({ postID: editCommentContent.postID, commentID: editCommentContent._id, commentData: editCommentContent, token }))
      dispatch(getAllPosts())
      dispatch(closeCommentModal())
    }
  
    useEffect(()=>{
      setEditCommentContent(commentModalData)
    },[commentModalData])

    useEffect(() =>{
        dispatch(getAllPosts())
    },[])

    

  return (
    <Flex minH='90vh' direction='column' mx='8rem' gap='2rem' py='3rem' mb='2rem' justify='flex-start' align='center' >
        <Flex fontSize='2rem' justify='center' width='100%'>{explorePosts?.length>0?'Explore':'No Posts to Explore'}</Flex>
        <Flex direction='column' gap='2rem'>
        {explorePosts?.map((post)=>(
            <Post key={post._id} post={post}/>
        ))}
        </Flex>

      <Modal isOpen={commentModalState} onClose={()=>dispatch(closeCommentModal())}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Comment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input onChange={(e)=>setEditCommentContent({...commentModalData,text:e.target.value})} value={editCommentContent?.text}></Input>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' onClick={()=>editCommentHandler()} mr={3} >
              Update
            </Button>
            <Button variant='ghost' onClick={()=>dispatch(closeCommentModal())}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </Flex>
  )
}
