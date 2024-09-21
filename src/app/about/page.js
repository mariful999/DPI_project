"use client";

import React from "react";
import Container from "../ui/Container";
import { FaHandsHelping, FaRocket, FaBook } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

const Course = () => {
  return (
    <Container>
      <div className="p-4 bg-gray-50">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-[#32a6ab] mb-12">
          About Memoir Academy
        </h1>

        {/* Section 1: How We Work */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg mb-12 flex flex-col md:flex-row items-center lg:items-start space-y-4 md:space-y-0 md:space-x-6">
          <FaHandsHelping className="text-6xl md:text-8xl items-center text-blue-600" />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#32a6ab] mb-4 md:mb-6">
              How We Work
            </h2>
            <p className="text-sm md:text-lg text-gray-700 mb-4">
              At Memoir Academy, we prioritize hands-on learning and real-world
              application. Our programs are designed to offer practical
              experience that you can apply directly to your career.
            </p>
            <p className="text-sm md:text-lg text-gray-700 mb-4">
              Each course includes interactive lessons, real-life projects, and
              personalized feedback from industry professionals.
            </p>
            <p className="text-sm md:text-lg text-gray-700">
              We offer video tutorials, hands-on assignments, and group
              discussions to cater to different learning styles.
            </p>
          </div>
        </div>

        {/* Section 2: Our Mission */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg mb-12 flex flex-col md:flex-row items-center lg:items-start space-y-4 md:space-y-0 md:space-x-6">
          <FaRocket className="text-6xl md:text-7xl text-red-600" />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#32a6ab] mb-4 md:mb-6">
              Our Mission
            </h2>
            <p className="text-sm md:text-lg text-gray-700 mb-4">
              Our mission at Memoir Academy is to provide high-quality education
              that empowers individuals to achieve their professional goals.
            </p>
            <p className="text-sm md:text-lg text-gray-700 mb-4">
              We aim to bridge the gap between education and industry by
              offering courses aligned with market trends.
            </p>
            <p className="text-sm md:text-lg text-gray-700">
              We offer flexible learning options to fit your busy schedule and
              help you advance your career.
            </p>
          </div>
        </div>

        {/* Section 3: Course Offerings */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg mb-12 flex flex-col md:flex-row items-center lg:items-start space-y-4 md:space-y-0 md:space-x-6">
          <FaBook className="text-5xl md:text-6xl text-green-600" />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#32a6ab] mb-4 md:mb-6">
              Course Offerings
            </h2>
            <p className="text-sm md:text-lg text-gray-700 mb-4">
              Memoir Academy offers a variety of courses, including web
              development, digital marketing, data science, and more.
            </p>
            <p className="text-sm md:text-lg text-gray-700 mb-4">
              Each course is designed by industry experts and includes hands-on
              projects to simulate real-world scenarios.
            </p>
            <p className="text-sm md:text-lg text-gray-700">
              Our programs are flexible, allowing you to learn at your own pace
              and fit them into your schedule.
            </p>
          </div>
        </div>

        {/* Section 4: Our Values */}
        <div className="bg-white p-6 md:p-8 pb-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center lg:items-start space-y-4 md:space-y-0 md:space-x-6">
          <GiSkills className="text-5xl md:text-6xl text-purple-600" />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#32a6ab] mb-4 md:mb-6">
              Our Values
            </h2>
            <p className="text-sm md:text-lg text-gray-700 mb-4">
              At Memoir Academy, we are driven by integrity, excellence, and
              innovation. We believe in creating a supportive and inclusive
              environment for all.
            </p>
            <p className="text-sm md:text-lg text-gray-700 mb-4">
              Our team is committed to providing exceptional support and
              ensuring that every learner has the resources they need to
              succeed.
            </p>
            <p className="text-sm md:text-lg text-gray-700">
              By embracing change and striving for excellence, we aim to make a
              positive impact on the lives of our learners.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Course;
