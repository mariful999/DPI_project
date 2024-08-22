import Container from '@/app/ui/Container'
import React from 'react'
import { profileImage } from '../../public';
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
    id: "66c6e12981db1c0b15278cd9",
    index: 5,
    picture: profileImage,
    name: "MD Mariful islam",
    title: "web developer"
  },
  {
    id: "66c6e12981db1c0b15278cd9",
    index: 6,
    picture: profileImage,
    name: "MD Mariful islam",
    title: "web developer"
  },
  {
    id: "66c6e12981db1c0b15278cd9",
    index: 7,
    picture: profileImage,
    name: "MD Mariful islam",
    title: "web developer"
  },

];
  return (
    <Container>
        <div>
            <div>
                <h1 className='text-3xl font-bold text-center p-10'>Meet Ours Teachers</h1>
            </div>
            <div className='grid grid-cols-4 gap-4 '>
                {cardSection.map((item)=> 
                <div key={item.id} className='border border-black'>
                    <Image src={item.picture} alt="profile" className=''></Image>    
                    <h1 className='text-center text-2xl font-semibold'>{item.name}</h1>
                </div>
            )}
            </div>
        </div>
    </Container>
  )
}

export default Card