import React from 'react'
import { Button, Text, FormControl, FormLabel,  FormHelperText, Input } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


export const CreateQuickResponseObject = () => {

	let navigate = useNavigate ();

  return (
	<main>
	  <h2> <Text>Aqui se creare el QRO</Text> </h2> 
	  <p> <Button onClick={() => {navigate("/codes");}}> Regresar </Button> </p> 
		<p>
			<FormControl>
  			<FormLabel htmlFor='email'>Email address</FormLabel>
  			<Input id='email' type='email' />
  			<FormHelperText>We'll never share your email.</FormHelperText>
			</FormControl>
		</p>
	</main> 
	);
}

export const ButtonCodes = () => {
	let navigate = useNavigate();

	return (
    <Button onClick={() => {navigate("/codes");}}>Regresar</Button>
	);
}