import { Avatar, Box, Button, ButtonGroup, Flex, Heading,Text,Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton, Input } from '@chakra-ui/react'
import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useParams,useLocation,useNavigate} from 'react-router-dom'
import {logout} from '../../slices/authSlice'
import {getUser,getUserPost,follow,unfollow} from '../../slices/profileSlice'
import {editProfileData} from '../../slices/profileSlice'
import { openPostModal,openCommentModal,openProfileModal,closePostModal,closeCommentModal,closeProfileModal,setCommentModalData,setPostModalData,setProfileModalData } from '../../slices/utilitySlice'
import {Post} from '../../components'


export const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const username = useParams();
  const userID = location?.state._id
  const {userProfile,userPosts} = useSelector((store)=>store.profile)
  const {user,token} = useSelector((store)=>store.auth)
  const {postModalState,postModalData,profileModalData,profileModalState,setProfileModalData} = useSelector((store)=>store.utilities)
  const [editProfile,setEditProfile] = useState()


  

  useEffect(() => {
      dispatch(getUser(user._id))
  }, [userID])

  useEffect(() => {
      dispatch(getUserPost(username))
  }, [userProfile])


  const editProfileHandler =()=>{
    dispatch(openProfileModal())
    setEditProfile(userProfile) 
  }

  const updateProfileHandler =()=>{
    dispatch(editProfileData({token,userData: editProfile}))
    dispatch(closeProfileModal())
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
              <Button>Logout</Button>
            </ButtonGroup>
          }
            {userID!==user?._id &&
              <ButtonGroup ml='auto'>
              <Button>Follow</Button>
            </ButtonGroup>}
          </Flex>
          <Box>@{userProfile.username}</Box>
          <Box>Favourite Sport : {userProfile.fav_Sport}</Box>
          <Box>Favourite Athlete :  {userProfile.fav_Athlete}</Box>
          <Flex fontSize='1.5rem' w='100%' gap='6rem' direction='row' justify='flex-start' align='center' >
            <Text>{userPosts.length} Posts</Text>
            <Text>4 Following</Text>
            <Text>6 Followers</Text>
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
    </>
  )
}
