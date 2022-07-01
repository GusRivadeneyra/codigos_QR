import React, { useState } from "react";
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
import { signup as _signup } from '../authentication/service/authentication'


export const StartApp = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()
  const [, setUser] = useState()
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });
  const { errors } = formState

  const signup = async (data) => {
    console.log('signuṕ data')
    console.log(data)

    setIsLoading(true)
    try {
      const user = await _signup(data.email, data.password)
      console.log(user)
      setUser(user)
      setIsLoading(false)
      setTimeout(() => {
        navigate('/codes')
      }, 4000)
      // navigate('/codes');  
    } catch (err) {
      setError(err)
      setIsLoading(false)
    }
  }

  if (error) {
    console.log(error.code)
  }

  return (
    <>
      <Container w="md" boxShadow='dark-lg' p='8' rounded='sm' bg='white' marginTop={10} >
        <Box >
          <Text textAlign='center'>En esta app, podrás registrar cualquiera de tus productos con un codigo QR</Text>

          <form onSubmit={handleSubmit(signup)}>
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
              <Input id='email' type='email' placeholder='Email'
                {...register("email", {
                  required: {
                    value: true,
                    message: "El campo es requerido"
                  },
                })}
              />
              {errors.email && (
                <FormErrorMessage>
                  {errors.email.message}
                </FormErrorMessage>
              )}
            </FormControl>

            <FormControl >
              <FormLabel htmlFor='password' marginTop={2} >Password</FormLabel>
              <Input id='password' type='password' {...register("password", {
                required: {
                  value: true,
                  message: "El campo es requerido"
                },
              })} />
              {errors.email && (
                <FormErrorMessage>
                  {errors.email.message}
                </FormErrorMessage>
              )}
            </FormControl>


            <Stack spacing={4} marginTop={8}>
              <Button isLoading={isLoading} loadingText="..." disabled={isLoading} type="submit" >Sign up</Button>
            </Stack>

          </form>

        </Box>
      </Container>
    </>
  );
};