import React, { useState, useEffect } from 'react'
import {
  Container, Box, Stack, HStack, Button, Textarea, FormControl, FormLabel, Input, Progress, Alert, AlertIcon, AlertTitle,
} from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import QRCode from 'react-qr-code';
import { qrCodes } from '../data/data'


export const QuickResponeObjectDetail = () => {
  const navigate = useNavigate();
  const { codeId } = useParams()

  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const rawResult = await fetch('/api/codes')

      if (rawResult.status !== 200) {
        setIsLoading(false)
        setError(true)
      }
      const result = await rawResult.json()
      setData(result)
      setIsLoading(false)
    }
    fetchData()

  }, [])

  if (error) {
    <Container>
      <Alert status='error'>
        <AlertIcon />
        <AlertTitle mr={2}>Error!</AlertTitle>
      </Alert>
    </Container>
  }

  if ((isLoading && !error) || !data) return (
    <Container>
      <Progress size='xs' isIndeterminate colorScheme={"blackAlpha"} />
    </Container>
  )


  const code = qrCodes.find((code) => codeId === (code.id).toString());
  return (
    <Container centerContent pt={8}>

      <Box w="max" boxShadow='dark-lg' p='8' rounded='md' bg='white'>
        <Stack spacing={4}>
          <HStack>
            <Stack w='100%' spacing={4}>
              <FormControl>
                <FormLabel htmlFor='title'>TITLE</FormLabel>
                <Input isReadOnly name="title" value={code.title} />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor='description'>Description</FormLabel>
                <Textarea name='description' isReadOnly value={code.description} />
              </FormControl>
            </Stack>

            <Stack p={4}>
              <QRCode value={code.codeValue}></QRCode>
            </Stack>
          </HStack>
          <FormControl>
            <FormLabel htmlFor='url'>URL</FormLabel>
            <Input isReadOnly name="url" value={code.codeValue} />
          </FormControl>
          <HStack w='100%' alignContent="center" justifyContent="center" spacing={6}>
            <Button onClick={() => { navigate("/edit"); }}> Editar </Button>
          </HStack>
        </Stack>
      </Box>
    </Container>
  );
}

