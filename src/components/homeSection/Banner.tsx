import { background_banner } from '@/app/assets';
import Container from '@/app/ui/Container';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <Container className='py-0 relative'>
      <div className='relative lg:h-full'>
        <Image src={background_banner} alt="banner" className='h-96 w-full object-cover' />
        <div className='absolute top-2 lg:p-20 px-4 text-orange-600'>
          <p className='text-sm lg:text-xl font-semibold'>Empowering Your Tech Journey</p>
          <h1 className='text-2xl lg:text-5xl font-bold mt-2'>
            Welcome to Logic IT Center –<br /> 
            Your Gateway to Future Skills
          </h1>
          <p className='text-md lg:text-lg mt-4'>
            Join a thriving community dedicated to technology and innovation.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
