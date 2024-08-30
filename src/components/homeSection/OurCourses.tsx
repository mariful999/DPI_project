import { bannerImage, bannerImage2, profileImage } from '@/app/assets';
import Container from '@/app/ui/Container'
import Image from 'next/image';
import React from 'react'

const OurCourses = () => {
        const cardSection= [
  {
    id: "66c6e1296b09a2ee50f7d08e",
    index: 0,
    picture: bannerImage,
    name: "Insurance Training Programme",
    title: "Career Counseling, Agent Training and advance level."
  },
  {
    id: "66c6e129e87ceff9e742a5c7",
    index: 1,
    picture: bannerImage,
    name: "Degital Marketaing",
    title: "The best teachers are life-long learners. We value partnerships.."
  },
  {
    id: "66c6e129a8b879133445b62f",
    index: 2,
    picture: bannerImage,
    name: "web develoment",
    title: "The best teachers are life-long learners. We value partnerships..."
  },
  {
    id: "66c6e1291970cc06015136f5",
    index: 3,
    picture: bannerImage,
    name: "acount managment",
    title: "The best teachers are life-long learners. We value partnerships..."
  },



];
  return (
    <Container className='py-28'>
        <div>
            <div className=' lg:p-8'>
                <h1 className='text-3xl font-bold text-center uppercase underline underline-offset-8 text-green-400 '>Our Courses</h1>
            </div>
              <div className='lg:grid grid-cols-4 gap-4 '>
                {cardSection.map((item)=> 
                <div key={item.id} className='hover:border-black bg-slate-100 p-3 rounded-md duration-500 hover:bg-green-300 cursor-pointer'>
                    <Image src={item.picture} alt="profile" className=''></Image>    
                    <h1 className='text-center text-xl font-semibold hover:text-blue-600'>{item.name}</h1>
                    <p className='text-center text-sm h-10 '>{item.title}</p>
                    <div className='text-center'><button className='p-2 px-8 hover:bg-red-500 bg-slate-400 rounded-md '>Details</button></div>
                </div>
            )}
            </div>
        </div>
    </Container>
  )
}

export default OurCourses