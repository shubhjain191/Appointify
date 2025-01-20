import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

/**
 * SpecialityMenu Component
 * Displays a section showing different medical specialities that users can browse through
 * Includes a title, description, and horizontally scrollable list of speciality cards
 */
const SpecialityMenu = () => {
  return (
    // Main container with vertical layout and centered items
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
        {/* Section heading */}
        <h1 className='text-3xl font-medium'>Find by Speciality</h1>
        
        {/* Description text - responsive width on small screens */}
        <p className='sm:w-1/3 text-center text-sm'>
            Discover top-rated doctors and schedule your appointment effortlessly, right at your fingertips
        </p>
        
        {/* Container for scrollable speciality cards */}
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
            {/* Map through specialityData array to create individual speciality cards */}
            {specialityData.map((item, index) => (
                // Link wrapper for each speciality card
                // Routes to specific doctor listing page based on speciality
                <Link 
                    onClick={() => scrollTo(0, 0)} // Scroll to top when clicked
                    className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index}to={`/doctors/${item.speciality}`}
                >
                    {/* Speciality icon/image */}
                    <img className='w-16 sm:w-24 mb-2' // Responsive image size 
                      src={item.image} alt="" 
                    />
                    {/* Speciality name */}
                    <p>{item.speciality}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default SpecialityMenu