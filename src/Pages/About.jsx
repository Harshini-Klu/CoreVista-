import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 px-6 py-16 text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold mb-4">About CoreVista</h1>
        <p className="text-gray-600 text-lg mb-10">
          CoreVista is your all-in-one content and information hub — thoughtfully crafted to empower learners, creators, businesses, and job seekers.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-lg p-10 max-w-5xl mx-auto text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">✨ Our Mission</h2>
        <p className="text-gray-700 text-md mb-6">
          To bridge the gap between opportunity and access, by providing a modern, intuitive platform where people can explore, learn, and grow — all in one space.
        </p>

        <h2 className="text-2xl font-semibold mb-4">🚀 Vision</h2>
        <p className="text-gray-700 text-md mb-6">
          At CoreVista, we envision a smarter internet — where every piece of content is curated, every opportunity is real, and every creator gets a voice.
        </p>

        <h2 className="text-2xl font-semibold mb-4">👩‍💻 Built with Love by</h2>
        <p className="text-lg font-bold text-gray-900 mb-2">Harshini | Varsha | Harini </p>
        <p className="text-sm text-gray-600">UI Designer • Creative Thinker • Content Curator</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center mt-16"
      >
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Want to contribute or collaborate?</h3>
        <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
          Join CoreVista Community
        </button>

        {/* Social Icons */}
        <div className="mt-6 flex justify-center gap-6 text-3xl">
          <a
            href="https://chat.whatsapp.com/YOUR_WHATSAPP_GROUP_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-600 transition"
            title="Join on WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://t.me/YOUR_TELEGRAM_CHANNEL_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition"
            title="Join on Telegram"
          >
            <FaTelegramPlane />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
