import React, { useEffect } from "react"
import { assets } from "../../assets/assets"
import { useContext } from "react"
import { AdminContext } from "../../context/AdminContext"
import { AppContext } from "../../context/AppContext"

const AllAppointments = () => {
  const { aToken, appointments, cancelAppointment, getAllAppointments } = useContext(AdminContext)
  const { slotDateFormat, calculateAge, currency } = useContext(AppContext)

  useEffect(() => {
    if (aToken) {
      getAllAppointments()
    }
  }, [aToken, getAllAppointments]) 

  return (
    <div className="container mx-auto px-4 py-8">
      <p className="text-3xl font-bold mb-6 text-gray-800">All Appointments</p>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="grid grid-cols-7 gap-4 p-4 bg-gray-100 font-semibold text-gray-700">
          <p className="text-center">#</p>
          <p className="text-center">Patient</p>
          <p className="text-center">Age</p>
          <p className="text-center">Date & Time</p>
          <p className="text-center">Doctor</p>
          <p className="text-center">Fees</p>
          <p className="text-center">Action</p>
        </div>
        {appointments.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-7 gap-4 p-4 border-b border-gray-200 items-center hover:bg-gray-50 transition-colors"
          >
            <p className="text-center text-gray-600">{index + 1}</p>
            <div className="flex items-center justify-center space-x-2">
              <img
                src={item.userData.image || "/placeholder.svg"}
                alt=""
                className="w-8 h-8 rounded-full object-cover"
              />
              <p className="text-sm font-medium text-gray-800">{item.userData.name}</p>
            </div>
            <p className="text-center text-gray-600">{calculateAge(item.userData.dob)}</p>
            <p className="text-center text-sm text-gray-600">
              {slotDateFormat(item.slotDate)}, <span className="font-medium">{item.slotTime}</span>
            </p>
            <div className="flex items-center justify-center space-x-2">
              <img
                src={item.docData.image || "/placeholder.svg"}
                alt=""
                className="w-8 h-8 rounded-full object-cover"
              />
              <p className="text-sm font-medium text-gray-800">{item.docData.name}</p>
            </div>
            <p className="text-center font-medium text-gray-800">
              {currency}
              {item.amount}
            </p>
            {item.cancelled ? (
              <p className="text-center text-red-500 font-medium">Cancelled</p>
            ) : item.isCompleted ? (
              <p className="text-center text-green-500 font-medium">Completed</p>
            ) : (
              <div className="flex justify-center">
                <img
                  onClick={() => cancelAppointment(item._id)}
                  src={assets.cancel_icon}
                  alt=""
                  className="w-6 h-6 cursor-pointer hover:opacity-75 transition-opacity"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllAppointments

