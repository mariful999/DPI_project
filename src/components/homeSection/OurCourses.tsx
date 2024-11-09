'use client'; // Ensure this component is rendered on the client side

import { useState } from 'react';
import { bannerImage } from '@/app/assets';
import Container from '@/app/ui/Container';
import Image from 'next/image';
import React from 'react';
import { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';

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
    const [showMore, setShowMore] = useState(false); // State to toggle more courses

    // Define the cardSection array with new course details
    const cardSection: Course[] = [
        {
            id: "1",
            index: 0,
            picture: bannerImage,
            name: "Digital Marketing Mastery",
            title: "Learn to create and execute effective digital marketing strategies.",
            description: "This course covers SEO, social media marketing, content marketing, and data analytics. Perfect for individuals looking to enhance their digital presence and career opportunities.",
            duration: "3 months",
            instructor: "Sarah Thompson",
            syllabus: ["Introduction to Digital Marketing", "SEO Basics", "Content Strategy", "Analytics and Reporting"]
        },
        {
            id: "2",
            index: 1,
            picture: bannerImage,
            name: "Web Development Bootcamp",
            title: "From HTML to full-stack development.",
            description: "Dive into web development with this comprehensive bootcamp. Learn HTML, CSS, JavaScript, and back-end technologies to create responsive websites and applications.",
            duration: "6 months",
            instructor: "Daniel Rodriguez",
            syllabus: ["HTML & CSS", "JavaScript Fundamentals", "Front-End Frameworks", "Back-End Development with Node.js"]
        },
        {
            id: "3",
            index: 2,
            picture: bannerImage,
            name: "Data Science and Analytics",
            title: "Transform data into actionable insights.",
            description: "This course introduces data analysis, visualization, and machine learning techniques. Ideal for aspiring data analysts and scientists looking to leverage data for decision-making.",
            duration: "4 months",
            instructor: "Emily Davis",
            syllabus: ["Data Analysis with Python", "Data Visualization Techniques", "Introduction to Machine Learning", "Project Work"]
        },
        {
            id: "4",
            index: 3,
            picture: bannerImage,
            name: "Graphic Design Fundamentals",
            title: "Master the principles of design and visual communication.",
            description: "Learn the essential skills of graphic design, including layout, typography, and color theory. This course is perfect for aspiring designers.",
            duration: "2 months",
            instructor: "Laura Smith",
            syllabus: ["Introduction to Graphic Design", "Color Theory", "Typography Basics", "Design Projects"]
        },
        {
            id: "5",
            index: 4,
            picture: bannerImage,
            name: "Cybersecurity Essentials",
            title: "Understanding cybersecurity principles and practices.",
            description: "This course covers key concepts in cybersecurity, including threat analysis, risk management, and incident response. Ideal for those looking to start a career in cybersecurity.",
            duration: "5 months",
            instructor: "Michael Johnson",
            syllabus: ["Cybersecurity Fundamentals", "Threat Assessment", "Incident Response", "Security Policies"]
        },
        {
            id: "6",
            index: 5,
            picture: bannerImage,
            name: "Mobile App Development",
            title: "Create apps for iOS and Android platforms.",
            description: "This course provides hands-on experience in mobile app development using React Native and Flutter. Great for developers looking to expand their skillset.",
            duration: "4 months",
            instructor: "Sophia Lee",
            syllabus: ["Introduction to Mobile Development", "React Native Basics", "Flutter Fundamentals", "Deployment Strategies"]
        },
    ];

    const handleDetailsClick = (course: any) => {
        setSelectedCourse(course);
    };

    const closeDetails = () => {
        setSelectedCourse(null);
    };

    const toggleShowMore = () => {
        setShowMore(!showMore); // Toggle the state to show/hide more courses
    };

    return (
        <Container className='relative py-12 sm:py-16 lg:py-28'>
            <div>
                <div className='px-4 lg:px-8'>
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-center uppercase underline underline-offset-8 text-orange-500'>Our Courses</h1>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 lg:px-0 mt-8'>
                    {cardSection.slice(0, showMore ? cardSection.length : 4).map((item) => 
                        <motion.div 
                            key={item.id} 
                            className='hover:border-black bg-slate-100 p-3 rounded-md cursor-pointer'
                            initial={{ opacity: 0, scale: 0.9 }} // Initial state for small screens
                            animate={{ opacity: 1, scale: 1 }} // Animate to this state
                            transition={{ duration: 0.5 }} // Transition duration
                            whileHover={{ scale: 1.05, backgroundColor: '#32a6ab' }} // Scale and change background on hover
                        >
                            <Image src={item.picture} alt={item.name} className='object-cover mb-2' />
                            <h1 className='text-center text-lg sm:text-xl font-semibold'>{item.name}</h1>
                            <p className='text-center text-sm h-10'>{item.title}</p>
                            <div className='text-center'>
                                <button
                                    className='p-2 px-6 sm:px-8 font- tracking-wide hover:bg-orange-300 bg-orange-500 rounded-md'
                                    onClick={() => handleDetailsClick(item)}
                                >
                                    Details
                                </button>
                            </div>
                        </motion.div>
                    )}
                </div>
                <div className='text-center mt-6'>
                    <button 
                        onClick={toggleShowMore} 
                        className='p-2 px-6 font-semibold bg-orange-500 hover:bg-orange-300 rounded-md'
                    >
                        {showMore ? "Show Less" : "Show More"}
                    </button>
                </div>
                {selectedCourse && (
                    <motion.div 
                        className={`fixed top-0 left-0 h-full bg-white p-6 rounded-md shadow-lg ${selectedCourse ? 'block' : 'hidden'} z-50 w-full md:w-1/2`}
                        initial={{ opacity: 0, y: -50 }} // Initial state for the modal
                        animate={{ opacity: 1, y: 0 }} // Animate to this state
                        exit={{ opacity: 0, y: -50 }} // Animate exit state
                        transition={{ duration: 1 }} // Transition duration
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
