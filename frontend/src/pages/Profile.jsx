import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets.js'
import axios from 'axios'
import { toast } from 'react-toastify'

const Profile = () => {
  
  const { userData, setUserData, token, backendUrl, loadUserProfileData } = useContext(AppContext)

  const [isEdit, setIsEdit] = useState(false)
  const [image, setImage] = useState(false)

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData()
      formData.append('name', userData.name)
      formData.append('phone', userData.phone)
      formData.append('address', JSON.stringify(userData.address))
      formData.append('gender', userData.gender)
      formData.append('dob', userData.dob)

      image && formData.append('image', image)

      const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, { headers: { token } })

      if (data.success) {
        toast.success(data.message)
        await loadUserProfileData()
        setIsEdit(false)
        setImage(false)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return userData && (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 sm:p-6 lg:p-8">
      <div className="bg-white shadow-xl rounded-xl overflow-hidden">
        {/* Profile Header */}
        <div className="bg-gray-50 p-6 flex flex-col items-center">
          {/* Profile Image */}
          {
            isEdit
            ? <label htmlFor="image" className="relative group cursor-pointer">
                <img 
                  className='w-32 h-32 md:w-36 md:h-36 rounded-full object-cover group-hover:opacity-75 transition-opacity' 
                  src={image ? URL.createObjectURL(image) : userData.image} 
                  alt="Profile" 
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <img className='w-10 h-10' src={assets.upload_icon} alt="Upload" />
                </div>
                <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden/>
              </label>
            : <img 
                src={userData.image} 
                alt="Profile" 
                className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-[#F87027]" 
              />
          }

          {/* User name - editable in edit mode */}
          {
            isEdit
              ? <input type="text" value={userData.name} 
                  onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} 
                  className="mt-4 px-4 py-2 border rounded-lg focus:outline-none focus:border-[#F87027] w-full max-w-md text-center" 
                />
              : <p className="mt-4 text-xl md:text-2xl font-semibold text-gray-800">{userData.name}</p>
          }
        </div>

        <hr className="my-6 border-gray-200" />

        <div className="px-6 space-y-6">
          <p className="text-[#F87027] font-semibold text-lg md:text-xl">CONTACT INFORMATION</p>
          <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
            {/* Email display */}
            <div className="space-y-2">
              <p className="text-sm text-gray-600 font-medium">Email id:</p>
              <p className="text-gray-800">{userData.email}</p>
            </div>

            {/* Phone number - editable in edit mode */}
            <div className="space-y-2">
              <p className="text-sm text-gray-600 font-medium">Phone:</p>
              {
                isEdit
                  ? <input type="text" value={userData.phone} 
                      onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} 
                      className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#F87027] w-full" 
                    />
                  : <p className="text-gray-800">{userData.phone}</p>
              }
            </div>

            {/* Address - editable in edit mode */}
            <div className="space-y-2">
              <p className="text-sm text-gray-600 font-medium">Address:</p>
              {
                isEdit
                  ? <div className="space-y-2">
                      <input 
                        onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} 
                        value={userData.address.line1} 
                        type="text" 
                        className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#F87027] w-full" 
                      />
                      <input 
                        onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} 
                        value={userData.address.line2} 
                        type="text" 
                        className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#F87027] w-full" 
                      />
                    </div>
                  : <p className="text-gray-800">
                      {userData.address.line1}<br />{userData.address.line2}
                    </p>
              }
            </div>
          </div>
        </div>

        <div className="px-6 mt-6 space-y-6">
          <p className="text-[#F87027] font-semibold text-lg md:text-xl">BASIC INFORMATION</p>
          <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
            {/* Gender - editable in edit mode */}
            <div className="space-y-2">
              <p className="text-sm text-gray-600 font-medium">Gender:</p>
              {
                isEdit
                  ? <select 
                      onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} 
                      value={userData.gender}
                      className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#F87027] w-full"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  : <p className="text-gray-800">{userData.gender}</p>
              }
            </div>

            {/* Date of Birth - editable in edit mode */}
            <div className="space-y-2">
              <p className="text-sm text-gray-600 font-medium">Birthday:</p>
              {
                isEdit 
                  ? <input 
                      type="date" 
                      onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} 
                      value={userData.dob}
                      className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#F87027] w-full" 
                    />
                  : <p className="text-gray-800">{userData.dob}</p>
              }
            </div>
          </div>
        </div>

        <div className="p-6 flex justify-center">
          {
            isEdit
              ? <button 
                  onClick={updateUserProfileData} 
                  className="w-full md:w-auto bg-[#F87027] text-white px-6 py-2 rounded-lg hover:bg-[#e05615] transition-colors duration-200"
                >
                  Save Information
                </button>
              : <button 
                  onClick={() => setIsEdit(true)}
                  className="w-full md:w-auto border-2 border-[#F87027] text-[#F87027] px-6 py-2 rounded-lg hover:bg-[#F87027] hover:text-white transition-colors duration-200"
                >
                  Edit Profile
                </button>
          }
        </div>
      </div>
    </div>
  )
}

export default Profile