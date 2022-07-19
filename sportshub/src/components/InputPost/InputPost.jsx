import { Button, Flex, Textarea } from '@chakra-ui/react'
import React,{useState} from 'react'

export const InputPost = () => {

    const [postText,setPostText] = useState('')
    const [btnDisabled,setBtnDisabled] = useState(true)


    const changeHandler=(e)=>{
        if(e.target.value.trim() !== ''){
            setBtnDisabled(false)
        }
        else{
            setBtnDisabled(true)
        }
        setPostText(e.target.value)
    }

  return (
    <Flex gap='0.5rem' w='40rem' p='0.5rem' h='15rem' direction='column' border='1px' borderColor='primary'>
        <Textarea onChange={(e)=>changeHandler(e)} name='postText' value={postText} resize='none' h='12rem' outline='none' border='none' placeholder='Whats Happening..?'>
        </Textarea>
        <Button disabled={btnDisabled} bg='primary' color='text'>
            Post
        </Button>
    </Flex>
  )
}
