import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar'; // adjust path if needed

// Slider Data
const slides = [
  {
    title: "Learn. Grow. Succeed.",
    subtitle: "Explore premium Education resources & blogs.",
    image: "https://images.unsplash.com/photo-1581093588401-5fe009c7ef0f",
    link: "/education",
  },
  {
    title: "Startup Culture",
    subtitle: "Empowering innovations and entrepreneurial journeys.",
    image: "https://images.unsplash.com/photo-1556767576-cfba5c7d2c96",
    link: "/business",
  },
  {
    title: "Entertainment Unlimited",
    subtitle: "Catch the latest in movies and celebrity buzz.",
    image: "https://images.unsplash.com/photo-1587574293340-e3df6c7e9c7f",
    link: "/entertainment",
  },
];

// Slider Component
const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [length]);

  return (
    <div className="w-full h-[400px] relative overflow-hidden z-10">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100 z-20' : 'opacity-0 z-0'}`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
            <p className="text-xs mb-1 tracking-widest uppercase">CoreVista</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">{slide.title}</h2>
            <p className="mb-6 max-w-xl">{slide.subtitle}</p>
            <Link to={slide.link} className="bg-white text-black px-6 py-2 font-medium rounded-md hover:bg-gray-200">
              Explore Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Navbar />
      <ImageSlider />

      <div className='w-full min-h-[calc(100vh-75px)] bg-white text-gray-900 flex flex-col items-center justify-start px-6'>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center max-w-3xl mt-32 mb-12'
        >
          <h1 className='text-5xl font-bold mb-4 tracking-tight'>
            Welcome to <span className='text-gray-700'>CoreVista</span>
          </h1>
          <p className='text-lg text-gray-600 mb-8'>
            A modern and intelligent content management hub covering Education, Business, Blogs, Entertainment, News, and Jobs — all in one place.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link
              to='/login'
              className='px-6 py-3 bg-black text-white rounded-2xl hover:bg-gray-800 transition-all'
            >
              Get Started
            </Link>
            <Link
              to='/about'
              className='px-6 py-3 border border-gray-700 text-gray-800 rounded-2xl hover:bg-gray-100 transition-all'
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        {/* Category Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 w-full max-w-5xl'
        >
          {[
            { title: 'Education', desc: 'Courses & blogs for lifelong learning.' },
            { title: 'Business', desc: 'Startups and ads that innovate.' },
            { title: 'Entertainment', desc: 'Explore movies, shows, and celebrity buzz.' },
            { title: 'Blogs', desc: 'Share your thoughts, ideas, and stories.' },
            { title: 'News', desc: 'Stay updated locally and globally.' },
            { title: 'Jobs', desc: 'Opportunities tailored for you.' },
          ].map((section, index) => (
            <div
              key={index}
              className='border rounded-2xl p-6 hover:shadow-md transition-all bg-gray-50 text-left'
            >
              <h2 className='text-xl font-semibold mb-2'>{section.title}</h2>
              <p className='text-sm text-gray-600'>{section.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Extra Content */}
        <div className='max-w-4xl text-center mb-20'>
          <h3 className='text-2xl font-semibold mb-4'>Why Choose CoreVista?</h3>
          <p className='text-gray-600 text-md'>
            CoreVista empowers creators, learners, businesses, and job seekers by providing a centralized, smart, and clean platform to manage, explore, and grow across multiple categories.
            With cutting-edge design and user-friendly navigation, we aim to deliver quality content and services at your fingertips.
          </p>
        </div>

        {/* Footer */}
        <footer className='w-full border-t bg-gray-50 py-8 text-center text-sm text-gray-500'>
          <div className='max-w-5xl mx-auto px-4'>
            <p>&copy; {new Date().getFullYear()} CoreVista. All rights reserved.</p>
            <div className='flex justify-center gap-4 mt-2 text-gray-500'>
              <Link to="/privacy" className="hover:underline">Privacy</Link>
              <Link to="/terms" className="hover:underline">Terms</Link>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
