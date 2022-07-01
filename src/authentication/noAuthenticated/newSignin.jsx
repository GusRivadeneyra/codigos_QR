import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthErrorCodes } from "firebase/auth";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  Icon,
  IconButton,
  Container,
  Heading,
  Text,
  Stack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import {
  RiMailLine,
  RiLockLine,
  RiEyeOffLine,
  RiEyeLine,
} from "react-icons/ri";
import { signin } from '../authentication/service/authentication'

export const SignIn = () => {

  const { isOpen, onToggle } = useDisclosure();
  const toast = useToast();
  const {
    handleSubmit,
    register,
    setFocus,
    formState: { errors, isSubmitting },
    setError,
    reset,
    resetField,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });
  const navigate = useNavigate();

  const handleError = useCallback(
    (err) => {
      const isFireBaseError =
        err.code && err.name && err.name === "FirebaseError";

      if (isFireBaseError && err.code === AuthErrorCodes.INVALID_PASSWORD) {
        setError(
          "password",
          { type: "custom", message: "Email o contraseña incorrecta" },
          { shouldFocus: true }
        );
        resetField("password", {
          keepDirty: true,
          keepError: true,
        });
        return;
      }

      toast.closeAll();
      toast({
        title: "Error",
        description: isFireBaseError ? err.code : err.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
        onCloseComplete: () => {
          reset();
        },
      });
    },
    [toast, reset, resetField, setError]
  );

  const onSubmit = useCallback(
    async ({ email, name, password }) => {
      const signinAndRedirect = async () => {
        await signin(email, password);
        navigate("/codes");
      };
      try {
        await signinAndRedirect();
      } catch (e) {
        handleError(e);
      }
    },
    [signin, navigate, handleError]
  );

  const onClickReveal = () => {
    onToggle();
    setFocus("password");
  };
    
  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Stack spacing="6" px={{ base: "4", sm: "10" }}>
          <Heading size={"lg"} textAlign={{ sm: "center" }}>
            Inicia sesion
          </Heading>
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={"transparent"}
          boxShadow={{ base: "none", sm: "md" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing="6">
              {/* email */}
              <FormControl isInvalid={!!errors.email}>
                <FormLabel htmlFor="email">Correo electronico</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    color={"gray.500"}
                    pointerEvents="none"
                    // eslint-disable-next-line react/no-children-prop
                    children={<Icon as={RiMailLine} />}
                  />
                  <Input
                    id="email"
                    type="email"
                    variant={"filled"}
                    {...register("email", {
                      required: "Requerido",
                    })}
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              {/* password */}
              <FormControl isInvalid={!!errors.password}>
                <FormLabel htmlFor="password">Contraseña</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    color={"gray.500"}
                    pointerEvents="none"
                  >
                    <Icon as={RiLockLine} />
                  </InputLeftElement>
                  <Input
                    id="password"
                    type={isOpen ? "text" : "password"}
                    autoComplete="current-password"
                    variant={"filled"}
                    {...register("password", {
                      required: "Requerido",
                      minLength: {
                        value: 6,
                        message: "Minimo 6 caracteres",
                      },
                      maxLength: {
                        value: 40,
                        message: "Maximo 40 carecteres",
                      },
                    })}
                  />
                  <InputRightElement>
                    <IconButton
                      variant="link"
                      aria-label={isOpen ? "Mask password" : "Reveal password"}
                      icon={isOpen ? <RiEyeOffLine /> : <RiEyeLine />}
                      onClick={onClickReveal}
                    />
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              {/* login redirect */}
              <Button
                variant="ghost"
                fontSize="sm"
                size={"lg"}
                onClick={() => {
                  navigate("/codes");
                }}
              >
                <Text fontWeight="bold">No tengo una cuenta</Text>
              </Button>
              {/* signup */}
              <Button
                type="submit"
                variant={"solid"}
                isLoading={isSubmitting}
                size={"lg"}
                fontSize="md"
                bgColor={"brand.primary.300"}
                color={"white"}
              >
                Iniciar
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Container>
  );
};