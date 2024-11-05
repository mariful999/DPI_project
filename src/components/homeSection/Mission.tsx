"use client";
import Container from '@/app/ui/Container';
import React from 'react';
import { FaBullseye, FaEye } from 'react-icons/fa'; // Importing icons
import { motion } from 'framer-motion'; // Importing motion

const Mission = () => {
  return (
    <Container className='p-8'>
      <motion.h1 
        className='text-5xl font-extrabold text-center text-white mb-8 bg-gradient-to-r from-[#ff5722] to-[#c85d25] p-6 rounded-lg shadow-lg'
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        Mission & Vision
      </motion.h1>
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Mission Section */}
        <motion.div 
          className='bg-white rounded-lg shadow-lg p-8 flex flex-col items-start transition-transform transform hover:shadow-2xl'
          initial={{ scale: 0.9 }} 
          animate={{ scale: 1 }} 
          exit={{ scale: 0.9 }} 
          transition={{ duration: 1 }}
        >
          <div className='flex items-center mb-4'>
            <FaBullseye className='text-5xl text-[#ff5722] mr-4' />
            <h2 className='text-3xl font-semibold text-[#ff5722]'>Our Mission</h2>
          </div>
          <p className='text-md text-gray-800 leading-relaxed mb-4'>
            Our mission is to provide innovative learning partnerships that fulfill community and individual needs and aspirations, both current and future. We aim to develop the economy of the country through the continuous development of skills and knowledge of human resources.
          </p>
          <button className='mt-auto bg-[#ff5722] text-white font-semibold px-4 py-2 rounded-md hover:bg-[#c85d25] transition duration-300'>
            Learn More
          </button>
        </motion.div>

        {/* Vision Section */}
        <motion.div 
          className='bg-white rounded-lg shadow-lg p-8 flex flex-col items-start transition-transform transform hover:shadow-2xl'
          initial={{ scale: 0.9 }} 
          animate={{ scale: 1 }} 
          exit={{ scale: 0.9 }} 
          transition={{ duration: 0.3 }}
        >
          <div className='flex items-center mb-4'>
            <FaEye className='text-5xl text-[#ff5722] mr-4' />
            <h2 className='text-3xl font-semibold text-[#ff5722]'>Our Vision</h2>
          </div>
          <p className='text-md text-gray-800 leading-relaxed mb-4'>
            Our vision is to be an innovative, flexible, and socially responsible organization, transforming human resources into human capital and meeting the needs of the local job market. We empower people and businesses through training and skill development to realize their full potential.
          </p>
          <button className='mt-auto bg-[#ff5722] text-white font-semibold px-4 py-2 rounded-md hover:bg-[#c85d25] transition duration-300'>
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Background Pattern or Image */}
      <div className='absolute inset-0 bg-cover bg-no-repeat opacity-10' style={{ backgroundImage: 'url("/path/to/your/background-image.jpg")' }} />
    </Container>
  );
};

export default Mission;
