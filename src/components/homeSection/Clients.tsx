"use client"
import React from 'react'
import { motion } from 'framer-motion'

const Clients = () => {
  return (
    <div className='pt-8 pb-10'>
      <h1 className='bg-white font-bold text-3xl p-4 text-center uppercase'>Our Esteemed Clients</h1>
      <div className='flex flex-wrap justify-center gap-4 lg:gap-8 p-4'>

        {/* Client 1 */}
        <motion.div 
          className='w-full sm:w-1/3 md:w-1/4 lg:w-1/5 flex justify-center items-center bg-gray-100 border rounded-lg p-4'
          whileHover={{ scale: 1.05 }} // Hover effect
          initial={{ opacity: 0, y: 50 }} // Initial state
          animate={{ opacity: 1, y: 0 }} // Animation state
          transition={{ duration: 0.5 }} // Animation duration
        >
          <p className='text-lg font-semibold text-gray-800'>BD life</p>
        </motion.div>

        {/* Client 2 */}
        <motion.div 
          className='w-full sm:w-1/3 md:w-1/4 lg:w-1/5 flex justify-center items-center bg-gray-100 border rounded-lg p-4'
          whileHover={{ scale: 1.05 }} // Hover effect
          initial={{ opacity: 0, y: 50 }} // Initial state
          animate={{ opacity: 1, y: 0 }} // Animation state
          transition={{ duration: 0.6 }} // Different timing
        >
          <p className='text-lg font-semibold text-gray-800'></p>DPI
        </motion.div>

        {/* Client 3 */}
        <motion.div 
          className='w-full sm:w-1/3 md:w-1/4 lg:w-1/5 flex justify-center items-center bg-gray-100 border rounded-lg p-4'
          whileHover={{ scale: 1.05 }} // Hover effect
          initial={{ opacity: 0, y: 50 }} // Initial state
          animate={{ opacity: 1, y: 0 }} // Animation state
          transition={{ duration: 0.7 }} // Different timing
        >
          <p className='text-lg font-semibold text-gray-800'>Progaming Hero</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Clients
