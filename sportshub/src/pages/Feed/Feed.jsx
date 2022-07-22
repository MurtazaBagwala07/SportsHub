import { Flex, Grid,Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,Button, Input,Box } from '@chakra-ui/react'
import {InputPost, Post, SuggestionCard} from '../../components'
import React,{useState,useEffect} from 'react'
import {openPostModal,closePostModal,setPostModalData} from '../../slices/utilitySlice'
import {useSelector,useDispatch} from 'react-redux'
import { editPost,getAllPosts } from '../../slices/postSlice'
import {getAllUsers} from '../../slices/profileSlice'
import {isFollowing} from '../../utility/utility'


export const Feed = () => {
  const dispatch = useDispatch();
  const {postModalState,postModalData} = useSelector((store)=>store.utilities)
  const {allPosts} = useSelector((store)=>store.posts)
  const {allUsers} = useSelector((store)=>store.profile)
  const {token,user} = useSelector((store)=>store.auth)
  const [editPostContent,setEditPostContent] = useState(postModalData)

  const editPostHandler=()=>{
    dispatch((editPost({postID:postModalData._id,postData:editPostContent,token})))
    dispatch(closePostModal())
  }

  useEffect(()=>{
    setEditPostContent(postModalData)
  },[postModalData])

  useEffect(() => {
      dispatch(getAllUsers());
      dispatch(getAllPosts())
  },[])
  const loggedInUser = allUsers.find((userData) => userData?.username === user?.username)
  const feedPosts = allPosts?.filter((postData) => (postData?.username === user?.username) || isFollowing(loggedInUser?.following, postData.username))
  const suggestedUsers = allUsers?.filter((currUser) => (currUser._id !== user?._id) && !isFollowing(currUser?.followers, user?.username))
  const postsForFeed = feedPosts.reverse() 

  return (
    <Flex h='90vh' mx='8rem' py='1rem'>
        <Grid templateColumns='4fr 2fr' w='100vw' gap='5rem' columns={2}>
            <Flex gap='2rem' direction='column' align='center'>
                <InputPost/>
                {
                  postsForFeed.map((post)=>(
                    <Post post={post} key={post._id}/>
                  ))
                  }
            </Flex>
            <Flex w='80%' direction='column' gap='0.5rem' align='flex-start' justify='flex-start' borderColor='primary' p='0.5rem'>
                <Box textAlign='left' w='100%' fontSize='1.5rem'>Suggested Users</Box>
                <Flex w='100%' direction='column' >
                  {suggestedUsers.map((user)=>(
                    <SuggestionCard key={user._id} userSuggestion={user}/>
                  ))}
                </Flex>
            </Flex>
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
