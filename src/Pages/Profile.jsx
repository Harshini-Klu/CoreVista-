import React from 'react';
import { motion } from 'framer-motion';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-800 px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        {/* Top Profile Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 mb-10">
          <img
            src="https://i.pravatar.cc/150?img=5"
            alt="Profile"
            className="w-36 h-36 rounded-full object-cover shadow-lg"
          />

          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-1">Harshini</h2>
            <p className="text-gray-600 mb-2">UI Designer • Creative Thinker • Content Curator</p>

            <div className="flex justify-center md:justify-start gap-6 text-sm text-gray-700 mb-4">
              <span><strong>245</strong> Posts</span>
              <span><strong>1.2k</strong> Followers</span>
              <span><strong>310</strong> Following</span>
            </div>

            <button className="px-4 py-2 bg-black text-white text-sm rounded-md hover:bg-gray-800 transition">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mb-8 px-4 md:px-0">
          <p className="text-md text-gray-700">
            Passionate about turning ideas into visually stunning realities. Always exploring the intersection of design and technology.
          </p>
        </div>

        {/* Grid of Posts (Dummy Content) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-square bg-gray-200 rounded-xl shadow-sm overflow-hidden hover:scale-105 transition-transform">
              <img
                src={`https://source.unsplash.com/random/400x400?sig=${i}`}
                alt={`Post ${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div> 
  );
};

export default Profile;
