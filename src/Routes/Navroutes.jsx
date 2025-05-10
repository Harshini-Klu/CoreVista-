import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Dashboard from '../Pages/Dashboard'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Blog from '../Pages/Blog'
import BlogPost from '../Pages/BlogPost'
import Education from '../Pages/Education'
import Business from '../Pages/Business'
import Entertainment from '../Pages/Entertainment'
import News from '../Pages/News'
import Job from '../Pages/Job'
import About from '../Pages/About'
import Profile from '../Pages/Profile'
import Submission from '../Pages/Submission'
const Navroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/education" element={<Education />} />
        <Route path="/business" element={<Business />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/news" element={<News />} />
        <Route path="/jobs" element={<Job />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Submission" element={<Submission />} />
    </Routes>
  )
}

export default Navroutes;