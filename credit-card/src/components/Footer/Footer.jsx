import React from "react";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { FaGooglePlusG, FaHome, FaEnvelope } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { Link } from "react-router-dom"; // Use React Router for navigation

export const Footer = () => {
  return (
    <div className="text-white bg-[#23242a] text-lg-start flex flex-col">
      <div className="container mx-auto flex p-10">
        <div className="flex flex-wrap justify-between ml-20">
          {/* About */}
          <section className="w-full md:w-1/2 lg:w-1/3">
            <h2 className="text-xl font-bold uppercase mb-4">About VYOMA</h2>
            <p className="text-justify text-gray-300">
              VYOMA is a modern digital banking platform dedicated to delivering
              seamless financial experiences. We simplify personal banking with
              intuitive tools and reliable services that empower you to manage
              your money with ease.
            </p>
            <p className="text-justify text-gray-300 mt-2">
              From fund transfers to account insights, VYOMA ensures banking
              that's fast, secure, and tailored for you.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                aria-label="Facebook"
                className="bg-yellow-500 text-black p-2 rounded-full text-xl hover:opacity-80 transition"
              >
                <CiFacebook />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="bg-yellow-500 text-black p-2 rounded-full text-xl hover:opacity-80 transition"
              >
                <CiTwitter />
              </a>
              <a
                href="#"
                aria-label="Google Plus"
                className="bg-yellow-500 text-black p-2 rounded-full text-xl hover:opacity-80 transition"
              >
                <FaGooglePlusG />
              </a>
            </div>
          </section>

          

          {/* Contact Info */}
          <address className="w-full md:w-1/2 lg:w-1/3 not-italic">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <FaHome />
                <span>Chembur, Mumbai - 400071</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope />
                <a
                  href="mailto:support@vyomabank.com"
                  className="hover:underline"
                >
                  support@vyomabank.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <IoIosCall />
                <a href="tel:+911234567890" className="hover:underline">
                  +91 12345 67890
                </a>
              </li>
            </ul>
          </address>
        </div>
      </div>

      <div className="text-center py-4 bg-black bg-opacity-20 text-gray-400 text-sm">
        © {new Date().getFullYear()} VYOMA Banking. All rights reserved.
      </div>
    </div>
  );
};
