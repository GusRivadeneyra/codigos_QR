import React, { useState } from 'react'
import { Container, Stack, HStack, Button, Text, FormControl, FormLabel,  Textarea, Box, Image, Input } from '@chakra-ui/react';





export const CreateQuickResponseObject = () => {
  const [title, setTitle] = useState('')  
  const [url, setUrl] = useState(null);
  const [description, setDescription] = useState('')

  // const [data, setData] = useState('ii')



  /*  const createQuickResponseObject = async (data) => {
    setIsLoading(true)
    try {
      await fetch('/api/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })			
    } catch (e) {
      setError(e)
    } finally {
      setIsLoading(false)
    }
    
  }

  if (error) {
    return (
      <Container>
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle mr={2}>Error!</AlertTitle>
        </Alert>
      </Container>)
  }

  if ((isLoading && !error)) return (
    <Container>
      <Progress size='xs' isIndeterminate colorScheme={"blackAlpha"} />
    </Container>
  ) */

  const send = () => {
    console.log(title);
    const content={
      method: 'POST',
      headers: {
        'Content-type':'application/json'
      },
      body:JSON.stringify({

        valor:title
      })
    }

    fetch('http://localhost:4000/api/create/newqr', content).then((response) => {
      return response.json()
    }).then(data => {
      setUrl(data.valor);
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

          {url && <Box boxSize='sm'>
            <Image src={url}/>
          </Box>}

          <HStack w='100%' justify="center">
            <Button onClick={() => {send()}}> cancel </Button>
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


