"use client"
import { chateredLife, nationalLife, pragatiLife } from '@/app/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Clients = () => {
  return (
    <div className='pt-8 pb-10'>
      <h1 className='bg-white font-bold text-3xl p-4 text-center uppercase'>Clients</h1>
      <div className='flex flex-wrap justify-center gap-4 lg:gap-8 p-4'>
        {/* Client 1 */}
        <motion.div 
          className='w-full sm:w-1/3 md:w-1/4 lg:w-1/5 flex justify-center' 
          whileHover={{ scale: 1.1 }} // Hover scale effect
          initial={{ opacity: 0, y: 50 }} // Initial state
          animate={{ opacity: 1, y: 0 }} // Animation state
          transition={{ duration: 0.5 }} // Animation duration
        >
          <Image src={nationalLife} alt="nationalLife" className='border p-2 object-contain h-24 sm:h-32 md:h-40 lg:h-48' />
        </motion.div>

        {/* Client 2 */}
        <motion.div 
          className='w-full sm:w-1/3 md:w-1/4 lg:w-1/5 flex justify-center' 
          whileHover={{ scale: 1.1 }} // Hover scale effect
          initial={{ opacity: 0, y: 50 }} // Initial state
          animate={{ opacity: 1, y: 0 }} // Animation state
          transition={{ duration: 0.6 }} // Different timing
        >
          <Image src={pragatiLife} alt="pragatiLife" className='border p-2 object-contain h-24 sm:h-32 md:h-40 lg:h-48' />
        </motion.div>

        {/* Client 3 */}
        <motion.div 
          className='w-full sm:w-1/3 md:w-1/4 lg:w-1/5 flex justify-center' 
          whileHover={{ scale: 1.1 }} // Hover scale effect
          initial={{ opacity: 0, y: 50 }} // Initial state
          animate={{ opacity: 1, y: 0 }} // Animation state
          transition={{ duration: 0.7 }} // Different timing
        >
          <Image src={chateredLife} alt="chateredLife" className='border p-2 object-contain h-24 sm:h-32 md:h-40 lg:h-48' />
        </motion.div>
      </div>
    </div>
  )
}

export default Clients
