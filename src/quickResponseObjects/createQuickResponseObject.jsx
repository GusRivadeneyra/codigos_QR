import React, { useState } from 'react'
import { Container, Stack, HStack, Button, Text, FormControl, FormLabel, Input, Textarea, InputGroup, InputLeftAddon, Box, Alert, AlertIcon, AlertTitle, Progress } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';



export const CreateQuickResponseObject = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')

  // const [data, setData] = useState('ii')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)


  const createQuickResponseObject = async (data) => {
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
  )

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
            }} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='description'>Description</FormLabel>
            <Textarea name='description' value={description} onChange={(event) => {
              const newValue = event.target.value
              setDescription(newValue)
            }} />
          </FormControl>
          <FormControl >
            <FormLabel htmlFor='url'>URL</FormLabel>
            <InputGroup size='lg'>
              <InputLeftAddon>
								https://
              </InputLeftAddon>
              <Input name='url' value={url} onChange={(event) => {
                const newValue = event.target.value
                setUrl(newValue)
              }} />
            </InputGroup>
          </FormControl>

          <HStack w='100%' justify="center">
            <Button onClick={() => { navigate("/codes"); }}> cancel </Button>
            <Button onClick={async () => {
              const formValues = {
                title,
                url,
                description
              }
              console.log(formValues)

              await createQuickResponseObject(formValues)
            }}> Save </Button>
          </HStack>
        </Stack>
      </Box>
    </Container>
  );
}


