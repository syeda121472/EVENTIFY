import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backgroundColor = isHomePage && !scrolled ? 'bg-transparent' : 'bg-[#e9d6f5]';
  const textColor = isHomePage && !scrolled ? 'text-white' : 'text-black';

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className={`${backgroundColor} ${textColor} fixed w-full top-0 left-0 z-50 transition-all duration-300 shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-purple-700">Eventify</h1>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-semibold items-center">
          <li><Link to="/" className={`${textColor} hover:text-purple-600`}>Home</Link></li>
          <li><Link to="/AboutUs" className={`${textColor} hover:text-purple-600`}>About Us</Link></li>
           <li><Link to="/Blog" className={`${textColor} hover:text-purple-600`}>Blog</Link></li>

          {/* Services Dropdown */}
          <li className="relative group">
  <div className="cursor-pointer text-black">
    <span className={`${textColor} cursor-pointer`}>Services ▾</span>
  </div>
  <div className="absolute top-full left-0 z-50 hidden group-hover:block bg-white shadow-md rounded w-40">
    <ul className="py-2">
      <li>
        <Link to="/Services" className="block px-4 py-2 hover:bg-purple-100 text-black">Services</Link>
      </li>
      <li>
        <Link to="/ImageGallery" className="block px-4 py-2 hover:bg-purple-100 text-black">Image Gallery</Link>
      </li>
    </ul>
  </div>
</li>


          {/* Events Dropdown */}
         <li className="relative group">
  <div className="cursor-pointer text-black">
    <span className={`${textColor} cursor-pointer`}>Events ▾</span>
  </div>
  <div className="absolute top-full left-0 z-50 hidden group-hover:block bg-white shadow-md rounded w-40">
    <ul className="py-2">
      <li>
        <Link to="/EventList" className="block px-4 py-2 hover:bg-purple-100 text-black">Event List</Link>
      </li>
      <li>
        <Link to="/EventDetails" className="block px-4 py-2 hover:bg-purple-100 text-black">Event Details</Link>
      </li>
    </ul>
  </div>
</li>


          <li><Link to="/Contact" className={`${textColor} hover:text-purple-600`}>Contact Us</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white text-black px-4 pb-4 space-y-3 shadow-md">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block py-2 border-b">Home</Link>
          <Link to="/AboutUs" onClick={() => setMenuOpen(false)} className="block py-2 border-b">About Us</Link>

          {/* Mobile Dropdowns */}
          <div>
            <button onClick={() => toggleDropdown('services')} className="w-full text-left py-2 font-semibold">
              Services ▾
            </button>
            {openDropdown === 'services' && (
              <div className="pl-4">
                <Link to="/Services" onClick={() => setMenuOpen(false)} className="block py-1">Services</Link>
                <Link to="/ImageGallery" onClick={() => setMenuOpen(false)} className="block py-1">Image Gallery</Link>
              </div>
            )}
          </div>

          <div>
            <button onClick={() => toggleDropdown('events')} className="w-full text-left py-2 font-semibold">
              Events ▾
            </button>
            {openDropdown === 'events' && (
              <div className="pl-4">
                <Link to="/EventList" onClick={() => setMenuOpen(false)} className="block py-1">Event List</Link>
                <Link to="/EventDetails" onClick={() => setMenuOpen(false)} className="block py-1">Event Details</Link>
              </div>
            )}
          </div>

          <Link to="/Contact" onClick={() => setMenuOpen(false)} className="block py-2 border-t">Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
