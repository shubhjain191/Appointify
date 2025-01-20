import React from 'react';
import { assets } from '../assets/assets';

const reasons = [
  {
    title: 'Convenient Scheduling',
    description: 'Easily book appointments with just a few clicks, anytime, anywhere.',
    icon: '📅',
  },
  {
    title: 'Secure Health Records',
    description: 'Your health information is encrypted and stored securely for peace of mind.',
    icon: '🔒',
  },
  {
    title: 'Seamless Experience',
    description: 'Enjoy a user-friendly interface designed for a smooth and stress-free experience.',
    icon: '✨',
  },
  {
    title: '24/7 Support',
    description: 'We’re here for you around the clock, ensuring uninterrupted assistance.',
    icon: '💬',
  },
];

const About = () => {
  return (
    <div>
      {/* About Us Section */}
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>
          ABOUT <span className='text-[#F87027] font-medium'>US</span>
        </p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img
          className='w-full md:max-w-[360px]'
          src={assets.about_image}
          alt=''
        />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>
            Welcome to Appointify, where your healthcare meets innovation! We are
            transforming the way you connect with doctors, making appointments
            and health management as simple as a tap.
          </p>
          <p>
            At Appointify, we do not just book appointments—we empower you to take
            charge of your well-being. With a platform designed for speed,
            convenience, and reliability, we are here to make your healthcare
            journey effortless and stress-free.
          </p>
          <b className='text-[#F87027]'>Our Vision</b>
          <p>
            To redefine healthcare access by bridging the gap between patients and
            providers. At Appointify, we believe in putting health in your
            hands—anytime, anywhere.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section with Gradient Background */}
      <div className='bg-gradient-to-b from-[#F87027] to-[#FF9F40] py-12 px-6 sm:px-12 lg:px-24 rounded-3xl'>
        <h2 className='text-4xl font-bold text-center text-white mb-8'>
          Why Choose Us?
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {reasons.map((reason, index) => (
            <div
              key={index}
              className='bg-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105'
            >
              <div className='text-4xl text-[#F87027] mb-4'>{reason.icon}</div>
              <h3 className='text-xl font-semibold text-[#F87027] mb-2'>
                {reason.title}
              </h3>
              <p className='text-gray-600'>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
