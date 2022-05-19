import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppLayout } from './layouts/appLayout'
import { QuickResponseObjects } from './quickResponseObjects/quickResponseObjects'
import { CreateQuickResponseObject, } from './quickResponseObjects/createQuickResponseObject'
import { QuickResponeObjectDetail } from './quickResponseObjects/quickResponseObjectDetail'
import { SignupApp } from './authentication/components/signup'

export const App = () => {
	return (
		<>
			<ChakraProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<AppLayout />} >
							<Route path='signup' element={<SignupApp />} />
							<Route path="create" element={<CreateQuickResponseObject />} />
							<Route path="codes" element={<QuickResponseObjects />} />
							<Route path="codes/:codeId" element={<QuickResponeObjectDetail />} />
							<Route
								path="*"
								element={
									<main style={{ padding: '1 rem' }}>
										<p>404</p>
										<p>Page not found</p>
									</main>
								}
							/>
						</Route>
					</Routes>
				</BrowserRouter>
			</ChakraProvider >
		</>
	)
}