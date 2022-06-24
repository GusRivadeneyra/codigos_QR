import React, { useState, useCallback} from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Button,
  Box,
  Stack,
  Container,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";

export const StartApp = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      name: '',
      email: ''
    }
  });
  const { errors } = formState

 
    
  const onSubmit = data => {
    console.log(data);
    navigate('/codes');    
  }

  return (
    <>
      <Container w="md" boxShadow='dark-lg' p='8' rounded='sm' bg='white' marginTop={10} >
        <Box >
          <Text textAlign='center'>En esta app, podrás registrar cualquiera de tus productos con un codigo QR</Text>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl >
              <FormLabel htmlFor='name'>First name</FormLabel>
              <Input id='name' placeholder='First name' {...register("name", {
                required: {
                  value: true,
                  message: "el campo es requerido"
                }
              })} />
              {errors.name && (
                <FormErrorMessage>
                  {errors.name.message}
                </FormErrorMessage>
              )}

            </FormControl>
            <FormControl >
              <FormLabel htmlFor='email' marginTop={2} >Email address</FormLabel>
              <Input id='email' type='email' placeholder='Email' {...register("email", {
                required: {
                  value: true,
                  message: "El campo es requerido"
                },
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
                  message: "El formato no es correcto"
                }
              })} />
              {errors.email && (
                <FormErrorMessage>
                  {errors.email.message}
                </FormErrorMessage>
              )}
            </FormControl>

            <Stack spacing={4} marginTop={8}>
              <Button type="submit" >Iniciar</Button>
            </Stack>

          </form>

        </Box>
      </Container>
    </>
  );
};

