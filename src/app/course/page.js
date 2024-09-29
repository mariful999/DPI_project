"use client"; // Indicate that this component is a client component
import React, { useState } from "react"; // Import React and useState hook for managing state
import Container from "../ui/Container"; // Import a Container component for layout
import Image from "next/image"; // Import Next.js Image component for optimized images
import { bannerImage } from "@/app/assets/index"; // Import the banner image (update with actual image imports)

// Define an array of course objects with relevant details
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
    image: bannerImage, // Image associated with the course
    fee: "$499", // Course fee
    teacher: "MD Mariful Islam", // Course instructor
    time: "10:00 AM - 12:00 PM", // Course time
    date: "September 15, 2024", // Course date
    duration: "4 weeks", // Duration of the course
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
    teacher: "Md Mariful Islam",
    time: "2:00 PM - 4:00 PM",
    date: "September 25, 2024",
    duration: "8 weeks",
  },
  // Add more courses as needed
];

const Course = () => {
  // State to hold the currently selected course
  const [selectedCourse, setSelectedCourse] = useState(null);
  // State to hold the list of courses added to the cart
  const [cart, setCart] = useState([]);

  // Function to handle Buy Now button click
  const handleBuyNowClick = (course) => {
    setSelectedCourse(course); // Set the selected course to state
  };

  // Function to handle Add to Cart button click
  const handleAddToCart = (course) => {
    setCart([...cart, course]); // Add the selected course to the cart
    alert(`${course.title} has been added to your cart!`); // Show confirmation alert
  };

  // Function to handle Pay Now button click
  const handlePayNowClick = () => {
    alert(`Proceeding to payment for ${selectedCourse.title}`); // Show payment alert for the selected course
  };

  return (
    <Container>
      <div className="py-12">
        <h1 className="text-4xl font-bold text-center text-[#32a6ab] mb-8">
          Our Courses
        </h1>
        <div className="flex flex-wrap gap-6 justify-center">
          {/* Added justify-center for better alignment */}
          {courses.map((course) => (
            <div
              key={course.id}
              className={`flex flex-col bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-72 md:w-80 lg:w-96 transition-transform transform ${
                selectedCourse?.id === course.id
                  ? "border-4 border-[#32a6ab]" // Highlight selected course
                  : ""
              }`}
            >
              <div className="relative h-48">
                {/* Relative height for image */}
                <Image
                  src={course.image}
                  alt={course.title}
                  className="absolute inset-0 w-full h-full object-cover" // Ensuring images are responsive
                  layout="fill" // Cover the entire div
                />
              </div>
              <div className="p-6">
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
                <div className="flex gap-4">
                  {/* Flex container for buttons */}
                  <button
                    onClick={() => handleAddToCart(course)} // Handle Add to Cart click
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleBuyNowClick(course)} // Handle Buy Now click
                    className="mt-4 bg-[#32a6ab] text-white py-2 px-4 rounded hover:bg-[#28a19b] transition"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Details Card for the selected course */}
        {selectedCourse && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
              <h4 className="text-xl font-bold mb-4">Course Details</h4>
              <div className="relative h-40 mb-4">
                {/* Card image */}
                <Image
                  src={selectedCourse.image} // Image for the selected course
                  alt={selectedCourse.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg" // Ensuring images are responsive and rounded
                  layout="fill" // Cover the entire div
                />
              </div>
              <h2 className="text-2xl font-semibold mb-2">
                {selectedCourse.title}
              </h2>
              <div className="text-lg font-bold text-[#32a6ab] mb-2">
                Fee: {selectedCourse.fee}
              </div>
              <div className="text-gray-800 mb-2">
                <strong>Teacher:</strong> {selectedCourse.teacher}
              </div>
              <div className="text-gray-800 mb-2">
                <strong>Time:</strong> {selectedCourse.time}
              </div>
              <div className="text-gray-800 mb-2">
                <strong>Date:</strong> {selectedCourse.date}
              </div>
              <div className="text-gray-800 mb-4">
                <strong>Duration:</strong> {selectedCourse.duration}
              </div>
              <div className="flex flex-col gap-2">
                {" "}
                {/* Flex container for buttons with gap */}
                <button
                  onClick={handlePayNowClick} // Handle Pay Now click
                  className="mt-4 bg-[#32a6ab] text-white py-2 px-4 rounded hover:bg-[#28a19b] transition"
                >
                  Pay Now
                </button>
                <button
                  onClick={() => setSelectedCourse(null)} // Close the details card
                  className="bg-gray-300 text-black py-1 px-2 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Course; // Export the Course component for use in other parts of the app
