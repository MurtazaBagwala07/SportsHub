import { Flex, Grid } from '@chakra-ui/react'
import {InputPost, Post} from '../../components'
import React from 'react'

export const Feed = () => {
  return (
    <Flex h='90vh' mx='8rem' py='1rem'>
        <Grid templateColumns='4fr 2fr' w='100vw' gap='5rem' columns={2}>
            <Flex gap='2rem' direction='column' align='center'>
                <InputPost/>
                <Post/>
            </Flex>
            <Flex>Suggestion Box</Flex>
        </Grid>
    </Flex>
  )
}
