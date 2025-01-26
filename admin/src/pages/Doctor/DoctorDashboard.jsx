import React from "react"
import { useContext } from "react"
import { useEffect } from "react"
import { DoctorContext } from "../../context/DoctorContext"
import { assets } from "../../assets/assets"
import { AppContext } from "../../context/AppContext"

const DoctorDashboard = () => {
  const { dToken, dashData, getDashData, cancelAppointment, completeAppointment } = useContext(DoctorContext)
  const { slotDateFormat, currency } = useContext(AppContext)

  useEffect(() => {
    if (dToken) {
      getDashData()
    }
  }, [dToken, getDashData]) // Added getDashData to dependencies

  return (
    dashData && (
      <div className="max-w-7xl mx-auto p-4 sm:p-6 space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-center gap-4 bg-white p-6 rounded-lg border-2 border-gray-100 shadow-md hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer">
            <img className="w-16 h-16 object-contain" src={assets.earning_icon || "/placeholder.svg"} alt="" />
            <div>
              <p className="text-2xl font-bold text-[#F87027]">
                {currency} {dashData.earnings}
              </p>
              <p className="text-gray-600">Earnings</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white p-6 rounded-lg border-2 border-gray-100 shadow-md hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer">
            <img className="w-16 h-16 object-contain" src={assets.appointments_icon || "/placeholder.svg"} alt="" />
            <div>
              <p className="text-2xl font-bold text-[#F87027]">{dashData.appointments}</p>
              <p className="text-gray-600">Appointments</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white p-6 rounded-lg border-2 border-gray-100 shadow-md hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer">
            <img className="w-16 h-16 object-contain" src={assets.patients_icon || "/placeholder.svg"} alt="" />
            <div>
              <p className="text-2xl font-bold text-[#F87027]">{dashData.patients}</p>
              <p className="text-gray-600">Patients</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex items-center gap-3 px-6 py-4 bg-gray-50 border-b">
            <img src={assets.list_icon || "/placeholder.svg"} alt="" className="w-6 h-6" />
            <p className="text-lg font-semibold text-[#F87027]">Latest Bookings</p>
          </div>

          <div className="divide-y divide-gray-200">
            {dashData.latestAppointments.slice(0, 5).map((item, index) => (
              <div className="flex items-center px-6 py-4 gap-4 hover:bg-gray-50 transition-colors" key={index}>
                <img
                  className="rounded-full w-12 h-12 object-cover border-2 border-[#F87027]"
                  src={item.userData.image || "/placeholder.svg"}
                  alt=""
                />
                <div className="flex-1">
                  <p className="text-gray-800 font-medium">{item.userData.name}</p>
                  <p className="text-gray-600 text-sm">Booking on {slotDateFormat(item.slotDate)}</p>
                </div>
                {item.cancelled ? (
                  <p className="text-red-500 text-xs font-medium px-3 py-1 bg-red-100 rounded-full">Cancelled</p>
                ) : item.isCompleted ? (
                  <p className="text-green-500 text-xs font-medium px-3 py-1 bg-green-100 rounded-full">Completed</p>
                ) : (
                  <div className="flex gap-2">
                    <img
                      onClick={() => cancelAppointment(item._id)}
                      className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
                      src={assets.cancel_icon || "/placeholder.svg"}
                      alt=""
                    />
                    <img
                      onClick={() => completeAppointment(item._id)}
                      className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
                      src={assets.tick_icon || "/placeholder.svg"}
                      alt=""
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  )
}

export default DoctorDashboard

