import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate()

  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div>
      <p className='text-grey-600'>Browse through the doctors specialist</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`px-1 py-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={() => setShowFilter(prev => !prev)}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} 
             className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:text-[#F87027] ${speciality === "General physician" ? "bg-indigo-100 text-[#F87027]" : ""}`}>
             General physician</p>
          <p onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} 
             className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:text-[#F87027] ${speciality === "Gynecologist" ? "bg-indigo-100 text-[#F87027]" : ""}`}>
             Gynecologist</p>
          <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} 
             className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:text-[#F87027] ${speciality === "Dermatologist" ? "bg-indigo-100 text-[#F87027]" : ""}`}>
             Dermatologist</p>
          <p onClick={() => speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} 
             className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:text-[#F87027] ${speciality === "Pediatricians" ? "bg-indigo-100 text-[#F87027]" : ""}`}>
             Pediatricians</p>
          <p onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} 
             className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:text-[#F87027] ${speciality === "Neurologist" ? "bg-indigo-100 text-[#F87027]" : ""}`}>
             Neurologist</p>
          <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} 
             className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:text-[#F87027] ${speciality === "Gastroenterologist" ? "bg-indigo-100 text-[#F87027]" : ""}`}>
             Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterDoc.map((item, index) => (
              <div onClick={() => navigate(`/appointment/${item._id}`)} key={index} 
                className="group bg-white border border-gray-100 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-100 active:shadow-md active:translate-y-0">
                <div className="relative">
                  <img src={item.image || "/placeholder.svg"} alt="" className="w-full h-52 object-cover bg-blue-50"/>
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-1 bg-white/95 px-3 py-1 rounded-full shadow-sm">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <p className="text-xs text-green-600 font-medium">Available</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 transition-colors duration-300 group-hover:bg-[#F87027]">
                  <p className="font-medium text-gray-900 text-sm group-hover:text-white transition-colors duration-300">{item.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5 group-hover:text-white transition-colors duration-300">{item.speciality}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors