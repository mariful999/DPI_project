import { choseUs } from '@/app/assets'
import Image from 'next/image'
import React from 'react'
import { FaSortAmountUp } from "react-icons/fa"; 
import { GiBookshelf } from "react-icons/gi";
import { BsPersonArmsUp } from "react-icons/bs";

const WhyChoseUs = () => {
  return (
    <div className='bg-[#32a6ab] p-4'>
      <div className='flex flex-col lg:flex-row justify-between items-center'>
        {/* Image Section */}
        <div className='w-full lg:w-1/2 mb-4 lg:mb-0'>
          <Image src={choseUs} alt="choseUs" className='w-full h-auto object-cover' />
        </div>

        {/* Content Section */}
        <div className='text-white w-full lg:w-1/2 flex flex-col'>
          <h1 className='text-3xl md:text-4xl uppercase font-semibold text-center p-6 underline underline-offset-8'>
            Why Choose Us
          </h1>
          
          {/* Learn Section */}
          <div className='p-4 flex items-center flex-col sm:flex-row gap-4'>
            <FaSortAmountUp className='text-5xl text-yellow-500 mb-2 sm:mb-0' />
            <div className='text-center sm:text-left'>
              <h2 className='text-2xl font-bold'>Learn</h2>
              <p>Our programs encourage a growth mindset, helping you learn skills that will last a lifetime. We're committed to fostering knowledge that evolves with you.</p>
            </div>
          </div>

          {/* Educate Section */}
          <div className='p-4 flex items-center flex-col sm:flex-row gap-4'>
            <GiBookshelf className='text-5xl text-yellow-500 mb-2 sm:mb-0' />
            <div className='text-center sm:text-left'>
              <h2 className='text-2xl font-bold'>Educate</h2>
              <p>Education is more than just learning facts—it's about building confidence and skills for the real world. We focus on practical knowledge that empowers you.</p>
            </div>
          </div>

          {/* Empower Section */}
          <div className='p-4 flex items-center flex-col sm:flex-row gap-4'>
            <BsPersonArmsUp className='text-5xl text-yellow-500 mb-2 sm:mb-0' />
            <div className='text-center sm:text-left'>
              <h2 className='text-2xl font-bold'>Empower</h2>
              <p>We empower learners to achieve their personal and professional goals, helping them become confident, capable individuals ready to succeed in life.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChoseUs
