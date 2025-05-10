import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Education", path: "/education" },
    { id: 3, title: "Business", path: "/business" },
    { id: 4, title: "Blog", path: "/blog" },
    { id: 5, title: "Entertainment", path: "/entertainment" },
    { id: 6, title: "News", path: "/news" },
    { id: 7, title: "Jobs", path: "/jobs" },
    { id: 8, title: "Submission", path: "/Submission" },
  ];

  return (
    <>
      {/* Top Nav */}
      <div className='fixed top-0 left-0 right-0 flex justify-between items-center bg-white py-4 w-full px-8 shadow-sm z-50'>
        <Link to="/" className='text-3xl font-bold tracking-tight text-gray-800 hover:text-gray-600'>
          CoreVista
        </Link>

        {/* Desktop Nav */}
        <div className='hidden md:flex items-center gap-6'>
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className='text-gray-700 hover:text-black font-medium'
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Right side: Login, Signup, Profile */}
        <div className='hidden md:flex items-center gap-4'>
          <Link to="/login" className='text-gray-700 hover:text-black font-medium'>Login</Link>
          <Link to="/signup" className='bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 font-medium transition'>Signup</Link>
          
          {/* Profile Icon */}
          <Link to="/profile">
            <img
              src="https://i.pravatar.cc/40?img=5" // You can replace this with user's avatar dynamically
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover border border-gray-300 hover:ring-2 hover:ring-gray-400 transition"
            />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={toggleMenu} className='md:hidden text-gray-700'>
          <FaBars size={22} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-[80%] sm:w-[60%] bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className='text-xl font-bold text-gray-800'>CoreVista</h2>
          <button onClick={toggleMenu} className='text-gray-700'>
            <FaTimes size={22} />
          </button>
        </div>
        <div className="flex flex-col px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              onClick={toggleMenu}
              className='text-gray-700 hover:text-black font-medium'
            >
              {link.title}
            </Link>
          ))}

          <div className="mt-6 flex flex-col space-y-2">
            <Link to="/login" onClick={toggleMenu} className='text-gray-700 hover:text-black font-medium'>Login</Link>
            <Link to="/signup" onClick={toggleMenu} className='bg-black text-white text-center py-2 rounded-md hover:bg-gray-800 transition'>Signup</Link>
            <Link to="/profile" onClick={toggleMenu}>
              <img
                src="https://i.pravatar.cc/40?img=5"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover border border-gray-300"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-30" onClick={toggleMenu}></div>
      )}

      {/* Spacer */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;
