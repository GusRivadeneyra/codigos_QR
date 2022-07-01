import React, { useState, useEffect } from 'react'
import { Outlet, Link, useMatch, useNavigate } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Container, Heading } from '@chakra-ui/react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../authentication/firebase/firebase';


export function AppLayout() {
  const [user, setUser] = useState()
  const isOnSignup = useMatch('/signup')
  const navigate = useNavigate()

  useEffect(() => {
    console.log('auth')

    const unsuscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

    return unsuscribe()
  })

  useEffect(() => {
    console.log(isOnSignup)
    console.log(user)

    if (!!isOnSignup && user) {
      const t = setTimeout(() => {
        navigate("/codes")
      }, 3000)
      return () => clearTimeout(t)
    }
  }, [isOnSignup, user])


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
