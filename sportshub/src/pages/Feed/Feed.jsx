import { Flex, Grid,Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,Button, Input,Box } from '@chakra-ui/react'
import {InputPost, Post, SuggestionCard} from '../../components'
import React,{useState,useEffect} from 'react'
import {openPostModal,closePostModal,setPostModalData,openCommentModal,closeCommentModal,setCommentModalData} from '../../slices/utilitySlice'
import {useSelector,useDispatch} from 'react-redux'
import { editPost,getAllPosts,editComment } from '../../slices/postSlice'
import {getAllUsers} from '../../slices/profileSlice'
import {isFollowing,toastHandler} from '../../utility/utility'


export const Feed = () => {
  const dispatch = useDispatch();
  const {postModalState,postModalData,commentModalState,commentModalData} = useSelector((store)=>store.utilities)
  const {allPosts} = useSelector((store)=>store.posts)
  const {allUsers} = useSelector((store)=>store.profile)
  const {token,user} = useSelector((store)=>store.auth)
  const [editPostContent,setEditPostContent] = useState(postModalData)
  const [editCommentContent,setEditCommentContent] = useState(commentModalData)

  const editPostHandler=()=>{
    toastHandler('success','Post Edited Successfully')
    dispatch((editPost({postID:postModalData._id,postData:editPostContent,token})))
    dispatch(closePostModal())
  }

  const editCommentHandler=()=>{
    toastHandler('success','Comment Edited Successfully')
    dispatch(editComment({ postID: editCommentContent.postID, commentID: editCommentContent._id, commentData: editCommentContent, token }))
    dispatch(getAllPosts())
    dispatch(closeCommentModal())
  }

  useEffect(()=>{
    setEditPostContent(postModalData)
    setEditCommentContent(commentModalData)
  },[postModalData,commentModalData])


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
                <Flex direction='column' justify='center' align='flex-start' gap='2rem'>{
                 postsForFeed?.length>0? postsForFeed.map((post)=>(
                    <Post post={post} key={post._id}/>
                  )):<Box fontSize='2rem'>Post something to get started</Box>
                  }</Flex>
                
            </Flex>
            <Flex w='80%' direction='column' gap='0.5rem' align='flex-start' justify='flex-start' borderColor='primary' p='0.5rem'>
                <Box textAlign='left' w='100%' fontSize='1.5rem'>{suggestedUsers?.length>0?'Suggested Users':'No Suggestion Available'}</Box>
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
          <ModalHeader>Edit Post</ModalHeader>
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
