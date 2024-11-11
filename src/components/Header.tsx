"use client";
import Container from "@/app/ui/Container";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaFacebookF, FaWhatsapp, FaTwitter, FaEnvelope } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);  // State to manage the mobile menu (open/close)
  const [isMobile, setIsMobile] = useState(false); // State to determine if the screen is mobile
  const pathname = usePathname();

  // Check if the screen size is mobile after the component mounts
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Call on mount
    window.addEventListener("resize", handleResize); // Add resize listener

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener
    };
  }, []);

  // Navigation links
  const navigation = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Course", link: "/course" },
    { title: "Contact", link: "/contact" },
    { title: "Project", link: "/project" },
    { title: "Registration", link: "/registration" },
  ];

  // Function to toggle the mobile menu (Hamburger)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="cursor-pointer">
            <Link href="/">
             <h1 className="uppercase font-bold text-orange-500 text-2xl hover:text-xl">Logic  It Center</h1>
            </Link>
          </div>

          {/* Hamburger Icon for Mobile Menu */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-3xl hover:text-[#e22727]">
              {isOpen ? <FaTimes /> : <FaBars />}  {/* Toggle between menu open/close icons */}
            </button>
          </div>

          {/* Navigation Menu */}
          <div
            className={`${
              isOpen ? "block" : "hidden"  // Show or hide the mobile menu
            } lg:flex lg:items-center lg:gap-4 absolute lg:static top-20 right-0 lg:w-auto bg-[#5490f0] lg:bg-transparent font-semibold p-4 lg:p-0 shadow-lg lg:shadow-none z-10 lg:z-auto`}
          >
            {/* Links */}
            <div className="flex flex-col lg:flex-row lg:gap-4">
              {navigation.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -20 }}  // Animation for appearing links
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: isMobile ? 0.1 : 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, color: "#e22727" }}  /* Hover effect */
                >
                  <Link
                    href={item.link}
                    className={`duration-300 cursor-pointer 
                      ${pathname === item.link ? "text-orange-500 underline" : " no-underline"}`}  // Active link styling
                    onClick={() => {
                      setIsOpen(false);  // Close the menu when a link is clicked
                      window.scrollTo(0, 0);
                    }}
                  >
                    {item.title}
                  </Link>
                </motion.div> 
              ))}
            </div>

            {/* Login Button */}
            <motion.div className="mt-4 lg:mt-0">
              <Link href="/login">
                <button
                  className="bg-yellow-50 text-black p-2 hover:bg-orange-500 duration-300 hover:text-red-700 rounded-md"
                  
                >
                  Log in
                </button>
              </Link>
            </motion.div>

            {/* Social Icons (Visible only on small devices) */}
            {isMobile && (  // Show this block only if the screen size is small
              <div className="flex justify-around gap-4 mt-4 lg:mt-0">
                {/* Facebook Icon */}
                <motion.a
                  href="https://facebook.com"
                  target="_blank"
                  className="text-white hover:text-[#1877F2]"  // Hover color change
                  whileHover={{ scale: 1.1 }}  // Animation for scaling on hover
                >
                  <FaFacebookF size={24} />  {/* Facebook Icon */}
                </motion.a>

                {/* WhatsApp Icon */}
                <motion.a
                  href="https://wa.me/01819937944"  // Add your WhatsApp number here
                  target="_blank"
                  className="text-white hover:text-[#25D366]"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaWhatsapp size={24} />  {/* WhatsApp Icon */}
                </motion.a>

                {/* Gmail Icon */}
                <motion.a
                  href="mailto:your-email@gmail.com"  // Replace with your email address
                  className="text-white hover:text-[#D14836]"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaEnvelope size={24} />  {/* Gmail Icon */}
                </motion.a>

                {/* Twitter Icon */}
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  className="text-white hover:text-[#1DA1F2]"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaTwitter size={24} />  {/* Twitter Icon */}
                </motion.a>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
