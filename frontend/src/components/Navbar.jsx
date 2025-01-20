// Import necessary dependencies from React and React Router
import React, { useState } from 'react'
import { assets } from '../assets/assets'  // Import assets for images and icons
import { NavLink, useNavigate } from 'react-router-dom'  // Router components for navigation

/**
 * Navbar Component
 * Renders the application's navigation bar with responsive design
 * Includes logo, navigation links, and user profile management
 */
const Navbar = () => {
    // Hook for programmatic navigation
    const navigate = useNavigate();
    
    // State for mobile menu visibility (though handler not implemented in this code)
    const [showMenu, setShowMenu] = useState(false)
    
    // State to manage user authentication status
    // TODO: Should be managed through proper auth context or redux
    const [token, setToken] = useState(true)

    return (
        // Main navbar container with responsive styling
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
            {/* Company Logo */}
            <img onClick={()=>navigate('/')} className='w-45 cursor-pointer' src={assets.logo} alt="" />

            {/* Navigation Links - Hidden on mobile, visible on medium screens and up */}
            <ul className='hidden md:flex items-start gap-5 font-semibold'>
                {/* Home Link */}
                <NavLink to='/'>
                    <li className='py-1'>Home</li>
                    {/* Underline indicator for active link - hidden by default */}
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>

                {/* Doctors Link */}
                <NavLink to='/doctors'>
                    <li className='py-1'>All Doctors</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>

                {/* About Link */}
                <NavLink to='/about'>
                    <li className='py-1'>About</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>

                {/* Contact Link */}
                <NavLink to='/contact'>
                    <li className='py-1'>Contact</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
            </ul>

            {/* User Profile Section */}
            <div className='flex items-center gap-4'>
                {/* Conditional rendering based on authentication status */}
                {token ? (
                    // User Profile Dropdown - Visible when user is logged in
                    <div className='flex items-center gap-2 cursor-pointer group relative'>
                        {/* User Profile Picture */}
                        <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
                        {/* Dropdown Icon */}
                        <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                        
                        {/* Dropdown Menu - Hidden by default, shown on hover */}
                        <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                            <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                {/* Profile Navigation Option */}
                                <p onClick={() => navigate('/profile')} 
                                   className='hover:text-black cursor-pointer'>My Profile</p>
                                {/* Appointments Navigation Option */}
                                <p onClick={() => navigate('/my-appointments')} 
                                   className='hover:text-black cursor-pointer'>My Appointments</p>
                                {/* Logout Option */}
                                <p onClick={() => setToken(false)} 
                                   className='hover:text-black cursor-pointer'>Logout</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    // Create Account Button - Visible when user is not logged in
                    // Hidden on mobile, visible on medium screens and up
                    <button onClick={() => navigate('/login')} 
                            className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>
                        Create Account
                    </button>
                )}
                <img onClick={() =>setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
                <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                    <div className='flex items-center justify-between px-5 py-6'>
                        <img className='w-36' src={assets.logo} alt="" />
                        <img className='w-7' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
                    </div>
                    <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                        <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block' >HOME</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block' >ALL DOCTORS</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block' >ABOUT</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar