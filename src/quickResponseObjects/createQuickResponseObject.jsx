import React,  { useState } from 'react'
import { Container, Stack, HStack, Button, Text, FormControl, FormLabel, Input, InputGroup, InputLeftAddon, Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code';


export const CreateQuickResponseObject = () => {
	const navigate = useNavigate();
	const [title, setTitle] = useState('')
	const [url, setUrl] = useState('')
	const [descr, setDescr] = useState('')

	return (

		<Container maxW='container.lg' centerContent py={50} >
			<Text>Aqui se creare el QRO</Text>

			<ShadowedBox>
				<Stack w='100%'>
					<FormControl >
						<FormLabel>QR TITLE</FormLabel>
						<Input value={title} onChange={(event) => {
							const newValue = event.target.value
							setTitle(newValue)
						}} />
					</FormControl>
				</Stack>

				<Stack spacing={4} w='100%' py={30}>
					<InputGroup size='lg'>
						<FormLabel htmlFor='email'>URL</FormLabel>
						<InputLeftAddon children='https://' />
						<Input value={url} onChange={(event) =>{
							const newValue = event.target.value 
							setUrl(newValue)
						}} />
					</InputGroup>
				</Stack>

				<Stack w='100%'>
					<FormControl>
						<FormLabel htmlFor='email'>Description</FormLabel>
						<Input value={descr} onChange={(event) =>{
							const newValue = event.target.value 
							setDescr(newValue)
						}} />
					</FormControl>
				
				</Stack>
				<Stack py={30} w='100%'>
					<Stack Center>
						<QRCode value='http://www.google.com'></QRCode>
					</Stack>
					<HStack w='100%'>
						<Button onClick={() => { navigate("/codes"); }}> cancel </Button>
						<Button onClick={() => { navigate("/codes"); }}> Save </Button>
						<Button onClick={() => { navigate("/codes"); }}> Regresar </Button>
					</HStack>
				</Stack>
			</ShadowedBox>
		</Container>
	);
}

const ShadowedBox = ({ children }) => {
	return (<Box boxShadow='dark-lg' p='8' rounded='md' bg='white'>
		{children}
	</Box>)
}

export const ButtonCodes = () => {
	let navigate = useNavigate();

	return (
		<Button onClick={() => { navigate("/codes"); }}>Regresar</Button>
	);
}