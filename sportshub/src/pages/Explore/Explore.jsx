import { Flex } from '@chakra-ui/react'
import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Post } from '../../components'
import {getAllPosts} from '../../slices/postSlice'

export const Explore = () => {

    const dispatch = useDispatch();
    const {user} = useSelector((store)=>store.auth)
    const {allPosts} = useSelector((store)=>store.posts)

    const explorePosts = allPosts?.filter((post) => post.username!==user?.username)

    console.log(explorePosts)

    useEffect(() =>{
        dispatch(getAllPosts())
    },[])
    
  return (
    <Flex minH='90vh' mx='8rem' py='3rem' mb='2rem' justify='center' align='flex-start' >
        <Flex direction='column' gap='1rem'>
        {explorePosts.map((post)=>(
            <Post key={post._id} post={post}/>
        ))}
        </Flex>
    </Flex>
  )
}
