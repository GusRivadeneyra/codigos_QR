import React from 'react'
import { render } from 'react-dom'
import { Button, ChakraProvider } from '@chakra-ui/react'
import {
	BrowserRouter,
	Routes,
	Route,
	useNavigate
} from 'react-router-dom'
import { AppLayout } from './layouts/appLayout'
import { QuickResponseObjects } from './quickResponseObjects/quickResponseObjects'
import { CreateQuickResponseObject, } from './quickResponseObjects/createQuickResponseObject'
import { QuickResponseObjectEmptyState } from './quickResponseObjects/quickResponseObjectEmptyState'
import { QRCode } from './components/qrcode'
import { QuickResponeObjectDetail } from './quickResponseObjects/quickResponseObjectDetail'



const rootElement = document.getElementById('root')
render(
	<>
		<ChakraProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<AppLayout />} >
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
	</>,
	rootElement)