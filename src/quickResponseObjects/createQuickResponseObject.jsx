import React from 'react'
import { Container, Stack, HStack, Button, Text, FormControl, FormLabel, Input, InputGroup, InputLeftAddon, box, Box} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code';


export const CreateQuickResponseObject = () => {

	let navigate = useNavigate();

	return (

		<Container maxW='container.lg' centerContent py={50} >
			<Text>Aqui se creare el QRO</Text>

			
			<Stack w='60%'>
				<FormControl >
					<FormLabel htmlFor='email'>QR TITLE</FormLabel>
					<Input id='email' type='email' />
				</FormControl>
			</Stack>
			
			<Stack spacing={4} w='60%' py={30}>
			
				<InputGroup size='sm'>
					<FormLabel htmlFor='email'>URL</FormLabel>
					<InputLeftAddon children='https://' />
					<Input placeholder='mysite' />
				</InputGroup>
			</Stack>

			<Stack w='60%' >
				<FormControl>
					<FormLabel htmlFor='email'>Description</FormLabel>
					<Input id='email' type='email' />
				</FormControl>
			</Stack>
			<Stack py={30}>
				<Stack>
					<QRCode value='http://www.google.com'></QRCode>
				</Stack>
				<HStack>
					<Button onClick={() => { navigate("/codes"); }}> cancel </Button>
					<Button onClick={() => { navigate("/codes"); }}> Save </Button>
					<Button onClick={() => { navigate("/codes"); }}> Regresar </Button>
				</HStack>
			</Stack>
			
		</Container>
	);
}

export const ButtonCodes = () => {
	let navigate = useNavigate();

	return (
		<Button onClick={() => { navigate("/codes"); }}>Regresar</Button>
	);
}