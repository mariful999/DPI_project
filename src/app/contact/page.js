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
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
          Contact Us
        </h1>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Details */}
          <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Details</h2>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <FaPhone className="text-blue-500 mr-2" />
                <span className="text-gray-700">01819937944</span>
              </div>
              <div className="flex items-center mb-2">
                <FaEnvelope className="text-blue-500 mr-2" />
                <span className="text-gray-700">
                  mdmarifulislammugdho50@gmail.com
                </span>
              </div>
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-blue-500 mr-2" />
                <span className="text-gray-700">
                  {" "}
                  House no 18 (1st floor), Road no. 2, Mohammodia Housing
                  society, Mohammadpur, Dhaka.
                </span>
              </div>
              <div className="flex items-center">
                <FaFacebook className="text-blue-500 mr-2" />
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5108396403974!2d-122.41941828468324!3d37.77492977975827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085816f1e70ad35%3A0x1f605a2d2edb83b!2s1%20Market%20St%2C%20San%20Francisco%2C%20CA%2094105%2C%20USA!5e0!3m2!1sen!2sbd!4v1634867898452!5m2!1sen!2sbd"
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
