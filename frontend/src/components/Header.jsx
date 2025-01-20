import React from 'react'
import { assets } from '../assets/assets'

/**
 * Header Component
 * A responsive header section featuring a call-to-action for doctor appointments
 * with a split layout design for desktop views.
 */
const Header = () => {
  return (
    // Main container with responsive flexbox layout
    // Changes from column (mobile) to row (desktop) layout
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
      
      {/* Left Section: Content Area
          - Takes half width on desktop
          - Centers content vertically
          - Maintains spacing between elements */}
          
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        {/* Main heading with responsive text sizing */}
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
          Trusted Doctors <br />
          at Your Fingertips
        </p>

        {/* Trust indicators section with profile images
            - Flexbox layout changes direction based on screen size
            - Contains profile group image and descriptive text */}

        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
          <img className='w-28' src={assets.group_profiles} alt="" />
          <p>
            Simplify your healthcare journey book your doctor's appointment 
            <br className='hidden sm:block'/> 
            online and enjoy quick, efficient service.
          </p>
        </div>

        {/* Call-to-action button
            - Centered on mobile, left-aligned on desktop
            - Hover animation with scale effect
            - Contains text and arrow icon */}

        <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300' >
          Book appointment 
          <img className='w-3' src={assets.arrow_icon} alt=""/>
        </a>
      </div>

      {/* Right Section: Image Area
          - Takes half width on desktop
          - Image positioning changes based on screen size
          - Uses absolute positioning on desktop for precise placement */}
      <div className='md:w-1/2 relative'>
        <img 
          className='w-full md:absolute bottom-0 h-auto rounded-lg md:h-[500px] md:min-w-60' 
          src={assets.header_img} alt=""/>
      </div>
    </div>
  )
}

export default Header