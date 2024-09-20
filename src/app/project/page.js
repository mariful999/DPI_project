import React from "react";
import Container from "../ui/Container";
import { FaBookOpen, FaCalculator, FaGraduationCap } from "react-icons/fa";

const projects = [
  {
    id: "1",
    title: "English Language Course",
    description:
      "Enhance your English skills with our comprehensive language course. This program covers grammar, vocabulary, and conversational practice to help you achieve fluency. The course includes interactive lessons, real-world practice scenarios, and personalized feedback to ensure your progress.",
    icon: <FaBookOpen className="text-6xl text-blue-600" />, // Larger icon
    date: "2024-09-01",
    details: [
      "Interactive grammar exercises",
      "Vocabulary building with daily practice",
      "Conversational English with native speakers",
      "Customized feedback and progress tracking",
    ],
  },
  {
    id: "2",
    title: "Mathematics Mastery",
    description:
      "Master various mathematical concepts from basic arithmetic to advanced calculus with our structured curriculum. This course offers step-by-step tutorials, problem-solving techniques, and practice problems to build a solid mathematical foundation.",
    icon: <FaCalculator className="text-6xl text-green-600" />, // Larger icon
    date: "2024-09-15",
    details: [
      "Comprehensive lessons from basic to advanced math",
      "Problem-solving techniques and strategies",
      "Regular quizzes and assignments",
      "Expert tutoring and support",
    ],
  },
  {
    id: "3",
    title: "IELTS Preparation",
    description:
      "Prepare for the IELTS exam with targeted practice sessions, mock tests, and expert guidance to achieve your desired score. Our course focuses on all four sections of the IELTS test – Listening, Reading, Writing, and Speaking – with tailored strategies and practice materials.",
    icon: <FaGraduationCap className="text-6xl text-red-600" />, // Larger icon
    date: "2024-10-01",
    details: [
      "Mock tests for realistic practice",
      "Listening and reading comprehension exercises",
      "Writing task preparation with feedback",
      "Speaking practice with native tutors",
    ],
  },
  // Add more courses as needed
];

const Project = () => {
  return (
    <Container>
      <div className="py-12">
        <h1 className="text-4xl font-bold text-center text-[#32a6ab] mb-8">
          Upcoming Courses & News
        </h1>
        <div className="flex flex-wrap gap-8 justify-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden p-6 w-full max-w-md flex flex-col items-center text-center"
            >
              <div className="mb-6">{project.icon}</div>
              <h2 className="text-2xl font-semibold mb-4 text-[#32a6ab]">
                {project.title}
              </h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <p className="text-gray-500 mb-4">Start Date: {project.date}</p>
              <ul className="list-disc pl-5 mb-4">
                {project.details.map((detail, index) => (
                  <li key={index} className="text-gray-600">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Project;
