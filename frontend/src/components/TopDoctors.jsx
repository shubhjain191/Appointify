import React, { useContext } from 'react'  // Importing necessary hooks and components from React
import { useNavigate } from 'react-router-dom'  // Importing useNavigate to programmatically navigate between routes
import { AppContext } from '../context/AppContext'  // Importing AppContext to access the 'doctors' data

const TopDoctors = () => {
    const navigate = useNavigate()  // Hook to programmatically navigate between pages
    const { doctors } = useContext(AppContext)  // Accessing the doctors' data from the AppContext
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/2 text-center text-sm">Simply browse through our broad range of trustworthy doctors</p>
      
      {/* Displaying the doctors in a grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {doctors.slice(0, 10).map((item, index) => (
          // Added 'group' class to the entire card div for hover effects
          <div 
          onClick={() => {navigate(`/appointment/${item._id}`); scrollTo(0,0)}}  // On click, navigate to the specific doctor's appointment page
            key={index}  // Unique key for each doctor card
            className="group bg-white border border-gray-100 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-100 active:shadow-md active:translate-y-0"
          >
            <div className="relative">
              {/* Displaying the doctor's image */}
              <img src={item.image || "/placeholder.svg"} alt="" className="w-full h-52 object-cover bg-blue-50"/>
              <div className="absolute top-4 left-4">
                {/* Showing availability status on the doctor's card */}
                <div className="flex items-center gap-1 bg-white/95 px-3 py-1 rounded-full shadow-sm">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>  {/* Green dot indicating availability */}
                  <p className="text-xs text-green-600 font-medium">Available</p>
                </div>
              </div>
            </div>
            {/* Doctor's information section */}
            <div className="p-4 transition-colors duration-300 group-hover:bg-[#F87027]">
              {/* Doctor's name */}
              <p className="font-medium text-gray-900 text-sm group-hover:text-white transition-colors duration-300">{item.name}</p>
              {/* Doctor's specialty */}
              <p className="text-gray-500 text-xs mt-0.5 group-hover:text-white transition-colors duration-300">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Button to show more doctors */}
      <button onClick={() => {
    navigate('/doctors'); 
    scrollTo(0, 0);
  }} 
  className="mt-8 mx-auto flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-[#F87027] rounded-full hover:bg-[#e05d1a] transition-colors duration-300 shadow-md hover:shadow-lg">
  more
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
</button>
    </div>
  )
}

export default TopDoctors
