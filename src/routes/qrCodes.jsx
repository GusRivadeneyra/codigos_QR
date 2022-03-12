import React from 'react'
import { NavLink, Outlet, useSearchParams } from 'react-router-dom'
import { qrCodes } from '../data/data'

export function QRCodes () {
  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <div style={{ display: 'flex' }}>
      <nav
        style={{
          borderRight: 'solid 1px',
          padding: '1rem'
        }}
      >
        <input
          value={searchParams.get('filter') || ''}
          onChange={(event) => {
            const filter = event.target.value
            if (filter) {
              setSearchParams({ filter })
            } else {
              setSearchParams({})
            }
          }}
        />
        {qrCodes
          // .filter((code) => {
          //   let filter = searchParams.get("filter");
          //   if (!filter) return true;
          //   let name = code.title.toLowerCase();
          //   return name.startsWith(filter.toLowerCase());
          // })
          .map((code) => (
            <NavLink
              style={({ isActive }) => {
                return {
                  display: 'block',
                  margin: '1rem 0',
                  color: isActive ? 'red' : ''
                }
              }}
              to={`/codes/${code.id}`}
              key={code.id}
            >
              {code.title}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  )
}
