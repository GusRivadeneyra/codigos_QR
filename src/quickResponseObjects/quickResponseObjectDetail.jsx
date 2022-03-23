import React from 'react'
import {
	Container, Box, Stack, HStack, Button, Textarea, FormControl, FormLabel, Input
} from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import QRCode from 'react-qr-code';
import { qrCodes } from '../data/data'


export const QuickResponeObjectDetail = () => {
	const navigate = useNavigate();
	const { codeId } = useParams()

	console.log(codeId)

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
						<Button onClick={() => { navigate("/edit"); }}> cancel </Button>
						<Button onClick={() => { navigate("/cancel"); }}> Save </Button>
					</HStack>
				</Stack>

			</Box>
		</Container>
	);
}
