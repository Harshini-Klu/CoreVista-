import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Canva from '../assets/canva.png';
import Notion from '../assets/Notion.png';
const startups = [
  { name: 'HireByte', tagline: 'Revolutionizing tech hiring with automation.', domain: 'hirebyte.in' },
  { name: 'EduMentor', tagline: 'Mentorship platform for school students.', domain: 'edumentor.org' },
  { name: 'AgriFlow', tagline: 'Connecting farmers to markets using AI.', domain: 'agriflow.io' },
];

const ads = [
    {
      company: 'Notion',
      message: 'All-in-one workspace for your business.',
      image: Notion
    },
    {
      company: 'Canva Pro',
      message: 'Design marketing content like a pro.',
      image: Canva
    },
    {
      company: 'Slack',
      message: 'Power your remote team communication.',
      image: 'https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png'
    }
  ];
  

const testimonials = [
  { name: 'Anjali Menon', role: 'Startup Founder', quote: 'CoreVista gave our startup the visibility we needed.' },
  { name: 'Rohit Sharma', role: 'Marketing Lead', quote: 'Advertising here drove real results in just 2 weeks.' },
  { name: 'Niharika Rao', role: 'Freelancer', quote: 'Amazing place to network and launch ideas.' },
];

const Business = () => {
  const [formData, setFormData] = useState({
    name: '',
    domain: '',
    tagline: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Startup submitted successfully!');
    setFormData({ name: '', domain: '', tagline: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white px-6 py-16 text-gray-800">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-3"
      >
        CoreVista for Business & Startups
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center text-gray-600 mb-10 max-w-2xl mx-auto"
      >
        Promote your startup, advertise your brand, or explore new business ideas on CoreVista — the intelligent hub for digital growth.
      </motion.p>

      {/* Featured Startups */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold mb-6">Featured Startups</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {startups.map((startup, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-1">{startup.name}</h3>
              <p className="text-gray-500 text-sm mb-2">{startup.domain}</p>
              <p className="text-sm text-gray-600">{startup.tagline}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Advertisement Showcase */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-2xl font-bold mb-6">Brand Advertisements</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {ads.map((ad, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md">
              <img src={ad.image} alt={ad.company} className="w-full h-40 object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-bold">{ad.company}</h3>
                <p className="text-sm text-gray-600 mt-1">{ad.message}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-2xl font-bold mb-6">What People Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-100 p-5 rounded-xl shadow-sm hover:shadow-md">
              <p className="italic text-gray-700 mb-2">"{t.quote}"</p>
              <h4 className="text-md font-semibold">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Submission Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto bg-white rounded-xl shadow p-8"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Submit Your Startup</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Startup Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            name="domain"
            placeholder="Website / Domain"
            value={formData.domain}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <textarea
            name="tagline"
            placeholder="Your Startup Tagline"
            value={formData.tagline}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 h-24 resize-none"
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Business;
