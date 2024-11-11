"use client";
import { choceus } from '@/app/assets';
import Image from 'next/image';
import React from 'react';
import { FaSortAmountUp } from "react-icons/fa"; 
import { GiBookshelf } from "react-icons/gi";
import { BsPersonArmsUp } from "react-icons/bs";
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  return (
    <div className=' p-8 lg:p-16'>
      <div className='flex flex-col lg:flex-row justify-between gap-5  items-center'>
        <div className='w-full lg:w-1/2 mb-8   lg:mb-0'>
          <Image 
            src={choceus} 
            alt="Why Choose Us" 
            className='w-full h-auto object-cover rounded-lg  transition-transform duration-300 hover:scale-105' 
          />
        </div>

        <div className=' w-full lg:w-1/2 flex flex-col'>
          <motion.h1 
            className='text-4xl md:text-5xl font-extrabold text-center p-6 mb-6 bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text'
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            Why Choose Us
          </motion.h1>

          <motion.div 
            className='p-6 flex items-center bg-white rounded-lg shadow-md mb-4 transition-transform duration-300 hover:shadow-lg'
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <FaSortAmountUp className='text-6xl text-[#ff5722] mr-4' />
            <div>
              <h2 className='text-2xl font-bold'>Learn</h2>
              <p className='text-md text-gray-700'>Our programs cultivate a growth mindset, ensuring you acquire skills that will benefit you for a lifetime. We are dedicated to providing knowledge that evolves alongside you.</p>
            </div>
          </motion.div>

          <motion.div 
            className='p-6 flex items-center bg-white rounded-lg shadow-md mb-4 transition-transform duration-300 hover:shadow-lg'
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <GiBookshelf className='text-6xl text-[#ff5722] mr-4' />
            <div>
              <h2 className='text-2xl font-bold'>Educate</h2>
              <p className='text-md text-gray-700'>Education is more than memorization; it’s about developing confidence and real-world skills. We emphasize practical knowledge that empowers you to thrive.</p>
            </div>
          </motion.div>

          <motion.div 
            className='p-6 flex items-center bg-white rounded-lg shadow-md mb-4 transition-transform duration-300 hover:shadow-lg'
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <BsPersonArmsUp className='text-6xl text-[#ff5722] mr-4' />
            <div>
              <h2 className='text-2xl font-bold'>Empower</h2>
              <p className='text-md text-gray-700'>We empower learners to reach their personal and professional goals, transforming them into confident, capable individuals prepared to excel in life.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
