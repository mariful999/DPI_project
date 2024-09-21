'use client'; // Ensure this component is rendered on the client side

import { useState } from 'react';
import { bannerImage } from '@/app/assets';
import Container from '@/app/ui/Container';
import Image from 'next/image';
import React from 'react';
import { StaticImageData } from 'next/image';
import { motion } from 'framer-motion'; // Import motion from Framer Motion

// Define the Course type
type Course = {
    id: string;
    index: number;
    picture: StaticImageData;
    name: string;
    title: string;
    description: string;
    duration: string;
    instructor: string;
    syllabus: string[];
};

const OurCourses = () => {
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

    // Define the cardSection array with more details
    const cardSection: Course[] = [
        {
            id: "1",
            index: 0,
            picture: bannerImage,
            name: "Insurance Training Programme",
            title: "Career Counseling, Agent Training and advance level.",
            description: "This course provides comprehensive training in career counseling, agent training, and advanced techniques in the insurance industry. Ideal for those looking to enhance their career in insurance.",
            duration: "6 months",
            instructor: "John Doe",
            syllabus: ["Introduction to Insurance", "Advanced Sales Techniques", "Career Development", "Client Management"]
        },
        {
            id: "2",
            index: 1,
            picture: bannerImage,
            name: "Banking Training Programme",
            title: "AML/CFT Course",
            description: "An in-depth course focusing on Anti-Money Laundering (AML) and Countering the Financing of Terrorism (CFT). This course is essential for banking professionals looking to understand regulatory requirements and best practices.",
            duration: "3 months",
            instructor: "Jane Smith",
            syllabus: ["AML/CFT Overview", "Regulatory Framework", "Risk Assessment", "Compliance Strategies"]
        },
        {
            id: "3",
            index: 2,
            picture: bannerImage,
            name: "Corporate Training Programme",
            title: "The best teachers are life-long learners. We value partnerships...",
            description: "This programme is designed for corporate clients seeking to train their employees in various skills. The course includes workshops, seminars, and continuous learning opportunities tailored to corporate needs.",
            duration: "Varies",
            instructor: "Michael Johnson",
            syllabus: ["Corporate Culture", "Leadership Skills", "Team Building", "Effective Communication"]
        },
    ];

    const handleDetailsClick = (course: any) => {
        setSelectedCourse(course);
    };

    const closeDetails = () => {
        setSelectedCourse(null);
    };

    return (
        <Container className='relative py-12 sm:py-16 lg:py-28'>
            <div>
                <div className='px-4 lg:px-8'>
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-center uppercase underline underline-offset-8 text-[#32a6ab]'>Our Courses</h1>
                </div>
                <div className='flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row justify-items-center px-4 lg:px-0 gap-6 mt-8'>
                    {cardSection.map((item) => 
                        <motion.div 
                            key={item.id} 
                            className='hover:border-black bg-slate-100 p-3 rounded-md cursor-pointer'
                            initial={{ opacity: 0, scale: 0.8 }} // Initial state
                            animate={{ opacity: 1, scale: 1 }} // Animate to this state
                            transition={{ duration: 0.5 }} // Transition duration
                            whileHover={{ scale: 1.05, backgroundColor: '#32a6ab' }} // Scale and change background on hover
                        >
                            <Image src={item.picture} alt="profile" className='object-cover' />
                            <h1 className='text-center text-lg sm:text-xl font-semibold'>{item.name}</h1>
                            <p className='text-center text-sm h-10'>{item.title}</p>
                            <div className='text-center'>
                                <button
                                    className='p-2 px-6 sm:px-8 font-semibold tracking-wide hover:bg-[#99e8eb] bg-[#32a6ab] rounded-md'
                                    onClick={() => handleDetailsClick(item)}
                                >
                                    Details
                                </button>
                            </div>
                        </motion.div>
                    )}
                </div>
                {selectedCourse && (
                    <motion.div 
                        className={`fixed top-0 left-0 h-full bg-white p-6 rounded-md shadow-lg ${selectedCourse ? 'block' : 'hidden'} z-50 w-full md:w-1/2`}
                        initial={{ opacity: 0 }} // Initial state for the modal
                        animate={{ opacity: 1 }} // Animate to this state
                        exit={{ opacity: 0 }} // Animate exit state
                        transition={{ duration: 0.3 }} // Transition duration
                    >
                        <button onClick={closeDetails} className='absolute top-2 right-2 p-2 text-red-600 border border-b-red-600 hover:bg-red-600 hover:text-rose-50 rounded-sm '>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                        <h2 className='text-lg sm:text-2xl lg:text-3xl font-bold'>{selectedCourse.name}</h2>
                        <p className='text-base sm:text-lg mt-4'>{selectedCourse.title}</p>
                        <p className='mt-2'>{selectedCourse.description}</p>
                        <div className='mt-4'>
                            <h3 className='font-semibold'>Duration:</h3>
                            <p>{selectedCourse.duration}</p>
                            <h3 className='font-semibold mt-2'>Instructor:</h3>
                            <p>{selectedCourse.instructor}</p>
                            <h3 className='font-semibold mt-2'>Syllabus:</h3>
                            <ul className='list-disc pl-5'>
                                {selectedCourse.syllabus.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </div>
        </Container>
    );
};

export default OurCourses;
