import { Flex, Grid,Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,Button, Input } from '@chakra-ui/react'
import {InputPost, Post} from '../../components'
import React,{useState,useEffect} from 'react'
import {openPostModal,closePostModal,setPostModalData} from '../../slices/utilitySlice'
import {useSelector,useDispatch} from 'react-redux'
import { editPost } from '../../slices/postSlice'



export const Feed = () => {
  const dispatch = useDispatch();
  const {postModalState,postModalData} = useSelector((store)=>store.utilities)
  const {allPosts} = useSelector((store)=>store.posts)
  const {token} = useSelector((store)=>store.auth)
  const [editPostContent,setEditPostContent] = useState(postModalData)

  const editPostHandler=()=>{
    dispatch((editPost({postID:postModalData._id,postData:editPostContent,token})))
    dispatch(closePostModal())
  }

  useEffect(()=>{
    setEditPostContent(postModalData)
  },[postModalData])


  
  return (
    <Flex h='90vh' mx='8rem' py='1rem'>
        <Grid templateColumns='4fr 2fr' w='100vw' gap='5rem' columns={2}>
            <Flex gap='2rem' direction='column' align='center'>
                <InputPost/>
                {
                  allPosts.map((post)=>(
                    <Post post={post} key={post._id}/>
                  ))
                  }
            </Flex>
            <Flex>Suggestion Box</Flex>
        </Grid>
        
        <Modal isOpen={postModalState} onClose={()=>dispatch(closePostModal())}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input onChange={(e)=>setEditPostContent({...postModalData,content:e.target.value})} value={editPostContent?.content}></Input>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' onClick={()=>editPostHandler()} mr={3} >
              Update
            </Button>
            <Button variant='ghost' onClick={()=>dispatch(closePostModal())}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  )
}
