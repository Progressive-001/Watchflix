//assets
import HeroImage from '../../assets/landingPage/Wordmark.svg'

//Hooks
import { NavLink } from 'react-router-dom'
import { useSignout } from '../../hooks/useSignout'
import { useAuthContext } from '../../hooks/useAuthContext'

//styles
import './Header.css'

export default function Header() {
  const { isPending, logOut} = useSignout()
  const { user } = useAuthContext()
  return (
    <div className='header'>

      <img src={HeroImage} alt="Hero" className='w-[100px] lg:w-[150px] md:w-[120px] sm:w-[100px]'/>

      {user && (isPending ? (
        <button className='nav-button font-netflix text-body font-bold'>Signing out...</button>
        ):(
          <button 
            onClick={() => logOut()} 
            className='nav-button font-netflix text-body font-bold'
          >Sign out</button>
        )
      )}

      {!user &&       
        <NavLink to="/login" className='nav-button font-netflix text-body font-bold'>Sign In</NavLink>
      }

    </div>
  )
}
// loading
//   slotProps={{
//     loadingOverlay: {
//       variant: 'linear-progress',
//       noRowsVariant: 'linear-progress',
//     },
//   }}

//   <DataGrid
//   {...data}
//   loading
//   slotProps={{
//     loadingOverlay: {
//       variant: 'linear-progress',
//       noRowsVariant: 'linear-progress',
//     },
//   }}
// />