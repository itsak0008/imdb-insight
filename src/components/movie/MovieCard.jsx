import React from "react";
import { useState, useEffect } from "react"; // Example for hooks

// Your component code

import { motion } from "framer-motion";

const MovieCard = ({ movie }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 flex flex-col md:flex-row gap-6 shadow-xl"
    >
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450?text=No+Image"
        }
        alt={movie.Title}
        className="w-full md:w-60 rounded-xl shadow-lg"
      />

      <div>
        <h2 className="text-2xl font-bold">{movie.Title}</h2>
        <p className="text-gray-300 mt-2">Year: {movie.Year}</p>
        <p className="text-yellow-400">⭐ {movie.imdbRating}</p>
        <p className="mt-3 text-gray-200">{movie.Plot}</p>
        <p className="mt-2 text-sm text-gray-400">Cast: {movie.Actors}</p>
      </div>
    </motion.div>
  );
};

export default MovieCard;
