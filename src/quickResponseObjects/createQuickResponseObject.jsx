import React, { useState, useEffect } from 'react'
import { Container, Stack, HStack, Button, Text, FormControl, FormLabel, Input, Textarea, InputGroup, InputLeftAddon, Box, Alert, AlertIcon, AlertTitle, Progress } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, } from 'react-icons/fa'
import QRCode from 'react-qr-code';



export const CreateQuickResponseObject = () => {
	const navigate = useNavigate();
	const [title, setTitle] = useState('')
	const [url, setUrl] = useState('')
	const [description, setDescription] = useState('')

	const [data, setData] = useState()
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(false)

	useEffect(() => {
		const fetchData = async () => {
			const rawResult = await fetch('/api')

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

	console.log('states')
	console.log(data)
	console.log(isLoading)
	console.log(error)



	if (error) {
		return (
			<Container>
				<Alert status='error'>
					<AlertIcon />
					<AlertTitle mr={2}>Error!</AlertTitle>
				</Alert>
			</Container>)
	}

	if ((isLoading && !error) || !data) return (
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
					<HStack>
						<Stack w='100%' spacing={3}>
							<HStack>
								<FormControl >
									<FormLabel htmlFor='title'>QR TITLE</FormLabel>
									<Input name="title" value={title} onChange={(event) => {
										const newValue = event.target.value
										setTitle(newValue)
									}} />
								</FormControl>
							</HStack>
							<FormControl>
								<FormLabel htmlFor='description'>Description</FormLabel>
								<Textarea name='description' value={description} onChange={(event) => {
									const newValue = event.target.value
									setDescription(newValue)
								}} />
							</FormControl>
						</Stack>
						<Stack>

							<QRCode value='http://www.google.com'></QRCode>

						</Stack>
					</HStack>

					<InputGroup size='lg'>
						<InputLeftAddon />
						<Input value={url} onChange={(event) => {
							const newValue = event.target.value
							setUrl(newValue)
						}} />
					</InputGroup>

					<Stack >

						<HStack w='100%' justify="center">

							<Button onClick={() => { navigate("/codes"); }}> cancel </Button>
							<Button onClick={() => {
								console.log(title)
								console.log(url)
								console.log(description)
							}}> Save </Button>

						</HStack>

						<HStack justify="end">
							<Button colorScheme='facebook' leftIcon={<FaFacebook />} >
								Facebook
							</Button>
						</HStack>

					</Stack>
				</Stack>
			</Box>
		</Container>
	);
}


