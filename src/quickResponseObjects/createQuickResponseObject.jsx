import React, { useState } from 'react'
import { Container, Center, Stack, HStack, Button, Text, FormControl, FormLabel, Input, Textarea, InputGroup, InputLeftAddon, Box, Editable, EditableInput, EditableTextarea, EditablePreview } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code';


export const CreateQuickResponseObject = () => {
	const navigate = useNavigate();
	const [title, setTitle] = useState('')
	const [url, setUrl] = useState('')
	const [description, setDescription] = useState('')

	return (

		<Container maxW='container.lg' centerContent py={5} >
			<Box py={8}>
				<Text>Crea un nuevo ********</Text>
			</Box>

			<Box w="max" boxShadow='dark-lg' p='8' rounded='md' bg='white'>


				<Stack w='100%' spacing={3}>
					<FormControl >
						<FormLabel htmlFor='title'>QR TITLE</FormLabel>
						<Input name="title" value={title} onChange={(event) => {
							const newValue = event.target.value
							setTitle(newValue)
						}} />
					</FormControl>
					<FormControl >
						<FormLabel htmlFor='url'>URL</FormLabel>
						<InputGroup size='lg'>
							<InputLeftAddon children='https://' />
							<Input name='url' value={url} onChange={(event) => {
								const newValue = event.target.value
								setUrl(newValue)
							}} />
						</InputGroup>
					</FormControl>
					<FormControl>
						<FormLabel htmlFor='description'>Description</FormLabel>
						<Textarea name='description' value={description} onChange={(event) => {
							const newValue = event.target.value
							setDescription(newValue)
						}} />
					</FormControl>
				</Stack>


				<Stack py={30} w='100%'>
					<Center >
						<QRCode value='http://www.google.com'></QRCode>
					</Center>
					<HStack w='100%' justify="space-evenly">
						<Button onClick={() => { navigate("/codes"); }}> cancel </Button>
						<Button onClick={() => {
							console.log(title)
							console.log(url)
							console.log(description)
						}}> Save </Button>
					</HStack>
				</Stack>
			</Box>
		</Container>
	);
}


