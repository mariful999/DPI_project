import { groupImage, singleImage1, singleImage2 } from '@/app/assets'
import Container from '@/app/ui/Container'
import Image from 'next/image'
import React from 'react'

const WellCome = () => {
  return (
    <Container className='py-28'>
        <div className=' lg:flex  justify-between h-full bottom-10 gap-10'>
            <div className='flex'>
                <div className=''>
                <Image src={groupImage} className='w-full' alt="group" ></Image>
                </div>
            </div>
            <div className='flex-1 p-10'>
                <p className='text-xl font-bold py-2'>Introduction</p>
                <h1 className='text-3xl font-bold py-2'>Welcome to Memoir Academy Ltd</h1>
                <p className='text-sm text-slate-500'>Memoir Academy (MA) is a Professional skill development Center & organizer (locally & internationally) established in January 2024 to involve the large young group of citizens of Bangladesh in the mainstream of financial activities. The youths would be absorbed in various economic and other industries through training, seminars, and workshops. MA has been providing training in the field of insurance as well as financial and conducting soft skills development programme and carries out consultative and research activities on human resources development for the corporate sector.
                Our professional skill development programs bring to life the knowledge and skills that are called for in many edification initiatives, including 21st Century Skills. To help corporate participants/professionals gain new perspectives and build skills for the future through experiential learning.
                Also, we provide a range of Training-travel programs—Educational Tours, Language Immersion Tours, Service-Learning Tours, Global corporate Leaders Summits and Custom-Designed Tours—that provide in-depth exploration, authentic connections and hands-on experience.... </p> 
                {/* <button className='p-2 border border-black px-6 rounded-md hover:bg-green-300 duration-300'>Read More</button> */}
                
            </div>
        </div>
    </Container>
  )
}

export default WellCome