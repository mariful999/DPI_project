import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-600 to-red-900 text-white py-12 px-10">
      {/* Social Media Links */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center border-b border-gray-700 pb-6">
        <div className="hidden lg:block">
          <span className="text-black">Connect with us on social media:</span>
        </div>
        <div className="flex space-x-6 mt-4 lg:mt-0">
          <Link href="https://www.facebook.com/profile.https://web.facebook.com/mdmugdho.mugdho.31/?id=61562876453891&mibextid=JRoKGi" target="_blank" aria-label="Facebook">
            <FaFacebookF className="h-8 w-8 p-2 bg-orange-500 rounded-full hover:bg-orange-600 transition-all transform hover:scale-110" />
          </Link>
          <Link href="https://wa.me/YourPhoneNumber" target="_blank" aria-label="WhatsApp">
            <FaWhatsapp className="h-8 w-8 p-2 bg-green-600 rounded-full hover:bg-green-700 transition-all transform hover:scale-110" />
          </Link>
          <Link href="https://twitter.com/YourProfile" target="_blank" aria-label="Twitter">
            <FaTwitter className="h-8 w-8 p-2 bg-orange-400 rounded-full hover:bg-orange-500 transition-all transform hover:scale-110" />
          </Link>
          <Link href="https://www.linkedin.com/in/YourProfile" target="_blank" aria-label="LinkedIn">
            <FaLinkedinIn className="h-8 w-8 p-2 bg-blue-700 rounded-full hover:bg-blue-800 transition-all transform hover:scale-110" />
          </Link>
          <Link href="mailto:mokammel786@gmail.com" target="_blank" aria-label="Email">
            <FaEnvelope className="h-8 w-8 p-2 bg-red-600 rounded-full hover:bg-red-700 transition-all transform hover:scale-110" />
          </Link>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start py-8">
        <div className="lg:w-1/3 mb-6 lg:mb-0">
          <h6 className="font-semibold text-black uppercase mb-4">Quick Links</h6>
          <ul className="text-black space-y-2">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="lg:w-1/3">
          <h6 className="font-semibold text-black uppercase mb-4">Subscribe to our Newsletter</h6>
          <p className="text-black mb-4">Stay updated with the latest courses, news, and offers. Subscribe now!</p>
          <form className="flex flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-md mb-4 bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto flex flex-col gap-10 lg:flex-row justify-between py-8">
        <div className="mb-6 lg:mb-0 lg:w-1/3">
          <h6 className="font-semibold text-black uppercase mb-4">Learn & Grow Academy</h6>
          <p className="text-black font-bold">
            Empowering learners through quality education and resources. Join us in making a difference!
          </p>
        </div>

        <div className="lg:w-2/3">
          <h6 className="font-semibold text-black uppercase mb-4">Contact Us</h6>
          <p className="text-black font-extrabold mb-2">
            <strong>Address:</strong> Babrijher, Nilphamari , Rongpur , Dhaka
          </p>
          <p className="text-black font-extrabold mb-2">
            <strong>Email:</strong> mdmarifulislammugdho50@gmail.com
          </p>
          <p className="text-black font-extrabold mb-2">
            <strong>Phone:</strong> 01819937944
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center font-extrabold pt-6">
        <p>&copy; {new Date().getFullYear()} Learn & Grow Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
