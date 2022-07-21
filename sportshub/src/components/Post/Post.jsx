import { Flex,Avatar,Box, ButtonGroup,Button } from '@chakra-ui/react'
import {FaHeart ,FaRegHeart,FaBookmark,FaRegBookmark,FaRegCommentAlt,FaEllipsisV } from 'react-icons/fa';
import React,{useState} from 'react'
import {openPostModal,closePostModal,setPostModalData} from '../../slices/utilitySlice'
import {deletePost,likePost,unlikePost,addBookmark,removeBookmark} from '../../slices/postSlice'
import {useSelector,useDispatch} from 'react-redux'

export const Post = ({post}) => {

    const [optionModal,setOptionModal] = useState(false)
    const dispatch = useDispatch();
    const {token,user} = useSelector((store)=>store.auth)
    const {bookmarks} = useSelector((store)=>store.posts)

    const isLiked = post?.likes?.likedBy?.some((likeby) => likeby.username === user.username)
    const isBookmarked = bookmarks?.some((ele)=>ele._id===post._id)
    
    const editHandler=()=>{
        dispatch(openPostModal())
        dispatch(setPostModalData(post))
        setOptionModal(false)
    }

    const deleteHandler=()=>{
        dispatch(deletePost({postID:post._id,token}))
    }

  return (
    <Flex position='relative' w='34rem' minH='12rem' p='0.5rem' border='1px' borderColor='primary' direction='column' align="flex-start" justify='space-between'> 
        <Flex w='100%' direction='row' align='center' justify='space-between'>
        <Flex direction='row' align='flex-start' justify='center' gap='0.5rem'>
            <Avatar size='md' name={post.name} src='' />
            <Flex align='flex-start' justify='center' fontSize='0.8rem' direction='column'>
                <Box>{post.name}</Box> 
                <Box>@{post.username}</Box>
            </Flex>
        </Flex>
        <Button onClick={()=>setOptionModal(!optionModal)}><FaEllipsisV/></Button>
        </Flex>
        <Box>{post.content}</Box>
        <Flex>
            <ButtonGroup>

                {!isLiked &&
                    <Button onClick={()=>dispatch(likePost({postID:post._id,token}))} ><FaRegHeart/></Button>
                }
                {isLiked &&
                    <Button onClick={()=>dispatch(unlikePost({postID:post._id,token}))}><FaHeart/></Button>
                }

                <Button><FaRegCommentAlt/></Button> 

                {!isBookmarked &&
                    <Button onClick={()=>dispatch(addBookmark({postID:post._id,token}))}><FaRegBookmark/></Button>
                }
                {isBookmarked &&
                    <Button onClick={()=>dispatch(removeBookmark({postID:post._id,token}))}><FaBookmark/></Button>
                }

                
            </ButtonGroup>
        </Flex>
        {optionModal &&
            <Flex direction='column' align='flex-start' p='0.25rem' gap='0.5rem' justify='center' bg='primary' color='text' top='2rem' right='3rem' w='8rem' height='4rem' position='absolute'>
                <Box onClick={()=>editHandler()} cursor='pointer'>Edit</Box>
                <Box onClick={()=>deleteHandler()} cursor='pointer'>Delete</Box>
            </Flex>
        }
    </Flex>
  )
}
