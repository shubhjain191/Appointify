import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
import { DoctorContext } from "../context/DoctorContext";

const Navbar = () => {
  
  const { aToken, setAToken } = useContext(AdminContext);
  const {dToken, setDToken} = useContext(DoctorContext);

  const navigate = useNavigate()

  
  const logout = () => {
    navigate('/')
    aToken && setAToken('')
    aToken && localStorage.removeItem("aToken"); 
    dToken && setDToken('')
    dToken && localStorage.removeItem("dToken");
    }

  return (
    <div className="flex justify-between items-center w-full px-8 py-4 bg-white shadow-lg">
      <div className="flex items-center space-x-4">
        
        <img
          src={assets.admin_logo}
          alt="Admin Logo"
          className="h-16 w-48 object-contain"
        />

       
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600">
          {aToken ? "Admin" : "Doctor"}
        </p>
      </div>

     
      <button
        onClick={logout} 
        className="px-6 py-2.5 text-base font-medium text-white bg-[#F87027] rounded-lg hover:bg-[#F87027]/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
