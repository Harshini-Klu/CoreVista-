import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Pic1 from '../assets/Community.png'
import remote from '../assets/remote.png'
import seo from '../assets/seo.jpg'
import tech from '../assets/tech.jpg'
import startup from '../assets/startup.jpg'
import pro from '../assets/pro.jpg'
const professionalBlogs = [
  {
    title: 'Why Every Developer Should Learn Git',
    author: 'Karthik Sriram',
    date: 'April 2025',
    excerpt: 'Version control is a core skill in the software industry. Learn how Git helps you build, collaborate, and manage code like a pro.',
    image: Pic1
  },
  {
    title: 'Top 10 Productivity Tools for Remote Teams',
    author: 'Sneha Rao',
    date: 'March 2025',
    excerpt: 'Working remotely is here to stay. Discover the best tools to stay productive and connected with your team.',
    image: remote
  },
  {
    title: 'Understanding the Basics of SEO',
    author: 'Ravi Teja',
    date: 'February 2025',
    excerpt: 'SEO can supercharge your blog or business visibility. Here’s how to get started with the fundamentals.',
    image: seo
  },
];
const personalBlogs = [
  
  {
    title: 'My Journey into Tech',
    author: 'Karthik Sriram',
    date: 'January 2025',
    excerpt: 'From curiosity to coding — a personal story of learning tech, building projects, and overcoming roadblocks.',
    image: tech
  },
  {
    title: 'What I Learned from Failing a Startup',
    author: 'Ananya Jain',
    date: 'November 2024',
    excerpt: 'Failure is the best teacher. Here’s what I learned the hard way and why I’m still optimistic.',
    image: startup
  },
  {
    title: 'Balancing Side Projects with College',
    author: 'Tejas Patil',
    date: 'October 2024',
    excerpt: 'Managing time, energy, and motivation while shipping real-world projects as a student.',
    image: pro
  }
];

const Blog = () => {
   const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white px-6 py-16 text-gray-800">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-3"
      >
        Explore Thoughtful Blogs on CoreVista
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center text-gray-600 mb-10 max-w-2xl mx-auto"
      >
        Discover professional guides, personal experiences, and community stories in one insightful place.
      </motion.p>

      {/* Professional Blogs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold mb-6">Professional Blogs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {professionalBlogs.map((blog, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-1">{blog.title}</h3>
                <p className="text-sm text-gray-500 mb-1">By {blog.author} · {blog.date}</p>
                <p className="text-sm text-gray-600">{blog.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Personal Blogs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold mb-6">Personal Blogs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {personalBlogs.map((blog, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-1">{blog.title}</h3>
                <p className="text-sm text-gray-500 mb-1">By {blog.author} · {blog.date}</p>
                <p className="text-sm text-gray-600">{blog.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Featured Blogger */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-100 rounded-xl p-8 mb-20 max-w-4xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">🌟 Featured Blogger of the Month</h2>
        <p className="text-lg font-semibold text-center mb-2">Karthik Sriram</p>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          A passionate full-stack developer and storyteller, Karthik has shared insights that inspired 10,000+ learners on CoreVista. Check out his blogs and follow for more!
        </p>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center py-12 px-6 bg-white rounded-xl shadow-lg max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4">Want to Write for any content?</h2>
        <p className="text-gray-600 mb-6">Share your journey, tutorials, or career advice with thousands of readers.</p>
        <button 
            onClick={() => navigate('/Submission')}
        className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">Submit Your Blog
        </button>
      </motion.div>
    </div>
  );
};

export default Blog;
