import React from "react";
import { FaEnvelope, FaPhone, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 md:flex md:justify-between md:items-start">
        
   
        <div className="mb-8 md:mb-0">
        <h2 className="text-2xl font-bold mb-4">📫 Connect with Me</h2>
          <div className="flex items-center mb-2">
            <FaEnvelope className="mr-2 text-blue-400" />
            <a href="mailto:ellycreativity8@gmail.com" className="hover:underline text-gray-300">
              ellycreativity8@gmail.com
            </a>
          </div>
          <div className="flex items-center mb-2">
            <FaPhone className="mr-2 text-blue-400" />
            <a href="tel:+250798454108" className="hover:underline text-gray-300">
              +250 798454108
            </a>
          </div>
          <div className="flex items-center">
            <FaInstagram className="mr-2 text-pink-500" />
            <a href="https://www.instagram.com/Ellyse_photographer" className="hover:underline text-gray-300">
              @Ellyse_photographer
            </a>
          </div>
        </div>

     
        <div className="mb-8 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li><a href="#portfolio" className="hover:underline text-gray-300">Portfolio</a></li>
            <li><a href="#services" className="hover:underline text-gray-300">Services</a></li>
            <li><a href="#contact" className="hover:underline text-gray-300">Contact</a></li>
          </ul>
        </div>


        <div>
          <h3 className="text-xl font-semibold mb-4">About Me</h3>
          <p className="text-gray-400 max-w-xs">
            I am Ellyse, a professional photographer capturing creativity and emotion in every shot. Let’s connect!
          </p>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Ellyse Photographer. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
