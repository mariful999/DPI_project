import { choseUs } from '@/app/assets'
import Image from 'next/image'
import React from 'react'
import { FaSortAmountUp } from "react-icons/fa"; 
import { GiBookshelf } from "react-icons/gi";
import { BsPersonArmsUp } from "react-icons/bs";

const WhyChoseUs = () => {
  return (
    <div className='h-full lg:flex justify-between bg-[#32a6ab]'>
        <div>
            <Image src={choseUs} alt="choseUs" className='w-full'></Image>
        </div>
        <div className='text-white '>
            <h1 className='text-4xl uppercase font-semibold text-center p-6 underline underline-offset-8'>Why chose us</h1>
            <div className='p-4 flex items-center gap-4'>
                <FaSortAmountUp className='text-5xl text-yellow-500' />
                <div>
                    <h1 className='text-2xl font-bold '>Learn</h1>
                <p> Our programs encourage a growth mindset, helping you learn skills that will last a lifetime. We're committed to fostering knowledge that evolves with you.</p>
                </div>
            </div>
            <div className='p-4 flex items-center gap-4'>
                <GiBookshelf  className='text-5xl text-yellow-500' />
                <div className=''>
                    <h1 className='text-2xl font-bold '>Educate</h1>
                <p>Education is more than just learning facts—it's about building confidence and skills for the real world. We focus on practical knowledge that empowers you.</p>
                </div>
            </div>
            <div className='p-4 flex items-center gap-4'>
                <BsPersonArmsUp className='text-5xl text-yellow-500' />
                <div>
                    <h1 className='text-2xl font-bold '>Empower</h1>
                <p>We empower learners to achieve their personal and professional goals, helping them become confident, capable individuals ready to succeed in life.
                </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyChoseUs 