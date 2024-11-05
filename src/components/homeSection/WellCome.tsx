"use client";
import Container from '@/app/ui/Container';
import React, { useState } from 'react';
import { FaGraduationCap, FaChalkboardTeacher, FaGlobeAmericas } from 'react-icons/fa';

const courses = [
  {
    title: 'Financial Literacy Basics',
    description: 'Learn the fundamentals of financial management and planning.',
  },
  {
    title: 'Advanced Insurance Practices',
    description: 'Deep dive into insurance products and market strategies.',
  },
  {
    title: 'Soft Skills Development',
    description: 'Enhance your communication and interpersonal skills for the workplace.',
  },
];

const Welcome = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container className='py-24  rounded-lg '>
      <h1 className='text-4xl font-extrabold text-orange-500 text-center'>
        Welcome to Logic IT Center
      </h1>
      <div className='text-center'>
        <div className='p-4  bg-white rounded-lg shadow-md mt-8'>
          <p className='text-xl font-semibold py-2 text-[#ff5722]'>Introduction</p>
          <p className='text-md text-slate-700'>
            At Logic IT Center, we empower the next generation of professionals through innovative training and skill development. Established in January 2024, our mission is to equip young citizens of Bangladesh with the tools and knowledge they need to thrive in today's dynamic financial landscape.
          </p>
          <p className='text-md text-slate-700 mt-2'>
            Our programs include comprehensive training in various sectors, such as insurance and finance, as well as essential soft skills development. We organize impactful workshops, seminars, and experiential learning opportunities that engage participants and foster real-world skills.
          </p>
          <p className='text-md text-slate-700 mt-2'>
            We also offer unique training-travel programs—Educational Tours, Language Immersion Tours, Service-Learning Tours, and Global Corporate Leaders Summits—that provide enriching experiences and connections across the globe.
          </p>
          <div className='flex justify-center mt-6 space-x-10'>
            <div className='flex flex-col items-center'>
              <FaGraduationCap className='text-5xl text-[#ff5722]' />
              <p className='text-md text-[#ff5722]'>Expert Training</p>
            </div>
            <div className='flex flex-col items-center'>
              <FaChalkboardTeacher className='text-5xl text-[#ff5722]' />
              <p className='text-md text-[#ff5722]'>Experienced Instructors</p>
            </div>
            <div className='flex flex-col items-center'>
              <FaGlobeAmericas className='text-5xl text-[#ff5722]' />
              <p className='text-md text-[#ff5722]'>Global Opportunities</p>
            </div>
          </div>
          <div className='text-center mt-8'>
            <button
              className='bg-[#ff5722] hover:bg-white hover:text-orange-500 px-6 py-2 font-bold text-white rounded-md transition duration-300'
              onClick={() => setShowModal(true)}
            >
              Explore Courses
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white rounded-lg p-6 max-w-md w-full'>
            <h2 className='text-xl font-bold mb-4'>Available Courses</h2>
            <div className='space-y-4'>
              {courses.map((course, index) => (
                <div key={index} className='border p-4 rounded-lg shadow'>
                  <h3 className='font-semibold text-lg'>{course.title}</h3>
                  <p className='text-sm text-slate-500'>{course.description}</p>
                </div>
              ))}
            </div>
            <div className='text-right mt-4'>
              <button
                className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300'
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}

export default Welcome;
