import React from 'react'
import { Outlet, Link, Box } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Container, Heading } from '@chakra-ui/react'


export function AppLayout () {
  return (

    <Container maxW='container.lg' centerContent py={5}>
     <Heading>
     QR codes 
     </Heading>
    <Breadcrumb>
  <BreadcrumbItem>
		<Link to="/codes">My codes</Link>
</BreadcrumbItem>
  <BreadcrumbItem>
		<Link to="/create">create</Link>
  </BreadcrumbItem>
</Breadcrumb>
      <Outlet /> 
		</Container>
		
  )
}
