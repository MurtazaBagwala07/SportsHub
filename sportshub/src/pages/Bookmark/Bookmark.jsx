import React from 'react'
import {Flex} from '@chakra-ui/react'
import {useSelector,useDispatch} from 'react-redux'
import {Post} from '../../components'

export const Bookmark = () => {
  const {bookmarks} =useSelector((store)=>store.posts)
  return (
    <Flex w='100%' minH='90vh'>
      <Flex w='100%' gap='2rem' direction='column' align='center' justify='center'>
        {bookmarks?.map((bookmark)=>(
          <Post key={bookmark._id} post={bookmark}/>
        ))}
      </Flex>
    </Flex>
  )
}
