"use client";

import React from "react";
import Container from "../ui/Container";
import { FaHandsHelping, FaRocket, FaBook } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

const Course = () => {
  return (
    <Container>
      <div className="p-8 max-w-5xl mx-auto bg-gray-50">
        <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-12">
          About Memoir Academy
        </h1>

        <div className="bg-white p-8 rounded-lg shadow-lg mb-12 flex items-start space-x-6">
          <FaHandsHelping className="text-6xl text-blue-600" />
          <div>
            <h2 className="text-3xl font-semibold text-blue-800 mb-6">
              How We Work
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              At Memoir Academy, we prioritize hands-on learning and real-world
              application. Our programs are designed to offer practical
              experience that you can apply directly to your career. We believe
              in learning by doing, and our courses are structured to provide
              you with immediate, actionable skills.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Each course includes interactive lessons, real-life projects, and
              personalized feedback from industry professionals. Our goal is to
              ensure you not only understand the concepts but can also implement
              them effectively in a professional setting.
            </p>
            <p className="text-lg text-gray-700">
              We offer a variety of learning resources, including video
              tutorials, hands-on assignments, and group discussions, to cater
              to different learning styles and needs.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg mb-12 flex items-start space-x-6">
          <FaRocket className="text-6xl text-red-600" />
          <div>
            <h2 className="text-3xl font-semibold text-blue-800 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Our mission at Memoir Academy is to provide high-quality education
              and training that empowers individuals to achieve their
              professional goals. We are committed to fostering a learning
              environment that supports growth, innovation, and excellence.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              We aim to bridge the gap between education and industry by
              offering courses that are aligned with current market trends and
              demands. Our dedicated instructors work closely with each learner
              to ensure they receive the guidance and support they need to
              succeed.
            </p>
            <p className="text-lg text-gray-700">
              We strive to make education accessible to all by offering flexible
              learning options and financial support. Our programs are designed
              to fit into your busy schedule and provide you with the skills you
              need to advance your career.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg mb-12 flex items-start space-x-6">
          <FaBook className="text-6xl text-green-600" />
          <div>
            <h2 className="text-3xl font-semibold text-blue-800 mb-6">
              Course Offerings
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Memoir Academy offers a diverse range of courses tailored to meet
              the needs of professionals in various fields. Our courses cover a
              wide spectrum of topics, including web development, digital
              marketing, data science, and more.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Each course is crafted by industry experts and includes hands-on
              projects that simulate real-world scenarios. We emphasize
              practical experience and provide students with the tools they need
              to succeed in their careers.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our programs are designed to be flexible and accommodating,
              allowing you to learn at your own pace and on your own schedule.
              Whether you are looking to enhance your skills or start a new
              career, our courses are designed to help you achieve your goals.
            </p>
            <p className="text-lg text-gray-700">
              Explore our course catalog to find the program that best fits your
              needs and begin your journey towards professional growth and
              success.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg flex items-start space-x-6">
          <GiSkills className="text-6xl text-purple-600" />
          <div>
            <h2 className="text-3xl font-semibold text-blue-800 mb-6">
              Our Values
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              At Memoir Academy, our core values drive everything we do. We are
              committed to integrity, excellence, and innovation. Our values are
              reflected in our approach to education and our interactions with
              students.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              We believe in creating a supportive and inclusive environment
              where everyone can thrive. Our team is dedicated to providing
              exceptional support and ensuring that every learner has the
              resources they need to succeed.
            </p>
            <p className="text-lg text-gray-700">
              We continuously seek to improve and adapt our programs to meet the
              evolving needs of the industry and our students. By embracing
              change and striving for excellence, we aim to make a positive
              impact on the lives of our learners.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Course;
