import { smartOnline } from '@/app/assets'
import Image from 'next/image'
import React from 'react'

const Partner = () => {
  return (
    <div className='bg-[#32a6ab] h-60 '>
      <div><h1 className='uppercase text-center font-bold text-3xl p-5'>Global Partner</h1></div>
      <div className='flex justify-center'>
        <Image src={smartOnline} alt="smartOnline" className=' p-2 object-contain w-52 rounded-md' />
      </div>
    </div>
  )
}

export default Partner