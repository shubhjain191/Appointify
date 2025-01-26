import React, { useContext, useEffect } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'

const Dashboard = () => {

  const { aToken, getDashData, cancelAppointment, dashData } = useContext(AdminContext)
  const { slotDateFormat } = useContext(AppContext)

  useEffect(() => {
    if (aToken) {
      getDashData()
    }
  }, [aToken, getDashData])

  return dashData && (
    <div className='m-5 max-w-7xl mx-auto'>

      <div className='flex flex-wrap gap-3 justify-center sm:justify-start'>
        <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded-lg border-2 border-gray-100 border-l-4 border-l-[#F87027] cursor-pointer hover:scale-105 hover:border-[#F87027] transition-all shadow-md'>
          <img className='w-14' src={assets.doctor_icon || "/placeholder.svg"} alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashData.doctors}</p>
            <p className='text-gray-400'>Doctors</p>
          </div>
        </div>
        <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded-lg border-2 border-gray-100 border-l-4 border-l-[#F87027] cursor-pointer hover:scale-105 hover:border-[#F87027] transition-all shadow-md'>
          <img className='w-14' src={assets.appointments_icon || "/placeholder.svg"} alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashData.appointments}</p>
            <p className='text-gray-400'>Appointments</p>
          </div>
        </div>
        <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded-lg border-2 border-gray-100 border-l-4 border-l-[#F87027] cursor-pointer hover:scale-105 hover:border-[#F87027] transition-all shadow-md'>
          <img className='w-14' src={assets.patients_icon || "/placeholder.svg"} alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashData.patients}</p>
            <p className='text-gray-400'>Patients</p></div>
        </div>
      </div>

      <div className='bg-white mt-8 rounded-lg shadow-lg overflow-hidden'>
        <div className='flex items-center gap-2.5 px-6 py-4 bg-gray-50 border-b'>
          <img src={assets.list_icon || "/placeholder.svg"} alt="" className='w-6 h-6' />
          <p className='font-semibold text-lg text-[#F87027]'>Latest Bookings</p>
        </div>

        <div className='divide-y divide-gray-200'>
          {dashData.latestAppointments.slice(0, 5).map((item, index) => (
            <div className='flex items-center px-6 py-4 gap-4 hover:bg-orange-50 transition-colors' key={index}>
              <img className='rounded-full w-12 h-12 object-cover' src={item.docData.image || "/placeholder.svg"} alt="" />
              <div className='flex-1'>
                <p className='text-gray-800 font-medium'>{item.docData.name}</p>
                <p className='text-gray-600 text-sm'>Booking on {slotDateFormat(item.slotDate)}</p>
              </div>
              {item.cancelled ? (
                <p className='text-red-500 text-sm font-medium px-3 py-1 bg-red-100 rounded-full'>Cancelled</p>
              ) : item.isCompleted ? (
                <p className='text-[#F87027] text-sm font-medium px-3 py-1 bg-orange-100 rounded-full'>Completed</p>
              ) : (
                <img onClick={() => cancelAppointment(item._id)} className='w-8 cursor-pointer hover:opacity-75 transition-opacity' src={assets.cancel_icon || "/placeholder.svg"} alt="" />
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Dashboard
