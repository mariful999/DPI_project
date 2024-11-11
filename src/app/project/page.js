import React from "react";
import Container from "../ui/Container";
import {
  FaBookOpen,
  FaCalculator,
  FaGraduationCap,
  FaLaptopCode,
  FaServer,
  FaCloud,
} from "react-icons/fa";

const projects = [
  {
    id: "1",
    title: "Web Development Bootcamp",
    description:
      "Learn full-stack web development in this intensive bootcamp. From front-end technologies like HTML, CSS, and JavaScript to back-end tools like Node.js and databases, this course equips you with the skills to build modern, responsive websites.",
    icon: <FaLaptopCode className="text-6xl text-orange-500" />, // Updated to orange 500
    date: "2024-11-01",
    details: [
      "Front-end development with HTML, CSS, JavaScript",
      "Back-end development with Node.js and Express",
      "Database management with MongoDB",
      "Building responsive websites and web apps",
    ],
  },
  {
    id: "2",
    title: "Cloud Computing Essentials",
    description:
      "Master the basics of cloud computing and understand how to use cloud platforms such as AWS, Google Cloud, and Microsoft Azure. This course includes hands-on labs to deploy and manage cloud applications, virtual machines, and storage services.",
    icon: <FaCloud className="text-6xl text-orange-500" />, // Updated to orange 500
    date: "2024-11-15",
    details: [
      "Introduction to cloud computing platforms (AWS, GCP, Azure)",
      "Deploying virtual machines and cloud storage",
      "Managing cloud-based applications and services",
      "Security practices for cloud environments",
    ],
  },
  {
    id: "3",
    title: "Cybersecurity Fundamentals",
    description:
      "Dive into the world of cybersecurity and learn essential security practices for protecting networks, systems, and data. This course covers topics like encryption, threat detection, firewalls, and incident response.",
    icon: <FaServer className="text-6xl text-orange-500" />, // Updated to orange 500
    date: "2024-12-01",
    details: [
      "Understanding encryption and secure communications",
      "Network security and threat detection",
      "Firewalls and intrusion detection systems (IDS)",
      "Incident response and recovery strategies",
    ],
  },
  {
    id: "4",
    title: "Data Science with Python",
    description:
      "Learn how to work with data using Python. This course covers everything from data manipulation to machine learning algorithms and data visualization techniques using popular Python libraries.",
    icon: <FaBookOpen className="text-6xl text-orange-500" />, // Updated to orange 500
    date: "2024-12-10",
    details: [
      "Data manipulation with Pandas",
      "Data visualization using Matplotlib and Seaborn",
      "Machine learning algorithms with Scikit-learn",
      "Real-world data science project",
    ],
  },
  {
    id: "5",
    title: "Mobile App Development",
    description:
      "Learn to build mobile applications for both Android and iOS using React Native. This course will teach you how to create responsive, high-performance apps with a focus on user experience and functionality.",
    icon: <FaLaptopCode className="text-6xl text-orange-500" />, // Updated to orange 500
    date: "2024-12-20",
    details: [
      "Building mobile apps with React Native",
      "Creating responsive UI and handling app states",
      "Integrating APIs and databases",
      "Publishing apps to Google Play and Apple App Store",
    ],
  },
];

const Project = () => {
  return (
    <Container>
      <div className="py-12">
        <h1 className="text-4xl font-bold text-center text-orange-500 mb-8">
          Upcoming IT Courses & News
        </h1>
        <div className="flex flex-wrap gap-8 justify-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden p-6 w-full max-w-md flex flex-col items-center text-center"
            >
              <div className="mb-6">{project.icon}</div>
              <h2 className="text-2xl font-semibold mb-4 text-orange-500">
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
