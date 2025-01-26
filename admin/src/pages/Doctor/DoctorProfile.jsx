import React, { useContext, useState } from "react"
import { DoctorContext } from "../../context/DoctorContext"
import { AppContext } from "../../context/AppContext"
import { toast } from "react-toastify"
import axios from "axios"

const DoctorProfile = () => {
  const { dToken, profileData, setProfileData, getProfileData, backendUrl } = useContext(DoctorContext)
  const { currency } = useContext(AppContext)
  const [isEdit, setIsEdit] = useState(false)

  const updateProfile = async () => {
    try {
      const updateData = {
        address: profileData.address,
        fees: profileData.fees,
        about: profileData.about,
        available: profileData.available,
      }

      const { data } = await axios.post(backendUrl + "/api/doctor/update-profile", updateData, { headers: { dToken } })

      if (data.success) {
        toast.success(data.message)
        setIsEdit(false)
        getProfileData()
      } else {
        toast.error(data.message)
      }

      setIsEdit(false)
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  }

  return (
    profileData && (
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <img
              className="bg-[#F87027]/80 w-full rounded-lg shadow-md object-cover h-64 md:h-auto"
              src={profileData.image || "/placeholder.svg"}
              alt={profileData.name}
            />
          </div>

          <div className="flex-1 border border-stone-200 rounded-lg p-6 md:p-8 bg-white shadow-lg">
            <p className="flex items-center gap-2 text-2xl md:text-3xl font-semibold text-[#F87027]">
              {profileData.name}
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-2 text-gray-700">
              <p className="font-medium">
                {profileData.degree} - {profileData.speciality}
              </p>
              <span className="py-1 px-3 border border-[#F87027] text-[#F87027] text-xs rounded-full">
                {profileData.experience}
              </span>
            </div>

            <div className="mt-6">
              <p className="flex items-center gap-1 text-lg font-medium text-gray-800 mb-2">About :</p>
              <div className="text-sm text-gray-600 max-w-[700px]">
                {isEdit ? (
                  <textarea
                    onChange={(e) => setProfileData((prev) => ({ ...prev, about: e.target.value }))}
                    className="w-full outline-none border border-gray-300 rounded p-2 focus:border-[#F87027] transition-colors"
                    rows={8}
                    value={profileData.about}
                  />
                ) : (
                  <p className="leading-relaxed">{profileData.about}</p>
                )}
              </div>
            </div>

            <p className="text-gray-700 font-medium mt-6 flex items-center">
              Appointment fee:
              <span className="text-[#F87027] ml-2">
                {currency}
                {isEdit ? (
                  <input
                    type="number"
                    onChange={(e) => setProfileData((prev) => ({ ...prev, fees: e.target.value }))}
                    value={profileData.fees}
                    className="w-20 ml-2 p-1 border border-gray-300 rounded focus:border-[#F87027] outline-none"
                  />
                ) : (
                  profileData.fees
                )}
              </span>
            </p>

            <div className="flex gap-2 py-4">
              <p className="font-medium text-gray-700">Address:</p>
              <div className="text-sm text-gray-600">
                {isEdit ? (
                  <>
                    <input
                      type="text"
                      onChange={(e) =>
                        setProfileData((prev) => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))
                      }
                      value={profileData.address.line1}
                      className="w-full mb-2 p-2 border border-gray-300 rounded focus:border-[#F87027] outline-none"
                    />
                    <input
                      type="text"
                      onChange={(e) =>
                        setProfileData((prev) => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))
                      }
                      value={profileData.address.line2}
                      className="w-full p-2 border border-gray-300 rounded focus:border-[#F87027] outline-none"
                    />
                  </>
                ) : (
                  <>
                    {profileData.address.line1}
                    <br />
                    {profileData.address.line2}
                  </>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 py-2">
              <input
                type="checkbox"
                id="available"
                onChange={() => setProfileData((prev) => ({ ...prev, available: !prev.available }))}
                checked={profileData.available}
                className="w-4 h-4 text-[#F87027] border-gray-300 rounded focus:ring-[#F87027]"
              />
              <label htmlFor="available" className="text-sm font-medium text-gray-700">
                Available
              </label>
            </div>

            {isEdit ? (
              <button
                onClick={updateProfile}
                className="px-6 py-2 bg-[#F87027] text-white text-sm font-medium rounded-full mt-6 hover:bg-[#F87027]/90 transition-all"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => setIsEdit((prev) => !prev)}
                className="px-6 py-2 border border-[#F87027] text-[#F87027] text-sm font-medium rounded-full mt-6 hover:bg-[#F87027] hover:text-white transition-all"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    )
  )
}

export default DoctorProfile