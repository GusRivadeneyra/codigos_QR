import React,  { useState } from 'react'
import { Container, Stack, HStack, Button, Text, FormControl, FormLabel, Input, InputGroup, InputLeftAddon, Box,
Editable, EditableInput, EditableTextarea, EditablePreview } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code';

import { qrCodes } from '../data/data'


export const QuickResponeObjectDetail = () => {
	const navigate = useNavigate();
	

	return (

		<Container maxW='container.lg' centerContent py={50} >

			<ShadowedBox>

				<Stack w='100%'>
					<FormControl>
						<FormLabel htmlFor='email'>TITLE</FormLabel>
						<Input isDisabled />
					</FormControl>
				
				</Stack>

				<Stack w='100%'>
					<FormControl>
						<FormLabel htmlFor='email'>URL</FormLabel>
						<Input isDisabled  />
					</FormControl>
				
				</Stack>

				<Stack w='100%'>
					<FormControl>
						<FormLabel htmlFor='email'>Description</FormLabel>
						<Input isDisabled  />
					</FormControl>
				
				</Stack>
				<Stack py={30} w='100%'>
					<Stack Center>
						<QRCode value='http://www.google.com'></QRCode>
					</Stack>
					<HStack w='100%'>
						<Button onClick={() => { navigate("/edit"); }}> cancel </Button>
						<Button onClick={() => { navigate("/cancel"); }}> Save </Button>
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
