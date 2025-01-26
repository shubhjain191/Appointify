import React from "react"
import { useContext, useEffect } from "react"
import { DoctorContext } from "../../context/DoctorContext"
import { AppContext } from "../../context/AppContext"
import { assets } from "../../assets/assets"

const DoctorAppointments = () => {
  const { dToken, appointments, getAppointments, cancelAppointment, completeAppointment } = useContext(DoctorContext)
  const { slotDateFormat, calculateAge, currency } = useContext(AppContext)

  useEffect(() => {
    if (dToken) {
      getAppointments()
    }
  }, [dToken, getAppointments]) // Added getAppointments to dependencies

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 space-y-6">
      <p className="mb-3 text-2xl font-semibold text-[#F87027]">All Appointments</p>

      <div className="bg-white border border-gray-200 rounded-lg shadow-md text-sm max-h-[calc(80vh-4rem)] overflow-y-auto">
        <div className="max-sm:hidden grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 py-4 px-6 bg-gray-50 font-medium text-gray-700 sticky top-0 z-10">
          <p>#</p>
          <p>Patient</p>
          <p>Payment</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Fees</p>
          <p>Action</p>
        </div>
        {appointments.reverse().map((item, index) => (
          <div
            className="flex flex-col sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-2 sm:gap-1 items-start sm:items-center text-gray-600 py-4 px-4 sm:px-6 border-b hover:bg-orange-50 transition-colors"
            key={index}
          >
            <p className="max-sm:hidden">{index + 1}</p>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <img
                src={item.userData.image || "/placeholder.svg"}
                className="w-10 h-10 rounded-full object-cover border-2 border-[#F87027]"
                alt=""
              />
              <p className="font-medium">{item.userData.name}</p>
            </div>
            <div>
              <p className="text-xs inline-block border border-[#F87027] px-2 py-1 rounded-full">
                {item.payment ? "Online" : "CASH"}
              </p>
            </div>
            <p className="max-sm:hidden">{calculateAge(item.userData.dob)}</p>
            <p className="text-sm">
              {slotDateFormat(item.slotDate)}, <span className="font-medium">{item.slotTime}</span>
            </p>
            <p className="font-medium text-[#F87027]">
              {currency}
              {item.amount}
            </p>
            {item.cancelled ? (
              <p className="text-red-500 text-xs font-medium px-2 py-1 bg-red-100 rounded-full">Cancelled</p>
            ) : item.isCompleted ? (
              <p className="text-green-500 text-xs font-medium px-2 py-1 bg-green-100 rounded-full">Completed</p>
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
  )
}

export default DoctorAppointments

