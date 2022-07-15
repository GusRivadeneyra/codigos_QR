import React, { useState } from 'react'
import { Container, Stack, HStack, Button, Text, FormControl, FormLabel,  Textarea, Box, Image, Input } from '@chakra-ui/react';

export const CreateQuickResponseObject = () => {
  const [title, setTitle] = useState('')  
  const [url, setUrl]  = useState('');
  const [imgSrc, setImgSrc] = useState(null);
  const [description, setDescription] = useState('');


  const send = () => {
    console.log(title);
    const content={
      method: 'POST',
      headers: {
        'Content-type':'application/json'
      },
      body:JSON.stringify({
        title,
        description,
        url
      })
    }
    fetch('http://localhost:4000/api/create/newqr', content).then((response) => {
      return response.json()
    }).then(data => {
      setImgSrc(data.imgData);
    }).catch((e)=>{
      console.log(e)
    }) 
  }


  return (
    <Container maxW='container.lg' centerContent py={5} >
      <Box py={8}>
        <Text>Crea un nuevo ********</Text>
      </Box>
      <Box w="max" boxShadow='dark-lg' p='8' rounded='md' bg='white'>
        <Stack spacing={4}>
          <FormControl >
            <FormLabel htmlFor='title'>QR TITLE</FormLabel>
            <Input name="title" value={title} onChange={(event) => {
              const newValue = event.target.value 
              setTitle(newValue)
            }}/> 
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='description'>Description</FormLabel>
            <Textarea name='description' value={description} onChange={(event) => {
              const newValue = event.target.value
              setDescription(newValue)
            }} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='url'>url</FormLabel>
            <Input name='url' value={url} onChange={(event) => {
              const newValue = event.target.value
              setUrl(newValue)
            }} />
          </FormControl>

          {imgSrc && <Box boxSize='sm'>
            <Image src={imgSrc}/>
          </Box>}

          <HStack w='100%' justify="center">
            <Button onClick={() => {send()}}> Create new QR </Button>
            {/* <Button onClick={async () => {
              const formValues = {
                title,
                url,
                description
              }
              console.log(formValues)

              await createQuickResponseObject(formValues)
            }}> Save </Button> */}
            
          </HStack>
        </Stack>
      </Box>
    </Container>
  );
}


