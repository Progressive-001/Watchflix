import React from 'react'
import { useSignout } from '../../hooks/useSignout'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'

export default function AccountHome() {
  const { logOut } = useSignout()
  return (
    <div className='flex justify-between items-center'>
      <h1>AccountHome</h1>
      {/* <NavLink to="/"> */}
        <button onClick={() => logOut()}>Sign Out</button>
      {/* </NavLink> */}
   
    </div>

  )
}
