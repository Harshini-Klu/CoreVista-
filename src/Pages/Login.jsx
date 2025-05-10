import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaGoogle, FaGithub, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
   const navigate = useNavigate();
  return (
    <div className="min-h-[calc(100vh-100px)] overflow-hidden bg-gradient-to-br from-gray-100 to-white flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        {/* Tabs */}
        <div className="flex border-b mb-6">
          <div className="w-1/2 pb-2 text-center border-b-2 border-gray-800 font-medium">
            Sign In
          </div>
          <Link to="/signup" className="w-1/2 pb-2 text-center text-gray-500 hover:text-gray-700">
            Sign Up
          </Link>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label htmlFor="email" className="block text-gray-700 mb-1 text-sm sm:text-base">Email</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                <FaEnvelope />
              </span>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>
          </motion.div>

          {/* Password */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label htmlFor="password" className="block text-gray-700 mb-1 text-sm sm:text-base">Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                <FaLock />
              </span>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full pl-10 pr-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>
          </motion.div>

          {/* Remember Me & Forgot Password */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="h-4 w-4 text-gray-800 border-gray-300 rounded focus:ring-gray-800"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="text-gray-600 hover:underline">
                Forgot password?
              </a>
            </div>
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            whileTap={{ scale: 0.97 }}
            className="w-full bg-gray-900 text-white rounded-md py-2 px-4 hover:bg-gray-800 transition text-sm sm:text-base"
          >
            Sign In
          </motion.button>
        </form>

        {/* Or Divider */}
        <div className="mt-6 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        {/* Social Logins */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 grid grid-cols-3 gap-2 sm:gap-3"
        >
          <button
            type="button"
            className="w-full inline-flex justify-center py-2 px-2 sm:px-4 border border-gray-300 rounded-md shadow-sm bg-white text-gray-500 hover:bg-gray-50"
          >
            <FaGoogle className="h-5 w-5" />
          </button>
          <button
              onClick={() => navigate('/Submission')}
            type="button"
            className="w-full inline-flex justify-center py-2 px-2 sm:px-4 border border-gray-300 rounded-md shadow-sm bg-white text-gray-500 hover:bg-gray-50"
          >
            <FaGithub className="h-5 w-5" />
          </button>
          <button
              onClick={() => navigate('/Submission')}
            type="button"
            className="w-full inline-flex justify-center py-2 px-2 sm:px-4 border border-gray-300 rounded-md shadow-sm bg-white text-gray-500 hover:bg-gray-50"
          >
            <FaTwitter className="h-5 w-5" />
          </button>
        </motion.div>

        {/* Bottom Prompt */}
        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-gray-800 hover:underline font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
