import Container from '@/app/ui/Container';
import React from 'react';
import { FaGraduationCap, FaChalkboardTeacher, FaGlobeAmericas } from 'react-icons/fa';

const Welcome = () => {
  return (
    <Container className='py-28 bg-gradient-to-r  rounded-lg shadow-lg'>
      <h1 className='text-4xl font-extrabold text-orange-500 text-center'>
        Welcome to Logic IT Center
      </h1>
      <div className='text-center '>
        <div className='p-6 lg:p-12 bg-white rounded-lg shadow-md'>
          <p className='text-xl font-semibold py-2 text-orange-500'>Introduction</p>
          <p className='text-md text-slate-700'>
            At Logic IT Center, we empower the next generation of professionals through innovative training and skill development. Established in January 2024, our mission is to equip young citizens of Bangladesh with the tools and knowledge they need to thrive in today's dynamic financial landscape.
          </p>
          <p className='text-md text-slate-700 mt-2'>
            Our programs include comprehensive training in various sectors, such as insurance and finance, as well as essential soft skills development. We organize impactful workshops, seminars, and experiential learning opportunities that engage participants and foster real-world skills.
          </p>
          <p className='text-md text-slate-700 mt-2'>
            We also offer unique training-travel programs—Educational Tours, Language Immersion Tours, Service-Learning Tours, and Global Corporate Leaders Summits—that provide enriching experiences and connections across the globe.
          </p>
          <div className='flex justify-center mt-6 space-x-6'>
            <div className='flex flex-col items-center'>
              <FaGraduationCap className='text-4xl text-orange-500' />
              <p className='text-md text-orange-500'>Expert Training</p>
            </div>
            <div className='flex flex-col items-center'>
              <FaChalkboardTeacher className='text-4xl text-orange-500' />
              <p className='text-md text-orange-500'>Experienced Instructors</p>
            </div>
            <div className='flex flex-col items-center'>
              <FaGlobeAmericas className='text-4xl text-orange-500' />
              <p className='text-md text-orange-500J'>Global Opportunities</p>
            </div>
          </div>
          <div className='text-center mt-6'>
            <button className=' bg-orange-500 px-6 py-2 font-bold text-white rounded-md  transition duration-300'>
              Explore Courses
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Welcome;
