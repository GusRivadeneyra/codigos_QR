import React from 'react';
import { Box, SimpleGrid, Heading, Text, Center, Stack, FormControl, FormLabel, Input } from "@chakra-ui/react";


import { useNavigate, useSearchParams } from 'react-router-dom';
import { qrCodes } from '../data/data';

export function QuickResponseObjects() {
	const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate()
	return (
		<Stack spacing={6}>
			<Heading>Mis *******</Heading>
			<FormControl>
				<FormLabel htmlFor='filter'>Buscador</FormLabel>
				<Input name="filter" value={searchParams.get('filter') || ''} onChange={(event) => {
					const filter = event.target.value;
					if (filter) {
						setSearchParams({ filter });
					} else {
						setSearchParams({});
					}
				}} />
			</FormControl>
			<SimpleGrid columns={3} spacing={10}>
				{qrCodes
					// .filter((code) => {
					//   let filter = searchParams.get("filter");
					//   if (!filter) return true;
					//   let name = code.title.toLowerCase();
					//   return name.startsWith(filter.toLowerCase());
					// })
					.map((code) => (
						<ShadowedBox key={code.id} onClick={() => {
							navigate(`/codes/${code.id}`)
						}}>
							<Center>
								<Text>
									{code.title}
								</Text>
							</Center>
						</ShadowedBox>
					))}
			</SimpleGrid>
		</Stack>
	);
}

const ShadowedBox = ({ children }) => {
	return (<Box boxShadow='lg' p='8' rounded='md' bg='white'>
		{children}
	</Box>)
}
