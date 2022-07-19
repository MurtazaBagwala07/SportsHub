import { Flex,Avatar,Box, ButtonGroup,Button } from '@chakra-ui/react'
import {FaHeart ,FaRegHeart,FaBookmark,FaRegBookmark,FaRegCommentAlt } from 'react-icons/fa';

import React from 'react'

export const Post = () => {
  return (
    <Flex w='34rem' minH='12rem' p='0.5rem' border='1px' borderColor='primary' direction='column' align="flex-start" justify='space-between'> 
        <Flex direction='row' align='flex-start' justify='center' gap='0.5rem'>
            <Avatar size='md' name='Dan Abrahmov' src='' />
            <Flex align='flex-start' justify='center' fontSize='0.8rem' direction='column'>
                <Box>Dan Abrahmov</Box> 
                <Box>@Dannn</Box>
            </Flex>
        </Flex>
        <Box>This is my first post</Box>
        <Flex>
            <ButtonGroup>
                <Button><FaRegHeart/></Button>
                <Button><FaRegCommentAlt/></Button> 
                <Button><FaRegBookmark/></Button>
            </ButtonGroup>
        </Flex>
    </Flex>
  )
}
