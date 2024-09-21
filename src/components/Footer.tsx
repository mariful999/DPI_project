import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-black bg-slate-400 dark:bg-neutral-700 dark:text-white/75 lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between">
        <div className="me-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div className="flex justify-center">
          <Link href="https://www.facebook.com/profile.php?id=61562876453891&mibextid=JRoKGi" target="_blank" aria-label="Facebook" className="me-6 flex items-center justify-center bg-blue-700 hover:bg-[#32a6ab] p-2">
            <FaFacebookF className="h-4 w-4" />
          </Link>
          <Link href="https://wa.me/YourPhoneNumber" target="_blank" aria-label="WhatsApp" className="me-6 flex items-center justify-center bg-green-500 hover:bg-[#32a6ab] p-2">
            <FaWhatsapp className="h-4 w-4" />
          </Link>
          <Link href="https://twitter.com/YourProfile" target="_blank" aria-label="Twitter" className="me-6 flex items-center justify-center bg-blue-400 hover:bg-[#32a6ab] p-2">
            <FaTwitter className="h-4 w-4" />
          </Link>
          <Link href="https://www.linkedin.com/in/YourProfile" target="_blank" aria-label="LinkedIn" className="me-6 flex items-center justify-center bg-blue-700 hover:bg-[#32a6ab] p-2">
            <FaLinkedinIn className="h-4 w-4" />
          </Link>
          <Link href="mailto:mokammel786@gmail.com" target="_blank" aria-label="Gmail" className="me-6 flex items-center justify-center bg-red-600 hover:bg-[#32a6ab] p-2">
            <FaEnvelope className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="lg:flex justify-between">
          <div>
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <span className="me-3">
                {/* Optional logo or icon */}
              </span>
              TW Elements
            </h6>
            <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>

          <div>
            <h6 className="mb-4 lg:flex justify-center font-semibold uppercase md:justify-start">Contact</h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3">
                {/* Optional icon */}
              </span>
              House-18, Road no.-2, Mohammadia Housing Society, Mohammadpur, Adabor, Dhaka-1207.
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3">
                {/* Optional icon */}
              </span>
              mokammel786@gmail.com, info@memoirbd.com,
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3">
                {/* Optional icon */}
              </span>
              01534871113, 01788272176,
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
