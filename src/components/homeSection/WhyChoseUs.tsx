import { choseUs } from '@/app/assets'
import Image from 'next/image'
import React from 'react'
import { FaSortAmountUp } from "react-icons/fa"; 
import { GiBookshelf } from "react-icons/gi";
import { BsPersonArmsUp } from "react-icons/bs";

const WhyChoseUs = () => {
  return (
    <div className='h-full flex justify-between bg-blue-800'>
        <div>
            <Image src={choseUs} alt="choseUs" className='w-full'></Image>
            
        </div>
        <div className='text-white '>
            <h1 className='text-4xl uppercase font-semibold text-center p-6 underline underline-offset-8'>Why chose us</h1>
            <div className='p-4 flex items-center gap-4'>
                <FaSortAmountUp className='text-5xl text-yellow-500' />
                <div>
                    <h1 className='text-2xl font-bold '>Learn</h1>
                <p>The best teachers are life-long learners. We value partnerships with other organizations and agencies to provide high-quality. comprehensive and competitive training offerings and to share best practices.</p>
                </div>
            </div>
            <div className='p-4 flex items-center gap-4'>
                <GiBookshelf  className='text-5xl text-yellow-500' />
                <div className=''>
                    <h1 className='text-2xl font-bold '>Educate</h1>
                <p>We believe that everyone can learn and that all people are to be treated with respect, regardless of their level of education or ability.</p>
                </div>
            </div>
            <div className='p-4 flex items-center gap-4'>
                <BsPersonArmsUp className='text-5xl text-yellow-500' />
                <div>
                    <h1 className='text-2xl font-bold '>Empower</h1>
                <p>We believe in our students. We believe our students have the capability to achieve their educational and professional goals and we want to be a part of that process.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyChoseUs