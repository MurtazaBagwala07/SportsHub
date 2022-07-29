import { Avatar, Box, Button, ButtonGroup, Flex, Heading,Text,Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton, Input } from '@chakra-ui/react'
import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useParams,useLocation,useNavigate} from 'react-router-dom'
import {logout} from '../../slices/authSlice'
import {getUser,getUserPost,follow,unfollow,editProfileData} from '../../slices/profileSlice'
import { editPost,getAllPosts,editComment } from '../../slices/postSlice'
import { openPostModal,openCommentModal,openProfileModal,closePostModal,closeCommentModal,closeProfileModal,setCommentModalData,setPostModalData,setProfileModalData } from '../../slices/utilitySlice'
import {Post} from '../../components'
import {isFollowing} from '../../utility/utility'


export const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const username = useParams();
  const userID = location?.state._id
  const {userProfile,userPosts} = useSelector((store)=>store.profile)
  const {user,token} = useSelector((store)=>store.auth)
  const {postModalState,postModalData,profileModalData,profileModalState,setProfileModalData,commentModalState,commentModalData} = useSelector((store)=>store.utilities)
  const [editProfile,setEditProfile] = useState();
  const [editPostContent,setEditPostContent] = useState(postModalData)
  const [editCommentContent,setEditCommentContent] = useState(commentModalData)



  useEffect(() => {
      dispatch(getUser(userID))
  }, [userID])

  useEffect(() => {
      dispatch(getUserPost(username))
  }, [userProfile])

  const editPostHandler=()=>{
    dispatch((editPost({postID:postModalData._id,postData:editPostContent,token})))
    dispatch(closePostModal())
  }

  const editCommentHandler=()=>{
    dispatch(editComment({ postID: editCommentContent.postID, commentID: editCommentContent._id, commentData: editCommentContent, token }))
    dispatch(getAllPosts())
    dispatch(closeCommentModal())
  }

  useEffect(()=>{
    setEditPostContent(postModalData)
    setEditCommentContent(commentModalData)
  },[postModalData,commentModalData])

  const editProfileHandler =()=>{
    dispatch(openProfileModal())
    setEditProfile(userProfile) 
  }

  const updateProfileHandler =()=>{
    dispatch(editProfileData({token,userData: editProfile}))
    dispatch(closeProfileModal())
  }

  const logoutHandler =()=>{
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    dispatch(logout())
    navigate('/')
  }



  return (
    <>
    <Flex direction='column' gap='5rem' mx='20rem' minH='84vh' my='1rem' py='1rem'>
      <Flex gap='2rem' justify='center' align='center'  h='14rem' w='100%' boxShadow='dark-lg' color='primary' py='1rem' px='3rem'>
        <Avatar w='10rem' h='10rem' name={userProfile.name}/>
        <Flex color='primary' direction='column' align='flex-start' gap='0.5rem' grow='1'  w='100%'>
          <Flex h='100%' w='100%'>
            <Heading mr='auto'>{userProfile.name}</Heading>
           { userID===user._id &&
            <ButtonGroup ml='auto'>
              <Button onClick={()=>editProfileHandler()}>Edit Profile</Button>
              <Button onClick={()=>logoutHandler()}>Logout</Button>
            </ButtonGroup>
          }
            {userID!==user?._id &&
              <ButtonGroup ml='auto'>
              {!isFollowing(userProfile?.followers,user?.username)?
              (<Button onClick={()=>dispatch(follow({token, userID: userProfile?._id}))}>Follow</Button>) :
              (<Button onClick={()=>dispatch(unfollow({token, userID: userProfile?._id}))}>Unfollow</Button>) 
            }
            </ButtonGroup>}
          </Flex>
          <Box>@{userProfile.username}</Box>
          <Box>Favourite Sport : {userProfile?.fav_Sport}</Box>
          <Box>Favourite Athlete :  {userProfile?.fav_Athlete}</Box>
          <Flex fontSize='1.5rem' w='100%' gap='6rem' direction='row' justify='flex-start' align='center' >
            <Text>{userPosts.length} Posts</Text>
            <Text>{userProfile?.following?.length} Following</Text>
            <Text>{userProfile?.followers?.length} Followers</Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex direction='column' align='center' gap='2rem' justify='center' w='100%' py='1rem' px='3rem' >
              {userPosts.map((post)=>(
                <Post key={post._id} post={post}/>
              ))}
      </Flex>
    </Flex>


      <Modal isOpen={profileModalState} onClose={()=>dispatch(closeProfileModal())}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Name : {editProfile?.name}</Text>
            <Text>Username : {editProfile?.username}</Text>
            <Text>Favourite Sport<Input onChange={(e)=>setEditProfile({...editProfile,fav_Sport:e.target.value})} value={editProfile?.fav_Sport}></Input></Text>
            <Text>Favourite Athlete<Input onChange={(e)=>setEditProfile({...editProfile,fav_Athlete:e.target.value})} value={editProfile?.fav_Athlete}></Input></Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={()=>updateProfileHandler()} colorScheme='blue'  mr={3} >
              Update
            </Button>
            <Button variant='ghost' onClick={()=>dispatch(closeProfileModal())}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

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
    </>
  )
}
