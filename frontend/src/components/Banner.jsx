import React from 'react' // Importing React to create components
import { assets } from '../assets/assets' // Importing assets to use images
import { useNavigate } from 'react-router-dom' // Importing useNavigate for page navigation

const Banner = () => {
    const navigate = useNavigate() // Hook to navigate between routes

    return (
        <div className='flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'> {/* Outer container with responsive padding and background */}
        
            {/*---- Left Side---- */}
            <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'> {/* Left side content container with spacing and padding */}
                <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'> {/* Responsive font sizes and bold text */}
                    <p>Book Appointment</p> {/* Heading text */}
                    <p className='mt-4'>with 100+ Trusted Doctor</p> {/* Subheading with margin */}
                </div>
                <button onClick={() => { navigate('/login'); scrollTo(0, 0) }} className="bg-white text-orange-600 font-semibold text-sm sm:text-base px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all"> {/* Button for navigation to login page */}
                Create Account</button> {/* Button text */}
            </div>

            {/*---- Right Side---- */}
            <div className='hidden md:block md:w-1/2 lg:w-[450px] relative'> {/* Right side container hidden on smaller screens */}
                <img className='w-full absolute bottom-0 right-0 max-w-md -mb-6' 
                    src={assets.appointment_img} alt="" /> {/* Image for the banner with responsive positioning */}
            </div>
        </div>
    )
}

export default Banner // Exporting the Banner component to use in other parts of the app
