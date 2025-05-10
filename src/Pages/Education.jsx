import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import educate from '../assets/educate.png';
import Ai from '../assets/Ai.jpg';
const dummyCourses = [
  { title: 'React for Beginners', description: 'Learn React.js from scratch and build dynamic web apps.' },
  { title: 'Advanced JavaScript', description: 'Deep dive into JS concepts including ES6+, closures, and async.' },
  { title: 'UI/UX Design Fundamentals', description: 'Design clean, intuitive interfaces using Figma & Adobe XD.' },
];

const dummyBlogs = [
  { title: 'The Future of Education', snippet: 'Discover how AI and technology are revolutionizing education.' },
  { title: 'Top 10 Online Learning Platforms', snippet: 'A curated list of platforms that boost your knowledge.' },
  { title: 'Self-paced Learning Benefits', snippet: 'Explore why learning at your own pace improves retention.' },
];

const tutorials = [
  { title: 'Deploying React Apps on Vercel', duration: '6 min read' },
  { title: 'Using Tailwind CSS with Next.js', duration: '4 min read' },
  { title: 'How to Structure Your MERN Stack Project', duration: '7 min read' },
];

const contributors = [
  { name: 'Harshini', bio: 'Full-stack dev & educator' },
  { name: 'Varsha', bio: 'UI/UX designer and blogger' },
  { name: 'Harini', bio: 'Backend engineer & tech speaker' },
];

const videoCourses = [
  { title: 'Intro to Python Programming', video: 'https://www.youtube.com/embed/_uQrJ0TkZlc' },
  { title: 'React in 1 Hour', video: 'https://www.youtube.com/embed/Ke90Tje7VS0' },
];

const paidCourses = [
    {
      title: 'Mastering Full Stack Development',
      price: '₹999',
      desc: 'Hands-on MERN stack project bootcamp.',
      image: educate // Full stack course image
    },
    {
      title: 'AI in Education',
      price: '₹799',
      desc: 'Learn how AI is transforming modern education.',
      image: Ai
    }
  ];
  

const Education = () => {
  const [activeTab, setActiveTab] = useState('courses');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white px-6 py-16 text-gray-800">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-3"
      >
        Empower Your Learning with CoreVista
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center text-gray-600 mb-10 max-w-2xl mx-auto"
      >
        Discover curated educational content, tutorials, premium courses and community-driven knowledge — all in one place.
      </motion.p>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-12">
        <button
          onClick={() => setActiveTab('courses')}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeTab === 'courses' ? 'bg-black text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          Courses
        </button>
        <button
          onClick={() => setActiveTab('blogs')}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeTab === 'blogs' ? 'bg-black text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          Blogs
        </button>
      </div>

      {/* Tab Content */}
      <AnimatePresence mode='wait'>
        {activeTab === 'courses' && (
          <motion.div
            key="courses"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
          >
            {dummyCourses.map((course, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.03 }}
              >
                <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                <p className="text-sm text-gray-600">{course.description}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === 'blogs' && (
          <motion.div
            key="blogs"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
          >
            {dummyBlogs.map((blog, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.03 }}
              >
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-sm text-gray-600">{blog.snippet}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Latest Tutorials */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold mb-6">Latest Tutorials</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tutorials.map((tut, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition duration-300">
              <h3 className="font-semibold text-lg mb-2">{tut.title}</h3>
              <p className="text-sm text-gray-500">{tut.duration}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Video Courses */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-2xl font-bold mb-6">Video Tutorials</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {videoCourses.map((vid, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-md">
              <iframe
                width="100%"
                height="250"
                src={vid.video}
                title={vid.title}
                frameBorder="0"
                allowFullScreen
                className="w-full"
              />
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-lg">{vid.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Paid Courses */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-2xl font-bold mb-6">Premium Courses</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {paidCourses.map((course, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-bold">{course.title}</h3>
                <p className="text-gray-600 text-sm mt-2 mb-4">{course.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">{course.price}</span>
                  <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Top Contributors */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="text-2xl font-bold mb-6">Top Contributors</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {contributors.map((contrib, i) => (
            <div key={i} className="bg-gray-100 p-5 rounded-xl">
              <h3 className="text-lg font-semibold mb-1">{contrib.name}</h3>
              <p className="text-sm text-gray-600">{contrib.bio}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
    
  );
};

export default Education;
