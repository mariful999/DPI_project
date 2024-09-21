"use client"
import Container from '@/app/ui/Container';
import React from 'react';
import { FaBullseye, FaEye } from 'react-icons/fa'; // Importing icons
import { motion } from 'framer-motion'; // Importing motion

const Mission = () => {
  return (
    <Container className='p-4'>
      <motion.h1 
        className='text-4xl font-bold text-center text-white mb-6 bg-gradient-to-r from-[#32a6ab] to-[#1f7a80] p-2 rounded-lg'
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        Mission & Vision
      </motion.h1>
      
      <div className='flex flex-col md:flex-row justify-around items-start'>
        {/* Mission Section */}
        <motion.div 
          className='bg-white rounded-lg shadow-lg p-6 mb-4 md:mb-0 w-full md:w-1/2'
          initial={{ scale: 0.9 }} 
          animate={{ scale: 1 }} 
          exit={{ scale: 0.9 }} 
          transition={{ duration: 1 }}
        >
          <div className='flex items-center mb-4'>
            <FaBullseye className='text-4xl text-[#32a6ab] mr-2' />
            <h2 className='text-xl font-semibold underline underline-offset-4'>Our Mission</h2>
          </div>
          <p className='text-sm text-gray-600'>
            Is to provide innovative learning partnerships that fulfill community and individual needs and aspirations both current and future. To develop the economy of the country through continuous development of skills and knowledge of human resources.
          </p>
        </motion.div>

        {/* Vision Section */}
        <motion.div 
          className='bg-white rounded-lg shadow-lg p-6 w-full md:w-1/2'
          initial={{ scale: 0.9 }} 
          animate={{ scale: 1 }} 
          exit={{ scale: 0.9 }} 
          transition={{ duration: 0.3 }}
        >
          <div className='flex items-center mb-4'>
            <FaEye className='text-4xl text-[#32a6ab] mr-2' />
            <h2 className='text-xl font-semibold underline underline-offset-4'>Our Vision</h2>
          </div>
          <p className='text-sm text-gray-600'>
            Is to be an innovative, flexible and socially responsible organization, transforming human resources into human capital and meeting the needs of the local job market. We empower people and business through training and skill development to realize their full potential.
          </p>
        </motion.div>
      </div>
    </Container>
  );
};

export default Mission;
