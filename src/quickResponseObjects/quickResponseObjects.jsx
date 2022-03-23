import React from 'react';
import { Container, Box, SimpleGrid, Heading, Text, Center, Stack, Input } from "@chakra-ui/react";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { qrCodes } from '../data/data'

export function QuickResponseObjects() {
	const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate()
	return (
		<Container maxW="xl">
			<Stack spacing={2}>
				<Heading>Mis *******</Heading>
				<Input name="filter" placeholder='busca por Titulo' value={searchParams.get('filter') || ''} onChange={(event) => {
					const filter = event.target.value;
					if (filter) {
						setSearchParams({ filter });
					} else {
						setSearchParams({});
					}
				}} />
				<SimpleGrid columns={4} spacing={5}>
					{qrCodes
						.filter((code) => {
							const filter = searchParams.get("filter");
							if (!filter) return true;
							const name = code.title.toLowerCase();
							const nameHasStringSearchCriteria = name.startsWith(filter.toLowerCase()) || name.includes(filter.toLowerCase())
							return nameHasStringSearchCriteria;
						})
						.map((code) => (
							<Box key={code.id} cursor="pointer" boxShadow='lg' p='8' rounded='md' bg='white'
								_hover={{
									boxShadow: 'xl',
									bg: 'gray.200'
								}}
								onClick={() => {
									navigate(`/codes/${code.id}`)
								}}
							>
								<Center>
									<Text>
										{code.title}
									</Text>
								</Center>
							</Box>
						))}
				</SimpleGrid>
			</Stack>
		</Container>
	);
}
