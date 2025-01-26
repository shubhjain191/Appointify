import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { DoctorContext } from "../context/DoctorContext";

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  if (aToken) {
    return (
      <div className="bg-white h-screen w-64 shadow-md">
        <div className="p-6">
          <nav>
            <ul className="space-y-4">
              <li>
                <NavLink
                  to={"/admin-dashboard"}
                  className={({ isActive }) =>
                    `flex items-center p-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-white shadow-md"
                        : "text-primary hover:bg-[#F87027]/20 hover:text-primary"
                    }`
                  }
                >
                  <img src={assets.home_icon} alt="" className="w-6 h-6 mr-4" />
                  <span className="font-medium">Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/all-appointments"}
                  className={({ isActive }) =>
                    `flex items-center p-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-white shadow-md"
                        : "text-primary hover:bg-[#F87027]/20 hover:text-primary"
                    }`
                  }
                >
                  <img
                    src={assets.appointment_icon}
                    alt=""
                    className="w-6 h-6 mr-4"
                  />
                  <span className="font-medium">Appointment</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/add-doctor"}
                  className={({ isActive }) =>
                    `flex items-center p-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-white shadow-md"
                        : "text-primary hover:bg-[#F87027]/20 hover:text-primary"
                    }`
                  }
                >
                  <img src={assets.add_icon} alt="" className="w-6 h-6 mr-4" />
                  <span className="font-medium">Add Doctor</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/doctor-list"}
                  className={({ isActive }) =>
                    `flex items-center p-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-white shadow-md"
                        : "text-primary hover:bg-[#F87027]/20 hover:text-primary"
                    }`
                  }
                >
                  <img
                    src={assets.people_icon}
                    alt=""
                    className="w-6 h-6 mr-4"
                  />
                  <span className="font-medium">Doctors List</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }

  if (dToken) {
    return (
      <div className="bg-white h-screen w-64 shadow-md">
        <div className="p-6">
          <nav>
            <ul className="space-y-4">
              <li>
                <NavLink
                  to={"/doctor-dashboard"}
                  className={({ isActive }) =>
                    `flex items-center p-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-white shadow-md"
                        : "text-primary hover:bg-[#F87027]/20 hover:text-primary"
                    }`
                  }
                >
                  <img src={assets.home_icon} alt="" className="w-6 h-6 mr-4" />
                  <span className="font-medium">Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/doctor-appointments"}
                  className={({ isActive }) =>
                    `flex items-center p-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-white shadow-md"
                        : "text-primary hover:bg-[#F87027]/20 hover:text-primary"
                    }`
                  }
                >
                  <img
                    src={assets.appointment_icon}
                    alt=""
                    className="w-6 h-6 mr-4"
                  />
                  <span className="font-medium">Appointments</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/doctor-profile"}
                  className={({ isActive }) =>
                    `flex items-center p-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-white shadow-md"
                        : "text-primary hover:bg-[#F87027]/20 hover:text-primary"
                    }`
                  }
                >
                  <img
                    src={assets.people_icon}
                    alt=""
                    className="w-6 h-6 mr-4"
                  />
                  <span className="font-medium">Profile</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }

  return null;
};

export default Sidebar;
