import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import inception from '../assets/images.jpg'
import dark from '../assets/dark.jpg'
import things from '../assets/things.jpg'
import bad from '../assets/bad.png'
import game from '../assets/game.jpg'
const movies = [
  {
    title: 'Inception',
    description: 'A mind-bending thriller by Christopher Nolan that explores dreams within dreams.',
    release: '2010',
    image: inception
  },
  {
    title: 'Interstellar',
    description: 'A science fiction epic about love, time, and survival through space and dimensions.',
    release: '2014',
    image: 'https://m.media-amazon.com/images/I/71niXI3lxlL.AC_UF894,1000_QL80.jpg'
  },
  {
    title: 'The Dark Knight',
    description: 'An intense action drama featuring the legendary Joker performance by Heath Ledger.',
    release: '2008',
    image: dark
  }
];

const tvShows = [
  {
    title: 'Stranger Things',
    description: 'A supernatural mystery thriller set in the 80s with government secrets and other dimensions.',
    seasons: '4',
    image: things
  },
  {
    title: 'Breaking Bad',
    description: 'A high school chemistry teacher turns drug kingpin in this iconic crime drama.',
    seasons: '5',
    image: bad
  },
  {
    title: 'Game of Thrones',
    description: 'A fantasy saga of power, betrayal, dragons, and war across the Seven Kingdoms.',
    seasons: '8',
    image: game
  }
];

const Entertainment = () => {
  const navigate = useNavigate(); // React Router navigation hook

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white px-6 py-16 text-gray-800">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-3"
      >
        Explore Entertainment on CoreVista
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center text-gray-600 mb-10 max-w-2xl mx-auto"
      >
        Dive into the world of top-rated movies, binge-worthy series, and iconic characters — all in one space.
      </motion.p>

      {/* Movie Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold mb-6">🎬 Popular Movies</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {movies.map((movie, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <img src={movie.image} alt={movie.title} className="w-full h-60 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{movie.title} <span className="text-sm text-gray-500">({movie.release})</span></h3>
                <p className="text-sm text-gray-600 mt-2">{movie.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* TV Show Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-2xl font-bold mb-6">📺 Top TV Shows</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tvShows.map((show, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <img src={show.image} alt={show.title} className="w-full h-60 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{show.title} <span className="text-sm text-gray-500">({show.seasons} Seasons)</span></h3>
                <p className="text-sm text-gray-600 mt-2">{show.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA to Recommend Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center py-12 px-6 bg-white rounded-xl shadow-lg max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4">Got a Favorite Movie or Show?</h2>
        <p className="text-gray-600 mb-6">Recommend content to the CoreVista community and help others discover what they shouldn’t miss!</p>
        <button
          onClick={() => navigate('/Submission')}
          className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
        >
          Submit a Recommendation
        </button>
      </motion.div>
    </div>
  );
};

export default Entertainment;