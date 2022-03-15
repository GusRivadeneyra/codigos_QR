import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export function AppLayout () {
  return (
    <div>
      <h1 style={{ backgroundColor: 'rgb(92, 107, 112)', width: '500px', marginLeft: 'auto', marginRight: 'auto' }}>Codigos QR!</h1>
      <br></br>
      <nav
        style={{
          paddingBottom: '1 rem',
          width: '250px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        <Link to="/codes">Mis codigos</Link>{' '}|{' '}
        <Link to="/codes/create">Crear</Link>
      </nav>
      <Outlet />
    </div>
  )
}
