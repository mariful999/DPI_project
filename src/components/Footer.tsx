import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 p-10">
      {/* Social Media Links */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center border-b border-gray-700 pb-6">
        <div className="hidden lg:block">
          <span className="text-gray-400">Connect with us on social media:</span>
        </div>
        <div className="flex space-x-6 mt-4 lg:mt-0">
          <Link href="https://www.facebook.com/profile.php?id=61562876453891&mibextid=JRoKGi" target="_blank" aria-label="Facebook">
            <FaFacebookF className="h-8 w-8 p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition" />
          </Link>
          <Link href="https://wa.me/YourPhoneNumber" target="_blank" aria-label="WhatsApp">
            <FaWhatsapp className="h-8 w-8 p-2 bg-green-600 rounded-full hover:bg-green-700 transition" />
          </Link>
          <Link href="https://twitter.com/YourProfile" target="_blank" aria-label="Twitter">
            <FaTwitter className="h-8 w-8 p-2 bg-blue-400 rounded-full hover:bg-blue-500 transition" />
          </Link>
          <Link href="https://www.linkedin.com/in/YourProfile" target="_blank" aria-label="LinkedIn">
            <FaLinkedinIn className="h-8 w-8 p-2 bg-blue-700 rounded-full hover:bg-blue-800 transition" />
          </Link>
          <Link href="mailto:mokammel786@gmail.com" target="_blank" aria-label="Email">
            <FaEnvelope className="h-8 w-8 p-2 bg-red-600 rounded-full hover:bg-red-700 transition" />
          </Link>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto flex flex-col gap-28 lg:flex-row justify-between py-8">
        <div className="mb-6 lg:mb-0 lg:w-1/3">
          <h6 className="font-semibold uppercase mb-4">Learn & Grow Academy</h6>
          <p className="text-gray-400">
            Empowering learners through quality education and resources. Join us in making a difference!
          </p>
        </div>

        <div className="lg:w-2/3">
          <h6 className="font-semibold uppercase mb-4">Contact Us</h6>
          <p className="text-gray-400 mb-2">
            <strong>Address:</strong> House-18, Road no.-2, Mohammadia Housing Society, Mohammadpur, Adabor, Dhaka-1207.
          </p>
          <p className="text-gray-400 mb-2">
            <strong>Email:</strong> mokammel786@gmail.com, info@memoirbd.com
          </p>
          <p className="text-gray-400 mb-2">
            <strong>Phone:</strong> 01534871113, 01788272176
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-400 pt-6">
        <p>&copy; {new Date().getFullYear()} Learn & Grow Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
