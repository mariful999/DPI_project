"use client";
import React, { useState } from "react";
import Container from "../ui/Container";
import Image from "next/image";
import { bannerImage } from "@/app/assets/index";

const courses = [
  // Adding more diverse courses
  {
    id: "1",
    title: "Web Development",
    description:
      "Learn the essentials of HTML, CSS, and JavaScript to build websites.",
    image: bannerImage,
    fee: "$499",
    teacher: "Md Mariful Islam",
    time: "9:00 AM - 11:00 AM",
    date: "November 15, 2024",
    duration: "6 weeks",
  },
  {
    id: "2",
    title: "Ethical Hacking",
    description:
      "Explore cybersecurity fundamentals and ethical hacking tools.",
    image: bannerImage,
    fee: "$599",
    teacher: "Md Mariful Islam",
    time: "2:00 PM - 4:00 PM",
    date: "November 22, 2024",
    duration: "8 weeks",
  },
  // New courses added for variety
  {
    id: "7",
    title: "UI/UX Design",
    description:
      "Learn design principles and create intuitive user experiences.",
    image: bannerImage,
    fee: "$450",
    teacher: "John Doe",
    time: "10:00 AM - 12:00 PM",
    date: "December 10, 2024",
    duration: "4 weeks",
  },
  {
    id: "8",
    title: "Digital Marketing",
    description: "Master SEO, social media marketing, and PPC advertising.",
    image: bannerImage,
    fee: "$400",
    teacher: "Jane Smith",
    time: "1:00 PM - 3:00 PM",
    date: "December 18, 2024",
    duration: "6 weeks",
  },
  {
    id: "9",
    title: "Data Analytics",
    description: "Learn data visualization, analysis, and reporting tools.",
    image: bannerImage,
    fee: "$550",
    teacher: "Mike Brown",
    time: "3:00 PM - 5:00 PM",
    date: "January 5, 2025",
    duration: "6 weeks",
  },
];

const Course = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBuyNowClick = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true); // Open modal on Buy Now click
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null); // Reset selection when modal closes
  };

  return (
    <Container>
      <div className="py-12">
        <h1 className="text-4xl font-bold text-center text-orange-500 mb-8">
          Our Courses
        </h1>
        <div className="flex flex-wrap gap-6 justify-center">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-72 md:w-80 lg:w-96 transition-transform"
            >
              <div className="relative h-48">
                <Image
                  src={course.image}
                  alt={course.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  layout="fill"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">{course.title}</h2>
                <p className="text-gray-700 mb-4">{course.description}</p>
                <div className="text-lg font-bold text-orange-500 mb-2">
                  Fee: {course.fee}
                </div>
                <div className="text-gray-800 mb-2">
                  <strong>Teacher:</strong> {course.teacher}
                </div>
                <div className="text-gray-800 mb-2">
                  <strong>Time:</strong> {course.time}
                </div>
                <div className="text-gray-800 mb-4">
                  <strong>Duration:</strong> {course.duration}
                </div>
                <button
                  onClick={() => handleBuyNowClick(course)}
                  className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for course details */}
        {isModalOpen && selectedCourse && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-80 shadow-lg relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              >
                ✕
              </button>
              <h4 className="text-xl font-bold mb-4">Course Details</h4>
              <div className="relative h-40 mb-4">
                <Image
                  src={selectedCourse.image}
                  alt={selectedCourse.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  layout="fill"
                />
              </div>
              <div>
                <h5 className="text-2xl font-semibold mb-2">
                  {selectedCourse.title}
                </h5>
                <p className="text-gray-700 mb-4">
                  {selectedCourse.description}
                </p>
                <div className="text-lg font-bold text-orange-500 mb-2">
                  Fee: {selectedCourse.fee}
                </div>
                <div className="text-gray-800 mb-2">
                  <strong>Teacher:</strong> {selectedCourse.teacher}
                </div>
                <div className="text-gray-800 mb-2">
                  <strong>Time:</strong> {selectedCourse.time}
                </div>
                <div className="text-gray-800 mb-4">
                  <strong>Duration:</strong> {selectedCourse.duration}
                </div>
                <button
                  onClick={() =>
                    alert(`Proceeding to payment for ${selectedCourse.title}`)
                  }
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                >
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Course;
