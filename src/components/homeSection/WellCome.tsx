import { groupImage, singleImage1, singleImage2 } from '@/app/assets'
import Container from '@/app/ui/Container'
import Image from 'next/image'
import React from 'react'

const WellCome = () => {
  return (
    <Container>
        <div className='flex  justify-between h-full bottom-10 gap-10'>
            <div className='flex'>
                <div className=''>
                <Image src={groupImage} className='w-full' alt="group" ></Image>
                </div>
               
            </div>
            <div className='flex-1 text-center items-center h-full'>
                <p className='text-xl font-bold'>Introduction</p>
                <h1 className='text-3xl font-bold'>Welcome to Memoir Academy Ltd</h1>
                <p className='text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus omnis explicabo dolorem ducimus eos maxime vitae quisquam ea quo odio, itaque eum odit unde illo nam in sit autem eveniet Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi reiciendis delectus repellendus magni iure veritatis id temporibus iusto rem nesciunt ipsam cum voluptas quas aperiam velit praesentium, sint nihil! In?Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam obcaecati sed doloribus dolor esse maxime similique adipisci. Numquam, culpa voluptas laborum eos placeat cum saepe est consectetur accusamus iusto dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est itaque sunt delectus quos mollitia iusto quam. Aliquam autem enim, ullam nam nostrum quibusdam deleniti est incidunt minus, quidem cum voluptate! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum iure consequatur incidunt sit, minima commodi error placeat. Odio temporibus soluta reiciendis ... </p> 
                <button className='p-2 border border-black px-6 rounded-md hover:bg-green-300 duration-300'>Read More</button>
                
            </div>
        </div>
    </Container>
  )
}

export default WellCome