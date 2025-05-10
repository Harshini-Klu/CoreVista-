import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
const BlogPost = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const blogPost = blogs.find(blog => blog.id === parseInt(id))

  if (!blogPost) {
    return (
      <div className="min-h-[calc(100vh-75px)] bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog not found</h1>
          <button 
            onClick={() => navigate(-1)} 
            className="text-blue-600 hover:underline"
          >
            ← Go back
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-[calc(100vh-75px)] bg-gray-50'>
      <div className='container mx-auto px-4 py-12'>
        <button 
          onClick={() => navigate(-1)}
          className='flex items-center text-gray-600 hover:text-gray-800 mb-8 transition-colors'
        >
          <FaArrowLeft className='mr-2' />
          Back to Blog
        </button>
        
        <div className='max-w-4xl mx-auto'>
          <img 
            src={blogPost.image} 
            alt={blogPost.title}
            className='w-full h-[500px] object-cover mb-8 rounded-lg shadow'
          />
          
          <h1 className='text-4xl font-bold mb-4'>{blogPost.title}</h1>
          <div className='flex items-center text-gray-600 mb-8'>
            <span>By {blogPost.author}</span>
            <span className='mx-2'>•</span>
            <span>{blogPost.date}</span>
          </div>
          <div className='prose max-w-none'>
            <p className='text-lg leading-relaxed text-gray-700 whitespace-pre-wrap'>
              {blogPost.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost
