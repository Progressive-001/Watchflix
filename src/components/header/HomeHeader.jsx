import { useState } from 'react'
import { useSignout } from '../../hooks/useSignout'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'


import HeroImage from '../../assets/landingPage/Wordmark.svg'
import SearchIcon from '../../assets/account-home-assets/Search.svg'
import Notification from '../../assets/account-home-assets/Notification.svg'
import DropDown from '../../assets/account-home-assets/DropDown.svg'
import account from '../../assets/account-home-assets/Account.svg'
import edit from '../../assets/account-home-assets/edit.svg'

import './HomeHeader.css'


export default function HomeHeader() {
    const { user } = useAuthContext();
    const { logOut } = useSignout();
    const [isOpen, setIsOpen] = useState(false);

    const handleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const optimizedPhoto = user.photoURL.replace(
        "/upload/", 
        "/upload/f_auto,q_auto,w_80,c_thumb,g_face/"
    );

  return (
    <div className='flex flex-row justify-between items-center w-[100%] m-[20px] z-[9999] '>
        
        <div className='flex justify-center items-center gap-[60px]'>
            <img src={HeroImage} alt="Hero" className='w-[100px] lg:w-[90px] md:w-[120px] sm:w-[100px]' loading='eager' />
            <div className='flex gap-[18px] !font-netflix text-body font-thin homeHeader'>
                <NavLink to="/home" className='nav-button !bg-transparent decoration-transparent'>Home</NavLink>
                <NavLink to="/tvShows" className='nav-button !bg-transparent decoration-transparent'>TV Shows</NavLink>
                <NavLink to="/movies" className='nav-button !bg-transparent decoration-transparent'>Movies</NavLink>
                <NavLink to="/newPopular" className='nav-button !bg-transparent decoration-transparent'>New & Popular</NavLink>
                <NavLink to="/myList" className='nav-button !bg-transparent decoration-transparent'>My List</NavLink>
                <NavLink to="/browseLanguage" className='nav-button !bg-transparent decoration-transparent'>Browse by Language</NavLink>
            </div>
        </div>

        <div className='flex gap-[25px] justify-center items-start m-0 p-0'>
            <img src={SearchIcon} alt="Search" loading='eager' className='' />
            <img src={Notification} alt="Notification" loading="eager" className='w-[20px]'/>
            <div className='flex items-start justify-center gap-[10px] mr-16'>
                <img src={optimizedPhoto} loading="eager" alt="" className='rounded-[2px] w-[35px]'/>
                <div onClick={handleDropdown} className='relative font-netflix text-msmallbody'>
                    <button className='m-0 p-0'>
                        <img src={DropDown} alt="Dropdown" loading="eager" className={`${isOpen ? 'rotate-180' : ''} m-0 p-0 w-[15px]`} />
                    </button>

                    {isOpen && (
                        <div className='flex flex-col gap-[0px] text-left absolute top-[40px] right-[-80px] w-[200px] bg-[#141414] cursor-pointer'>
                            <div className='flex flex-col gap-[20px] border-[#808080)] border-[2px] p-[20px]'>
                                {user && (
                                    <div className='flex items-center justify-start gap-[10px]'>
                                        <img src={optimizedPhoto} loading="eager" alt="" className='w-[30px]' />
                                        <span>{user.displayName}</span>
                                    </div>)}
                                <div className='flex items-center justify-start gap-[10px]'>
                                    <img src={edit} loading="lazy" alt="" className='w-[30px]' />
                                    <span onClick={''}>Manage profiles</span>
                                </div>

                                <div className='flex items-center justify-start gap-[10px]'>
                                    <img src={account} loading="lazy" alt="" className='w-[30px]' />
                                    <span onClick={''}>Account</span>
                                </div>
                            </div>
                            <span onClick={logOut} className='p-[15px] py-[20px] ml-[60px] pl-[0px]'>Sign out of Netflix</span>
                        </div>

                    )}
                </div>
            </div>
        </div>

    </div>
  )
}

