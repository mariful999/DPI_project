"use client"
import { logo } from '@/app/assets';
import Container from '@/app/ui/Container';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigation = [
        { title: "Home", link: "/" },
        { title: "About", link: "/about" },
        { title: "Course", link: "/course" },
        { title: "Contact", link: "/contact" },
        { title: "Project", link: "/project" },
        { title: "Registration", link: "/registration" }
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='bg-yellow-100 sticky top-0 z-50'>
            <Container>
                <div className='flex justify-between items-center h-20'>
                    {/* Logo */}
                    <div className='cursor-pointer'>
                        <Link href="/">
                            <Image 
                                src={logo} 
                                alt="logo" 
                                className='w-20 lg:w-24 rounded-md hover:bg-green-300 duration-300'
                            />
                        </Link>
                    </div>

                    {/* Hamburger Icon */}
                    <div className='lg:hidden'>
                        <button onClick={toggleMenu} className='text-3xl'>
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>

                    {/* Navigation */}
                    <div className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:gap-4 absolute lg:static top-16 left-0 w-full lg:w-auto bg-yellow-100 lg:bg-transparent p-4 lg:p-0 shadow-lg lg:shadow-none z-10 lg:z-auto`}>
                        <div className='flex flex-col lg:flex-row lg:gap-4'>
                            {navigation.map((item, index) => (
                                <Link 
                                    key={item.title} 
                                    href={item.link} 
                                    className='underline underline-offset-4 hover:text-red-700 duration-300 cursor-pointer'
                                    onClick={() => setIsOpen(false)}  // Close menu on link click
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                        <div>
                            <button className='bg-yellow-50 text-black p-2 mt-4 lg:mt-0 hover:bg-green-400 duration-300 hover:text-red-700 rounded-md'>
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Header;
