import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import digi from '../assets/digi.jpg'
import sup from '../assets/sup.jpg'
import bud from '../assets/bud.jpg'
import nasa from '../assets/nasa.jpg'
import con from '../assets/con.jpg'
import treat from '../assets/treat.jpg'
const nationalNews = [
  {
    title: 'India Launches Indigenous AI Supercomputer',
    description: 'India makes a leap in AI with the unveiling of its first homegrown AI supercomputer for academic and research use.',
    date: 'April 10, 2025',
    image: sup
  },
  {
    title: 'Union Budget 2025 Focuses on Startups',
    description: 'The 2025 budget includes significant tax benefits and incentives to boost India’s growing startup ecosystem.',
    date: 'February 1, 2025',
    image: bud
  },
  {
    title: 'Digital Health Mission Expands Nationwide',
    description: 'The Indian government expands digital health records to all states, aiming to enhance healthcare efficiency.',
    date: 'March 20, 2025',
    image: digi
  }
];

const internationalNews = [
  {
    title: 'NASA Confirms Human Moon Mission by 2026',
    description: 'NASA’s Artemis mission aims to put the first woman and next man on the moon by 2026.',
    date: 'April 8, 2025',
    image: nasa
  },
  {
    title: 'Global Tech Conference 2025 Highlights AI Breakthroughs',
    description: 'Major tech firms reveal groundbreaking AI products and advancements at GTC 2025.',
    date: 'March 15, 2025',
    image: con
  },
  {
    title: 'Climate Treaty Signed by 50 Nations',
    description: 'A new climate treaty focuses on reducing carbon emissions and promoting green energy globally.',
    date: 'January 30, 2025',
    image: treat
  }
];

const News = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white px-6 py-16 text-gray-800">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-3"
      >
        Latest News on CoreVista
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center text-gray-600 mb-10 max-w-2xl mx-auto"
      >
        Stay informed with the latest headlines, government policies, tech trends, and international affairs.
      </motion.p>

      {/* National News */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold mb-6">🇮🇳 National News</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {nationalNews.map((item, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* International News */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-2xl font-bold mb-6">🌐 International News</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {internationalNews.map((item, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center py-12 px-6 bg-white rounded-xl shadow-lg max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4">Got a News Tip?</h2>
        <p className="text-gray-600 mb-6">Help the CoreVista community stay informed. Share your verified local or global news!</p>
        <button
            onClick={() => navigate('/Submission')}
         className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">Submit News</button>
      </motion.div>
    </div>
  );
};

export default News;
