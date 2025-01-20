import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Profile = () => {
  const [userData, setUserData] = useState({
    name: 'Edward Vincent',
    image: assets.profile_pic,
    email: 'richardjameswap@gmail.com',
    phone: '+1 234 567 8901',
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London"
    },
    gender: 'Male',
    dob: '1990-01-01',
  })

  const [isEdit, setIsEdit] = useState(true)
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
      <div className="flex flex-col items-center mb-6">
        <img src={userData.image} alt="" className="w-32 h-32 rounded-full object-cover border-4 border-[#F87027]" />

        {
          isEdit
            ? <input type="text" value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} 
                className="mt-4 px-4 py-2 border rounded-lg focus:outline-none focus:border-[#F87027] w-full max-w-md text-center" />
            : <p className="mt-4 text-2xl font-semibold text-gray-800">{userData.name}</p>
        }
      </div>

      <hr className="my-6 border-gray-200" />
      <div className="space-y-6">
        <p className="text-[#F87027] font-semibold text-xl">CONTACT INFORMATION</p>
        <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
          <div className="space-y-2">
            <p className="text-sm text-gray-600 font-medium">Email id:</p>
            <p className="text-gray-800">{userData.email}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-600 font-medium">Phone:</p>
            {
              isEdit
                ? <input type="text" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} 
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#F87027] w-full" />
                : <p className="text-gray-800">{userData.phone}</p>
            }
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-600 font-medium">Address:</p>
            {
              isEdit
                ? <p className="space-y-2">
                    <input onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} 
                           value={userData.address.line1} type="text" 
                           className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#F87027] w-full" />
                    <input onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} 
                           value={userData.address.line2} type="text" 
                           className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#F87027] w-full" />
                  </p>
                : <p className="text-gray-800">
                    {userData.address.line1}<br />{userData.address.line2}
                  </p>
            }
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        <p className="text-[#F87027] font-semibold text-xl">BASIC INFORMATION</p>
        <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
          <div className="space-y-2">
            <p className="text-sm text-gray-600 font-medium">Gender:</p>
            {
              isEdit
                ? <select onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#F87027] w-full">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                : <p className="text-gray-800">{userData.gender}</p>
            }
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-600 font-medium">Birthday:</p>
            {
              isEdit ? <input type="date" onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob}
                             className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#F87027] w-full" />
                : <p className="text-gray-800">{userData.dob}</p>
            }
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        {
          isEdit
            ? <button onClick={() => setIsEdit(false)} 
                className="bg-[#F87027] text-white px-6 py-2 rounded-lg hover:bg-[#e05615] transition-colors duration-200">
                Save Information
              </button>
            : <button onClick={() => setIsEdit(true)}
                className="border-2 border-[#F87027] text-[#F87027] px-6 py-2 rounded-lg hover:bg-[#F87027] hover:text-white transition-colors duration-200">
                Edit
              </button>
        }
      </div>

    </div>
  )
}

export default Profile