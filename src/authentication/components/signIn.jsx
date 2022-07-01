import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
	Box,
	Button,
	Checkbox,
	Container,
	FormControl,
	FormLabel,
	Heading,
	HStack,
	Input,
	Stack,
	Text,
	useBreakpointValue,
	useColorModeValue,
} from '@chakra-ui/react'

import { PasswordField } from './PasswordField'
import { signup as _signup } from '../service/authentication'

export const SignupApp = () => {
	const navigate = useNavigate()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [user, setUser] = useState()
	const [error, setError] = useState()
	const [isLoading, setIsLoading] = useState(false)


	const signup = async () => {
		setIsLoading(true)
		try {
			const user = await _signup(email, password)
			setTimeout(() => {
				navigate('/codes')
			}, 1000)

			console.log(user)
			setUser(user)
		} catch (err) {
			setError(err)
		} finally {
			setIsLoading(false)
		}
	}

	if (error) {
		<Container
			maxW="lg"
			py={{
				base: '12',
				md: '24',
			}}
			px={{
				base: '0',
				sm: '8',
			}}
		>
			An unexpected error ocurred
		</Container>
	}

	return (
		<Container
			maxW="lg"
			py={{
				base: '12',
				md: '24',
			}}
			px={{
				base: '0',
				sm: '8',
			}}
		>
			<Stack spacing="8">
				<Stack spacing="6">
					<Heading
						size={useBreakpointValue({
							base: 'xs',
							md: 'sm',
						})}
					>
						{user ? `Hola ${user.email}` : "Log in to your account"}
					</Heading>
					<HStack spacing="1" justify="center">
						<Text color="muted"> Dont have an account?</Text>
						<Button variant="link" colorScheme="blue">
							Sign up
						</Button>
					</HStack>
				</Stack>
				<Box
					py={{
						base: '0',
						sm: '8',
					}}
					px={{
						base: '4',
						sm: '10',
					}}
					bg={useBreakpointValue({
						base: 'transparent',
						sm: 'bg-surface',
					})}
					boxShadow={{
						base: 'none',
						sm: useColorModeValue('md', 'md-dark'),
					}}
					borderRadius={{
						base: 'none',
						sm: 'xl',
					}}
				>
					<Stack spacing="6">
						<Stack spacing="5">
							<FormControl>
								<FormLabel htmlFor="email">Email</FormLabel>
								<Input id="email" type="email" value={email} onChange={(event) => {
									const myEmail = event.target.value
									setEmail(myEmail)
								}} />
							</FormControl>
							<PasswordField onChange={(event) => {
								const password = event.target.value
								setPassword(password)
							}} />
						</Stack>
						<HStack justify="space-between">
							<Checkbox defaultIsChecked>Remember me</Checkbox>
							<Button variant="link" colorScheme="blue" size="sm" onClick={() => navigate('/create')}>
								Forgot password?
							</Button>
						</HStack>
						<Stack spacing="6">
							<Button isLoading={isLoading} loadingText="..." disabled={isLoading} onClick={() => {
								signup()
							}} >Sign in</Button>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Container>
	);