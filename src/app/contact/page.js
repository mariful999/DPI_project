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
      <div className="py-16">
        <h1 className="text-4xl font-extrabold text-center text-orange-500 mb-12">
          Contact Us
        </h1>
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Details */}
          <div className="flex-1 bg-white shadow-2xl rounded-2xl p-8 transition-transform transform hover:scale-105 hover:shadow-3xl">
            <h2 className="text-3xl font-semibold text-orange-500 mb-6">
              Contact Details
            </h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaPhone className="text-orange-500 text-2xl" />
                <span className="text-lg text-gray-700">01819937944</span>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-orange-500 text-2xl" />
                <span className="text-lg text-gray-700">
                  G-mail: mdmarifulislammugdho50@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-orange-500 text-2xl" />
                <span className="text-lg text-gray-700">
                  Babrijher, Nilphamari , Rongpur , Dhaka
                </span>
              </div>
              <div className="flex items-center gap-4">
                <FaFacebook className="text-orange-500 text-2xl" />
                <a
                  href="https://www.facebook.com/memoiracademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-gray-700 hover:text-orange-500 transition duration-300"
                >
                  facebook.com/LogicITcenter
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="flex-1 bg-white shadow-2xl rounded-2xl p-6 transition-transform transform hover:scale-105 hover:shadow-3xl">
            <h2 className="text-3xl font-semibold text-orange-500 mb-6">
              Our Location
            </h2>
            <div className="h-72 w-full overflow-hidden rounded-xl shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.948616295052!2d88.9112421!3d25.8916704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e35b0031e53e45:0xac5123d371d2c13f!2sMugdho%20Chaul%20Ghor!5e0!3m2!1sen!2sbd!4v1635067899381!5m2!1sen!2sbd"
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
