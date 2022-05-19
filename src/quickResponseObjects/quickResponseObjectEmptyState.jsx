import React from 'react';
import { Container, Box, Center, Text, Button, Stack, } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const QuickResponseObjectEmptyState = () => {
  const navigate = useNavigate();
  return (

    <Container maxW='container.md' centerContent py={40}>
      <Stack>
        <Text>selecciona un item para ver su detalle, o crea uno nuevo</Text>
        <Center>
          <Box>
            <Button onClick={() => navigate('/create')}>Crear</Button>
          </Box>
        </Center>
      </Stack>

    </Container>
  );
};
