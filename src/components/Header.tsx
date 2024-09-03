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
                                className='w-32  lg:w-36 rounded-md duration-300'
                            />
                        </Link>
                    </div>

                    {/* Hamburger Icon */}
                    <div className='lg:hidden'>
                        <button onClick={toggleMenu} className='text-3xl hover:text-red-800'>
                            {isOpen ? <FaTimes className='' /> : <FaBars />}
                        </button>
                    </div>

                    {/* Navigation */}
                    <div className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:gap-4 absolute lg:static top-20 right-0 lg:w-auto bg-blue-500 lg:bg-transparent font-semibold p-4 lg:p-0 shadow-lg lg:shadow-none z-10 lg:z-auto`}>
                        <div className='flex flex-col lg:flex-row lg:gap-4'>
                            {navigation.map((item,index) => (
                                <Link 
                                    key={index} 
                                    href={item.link} 
                                    className='lg:underline underline-offset-4 hover:text-red-700 duration-300 cursor-pointer'
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
