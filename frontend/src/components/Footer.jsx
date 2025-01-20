import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='py-10 md:mx-10'> {/* Container with padding */}
        <div className='border border-gray-200 rounded-lg shadow-md p-8'> {/* Card structure with border and shadow */}
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-4 text-sm'> {/* Grid layout */}
                {/*--- Left Section --- */}
                <div> {/* Logo and description */}
                    <img className='mb-5 w-50' src={assets.logo || "/placeholder.svg"} alt="" /> {/* Logo */}
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>Empowering users with seamless scheduling and trusted healthcare services. Join thousands who’ve simplified their journey to better health with us.</p> {/* Description */}
                </div>

                {/*--- Center Section --- */}
                <div> {/* Company links */}
                    <p className='text-xl font-medium mb-5'>COMPANY</p> {/* Section title */}
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li className="hover:text-[#F87027] transition-colors cursor-pointer">Home</li> {/* Link with hover effect */}
                        <li className="hover:text-[#F87027] transition-colors cursor-pointer">About us</li> {/* Link with hover effect */}
                        <li className="hover:text-[#F87027] transition-colors cursor-pointer">Contact us</li> {/* Link with hover effect */}
                        <li className="hover:text-[#F87027] transition-colors cursor-pointer">Privacy Policy</li> {/* Link with hover effect */}
                    </ul>
                </div>

                {/*--- Right Section --- */}
                <div> {/* Contact information */}
                    <p className='text-xl font-medium mb-5'>Get in Touch</p> {/* Section title */}
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+1800 123 4567</li> {/* Phone number */}
                        <li>contact@appointify.com</li> {/* Email address */}
                    </ul>
                </div>
            </div>

            {/* ------ CopyRight Text------- */}
            <div className="border-t border-gray-200 mt-10"> {/* Copyright section with top border */}
                <p className='py-5 text-sm text-center'>Copyright © 2025 Appointify - All Right Reserved.</p> {/* Copyright text */}
            </div>
        </div>
    </div>
  )
}

export default Footer
