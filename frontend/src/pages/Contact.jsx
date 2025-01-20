import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact <span className='text-[#F87027]'>Us</span></h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Feel free to get in touch or explore career opportunities with us.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="p-8 rounded-xl shadow-sm border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Contact Info</h2>
            <p className="text-gray-600 mb-6">You can reach us at the following:</p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center border">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-gray-900">+1800 123 4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center border">
                  <span className="text-2xl">✉️</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-900">contact@appointify.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center border">
                  <span className="text-2xl">🏢</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="text-gray-900">123 Healthcare Street,<br />City, Country</p>
                </div>
              </div>
            </div>
          </div>

          {/* Join Our Team */}
          <div className="md:col-span-2 rounded-xl shadow-sm overflow-hidden border">
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Join Our Team</h2>
              <p className="text-gray-600 mb-6">
                At Appointify, we're always on the lookout for talented individuals to join our innovative team. 
                Explore exciting career opportunities and be a part of transforming healthcare.
              </p>
            </div>
            
            <div className="relative h-96 w-full">
              <img 
                src={assets.contact_image}
                alt="Healthcare professional with patient"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200">
                  Explore Careers
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 p-8 rounded-xl shadow-sm border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Location</h2>
          <div className="h-96 w-full rounded-lg overflow-hidden">
            <iframe
              title="Location Map"
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.9485921108416!2d144.95595131531788!3d-37.817323979751516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5f8463a1b7%3A0xdac3fa7286c2d0cf!2s123%20Healthcare%20Street%2C%20Melbourne%2C%20VIC!5e0!3m2!1sen!2sus!4v1631586127850!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;