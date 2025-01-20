import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const RelatedDoctors = ({ speciality, docId }) => {
    const { doctors } = useContext(AppContext);
    const navigate = useNavigate();
    const [relDoc, setRelDoc] = useState([]);

    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId);
            setRelDoc(doctorsData);
        }
    }, [doctors, speciality, docId]);

    return (
        <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
            <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
            <p className="sm:w-1/2 text-center text-sm">Simply browse through our broad range of trustworthy doctors</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {relDoc.slice(0, 5).map((item, index) => (
                    <div onClick={() => {navigate(`/appointment/${item._id}`); scrollTo(0,0)}}
                        key={index}
                        className="group bg-white border border-gray-100 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-100 active:shadow-md active:translate-y-0"
                    >
                        <div className="relative">
                            <img src={item.image || "/placeholder.svg"} alt="" className="w-full h-52 object-cover bg-blue-50" />
                            <div className="absolute top-4 left-4">
                                <div className="flex items-center gap-1 bg-white/95 px-3 py-1 rounded-full shadow-sm">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                    <p className="text-xs text-green-600 font-medium">Available</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 transition-colors duration-300 group-hover:bg-[#F87027]">
                            <p className="font-medium text-gray-900 text-sm group-hover:text-white transition-colors duration-300">{item.name}</p>
                            <p className="text-gray-500 text-xs mt-0.5 group-hover:text-white transition-colors duration-300">{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={() => {
                    navigate('/doctors');
                    scrollTo(0, 0);
                }}
                className="mt-8 mx-auto flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-[#F87027] rounded-full hover:bg-[#e05d1a] transition-colors duration-300 shadow-md hover:shadow-lg"
            >
                more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
};

export default RelatedDoctors;
