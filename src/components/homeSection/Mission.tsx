import Container from '@/app/ui/Container'
import React from 'react'

const Mission = () => {
  return (
    <Container className='lg:h-72'>
        <h1 className='text-3xl font-semibold text-center'>Mission & Vision </h1>
        <div className='p-4'>
            <h1 className='text-xl font-semibold underline underline-offset-4 text-blue-700'>Our Mission</h1>
            <p className='text-sm text-gray-500'>Is to provide innovative learning partnerships that fulfill community and individual needs and aspirations both current and future. To develop the economy of the country through continuous development of skills and knowledge of human resources.</p>
        </div>
        <div className='p-4'>
            <h1 className='text-xl font-semibold underline underline-offset-4 text-blue-700'>Our Vision </h1>
            <p className='text-sm text-gray-500'>Is to be an innovative, flexible and socially responsible organization, transforming human resources into human capital and meeting the needs of the local job market. We empower people and business through training and skill development to realize their full potential.</p>
        </div>
    </Container>
  )
}

export default Mission