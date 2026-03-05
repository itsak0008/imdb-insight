import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const SearchBar = ({ onSearch }) => {
  const [imdbId, setImdbId] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex gap-4 mb-8"
    >
      <input
        type="text"
        value={imdbId}
        onChange={(e) => setImdbId(e.target.value)}
        placeholder="Enter IMDb ID (e.g., tt0133093)"
        className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
      <button
        onClick={() => onSearch(imdbId)}
        className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-xl font-semibold transition"
      >
        Analyze
      </button>
    </motion.div>
  );
};

export default SearchBar;
