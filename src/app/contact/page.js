import React from "react";
import Container from "../ui/Container";
import {
  FaFacebook,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <Container>
      <div className="py-12">
        <h1 className="text-4xl font-bold text-center text-[#32a6ab] mb-8">
          Contact Us
        </h1>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Details */}
          <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Details</h2>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <FaPhone className="text-[#32a6ab] mr-2" />
                <span className="text-gray-700">01534871113, 01788272176</span>
              </div>
              <div className="flex items-center mb-2">
                <FaEnvelope className="text-[#32a6ab] mr-2" />
                <span className="text-gray-700">
                  e-mail: mokammel786@gmail.com, info@memoirbd.com,
                  mdmarifulislammugdho50@gmail.com
                </span>
              </div>
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-[#32a6ab] mr-2 " />
                <span className="text-gray-700">
                  House-18, Road no.-2, Mohammadia Housing Society, Mohammadpur,
                  Adabor, Dhaka-1207.
                </span>
              </div>
              <div className="flex items-center">
                <FaFacebook className="text-[#32a6ab] mr-2" />
                <a
                  href="https://www.facebook.com/memoiracademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700"
                >
                  facebook.com/memoiracademy
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="flex-1 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold p-6">Our Location</h2>
            <div className="h-64 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.948616295052!2d90.36184901540784!3d23.7505902945791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a117e5c0ed%3A0x6a78e1ec23a3be6d!2sMohammadia%20Housing%20Society%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1635067899381!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
