import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const MyAppointments = () => {
  const { backendUrl, token, getDoctorsData } = useContext(AppContext)

  const [appointments, setAppointments] = useState([])

  const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split('_')
    return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
  }

  const navigate = useNavigate()

  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/user/appointments', { headers: { token } })

      if (data.success) {
        setAppointments(data.appointments.reverse())
        console.log(data.appointments);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  const cancelAppointment = async (appointmentId) => {
    try {

      const { data } = await axios.post(backendUrl + '/api/user/cancel-appointment', { appointmentId }, { headers: { token } })
      if (data.success) {
        toast.success(data.message)
        getUserAppointments()
        getDoctorsData()
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Appointment Payment',
      description: 'Appointment Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        console.log(response)

        try {
          const { data } = await axios.post(backendUrl + "/api/user/verify-Razorpay", response, { headers: { token } });
          if (data.success) {
            navigate('/my-appointments')
            getUserAppointments()
          }
        } catch (error) {
          console.log(error)
          toast.error(error.message)
        }
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  }

  const appointmentRazorpay = async (appointmentId) => {
    try {
      const { data } = await axios.post(backendUrl + '/api/user/payment-razorpay', { appointmentId }, { headers: { token } })
      if (data.success) {
        initPay(data.order)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (token) {
      getUserAppointments()
    }
  }, [token])

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">My Appointments</h1>

      <div className="space-y-6">
        {
          appointments.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 flex flex-col md:flex-row gap-6">
                {/* Doctor Image */}
                <div className="flex-shrink-0">
                  <img
                    src={item.docData.image}
                    className="w-32 h-32 rounded-lg object-cover shadow-md bg-primary"
                  />
                </div>

                {/* Doctor Info */}
                <div className="flex-grow space-y-3">
                  <h2 className="text-xl font-semibold text-gray-800">{item.docData.name}</h2>
                  <p className="text-[#F87027] font-medium">{item.docData.speciality}</p>

                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-600">Address:</p>
                    <p className="text-gray-700">{item.docData.address.line1}</p>
                    <p className="text-gray-700">{item.docData.address.line2}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-600">Date & Time:</span>
                    <span className="text-gray-700 bg-orange-50 px-3 py-1 rounded-full text-sm">
                      {slotDateFormat(item.slotDate)} | {item.slotTime}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 justify-center min-w-[140px]">
                  {!item.cancelled && item.payment && !item.isCompleted && <button className='sm:min-w-48 py-2 border rounded text-stone-500 bg-indigo-50'>Paid</button>}
                  {!item.cancelled && !item.payment && !item.isCompleted && <button onClick={() => appointmentRazorpay(item._id)} className="bg-[#F87027] text-white px-4 py-2 rounded-lg hover:bg-[#e05615] transition-colors duration-200 font-medium shadow-md hover:shadow-lg">
                    Pay Online
                  </button>}
                  {!item.cancelled && !item.isCompleted && <button onClick={() => cancelAppointment(item._id)} className="border-2 border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors duration-200 font-medium">
                    Cancel appointment
                  </button>}
                  {item.cancelled && !item.isCompleted && <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500'>Appointment Cancelled</button>}
                  {item.isCompleted && <button className='sm:min-w-48 py-2 border border-green-500 rounded text-green-500'>Completed</button>}
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MyAppointments