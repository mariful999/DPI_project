"use client";

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

        {/* Section 1: Our Approach */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg mb-12 flex flex-col md:flex-row items-center lg:items-start space-y-4 md:space-y-0 md:space-x-6">
          <FaLaptopCode className="text-6xl md:text-8xl items-center text-orange-500" />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-4 md:mb-6">
              Our Approach
            </h2>
            <p className="text-sm md:text-lg text-gray-700 mb-4">
              At Logic IT Center, we focus on equipping learners with
              industry-relevant IT skills through hands-on training and
              real-world experience.
            </p>
            <p className="text-sm md:text-lg text-gray-700 mb-4">
              Our approach includes practical projects, real-life scenarios, and
              industry mentors to ensure our students are job-ready.
            </p>
            <p className="text-sm md:text-lg text-gray-700">
              We combine flexible online learning with interactive sessions to
              make learning both effective and enjoyable.
            </p>
          </div>
        </div>

        {/* Section 2: Our Vision */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg mb-12 flex flex-col md:flex-row items-center lg:items-start space-y-4 md:space-y-0 md:space-x-6">
          <FaBullhorn className="text-6xl md:text-7xl text-orange-500" />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-4 md:mb-6">
              Our Vision
            </h2>
            <p className="text-sm md:text-lg text-gray-700 mb-4">
              Logic IT Center envisions becoming a leading provider of IT
              education, empowering students to succeed in the ever-evolving
              tech industry.
            </p>
            <p className="text-sm md:text-lg text-gray-700 mb-4">
              We aim to foster a community of learners who are passionate about
              technology and ready to tackle the challenges of tomorrow's
              digital world.
            </p>
            <p className="text-sm md:text-lg text-gray-700">
              Our vision is to create a platform where learners of all
              backgrounds can develop the technical expertise needed to make a
              difference.
            </p>
          </div>
        </div>

        {/* Section 3: Our Courses */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg mb-12 flex flex-col md:flex-row items-center lg:items-start space-y-4 md:space-y-0 md:space-x-6">
          <GiTrophyCup className="text-5xl md:text-6xl text-orange-500" />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-4 md:mb-6">
              Our Courses
            </h2>
            <p className="text-sm md:text-lg text-gray-700 mb-4">
              Logic IT Center offers cutting-edge courses in Web Development,
              Cybersecurity, Cloud Computing, Data Science, and more.
            </p>
            <p className="text-sm md:text-lg text-gray-700 mb-4">
              Each course is designed with practical exercises, case studies,
              and a hands-on learning approach to ensure you develop marketable
              skills.
            </p>
            <p className="text-sm md:text-lg text-gray-700">
              Our programs are flexible, allowing you to learn at your own pace
              while still receiving the support needed to succeed.
            </p>
          </div>
        </div>

        {/* Section 4: Our Values */}
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
              We believe in creating an inclusive and supportive learning
              environment, where every student is encouraged to achieve their
              goals.
            </p>
            <p className="text-sm md:text-lg text-gray-700">
              We are committed to continuous improvement, always adapting to the
              latest technological trends to offer the best learning experience.
            </p>
          </div>
        </div>

        {/* Section 5: Meet the Team */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-6 text-center">
            Meet the Team
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            {/* CEO */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
              <Image
                src="/assets/profil-img.jpg" // Corrected image path
                alt="CEO"
                width={120} // Set the width of the image
                height={120} // Set the height of the image
                className="rounded-full mb-4" // Circular image
              />
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                John Doe
              </h3>
              <p className="text-sm text-gray-700">
                CEO & Founder of Logic IT Center. John brings over 15 years of
                experience in the tech industry, having worked with top tech
                firms and leading teams to success.
              </p>
            </div>

            {/* Manager */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
              <Image
                src="/assets/profil-img.jpg" // Corrected image path
                alt="Manager"
                width={120} // Set the width of the image
                height={120} // Set the height of the image
                className="rounded-full mb-4" // Circular image
              />
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                Jane Smith
              </h3>
              <p className="text-sm text-gray-700">
                Manager at Logic IT Center. With over 10 years of experience in
                IT education and training, Jane ensures the smooth running of
                all courses and the overall student experience.
              </p>
            </div>

            {/* Founder */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
              <Image
                src="/assets/profil-img.jpg" // Corrected image path
                alt="Founder"
                width={120} // Set the width of the image
                height={120} // Set the height of the image
                className="rounded-full mb-4" // Circular image
              />
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                Michael Brown
              </h3>
              <p className="text-sm text-gray-700">
                Founder of Logic IT Center. Michael is passionate about bridging
                the gap between tech education and industry needs, ensuring all
                our programs are aligned with current market trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutLogicITCenter;
