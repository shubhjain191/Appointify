import React, { useContext, useEffect, useState } from "react";
import { UserIcon, CheckCircle2, XCircle, SearchIcon } from "lucide-react";
import { AdminContext } from "../../context/AdminContext";

const DoctorsList = () => {
  const { doctors, aToken, getAllDoctors, changeAvailability } =
    useContext(AdminContext);

  // State management for search and filters
  const [searchTerm, setSearchTerm] = useState("");
  const [specialityFilter, setSpecialityFilter] = useState("");

  // Fetch doctors when token is available
  useEffect(() => {
    if (aToken) {
      getAllDoctors();
    }
  }, [aToken]);

  // Advanced filtering with search and speciality
  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (specialityFilter === "" || doctor.speciality === specialityFilter)
  );

  // Get unique specialities for dropdown
  const uniqueSpecialities = [
    ...new Set(doctors.map((doctor) => doctor.speciality)),
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Responsive Search and Filter Section */}
      <div className="mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search Input with Icon */}
        <div className="relative w-full md:w-2/5">
          <input
            type="text"
            placeholder="Search doctors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2.5 pl-10 border border-gray-300 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-[#F87027] 
            transition duration-300 ease-in-out"
          />
          <SearchIcon
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>

        {/* Speciality Dropdown */}
        <select
          value={specialityFilter}
          onChange={(e) => setSpecialityFilter(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2.5 border border-gray-300 rounded-lg 
          focus:outline-none focus:ring-2 focus:ring-[#F87027]
          transition duration-300 ease-in-out"
        >
          <option value="">All Specialities</option>
          {uniqueSpecialities.map((speciality, index) => (
            <option key={index} value={speciality}>
              {speciality}
            </option>
          ))}
        </select>
      </div>

      {/* Doctors Grid - 5 Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredDoctors.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden border 
            border-gray-200 hover:shadow-2xl hover:border-[#F87027]/20 
            transform hover:-translate-y-2 
            transition-all duration-300 ease-in-out 
            group cursor-pointer 
            relative
            hover:bg-[#F87027]/10"
          >
            {/* Doctor Image */}
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover object-center bg-indigo-50 
                group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
              {/* Speciality Tag */}
              <div
                className="absolute bottom-3 left-3 bg-primary text-white 
                px-2 py-1 rounded-md text-xs shadow-sm font-medium 
                group-hover:bg-[#F87027] transition-colors duration-300"
              >
                {item.speciality}
              </div>
            </div>

            {/* Doctor Details */}
            <div className="p-4 flex-grow flex flex-col">
              <h2
                className="text-lg font-semibold text-[#F87027] mb-1 
              group-hover:text-[#F87027]/80 transition-colors duration-300"
              >
                {item.name}
              </h2>
              <p
                className="text-gray-500 text-sm mb-2 truncate 
              group-hover:text-gray-700 transition-colors duration-300"
              >
                {item.description}
              </p>

              {/* Availability Indicator */}
              <div className="mt-2 flex items-center gap-2 text-sm cursor-pointer">
                {item.available ? (
                  <div
                    onClick={() => changeAvailability(item._id)}
                    className="flex items-center gap-2 text-green-600 font-medium"
                  >
                    <CheckCircle2 size={20} />
                    <p>Available</p>
                  </div>
                ) : (
                  <div
                    onClick={() => changeAvailability(item._id)}
                    className="flex items-center gap-2 text-red-600 font-medium"
                  >
                    <XCircle size={20} />
                    <p>Unavailable</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results State */}
      {filteredDoctors.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <UserIcon size={48} className="mx-auto mb-4 text-[#F87027]" />
          <p className="text-gray-600">No doctors found matching your search</p>
        </div>
      )}
    </div>
  );
};

export default DoctorsList;
