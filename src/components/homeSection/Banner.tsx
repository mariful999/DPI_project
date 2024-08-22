import { bannerImage, bannerImage2 } from '@/app/assets'
import Container from '@/app/ui/Container'
import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <Container>
      <div>
        <div className='relative h-full '>
        <Image  src={bannerImage2} alt="banner" className='w-full'></Image>
        </div>
      <div className='absolute text-white top-60 p-20 '>
        <p className='text-xl font-semibold'>The goal of education</p>
        <h1 className='text-4xl font-bold'>Join the bigest comunity of Memoir Academy Ltd</h1>
      </div>
      </div>
    </Container>
  )
}

export default Banner