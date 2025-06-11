import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-r from-purple-600 to-pink-700 text-white py-10 px-4 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Tagline */}
        <div>
          <h1 className="text-2xl font-bold ml-2 mt-20">Eventify</h1>
          <p className="mt-2 text-sm text-purple-200 w-[300px] ml-2">
            Creating unforgettable wedding & event experiences across Pakistan.
          </p>
          <div className="flex flex-wrap justify-center space-x-4 mt-6 mr-56">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com" },
            { icon: <FaTwitter />, link: "https://twitter.com" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com" },
            { icon: <FaInstagram />, link: "https://www.instagram.com" },
            { icon: <FaYoutube />, link: "https://www.youtube.com" },
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-700 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        </div>

        {/* Navigation */}
        <div className='flex gap-14'>
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-purple-200 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <hr className='w-14 border-gray-400' />
            <li><Link to="/AboutUs" className="hover:text-white">About</Link></li>
            <hr className='w-14 border-gray-400' />
            <li><Link to="/Services" className="hover:text-white">Services</Link></li>
            <hr className='w-14 border-gray-400' />
            <li><Link to="/EventList" className="hover:text-white">Events</Link></li>
            <hr className='w-14 border-gray-400' />
            <li><Link to="/Contact" className="hover:text-white">Contact</Link></li>
            <hr className='w-14 border-gray-400' />
            <li><Link to="/Blog" className="hover:text-white">Blogs</Link></li>
            <hr className='w-14 border-gray-400' />
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-purple-200 text-sm">
            <li><Link to="/Weddings" className="hover:text-white">Weddings</Link></li>
            <hr className='w-14 border-gray-400' />
            <li><Link to="/Birthday" className="hover:text-white">Birthday Party</Link></li>
            <hr className='w-14 border-gray-400' />
            <li><Link to="/Festivals" className="hover:text-white">Festivals</Link></li>
            <hr className='w-14 border-gray-400' />
            <li><Link to="/CorporateEvents" className="hover:text-white">Corporate Events</Link></li>
            <hr className='w-14 border-gray-400' />
            <li><Link to="/Graduation" className="hover:text-white">Graduation ceremony</Link></li>
            <hr className='w-14 border-gray-400' />
             <li><Link to="/PrivateEvent" className="hover:text-white">Private Events</Link></li>
            <hr className='w-14 border-gray-400' />
          </ul>
        </div>
    </div>
        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4 mt-20">Contact Us</h2>
          <ul className="space-y-2 text-sm text-purple-200">
            <li className="flex items-center gap-2"><FaMapMarkerAlt /> Lahore, Pakistan</li>
            <li className="flex items-center gap-2"><FaPhoneAlt /> +92 345678923456</li>
            <li className="flex items-center gap-2"><FaEnvelope /> info@eventify.pk</li>
            <li className="flex gap-4 mt-2">
            
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-purple-700 mt-8 pt-4 text-center text-sm text-purple-300">
        © {new Date().getFullYear()} Eventify Pakistan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

// grid grid-cols-1 md:grid-cols-3