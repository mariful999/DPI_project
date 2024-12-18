"use client";

import Container from '@/app/ui/Container';
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { profileImage } from '@/app/assets/index';
import { FaFacebook, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface Teacher {
  id: string;
  picture: StaticImageData;
  name: string;
  title: string;
  workExperience?: string;
  facebook?: string;  // Optional Facebook profile URL
  email?: string;     // Optional Email address
}

const Card: React.FC = () => {
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [visibleTeachers, setVisibleTeachers] = useState<number>(4); // Initially show 4 teachers

  const cardSection: Teacher[] = [
    {
      id: "1",
      picture: profileImage,
      name: "MD Mariful Islam",
      title: "Web Developer",
      workExperience: "5 years in web development.",
      facebook: "https://www.facebook.com/mdmarifulislam",
      email: "mdmarifulislam@example.com"
    },
    {
      id: "2",
      picture: profileImage,
      name: "Jane Doe",
      title: "Graphic Designer",
      workExperience: "3 years in graphic design.",
      facebook: "https://www.facebook.com/janedoe",
      email: "janedoe@example.com"
    },
    {
      id: "3",
      picture: profileImage,
      name: "John Smith",
      title: "Data Analyst",
      workExperience: "4 years in data analysis.",
      facebook: "https://www.facebook.com/johnsmith",
      email: "johnsmith@example.com"
    },
    {
      id: "4",
      picture: profileImage,
      name: "Alice Johnson",
      title: "Digital Marketing Specialist",
      workExperience: "6 years in digital marketing.",
      facebook: "https://www.facebook.com/alicejohnson",
      email: "alicejohnson@example.com"
    },
    {
      id: "5",
      picture: profileImage,
      name: "Bob Brown",
      title: "Software Engineer",
      workExperience: "4 years in software development.",
      facebook: "https://www.facebook.com/bobbrown",
      email: "bobbrown@example.com"
    },
    {
      id: "6",
      picture: profileImage,
      name: "Emily Davis",
      title: "Project Manager",
      workExperience: "7 years in project management.",
      facebook: "https://www.facebook.com/emilydavis",
      email: "emilydavis@example.com"
    },
    // You can add more teachers here...
  ];

  const handleDetailsClick = (teacher: Teacher) => {
    setSelectedTeacher(teacher);
  };

  const handleCloseOverlay = () => {
    setSelectedTeacher(null);
  };

  const handleShowMore = () => {
    setVisibleTeachers((prev) => prev + 2); // Show 2 more teachers
  };

  return (
    <Container>
      <div className='pb-20'>
        <div>
          <h1 className="text-3xl font-bold text-center text-[#32a6ab] underline underline-offset-8 p-10">
            Meet Our Teachers
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-11 lg:p-0 gap-4">
          {cardSection.slice(0, visibleTeachers).map((item) => (
            <motion.div
              key={item.id}
              className="bg-slate-100 p-5 rounded-md cursor-pointer transition duration-300"
              initial={{ opacity: 0, scale: 0.8 }} // Start scaled down
              animate={{ opacity: 1, scale: 1 }} // Scale to normal size
              exit={{ opacity: 0 }} // Fade out on exit
              transition={{ duration: 0.4 }} // Smooth transition
              whileHover={{ scale: 1.05, backgroundColor: '#ff5722', color: '#fff' }} // Scale up and change background on hover
            >
              <Image src={item.picture} alt="profile" className="rounded-md mb-4" />
              <h1 className="text-center text-2xl font-semibold">{item.name}</h1>
              <p className="text-center text-sm h-10">{item.title}</p>
              <div className="text-center">
                <button
                  className="p-2 px-8 hover:bg-orange-300 bg-orange-500 rounded-md text-white"
                  onClick={() => handleDetailsClick(item)}
                >
                  Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedTeacher && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl p-6 rounded-lg relative">
              <button
                className="absolute top-2 right-2 p-4 border border-red-600 hover:bg-red-500 hover:text-white duration-300 rounded-sm"
                onClick={handleCloseOverlay}
              >
                X
              </button>
              <div className="flex flex-col items-center">
                <Image src={selectedTeacher.picture} alt="profile" className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full mb-4" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{selectedTeacher.name}</h2>
                <p className="text-lg sm:text-xl md:text-2xl mb-2">{selectedTeacher.title}</p>
                <p className="text-sm sm:text-md md:text-lg mb-4">{selectedTeacher.workExperience}</p>

                {/* Contact Options */}
                <div className="flex space-x-4 mt-4">
                  {selectedTeacher.facebook && (
                    <a
                      href={selectedTeacher.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FaFacebook className="text-2xl" />
                    </a>
                  )}
                  {selectedTeacher.email && (
                    <a
                      href={`mailto:${selectedTeacher.email}`}
                      className="text-gray-600 hover:text-gray-800"
                    >
                      <FaEnvelope className="text-2xl" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Show More Button */}
        {visibleTeachers < cardSection.length && ( // Only show button if there are more teachers to display
          <div className="text-center mt-10">
            <button
              className="p-2 px-6 bg-orange-500 text-white rounded-md hover:bg-[#ff5722] transition duration-300"
              onClick={handleShowMore}
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Card;
