import Container from '@/app/ui/Container'

import Link from 'next/link';
import { title } from 'process'
import React from 'react'
import { FaGraduationCap } from "react-icons/fa6";

const Header = () => {
    const navigation =[
        {title:"Home" , link:"/"},
        {title:"About" , link:"/about"},
        {title:"Course " , link:"/course"},
        {title:"Contact" , link:"/contact"},
        {title:"Registration" , link:"/registration"}
    ]
  return (
    <div className='bg-gray-600 sticky top-0 '>
    <Container>
        <div className='flex justify-between  text-white p-2 font-semibold items-center h-20'>
            <div className='flex  gap-2 items-center hover:text-red-700 duration-500 cursor-pointer'><FaGraduationCap className='text-5xl' />
                <Link href="/" className='text-xl font-semibold'>Memoir <br /> Academy</Link>
                </div>
            <div className='flex gap-4 items-center'>
                <div className='flex gap-4 '>
                {navigation?.map((item,index)=>(
                        <Link key={index} href={item?.link} className='underline underline-offset-4 hover:text-red-700 duration-300 cursor-pointer'>{item.title}
                        </Link>
                ))}
            </div>
            <div><button className='bg-yellow-50 text-black p-2 hover:bg-green-400 duration-300  hover:text-red-700 rounded-md '>Login</button></div>
            </div>
        </div>
    </Container>
    </div>
  )
}

export default Header