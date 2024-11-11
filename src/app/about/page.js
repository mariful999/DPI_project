"use client";

import { profileImage } from "@/app/assets"; // Ensure the correct image import
import React from "react";
import Container from "../ui/Container";
import { FaLaptopCode, FaUsers, FaBullhorn } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import Image from "next/image";

const AboutLogicITCenter = () => {
  return (
    <Container>
      <div className="p-4 bg-gray-50">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-orange-500 mb-12">
          About Logic IT Center
        </h1>

        {/* Meet the Team */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-6 text-center">
            Meet the Team
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            {/* CEO */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
              <Image
                src={profileImage} // Assuming the image path is correct
                alt="John Doe - CEO"
                width={120}
                height={120}
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                John Doe
              </h3>
              <p className="text-sm text-gray-700">
                CEO & Founder of Logic IT Center. John brings over 15 years of
                experience in the tech industry.
              </p>
            </div>

            {/* Manager */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
              <Image
                src={profileImage} // Same image source (or use different ones for each)
                alt="Jane Smith - Manager"
                width={120}
                height={120}
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                Jane Smith
              </h3>
              <p className="text-sm text-gray-700">
                Manager at Logic IT Center. With over 10 years of experience in
                IT education, Jane ensures smooth course operations.
              </p>
            </div>

            {/* Founder */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
              <Image
                src={profileImage} // Same image source (or use different ones for each)
                alt="Michael Brown - Founder"
                width={120}
                height={120}
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                Michael Brown
              </h3>
              <p className="text-sm text-gray-700">
                Founder of Logic IT Center. Michael is passionate about bridging
                tech education with industry needs.
              </p>
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg mb-12 flex flex-col md:flex-row items-center lg:items-start space-y-4 md:space-y-0 md:space-x-6">
          <FaLaptopCode className="text-6xl md:text-8xl text-orange-500" />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-4 md:mb-6">
              Our Approach
            </h2>
            <p className="text-sm md:text-lg text-gray-700 mb-4">
              At Logic IT Center, we equip learners with industry-relevant IT
              skills through hands-on training and real-world experience.
            </p>
            <p className="text-sm md:text-lg text-gray-700 mb-4">
              Our approach includes practical projects, real-life scenarios, and
              industry mentors to ensure job-readiness.
            </p>
            <p className="text-sm md:text-lg text-gray-700">
              We combine flexible online learning with interactive sessions to
              make learning both effective and enjoyable.
            </p>
          </div>
        </div>

        {/* Our Vision */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg mb-12 flex flex-col md:flex-row items-center lg:items-start space-y-4 md:space-y-0 md:space-x-6">
          <FaBullhorn className="text-6xl md:text-7xl text-orange-500" />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-4 md:mb-6">
              Our Vision
            </h2>
            <p className="text-sm md:text-lg text-gray-700 mb-4">
              We aim to become a leading provider of IT education, empowering
              students to succeed in the tech industry.
            </p>
            <p className="text-sm md:text-lg text-gray-700 mb-4">
              We foster a community of passionate learners ready to tackle
              tomorrows digital challenges.
            </p>
            <p className="text-sm md:text-lg text-gray-700">
              Our vision is to create a platform where learners develop the
              expertise needed to make a difference.
            </p>
          </div>
        </div>

        {/* Our Courses */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg mb-12 flex flex-col md:flex-row items-center lg:items-start space-y-4 md:space-y-0 md:space-x-6">
          <GiTrophyCup className="text-5xl md:text-6xl text-orange-500" />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-4 md:mb-6">
              Our Courses
            </h2>
            <p className="text-sm md:text-lg text-gray-700 mb-4">
              Logic IT Center offers cutting-edge courses in Web Development,
              Cybersecurity, Cloud Computing, and Data Science.
            </p>
            <p className="text-sm md:text-lg text-gray-700 mb-4">
              Each course is designed with practical exercises and hands-on
              learning to develop marketable skills.
            </p>
            <p className="text-sm md:text-lg text-gray-700">
              Our flexible programs allow you to learn at your own pace while
              receiving support to succeed.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-white p-6 md:p-8 pb-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center lg:items-start space-y-4 md:space-y-0 md:space-x-6">
          <FaUsers className="text-5xl md:text-6xl text-orange-500" />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-4 md:mb-6">
              Our Values
            </h2>
            <p className="text-sm md:text-lg text-gray-700 mb-4">
              At Logic IT Center, we prioritize integrity, teamwork, and
              innovation in everything we do.
            </p>
            <p className="text-sm md:text-lg text-gray-700 mb-4">
              We believe in creating an inclusive and supportive environment
              where every student is encouraged to succeed.
            </p>
            <p className="text-sm md:text-lg text-gray-700">
              We are committed to continuous improvement, adapting to the latest
              tech trends to provide the best learning experience.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutLogicITCenter;
