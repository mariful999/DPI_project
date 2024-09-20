import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import { bannerImage } from "@/app/assets/index"; // Update with actual image imports

const courses = [
  {
    id: "1",
    title: "Insurance",
    description: (
      <>
        <p className="mb-4">
          Dive into the world of insurance with our comprehensive course. This
          course covers:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Policy Types:</strong> Understand different types of
            insurance policies and their purposes.
          </li>
          <li>
            <strong>Risk Management:</strong> Learn about assessing and managing
            risks effectively.
          </li>
          <li>
            <strong>Claims Processing:</strong> Gain insights into the process
            of handling insurance claims.
          </li>
        </ul>
        <p>
          Stay updated with the latest trends and news in the insurance industry
          to enhance your knowledge and stay ahead in the field.
        </p>
      </>
    ),
    image: bannerImage,
    fee: "$499",
    teacher: "MD Mariful islam",
    time: "10:00 AM - 12:00 PM",
    date: "September 15, 2024",
    duration: "4 weeks",
  },
  {
    id: "2",
    title: "Banking",
    description: (
      <>
        <p className="mb-4">
          Explore the banking industry through our detailed course which
          includes:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Financial Products:</strong> Learn about various financial
            products and services offered by banks.
          </li>
          <li>
            <strong>Banking Regulations:</strong> Understand the regulations
            that govern the banking sector.
          </li>
          <li>
            <strong>Customer Service:</strong> Develop skills for providing
            excellent customer service in a banking environment.
          </li>
        </ul>
        <p>
          Keep up with the latest developments and regulations in the banking
          sector to enhance your career prospects.
        </p>
      </>
    ),
    image: bannerImage,
    fee: "$399",
    teacher: "Md Mariful Islam",
    time: "1:00 PM - 3:00 PM",
    date: "September 20, 2024",
    duration: "6 weeks",
  },
  {
    id: "3",
    title: "Diploma Programs",
    description: (
      <>
        <p className="mb-4">
          Our diploma programs are designed to provide you with:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Specialized Skills:</strong> Acquire skills in specific
            fields to boost your career opportunities.
          </li>
          <li>
            <strong>Practical Knowledge:</strong> Gain hands-on experience and
            knowledge relevant to your chosen field.
          </li>
          <li>
            <strong>Certification:</strong> Receive a diploma that validates
            your expertise and qualifications.
          </li>
        </ul>
        <p>
          Explore various diploma programs and stay informed about the latest
          trends and requirements in your field of interest.
        </p>
      </>
    ),
    image: bannerImage,
    fee: "$599",
    teacher: "Md Mariful islam",
    time: "2:00 PM - 4:00 PM",
    date: "September 25, 2024",
    duration: "8 weeks",
  },
  // Add more courses as needed
];

const Course = () => {
  return (
    <Container>
      <div className="py-12">
        <h1 className="text-4xl font-bold text-center text-[#32a6ab] mb-8">
          Our Courses
        </h1>
        <div className="flex flex-wrap gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="w-full lg:w-1/2">
                <Image
                  src={course.image}
                  alt={course.title}
                  className="w-full h-64 object-cover"
                  layout="responsive"
                />
              </div>
              <div className="w-full lg:w-1/2 p-6">
                <h2 className="text-2xl font-semibold mb-4">{course.title}</h2>
                <div className="text-gray-700 mb-4">{course.description}</div>
                <div className="text-lg font-bold text-[#32a6ab] mb-2">
                  Fee: {course.fee}
                </div>
                <div className="text-gray-800 mb-2">
                  <strong>Teacher:</strong> {course.teacher}
                </div>
                <div className="text-gray-800 mb-2">
                  <strong>Time:</strong> {course.time}
                </div>
                <div className="text-gray-800 mb-2">
                  <strong>Date:</strong> {course.date}
                </div>
                <div className="text-gray-800 mb-4">
                  <strong>Duration:</strong> {course.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Course;
