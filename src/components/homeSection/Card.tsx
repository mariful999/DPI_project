import Container from '@/app/ui/Container'
import React from 'react'
import { profileImage } from '@/app/assets/index';
import Image from 'next/image';

const Card = () => {
    const cardSection= [
  {
    id: "66c6e1296b09a2ee50f7d08e",
    index: 0,
    picture: profileImage,
    name: "MD Mariful islam",
    title: "web developer"
  },
  {
    id: "66c6e129e87ceff9e742a5c7",
    index: 1,
    picture: profileImage,
    name: "MD Mariful islam",
    title: "web developer"
  },
  {
    id: "66c6e129a8b879133445b62f",
    index: 2,
    picture: profileImage,
    name: "MD Mariful islam",
    title: "web developer"
  },
  {
    id: "66c6e1291970cc06015136f5",
    index: 3,
    picture: profileImage,
    name: "MD Mariful islam",
    title: "web developer"
  },
  {
    id: "66c6e12981db1c0b15278cd9",
    index: 4,
    picture: profileImage,
    name: "MD Mariful islam",
    title: "web developer"
  },
  {
    id: "66c6e12981db1c0b15278ck8",
    index: 5,
    picture: profileImage,
    name: "MD Mariful islam",
    title: "web developer"
  },
  {
    id: "66c6e12981db1c0b15278cl9",
    index: 6,
    picture: profileImage,
    name: "MD Mariful islam",
    title: "web developer"
  },
  {
    id: "66c6e12981db1c0b15278cr9",
    index: 7,
    picture: profileImage,
    name: "MD Mariful islam",
    title: "web developer"
  },

];
  return (
    <Container className=''>
        <div>
            <div>
                <h1 className='text-3xl font-bold text-center text-yellow-700 underline underline-offset-8 p-10'>Meet Ours Teachers</h1>
            </div>
            <div className='lg:grid grid-cols-4 p-11 lg:p-0 gap-4  shadow-slate-600'>
                {cardSection.map((item)=> 
                <div key={item.id} className='hover:border-black bg-slate-100 p-5 rounded-md duration-500 hover:bg-yellow-400 cursor-pointer'>
                    <Image src={item.picture} alt="profile" className='w-'></Image>    
                    <h1 className='text-center text-2xl font-semibold hover:text-blue-600'>{item.name}</h1>
                    <p className='text-center text-sm h-10 '>{item.title}</p>
                    <div className='text-center'><button className='p-2 px-8 hover:bg-green-400 bg-slate-400 rounded-md '>Details</button></div>
                </div>
            )}
            </div>
        </div>
    </Container>
  )
}

export default Card