import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import front from '../assets/front.jpg'
import Aii from '../assets/Aii.jpg'
import tcs from '../assets/tcs.png'
import zoho from '../assets/zoho.png'
const jobs = [
  {
    title: 'Frontend Developer Intern',
    company: 'Pixel Labs',
    location: 'Remote',
    stipend: '₹10,000/month',
    image: front
  },
  {
    title: 'Backend Engineer - Node.js',
    company: 'CloudNova',
    location: 'Bangalore, India',
    stipend: '₹12 LPA',
    image: 'https://img.freepik.com/free-vector/software-development-banner_33099-1687.jpg'
  },
  {
    title: 'AI Research Assistant',
    company: 'AI Minds',
    location: 'Remote',
    stipend: '₹18,000/month',
    image: Aii
  }
];

const hiringCompanies = [
  {
    name: 'TCS',
    role: 'Hiring for Full Stack Developer - Fresher',
    logo: tcs
  },
  {
    name: 'Accenture',
    role: 'Looking for DevOps Engineers',
    logo: 'https://cdn.worldvectorlogo.com/logos/accenture-2.svg'
  },
  {
    name: 'Zoho',
    role: 'Product Support & Software Developers',
    logo: zoho
  }
];

const Job = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white px-6 py-16 text-gray-800">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-3"
      >
        Find Your Next Tech Role on CoreVista
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center text-gray-600 mb-10 max-w-2xl mx-auto"
      >
        Discover internship and job opportunities curated for developers, designers, and tech enthusiasts.
      </motion.p>

      {/* Job Listings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold mb-6">🔥 Latest Job Openings</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <img src={job.image} alt={job.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-sm text-gray-500">{job.company} · {job.location}</p>
                <p className="text-sm text-gray-600 mt-2">Stipend/CTC: {job.stipend}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Featured Companies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-2xl font-bold mb-6">🏢 Featured Companies</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {hiringCompanies.map((company, index) => (
            <div key={index} className="bg-gray-100 rounded-xl p-5 flex flex-col items-center text-center shadow hover:shadow-md">
              <img src={company.logo} alt={company.name} className="h-16 object-contain mb-4" />
              <h3 className="text-lg font-semibold">{company.name}</h3>
              <p className="text-sm text-gray-600">{company.role}</p>
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
        <h2 className="text-2xl font-bold mb-4">Are You Hiring?</h2>
        <p className="text-gray-600 mb-6">Post your job or internship opportunity and reach talented professionals and students on CoreVista.</p>
        <button
            onClick={() => navigate('/Submission')}        
        className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">Post a Job</button>
      </motion.div>
    </div>
  );
};

export default Job;
