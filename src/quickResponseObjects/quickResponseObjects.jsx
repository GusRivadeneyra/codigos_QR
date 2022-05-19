import React, { useEffect, useState } from 'react';
import {
  Container,
  Box,
  SimpleGrid,
  Heading,
  Text,
  Center,
  Stack,
  Input,
  Progress,
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import { useNavigate, useSearchParams } from 'react-router-dom';

export function QuickResponseObjects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate()
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)


  useEffect(() => {
    const fetchData = async () => {
      const rawResult = await fetch('/api/codes')
      console.log(rawResult)

      if (!rawResult) return

      if (rawResult.status !== 200) {
        setIsLoading(false)
        setError(true)
      }
      const result = await rawResult.json()
      setData(result)
      setIsLoading(false)
    }


    if (!data) fetchData()
  }, [data])



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


  return (
    <Container maxW="xl">
      <Stack spacing={2}>
        <Heading>Mis *******</Heading>
        <Input name="filter" placeholder='busca por Titulo' value={searchParams.get('filter') || ''} onChange={(event) => {
          const filter = event.target.value;
          if (filter) {
            setSearchParams({ filter });
          } else {
            setSearchParams({});
          }
        }} />
        <SimpleGrid columns={4} spacing={5}>
          {data
            .filter((code) => {
              const filter = searchParams.get("filter");
              if (!filter) return true;
              const name = code.title.toLowerCase();
              const nameHasStringSearchCriteria = name.startsWith(filter.toLowerCase()) || name.includes(filter.toLowerCase())
              return nameHasStringSearchCriteria;
            })
            .map((code) => (
              <Box key={code.id} cursor="pointer" boxShadow='lg' p='8' rounded='md' bg='white'
                _hover={{
                  boxShadow: 'xl',
                  bg: 'gray.200'
                }}
                onClick={() => {
                  navigate(`/codes/${code.id}`)
                }}
              >
                <Center>
                  <Text>
                    {code.title}
                  </Text>
                </Center>
              </Box>
            ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
