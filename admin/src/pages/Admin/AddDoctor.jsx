import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { toast } from "react-toastify";
import axios from "axios";
import { AdminContext } from "../../context/AdminContext";
import { AppContext } from "../../context/AppContext";

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");
  const [speciality, setSpeciality] = useState("General physician");
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const { backendUrl } = useContext(AdminContext);
  const { aToken } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (!docImg) {
        return toast.error("Image Not Selected");
      }

      const formData = new FormData();

      formData.append("image", docImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fees", Number(fees));
      formData.append("about", about);
      formData.append("speciality", speciality);
      formData.append("degree", degree);
      formData.append(
        "address",
        JSON.stringify({ line1: address1, line2: address2 })
      );

      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });

      const { data } = await axios.post(
        backendUrl + '/api/admin/add-doctor',
        formData,
        { headers: { aToken } }
      );
      if (data.success) {
        toast.success(data.message);
        setDocImg(false);
        setName("");
        setPassword("");
        setEmail("");
        setAddress1("");
        setAddress2("");
        setDegree("");
        setAbout("");
        setFees("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center px-20 py-4">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="bg-[#F87027] text-white p-6">
          <h2 className="text-2xl font-bold">Add New Doctor Profile</h2>
        </div>

        <div className="p-8 space-y-6">
          <div className="flex justify-center mb-6">
            <label htmlFor="doc-img" className="cursor-pointer">
              <div className="w-32 h-32 rounded-full border-4 border-[#F87027]/50 overflow-hidden shadow-lg">
                <img
                  className="w-full h-full object-cover"
                  src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
                  alt="Doctor Profile"/>
              </div>
              <input
                onChange={(e) => setDocImg(e.target.files[0])}
                type="file" id="doc-img" hidden />
              <p className="text-center mt-2 text-[#F87027] font-medium">
                Upload Picture</p>
            </label>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div className="space-y-2">
              <label className="text-[#F87027] font-semibold">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border-2 border-[#F87027]/30 rounded-lg focus:ring-2 focus:ring-[#F87027]/50 focus:outline-none transition duration-300"
                placeholder="Doctor Name"
                required
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-[#F87027] font-semibold">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-2 border-[#F87027]/30 rounded-lg focus:ring-2 focus:ring-[#F87027]/50 focus:outline-none transition duration-300"
                placeholder="Email"
                required
              />
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="text-[#F87027] font-semibold">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-[#F87027]/30 rounded-lg focus:ring-2 focus:ring-[#F87027]/50 focus:outline-none transition duration-300"
                placeholder="Password"
                required
              />
            </div>

            {/* Experience Dropdown */}
            <div className="space-y-2">
              <label className="text-[#F87027] font-semibold">Experience</label>
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full px-4 py-3 border-2 border-[#F87027]/30 rounded-lg focus:ring-2 focus:ring-[#F87027]/50 focus:outline-none transition duration-300"
              >
                {[
                  "1 Year",
                  "2 Years",
                  "3 Years",
                  "4 Years",
                  "5 Years",
                  "6 Years",
                  "8 Years",
                  "9 Years",
                  "10 Years",
                ].map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Additional Sections */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* Speciality */}
            <div className="space-y-2">
              <label className="text-[#F87027] font-semibold">Speciality</label>
              <select
                value={speciality}
                onChange={(e) => setSpeciality(e.target.value)}
                className="w-full px-4 py-3 border-2 border-[#F87027]/30 rounded-lg focus:ring-2 focus:ring-[#F87027]/50 focus:outline-none transition duration-300"
              >
                {[
                  "General physician",
                  "Gynecologist",
                  "Dermatologist",
                  "Pediatricians",
                  "Neurologist",
                  "Gastroenterologist",
                ].map((spec) => (
                  <option key={spec} value={spec}>
                    {spec}
                  </option>
                ))}
              </select>
            </div>

            {/* Degree */}
            <div className="space-y-2">
              <p className="text-[#F87027] font-semibold">Education</p>
              <input
                onChange={(e) => setDegree(e.target.value)}
                value={degree}
                className="w-full px-4 py-3 border-2 border-[#F87027]/30 rounded-lg focus:ring-2 focus:ring-[#F87027]/50 focus:outline-none transition duration-300"
                type="text"
                placeholder="Degree"
                required
              />
            </div>

            <div className="space-y-2">
              <p className="text-[#F87027] font-semibold">Address</p>
              <input
                onChange={(e) => setAddress1(e.target.value)}
                value={address1}
                className="w-full px-4 py-3 border-2 border-[#F87027]/30 rounded-lg focus:ring-2 focus:ring-[#F87027]/50 focus:outline-none transition duration-300"
                type="text"
                placeholder="Address 1"
                required/>
              <input 
                onChange={(e) => setAddress2(e.target.value)}
                value={address2}
                className="w-full px-4 py-3 border-2 border-[#F87027]/30 rounded-lg focus:ring-2 focus:ring-[#F87027]/50 focus:outline-none transition duration-300"
                type="text"
                placeholder="Address 2"
                required/>
            </div>

            {/* Fees */}
            <div className="space-y-2">
              <label className="text-[#F87027] font-semibold">
                Consultation Fees
              </label>
              <input
                type="number"
                value={fees}
                onChange={(e) => setFees(e.target.value)}
                className="w-full px-4 py-3 border-2 border-[#F87027]/30 rounded-lg focus:ring-2 focus:ring-[#F87027]/50 focus:outline-none transition duration-300"
                placeholder="Consultation Fees"
                required
              />
            </div>
          </div>

          {/* About Section */}
          <div className="space-y-2 mt-6">
            <label className="text-[#F87027] font-semibold">About Doctor</label>
            <textarea
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="w-full px-4 py-3 border-2 border-[#F87027]/30 rounded-lg h-32 focus:ring-2 focus:ring-[#F87027]/50 focus:outline-none transition duration-300"
              placeholder="Write a brief description about the doctor"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="bg-[#F87027] text-white px-12 py-4 rounded-full hover:bg-[#F87027]/90 transition duration-300 transform hover:scale-105 shadow-lg"
            >Create Doctor Profile
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;
