import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const MyAppointments = () => {
 const { doctors } = useContext(AppContext)
 
 return (
   <div className="max-w-6xl mx-auto px-4 py-8">
     <h1 className="text-2xl font-bold text-gray-800 mb-8">My Appointments</h1>
     
     <div className="space-y-6">
       {
         doctors.slice(0,2).map((item, index) => (
           <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
             <div className="p-6 flex flex-col md:flex-row gap-6">
               {/* Doctor Image */}
               <div className="flex-shrink-0">
                 <img
                   src={item.image} 
                   alt={item.name}
                   className="w-32 h-32 rounded-lg object-cover shadow-md bg-primary" 
                 />
               </div>

               {/* Doctor Info */}
               <div className="flex-grow space-y-3">
                 <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                 <p className="text-[#F87027] font-medium">{item.speciality}</p>
                 
                 <div className="space-y-1">
                   <p className="text-sm font-medium text-gray-600">Address:</p>
                   <p className="text-gray-700">{item.address.line1}</p>
                   <p className="text-gray-700">{item.address.line2}</p>
                 </div>

                 <div className="flex items-center gap-2">
                   <span className="text-sm font-medium text-gray-600">Date & Time:</span>
                   <span className="text-gray-700 bg-orange-50 px-3 py-1 rounded-full text-sm">
                     20, Jan, 2025 | 12:00 PM
                   </span>
                 </div>
               </div>

               {/* Action Buttons */}
               <div className="flex flex-col gap-3 justify-center min-w-[140px]">
                 <button className="bg-[#F87027] text-white px-4 py-2 rounded-lg hover:bg-[#e05615] transition-colors duration-200 font-medium shadow-md hover:shadow-lg">
                   Pay Online
                 </button>
                 <button className="border-2 border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors duration-200 font-medium">
                   Cancel appointment
                 </button>
               </div>
             </div>
           </div>
         ))
       }
     </div>

     {/* Empty State */}
     {doctors.length === 0 && (
       <div className="text-center py-12">
         <p className="text-gray-500 text-lg">No appointments scheduled</p>
       </div>
     )}
   </div>
 )
}

export default MyAppointments